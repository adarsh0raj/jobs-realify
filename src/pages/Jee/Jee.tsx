import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';

const Jee: React.FC = () => {

  const [accordionsOpen, setAccordionsOpen] = React.useState<boolean[]>([
    true, false, false
  ]);

  const toggleAccordion = (index: number) => {
    setAccordionsOpen((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold text-center mt-10">
          IIT JEE (Joint Entrance Examination)
        </h3>
        <div className="w-10/12 mt-5 flex flex-col items-center">
          <div
            className={`accordion ${accordionsOpen[0] ? "open" : ""}`}
          >
            <div className="accordion-title" onClick={() => toggleAccordion(0)}>
              What is IIT JEE?
            </div>
            <div className={`accordion-content ${accordionsOpen[0] ? "" : "hidden"}`} >
              <p>
                The Joint Entrance Examination (JEE) is an engineering entrance examination conducted for admission to various engineering colleges in India. It is constituted by two different examinations - JEE Main and the JEE Advanced. The exams are of the objective pattern. JEE Advanced is regarded internationally as one of the most challenging undergraduate admission tests.
              </p>
            </div>
          </div>
          <div
            className={`accordion ${accordionsOpen[1] ? "open" : ""}`}
          >
            <div className="accordion-title" onClick={() => toggleAccordion(1)}>
              What is the eligibility criteria for JEE?
            </div>
            <div className={`accordion-content ${accordionsOpen[1] ? "" : "hidden"}`} >
              <p>
                Candidates must have passed 10+2 or equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Biotechnology/Biology/ Technical Vocational subject.
              </p>
            </div>
          </div>
          <div
            className={`accordion ${accordionsOpen[2] ? "open" : ""}`}
          >
            <div className="accordion-title" onClick={() => toggleAccordion(2)}>
              What is the syllabus for JEE?
            </div>
            <div className={`accordion-content ${accordionsOpen[2] ? "" : "hidden"}`} >
              <p>
                The syllabus for JEE Main is based on the syllabus of class 11th and 12th. The syllabus for JEE Advanced is based on the syllabus of class 11th and 12th. The syllabus for JEE Main is based on the syllabus of class 11th and 12
              </p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Jee;