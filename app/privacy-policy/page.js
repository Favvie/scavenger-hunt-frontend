import SubheadingLeft from "@/components/SubheadingLeft";
import Image from "next/image";

const privacyItems = [
  {
    title: "Who processess your data ",
    text: "Your data is being processed by our company Scavenger Hunt, Inc., a Delaware corporation (“Scavenger Hunt”, “we”, “us” or “our”).To learn more about data management or if you have any other questions, please contact us at hello@scavengerhunt.com.",
  },
  {
    title: "What data is processed ",

    text: "We may collect the following types of information about you:",
    extras: [
      {
        title: "Personal Identifiable Information",
        text: "Through our Services, we may collect and process information that can be used to identify or contact you as an individual known as your personal identifiable information (“PII”), including but not limited to:",
        list: [
          "first and second names",
          "email address",
          "and other PII provided by you voluntarily when you use our Services",
        ],
      },
      {
        title: "Technical Information",
        text: "We and/or our authorised external service providers may automatically collect technical data when you visit or interact with our Services. Technical data may include, in particular:",
        list: [
          "the URL of the site visited before using our Service",
          "the time and date of user visits",
          "IP address",
          "the browser name and type",
          "the type of computer or device accessing our Service",
          "time spent on the Service and other similar technical information",
        ],
      },
      {
        title:
          "In a limited number of cases it is possible to use technical data and identify you as an individual, thus making them PII, however, we never use technical data to identify you as an individual",
        text: "We use technical data to",
        list: [
          "Provide, operate, and maintain our Services",
          "Improve, personalize, and expand our Services",
          "Understand and analyze how you use our Services",
          "Develop new products, services, features, and functionality",
          "To provide you with updates and other information relating to the Services, and for marketing and promotional purposes",
          "Send you emails",
          "Find and prevent fraud",
        ],
      },
      {
        title: "Cookies",
        text: "We use cookies to collect information about your activity across our Services. A cookie is a small piece of data that the Service saves on your device each time you visit.We use our cookies to remember your actions and preferences so you don’t have to keep re-entering them whenever you come back to the Site or browse from one page to another.We also use cookies for analytics purposes and to help us personalize your experience and improve our Services.As mentioned above, in some cases we also may use cookies provided by third parties (service providers). The list of such third-parties cookies of which you might encounter through our service is listed below. We are not responsible for third-party sites and their privacy practices. These companies collect and use this information under their own privacy policies and are responsible for their practices concerning cookies.You can change your cookie preferences in your browser settings.",
      },
    ],
  },
  {
    title: "How we share your personal data",
    text: "We only share your PII within Scavenger Hunt and with those of its employees, contractors and affiliated organizations that need to know the information in order to process it on Scavenger Hunt’s behalf or to provide the Services and those that that have agreed not to disclose it to others.We do not share your PII with other recipients unless one of the following circumstances applies:It is necessary for the compliance with our obligations towards you. To the extent that our external service providers (sub-processors) need access to your PII to help us perform our Services for you, we have taken the appropriate contractual and organizational measures to ensure that your PII are processed in accordance with all applicable laws and regulations.A full list of our sub-processors is found in our DPA.The list of external service providers we use may change from time to time as we change or remove some of the providers listed above and/or put in place other providers to assist us in providing the Services.It is necessary for legal reasons. We may share your PII with recipients outside of Scavenger Hunt if we have a good-faith belief that access to and use of your PII is reasonably necessary to: (i) meet any applicable law, regulation, and/or court order; (ii) detect, prevent, or otherwise address fraud, security or technical issues; and/or (iii) protect the interests, properties or safety of Scavenger Hunt, our users or the public as far as in accordance with the law. When possible, we will inform you about such processing.",
  },
  {
    title: "What is the storage period",
    text: "Scavenger Hunt stores your PII only if it is legally permitted and necessary for the purposes for which the data were collected or we are legally obliged to do so.",
  },
  {
    title: "Your rights",
    text: "Right of access. Scavenger Hunt offers you access to your PII we process. This means you can contact us and request from us a confirmation whether or not your PII are being processed and if so, you have the right to request access to your data, which we will provide to you in the form of a so-called 'registry' (stating, in particular, purposes, categories of personal data, categories of recipients of personal data, storage periods or criteria for determining storage periods).Right to erasure. You may also ask us to erase your PII from our systems. We will comply with such requests unless we have a legitimate ground to not delete your personal data.Right to restriction of processing. You may request us to restrict certain processing of your personal data. If you restrict certain processing of your personal data, this may lead to fewer possibilities to use our Services and Site.How to use your rights. You may exercise your rights above, free of charge, in writing by sending a letter or email at hello@scavengerhunt.com. We may require confirmation of your identity depending on your request.",
  },
  {
    title: "Data security",
    text: "We take all reasonable, appropriate security measures to protect our customers from unauthorized access to or unauthorized alteration, disclosure or destruction of PII we hold. Measures include, where appropriate, encryption, firewalls, secure facilities and access rights systems. Should despite the security measures, a security breach occur that is likely to have negative effects to your privacy, we will inform you about the breach as soon as reasonably possible. If you have any questions, feel free to contact us at hello@scavengerhunt.com.",
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
          <h1 className="font-semibold text-4xl">Privacy Policy</h1>
          <p className="text-sm text-[#858894]">last update: 15th March 2025</p>
        </div>

        <div className="flex text-[#BFBFBF] flex-col gap-10 font-spaceGrotesk">
          <p>
            Welcome to Scavenger Hunt, Inc. (“we”, “us” or “Scavenger Hunt”). We
            provide monitoring and logging tools to our users (“you”). To
            provide our Services we need to collect some of your personal data,
            whether you are using https://scavengerhunt.com/ (“Site”) or are
            using our platform (“Platform”) collectively our “Services”. This
            Privacy Policy (the “Privacy Policy”) is intended to inform you
            about our practices regarding the collection and use of your data
            that you may submit to us through our Services. This Privacy Policy
            should be read alongside, and in addition to the Terms of Use.
            Unless otherwise defined in this Privacy Policy, terms used have the
            same meaning as in the Terms of Use. This Privacy Policy may be
            updated to reflect changes in legislation, so please review it now
            and then. You can always find the most recent version on our Site.
            If we make substantial changes, we will try to provide a notice
            prior to any changes taking effect. What constitutes a substantial
            change will be determined at our sole discretion. By continuing to
            access or use our Service after those revisions become effective,
            you agree to be bound by the revised terms. If you do not agree to
            the new terms, please stop using the Services. The Privacy Policy
            only covers data processing carried out by us. The Privacy Policy
            does not address, and we are not responsible for, the privacy
            practices of any other parties. We do not knowingly collect or ask
            for information from people under the age of 18. If you are such a
            person, please do not use our service or send us your information.
            We delete information that we learn is collected from a person under
            the age of 18 without verified parental consent.
          </p>
        </div>

        <div className="mb-5">
          {privacyItems.map(({ title, text, list, extras }) => (
            <div key={title} className="flex flex-col gap-2">
              <SubheadingLeft className="text-[#E9E9E9]" text={title} />
              <p className="font-spaceGrotesk text-[#BFBFBF]">{text}</p>

              {list && (
                <ul>
                  {list.map((item, index) => (
                    <li className="text-red-600" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {extras && (
                <div className="text-[#E9E9E9]">
                  {extras.map(({ title, text, list }, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <p>{title}</p>
                      <p>{text}</p>
                      {list && (
                        <ul className="mx-10">
                          {list.map((item, idx) => (
                            <li key={idx} className="text-blue-600 list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
