import StarknetLogo from "@/public/ecosystems/Starknet_Symbol.png";
import StellarLogo from "@/public/ecosystems/Stellar_Symbol.png";
import Web3Logo from "@/public/ecosystems/Web3_Symbol.jpg";
import WorldcoinLogo from "@/public/ecosystems/Worldcoin_Symbol.png";
import EcosystemCard from "../ui/EcosystemCard";

export default function Ecosystems() {
  const ecosystems = [
    {
      title: "Starknet",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: StarknetLogo,
    },
    {
      title: "Stellar",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: StellarLogo,
    },
    {
      title: "Worldcoin",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: WorldcoinLogo,
    },
    {
      title: "Web3",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: Web3Logo,
    },
  ];

  return (
    <main className="max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
      <section className="text-center mb-10 mt-8 flex md:gap-5 lg:gap-10 items-center justify-center">
        <hr className="hidden md:block w-36 border-t border-[#858894]" />
        <div>
          <h1 className="text-2xl md:text-3xl tracking-tight lg:text-4xl mb-2 text-white">
            Understand different ecosystems
            <br />
            <span className="bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] bg-clip-text text-transparent">
              all in one place.
            </span>
          </h1>
          <p className="text-gray-400 mt-4 text-xs md:text-sm">
            Learn about various blockchain ecosystems.
          </p>
        </div>
        <hr className="hidden md:block w-36 border-t border-[#858894]" />
      </section>

      <section className="grid p-3 justify-center md:grid-cols-2 gap-5">
        {ecosystems.map((ecosystem) => (
          <EcosystemCard key={ecosystem.title} {...ecosystem} />
        ))}
      </section>
    </main>
  );
}
