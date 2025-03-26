"use client";
import { useTrustWalletConnection } from "@/lib/useTrustWalletConnection";
import { CircleArrowLeft, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";

export function EnterWalletPassword({ wallet, onBack, onClose }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { 
    connectTrustWallet, 
    isConnected, 
    error, 
    isLoading 
  } = useTrustWalletConnection();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUnlock = async () => {
    console.log(`Attempting to unlock ${wallet.name}`);
    
    if (wallet.name === "Trust Wallet") {
      try {
        const connectedAddress = await connectTrustWallet();
        
        if (connectedAddress) {
          console.log('Wallet successfully connected');
          onClose();
        }
      } catch (connectionError) {
        console.error('Connection failed', connectionError);
      }
    } else {
      // For other wallets, implement specific connection logic
      console.log('Connection not implemented for this wallet');
    }
  };

  useEffect(() => {
    if (isConnected) {
      onClose();
    }
  }, [isConnected, onClose]);

  return (
    <div className="flex h-full flex-col rounded-xl bg-[#060B1C] border border-[#FFFFFF33] pb-6 mb-6">
      <div className="relative mb-16">
        <button onClick={onBack} className="absolute left-4 top-4 flex ">
          <CircleArrowLeft className="h-10 w-10 text-gray-100 hover:text-gray-300" />
        </button>
      </div>
      <div className="flex flex-1 flex-col items-center justify-start px-8">
        {wallet.icon && (
          <img
            src={wallet.icon || "/placeholder.svg"}
            alt=""
            className="h-12 w-12 mb-4"
          />
        )}
        <h3 className="mb-2 text-sm font-medium text-white">{wallet.name}</h3>
        <p className="mb-6 text-gray-400 font-normal text-xs">
          {wallet.name === "Trust Wallet" 
            ? "Click 'Unlock Wallet' to connect Trust Wallet" 
            : "Input your password to connect"}
        </p>
        
        {wallet.name === "Trust Wallet" ? (
          <button
            onClick={handleUnlock}
            disabled={isLoading}
            className={`mx-auto w-fit py-2 px-8 rounded-xl ${
              isLoading 
                ? "bg-gray-500 cursor-not-allowed" 
                : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            } text-sm font-medium text-white`}
          >
            {isLoading ? "Connecting..." : "Unlock Wallet"}
          </button>
        ) : (
          <>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                className="h-10 w-full rounded-lg bg-[#1A1A2F] px-4 text-white placeholder-gray-500 text-sm placeholder:text-sm outline-none focus:ring-purple-500 focus:ring-1 border-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <Eye className="w-6 h-6" />
                ) : (
                  <EyeOff className="w-6 h-6" />
                )}
              </button>
            </div>
            <button
              onClick={handleUnlock}
              className="mx-auto w-fit py-2 px-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-medium text-white hover:from-purple-600 hover:to-pink-600"
            >
              Unlock Wallet
            </button>
          </>
        )}

        {error && (
          <p className="text-red-500 text-xs mt-4 text-center">{error}</p>
        )}
      </div>
    </div>
  );
}