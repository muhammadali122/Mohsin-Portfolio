import { Briefcase} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center mb-4">
            <Briefcase className="h-8 w-8 text-white mr-2" />
            <span className="text-2xl font-bold">Abdul Mohsin</span>
          </div>
          <p className="text-blue-100 text-center max-w-md mb-6">
            Professional Chartered Accountant with expertise in financial modeling, bookkeeping,
            accounting, corporate finance, auditing, and portfolio management.
          </p>
        </div>

        <div className="border-t border-blue-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 mb-4 md:mb-0">
              &copy; {currentYear} Abdul Mohsin. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <a href="#about" className="text-blue-200 hover:text-white transition-colors">
                About
              </a>
              <a href="#services" className="text-blue-200 hover:text-white transition-colors">
                Services
              </a>
              <a href="#skills" className="text-blue-200 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-blue-200 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;