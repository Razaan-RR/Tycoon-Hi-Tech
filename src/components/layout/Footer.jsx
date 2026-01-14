import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Tycoon Hi-Tech Park</h3>
          <p>Mirpur, Dhaka, Bangladesh</p>
          <p>Phone: +880–1332–522980</p>
          <p>Email: info@tycoonbd.com</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com/tycoonhitechpark" target="_blank">
              Facebook
            </a>
            <a href="#" target="_blank">
              Instagram
            </a>
            <a href="#" target="_blank">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-6 text-gray-400">
        &copy; {new Date().getFullYear()} Tycoon Hi-Tech Park Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
