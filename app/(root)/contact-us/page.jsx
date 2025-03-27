import { Phone, Home, Mail, Calendar } from "lucide-react";
import SubHeadingCenter from "@/components/SubHeadingCenter";
import Image from "next/image";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "People who want to understand different blockchain ecosystems",
  },
  {
    icon: Home,
    title: "Address",
    description: "Those who enjoy interactive and challenging experiences",
  },
  {
    icon: Mail,
    title: "Email",
    description: "scavengerhunt@gmail.com",
  },

  {
    icon: Calendar,
    title: "Schedule an appointment",
    description: "Click here to view our calendar",
  },
];

const ContactMethodCard = ({ icon: Icon, title, description }) => {
  const borderColors = {
    Email: "border-[#3B82F6]",
    Phone: "border-[#EC4899]",
    Address: "border-[#FFB82E]",
    "Schedule an appointment": "border-[#A855F7]",
  };

  const iconColors = {
    Email: "text-[#3B82F6]",
    Phone: "text-[#EC4899]",
    Address: "text-[#FFB82E]",
    "Schedule an appointment": "text-[#A855F7]",
  };

  const borderColor = borderColors[title] || "border-gray-700/65"; // Default color
  const iconColor = iconColors[title] || "text-purple-500";
  return (
    <div
      className={`p-6 rounded-lg transition-all bg-[#0E1428] hover:bg-[#1A1F35] border-l-2 ${borderColor} border-r-2 ${borderColor} relative`}
    >
      <span
        className={`absolute top-0 left-0 w-14 h-3 border-t-2 ${borderColor}`}
      />

      <span
        className={`absolute top-0 right-0 w-14 h-3 border-t-2 ${borderColor}`}
      />

      <span
        className={`border-t-2 ${borderColor} absolute -bottom-3 -left-[0.9px] w-14 h-3`}
      />

      <span
        className={`border-t-2 ${borderColor} absolute -bottom-3 -right-[0.9px] w-14 h-3`}
      />

      <div className="flex items-center justify-center mb-4 w-12 h-12 rounded-lg bg-[#1A1F35] ">
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="mb-2 text-xl font-medium text-white">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#060B1C] px-4 py-40 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-[26px] font-orbitron font-bold text-[#E9E9E9] md:text-[56px]">
            Contact us
          </h1>
          <h2 className="mb-6 text-3xl font-orbitron font-bold text-[26px] text-transparent bg-clip-text bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] md:text-[56px]">
            How can we help?
          </h2>
          <p className="text-gray-400 font-spaceGrotesk text-[12px] md:text-[14px] font-[600]">
            Have specific questions?{" "}
            <a href="#faq" className="text-[#EC4899] hover:text-pink-400 text-[12px] md:text-[14px] font-serif underline font-[600]">
              View our frequently asked questions section
            </a>
          </p>
        </div>

        <section className="p-10 mb-16">
          <SubHeadingCenter text="Contact Methods" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => (
              <ContactMethodCard
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;