import { useState, useEffect } from "react";
import { createWeb3Modal, useWeb3Modal } from "@web3modal/ethers/react";
import { BrowserProvider } from "ethers";

// Project Configuration
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "";
const mainnetChainId = 1; // Ethereum mainnet
const testnetChainId = 5; // Goerli testnet

// Web3Modal Configuration
const mainnetChain = {
  chainId: mainnetChainId,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const testnetChain = {
  chainId: testnetChainId,
  name: "Goerli",
  currency: "ETH",
  explorerUrl: "https://goerli.etherscan.io",
  rpcUrl: "https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID",
};

// Initialize Web3Modal
createWeb3Modal({
  ethersConfig: {
    metadata: {
      name: "Dummy",
      description: "Wallet Connection",
      url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
      icons: ["/images/logo.png"],
    },
  },
  chains: [mainnetChain, testnetChain],
  projectId,
  enableAnalytics: true,
  enableOnramp: false,
});

export const useTrustWalletConnection = () => {
  const [address, setAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      console.log("Ethereum provider detected:", window.ethereum);
    } else {
      console.warn("No Ethereum provider detected. Ensure Trust Wallet is installed.");
    }
  }, []);


  // Get Web3Modal instance
  const web3Modal = useWeb3Modal();

  // Persistent connection handling
  useEffect(() => {
    const checkExistingConnection = async () => {
      try {
        const walletProvider = await web3Modal.getWalletProvider();
        if (walletProvider) {
          await connectTrustWallet(true);
        }
      } catch (error) {
        console.error("Error checking existing connection:", error);
      }
    };

    checkExistingConnection();
  }, []);

  // Force Trust Wallet Connection
  const connectTrustWallet = async (silentReconnect = false) => {
    try {
      setIsLoading(true);
      setError(null);

      console.log("Attempting Trust Wallet connection...");

      // Specifically target Trust Wallet
      if (!window.ethereum || !window.ethereum.isTrustWallet) {
        throw new Error("Trust Wallet not detected. Please install the extension.");
      }

      // Open Web3Modal to connect to Trust Wallet
      const walletProvider = await web3Modal.open({ isModal: true });

      if (!walletProvider) {
        if (silentReconnect) {
          console.warn("Silent reconnect failed. Skipping reconnection.");
          return null; 
        }
        throw new Error("No provider found. Please try reconnecting.");
      }

      const browserProvider = new BrowserProvider(walletProvider);
      const signer = await browserProvider.getSigner();
      const userAddress = await signer.getAddress();

      // Update connection state
      setAddress(userAddress);
      setProvider(browserProvider);
      setIsConnected(true);

      // Log successful connection
      console.log("Trust Wallet successfully connected", {
        address: userAddress,
      });

      return userAddress;
    } catch (connectionError) {
      // Detailed error handling
      console.error("Trust Wallet Connection Error:", connectionError);

      let friendlyErrorMessage

      if (connectionError.code === "ACTION_REJECTED") {
        friendlyErrorMessage = "Connection request was cancelled";
      } else if (connectionError.message.includes("user rejected")) {
        friendlyErrorMessage = "You declined the wallet connection";
      } else if (connectionError.message.includes("No provider")) {
        friendlyErrorMessage = "Trust Wallet not detected. Please install the application";
      } else if (connectionError.message.includes("Silent reconnect failed")) {
        // If silent reconnect fails, we don't want to show an error
        friendlyErrorMessage = null;
      }

      // Set error state
      setError(friendlyErrorMessage);

      // Only set isConnected to false if it's not a silent reconnect failure
      if (friendlyErrorMessage !== null) {
        setIsConnected(false);
      }

      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Disconnect method
  const disconnectWallet = async () => {
    try {
      await web3Modal.close();
      setAddress(null);
      setIsConnected(false);
      setProvider(null);
      setError(null);
    } catch (disconnectError) {
      console.error("Disconnect error:", disconnectError);
    }
  };

  return {
    address,
    isConnected,
    provider,
    error,
    isLoading,
    connectTrustWallet,
    disconnectWallet,
  };
};