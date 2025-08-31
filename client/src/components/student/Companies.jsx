import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  // Logos array create pannuren
  const companyLogos = [
    { src: assets.microsoft_logo, alt: "Microsoft" },
    { src: assets.walmart_logo, alt: "Walmart" },
    { src: assets.accenture_logo, alt: "Accenture" },
    { src: assets.adobe_logo, alt: "Adobe" },
    { src: assets.paypal_logo, alt: "Paypal" },
  ];

  return (
    <div className="pt-16">
      <p className="text-base text-gray-500">Trusted by learners from</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5">
        {companyLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="w-20 md:w-28"
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
