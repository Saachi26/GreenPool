import React from "react";
import Link from "next/link";

const Footer = () => {
  const current_year = new Date().getFullYear();
  return (
    <div className="bg-Footer w-full h-36 items-center justify-center text-white py-4 text-center mt-28">
      <div className="flex flex-col items-center justify-center mt-5 space-y-2">
        <div className="flex space-x-2">
          <Link
            href="https://www.startupindia.gov.in/content/sih/en/about_us/faqs.html"
            target="_blank"
            className="text-white"
          >
            Privacy
          </Link>
          <span>|</span>
          <Link
            href="https://www.startupindia.gov.in/content/sih/en/about_us/faqs.html"
            target="_blank"
            className="text-white"
          >
            Terms
          </Link>
          <span>|</span>
          <Link
            href="https://www.startupindia.gov.in/content/sih/en/about_us/faqs.html"
            target="_blank"
            className="text-white"
          >
            Contact
          </Link>
        </div>
        <p>&copy; {current_year} All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
