import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  year: string;
  position: string;
  company: string;
  description: string;
  isEven: boolean;
  isVisible: boolean;
  delay: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  year,
  position,
  company,
  description,
  isEven,
  isVisible,
  delay
}) => {
  return (
    <div 
      className={`relative flex ${isEven ? 'flex-row-reverse' : ''} mb-10 md:mb-0 transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-full md:w-1/2 md:pl-10 md:pr-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <Calendar size={18} className="mr-2 text-blue-700" />
            <span className="text-blue-700 font-semibold">{year}</span>
          </div>
          <h3 className="text-lg font-bold text-blue-900 mb-1">{position}</h3>
          <h4 className="text-md text-gray-700 mb-3">{company}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-700 h-full"></div>
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-0 w-12 h-12 rounded-full bg-blue-100 items-center justify-center">
        <Briefcase size={24} className="text-blue-700" />
      </div>
    </div>
  );
};

const Experience = () => {
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

  const experienceData = [
    {
      year: "2020 - Present",
      position: "Senior Financial Analyst",
      company: "Global Financial Services",
      description: "Leading financial modeling, analysis, and reporting for enterprise clients. Managing portfolio investments and optimizing investment strategies."
    },
    {
      year: "2018 - 2020",
      position: "Audit Manager",
      company: "Premier Accounting Firm",
      description: "Managed complex audit engagements, supervised audit teams, and ensured compliance with financial reporting standards."
    },
    {
      year: "2016 - 2018",
      position: "Financial Accountant",
      company: "Corporate Solutions Inc.",
      description: "Prepared financial statements, managed monthly closings, and implemented improved financial processes."
    },
    {
      year: "2014 - 2016",
      position: "Junior Accountant",
      company: "Financial Excellence Ltd.",
      description: "Assisted with bookkeeping, account reconciliations, and preparation of financial reports."
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over 6 years of progressive experience in accounting and finance
          </p>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {experienceData.map((exp, index) => (
            <ExperienceItem
              key={index}
              year={exp.year}
              position={exp.position}
              company={exp.company}
              description={exp.description}
              isEven={index % 2 !== 0}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;