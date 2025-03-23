import SubheadingLeft from "@/components/SubheadingLeft";
import Image from "next/image";

const termsItems = [
  {
    title: "Your Scavengerhunt account ",
    text: "If you create an account on the Website, you are responsible for maintaining the security of your account and credentials, and you are fully responsible for all activities that occur under the account. You must immediately notify Scavenger Hunt of any unauthorized uses of your account or any other breaches of security. Scavenger Hunt will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.",
  },
  {
    title: "Responsibility of Website Visitors ",
    text: "Scavenger Hunt has not reviewed, and cannot review, all of the material, including computer software, posted through the Website, and cannot therefore be responsible for that material’s content, use or effects. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. The Website may contain content that is offensive, indecent, or otherwise objectionable, as well as content containing technical inaccuracies, typographical mistakes, and other errors. The Website may also contain material that violates the privacy or publicity rights, or infringes the intellectual property and other proprietary rights, of third parties, or the downloading, copying or use of which is subject to additional terms and conditions, stated or unstated. Scavenger Hunt disclaims any responsibility for any harm resulting from the use by visitors of the Website, or from any downloading by those visitors of content there posted.",
  },
  {
    title: "Intellectual Property",
    text: "This Agreement does not transfer from Scavenger Hunt to you any Scavenger Hunt or third party intellectual property, and all right, title and interest in and to such property will remain (as between the parties) solely with Scavenger Hunt. Scavenger Hunt, its logo, and all other trademarks, service marks, graphics and logos used in connection with Scavenger Hunt, or the Website are trademarks or registered trademarks of Scavenger Hunt or Scavenger Hunt’s licensors. Other trademarks, service marks, graphics and logos used in connection with the Website may be the trademarks of other third parties. Your use of the Website grants you no right or license to reproduce or otherwise use any Scavenger Hunt or third-party trademarks.If you give feedback on the Website, for example recommendations for improvements or features, such feedback will be deemed non-confidential and non-proprietary, and implementation of that feedback is owned by Scavenger Hunt and may become part of the Website without any compensation to you.You agree to grant Scavenger Hunt a non-exclusive, transferable, royalty-free, sublicensable, irrevocable, worldwide license to use, host, cache, store, reproduce, transmit, publicly display, publicly perform, publish and distribute the Content solely in relation to the operation of the Website, including the exercise of Scavenger Hunt’s rights and obligations under this Agreement.",
  },
  {
    title: "Changes",
    text: "Scavenger Hunt reserves the right, at its sole discretion, to modify or replace any part of this Agreement. It is your responsibility to check this Agreement periodically for changes. Your continued use of or access to the Website following the posting of any changes to this Agreement constitutes acceptance of those changes. Scavenger Hunt may also, in the future, offer new services and/or features through the Website (including, the release of new tools and resources). Such new features and/or services shall be subject to the terms and conditions of this Agreement.",
  },
  {
    title: "Termination",
    text: "Scavenger Hunt may terminate your access to all or any part of the Website at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate this Agreement or your Scavenger Hunt account (if you have one), you may simply discontinue using the Website. All provisions of this Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.",
  },
  {
    title: "Disclaimer of warranties",
    text: "THE WEBSITE IS PROVIDED “AS IS”. Scavenger Hunt AND ITS SUPPLIERS AND LICENSORS HEREBY DISCLAIM ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. NEITHER Scavenger Hunt NOR ITS SUPPLIERS AND LICENSORS, MAKES ANY WARRANTY THAT THE WEBSITE WILL BE ERROR FREE OR THAT ACCESS THERETO WILL BE CONTINUOUS OR UNINTERRUPTED. YOU UNDERSTAND THAT YOU DOWNLOAD FROM, OR OTHERWISE OBTAIN CONTENT OR SERVICES THROUGH, THE WEBSITE AT YOUR OWN DISCRETION AND RISK.",
  },
  {
    title: "Limitation of liability",
    text: "IN NO EVENT WILL Scavenger Hunt, OR ITS SUPPLIERS OR LICENSORS, BE LIABLE WITH RESPECT TO ANY SUBJECT MATTER OF THIS AGREEMENT UNDER ANY CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER LEGAL OR EQUITABLE THEORY FOR: (I) ANY SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES; (II) THE COST OF PROCUREMENT FOR SUBSTITUTE PRODUCTS OR SERVICES; (III) FOR INTERRUPTION OF USE OR LOSS OR CORRUPTION OF DATA; OR (IV) FOR ANY AMOUNTS THAT EXCEED THE FEES PAID BY YOU TO Scavenger Hunt UNDER THIS AGREEMENT DURING THE TWELVE (12) MONTH PERIOD PRIOR TO THE CAUSE OF ACTION. Scavenger Hunt SHALL HAVE NO LIABILITY FOR ANY FAILURE OR DELAY DUE TO MATTERS BEYOND THEIR REASONABLE CONTROL. THE FOREGOING SHALL NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE LAW.",
  },
  {
    title: "General represenation of warranty",
    text: "You represent and warrant that (i) your use of the Website will be in strict accordance with the Scavenger Hunt Privacy Policy, with this Agreement and with all applicable laws and regulations (including without limitation any local laws or regulations in your country, state, city, or other governmental area, regarding online conduct and acceptable content, and including all applicable laws regarding the transmission of technical data exported from the United States or the country in which you reside) and (ii) your use of the Website will not infringe or misappropriate the intellectual property rights of any third party.You or Scavenger Hunt may identify the other as a user or customer and may use the other’s company name and logo in blog posts, press releases, advertisements, and on their respective websites. You also grant Scavenger Hunt a non-exclusive license to use your trademarks for the purpose of referring to you within the user interface for the Website. Scavenger Hunt’s right to use your name and logo may be revoked by writing to hello@scavengerhunt.com.",
  },
  {
    title: "Indemnification",
    text: "You agree to indemnify and hold harmless Scavenger Hunt, its contractors, and its licensors, and their respective directors, officers, employees and agents from and against any and all claims and expenses, including attorneys’ fees, arising out of your use of the Website, including but not limited to your violation of this Agreement.",
  },
];

