import React, { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  isVisible: boolean;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, isVisible, delay }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-blue-700 font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-700 h-2.5 rounded-full transition-all duration-1500 ease-out"
          style={{ 
            width: isVisible ? `${percentage}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
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

  const technicalSkills = [
    { skill: "Financial Modeling", percentage: 95 },
    { skill: "Budgeting & Forecasting", percentage: 90 },
    { skill: "Financial Analysis", percentage: 92 },
    { skill: "Accounting & Bookkeeping", percentage: 98 },
    { skill: "Corporate Finance", percentage: 85 },
    { skill: "Auditing", percentage: 88 }
  ];

  const softSkills = [
    { skill: "Decision Making", percentage: 90 },
    { skill: "Problem Solving", percentage: 92 },
    { skill: "Leadership", percentage: 85 },
    { skill: "Communication", percentage: 88 },
    { skill: "Time Management", percentage: 95 },
    { skill: "Client Relations", percentage: 90 }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Professional Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My proficiency across various financial domains
          </p>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar 
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
                isVisible={isVisible}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <SkillBar 
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
                isVisible={isVisible}
                delay={(index + 6) * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;