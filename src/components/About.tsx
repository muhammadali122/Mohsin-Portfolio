import React, { useEffect, useRef, useState } from 'react';
import { User } from 'lucide-react';

const About = () => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
          </div>
          
          <div className={`flex flex-col md:flex-row items-center gap-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                <User size={120} className="text-blue-700" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm Abdul Mohsin, a Certified Professional Accountant (CPA). With over 
                6 years of hands-on experience in the financial sector, I've developed expertise 
                across multiple domains of finance and accounting.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My career has been focused on providing exceptional financial services, from detailed 
                financial modeling and accurate bookkeeping to comprehensive corporate finance strategies 
                and thorough auditing protocols. I'm passionate about helping businesses make informed 
                financial decisions that drive growth and ensure compliance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need assistance with financial statements preparation, budgeting, decision 
                making, or excel-based financial analysis, I bring a detail-oriented and solution-focused 
                approach to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;