const page = () => {
  return (
    <div
      className="relative flex w-full py-10 h-full bg-auto bg-no-repeat "
      style={{ backgroundImage: "url('/images/terms-bg.png')" }}
    >
      <div className="absolute inset-0 bg-[#060B1C] -z-10"></div>

      <div className="relative flex flex-col px-5 gap-5 m-auto max-w-5xl flex-1 text-slate-50 w-full h-full pb-[40px]">
        <div className="flex flex-col my-10 gap-2 justify-center items-center font-orbitron">
          <h1 className="font-semibold text-4xl">Terms of Use</h1>
          <p className="text-sm text-[#858894]">last update: 15th March 2025</p>
        </div>

        <div className="flex text-[#BFBFBF] flex-col gap-10 font-spaceGrotesk">
          <p>
            The following terms and conditions govern all use of the NFT
            Scavenger Hunt websites and all content, services and products
            available at or through Scavengerhunt.com (“Website”). The Website
            is owned and operated by NFT Scavenger Hunt, Inc., a corporation
            (“NFT Scavenger Hunt”, “we” or “us”). The Website is offered subject
            to your acceptance without modification of all of the terms and
            conditions contained herein and all other operating rules, policies
            (including, without limitation, NFT Scavenger Hunt’s Privacy Policy)
            and procedures that may be published from time to time on this
            website by NFT Scavenger Hunt (collectively, the “Agreement”).
          </p>

          <p>
            Please read this Agreement carefully before accessing or using the
            Website. By accessing or using any part of the Website, you agree to
            become bound by the terms and conditions of this Agreement. If you
            do not agree to all the terms and conditions of this Agreement, then
            you may not access the Website or use any services. If these terms
            and conditions are considered an offer by Scavenger Hunt, acceptance
            is expressly limited to these terms. The Website is available only
            to individuals who are at least 13 years old.
          </p>
        </div>

        <div className="mb-5">
          {termsItems.map(({ title, text }) => (
            <div key={title} className="flex flex-col gap-2">
              <SubheadingLeft className="text-[#E9E9E9]" text={title} />
              <p className="mb-10 font-spaceGrotesk text-[#BFBFBF]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
