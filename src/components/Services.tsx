import React, { useEffect, useRef, useState } from 'react';
import { 
  Calculator, 
  BarChart, 
  FileText, 
  TrendingUp, 
  ClipboardCheck, 
  LineChart
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay,
  isVisible 
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Calculator size={32} className="text-blue-700" />,
      title: "Bookkeeping & Accounting",
      description: "Comprehensive bookkeeping services, financial record maintenance, and accounting solutions tailored to your business needs."
    },
    {
      icon: <BarChart size={32} className="text-blue-700" />,
      title: "Financial Modeling",
      description: "Advanced financial models to forecast business performance, evaluate investment opportunities, and support decision-making."
    },
    {
      icon: <FileText size={32} className="text-blue-700" />,
      title: "Financial Statements",
      description: "Preparation and analysis of balance sheets, income statements, cash flow statements, and other financial reports."
    },
    {
      icon: <TrendingUp size={32} className="text-blue-700" />,
      title: "Corporate Finance",
      description: "Strategic financial planning, capital structure optimization, and financial risk management for corporations."
    },
    {
      icon: <ClipboardCheck size={32} className="text-blue-700" />,
      title: "Auditing",
      description: "Comprehensive auditing services to ensure financial statement accuracy, assess internal controls, and identify improvement areas."
    },
    {
      icon: <LineChart size={32} className="text-blue-700" />,
      title: "Portfolio Management",
      description: "Strategic asset allocation, investment analysis, and portfolio optimization to maximize returns while managing risk."
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">My Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized financial services tailored to meet your specific needs
          </p>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;