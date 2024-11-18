import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-gradient text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
            {/* Column 1 */}
            <div>
              <h4 className="font-bold mb-3">Services</h4>
              <ul className="space-y-2">
                <li>Accounting</li>
                <li>Tax</li>
                <li>Advisory</li>
                <li>Benefits</li>
                <li>Insurance</li>
                <li>Technology</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold mb-3">Industries</h4>
              <ul className="space-y-2">
                <li>Private Client Services</li>
                <li>Consumer & Industrial Products</li>
                <li>Real Estate</li>
                <li>Technology & Life Sciences</li>
                <li>All Industries</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold mb-3">Insights</h4>
              <ul className="space-y-2">
                <li>By Industry</li>
                <li>By Service</li>
                <li>Trending Topics</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold mb-3">About</h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Leadership</li>
                <li>Corporate Social Responsibility</li>
                <li>Locations</li>
                <li>Client Stories</li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h4 className="font-bold mb-3">Careers</h4>
              <ul className="space-y-2">
                <li>Careers</li>
                <li>Experienced Professionals</li>
                <li>Students</li>
                <li>Culture</li>
                <li>Alumni</li>
                <li>Job Openings</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white opacity-20 my-6"></div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Logo and Copyright */}
            <div className="text-center lg:text-left">
              <div className="font-bold text-lg">CBIZ</div>
              <p className="text-xs mt-2">©2024 CBIZ. All Rights Reserved.</p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6 text-lg">
              <a href="#" className="hover:opacity-80">
                🔗
              </a>
              <a href="#" className="hover:opacity-80">
                🔗
              </a>
              <a href="#" className="hover:opacity-80">
                🔗
              </a>
              <a href="#" className="hover:opacity-80">
                🔗
              </a>
            </div>

            {/* Contact Button */}
            <div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
