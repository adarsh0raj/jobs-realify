import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';

const Jee: React.FC = () => {

  const [accordionsOpen, setAccordionsOpen] = React.useState<boolean[]>([
    true, true, true
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
      <div className="flex flex-col items-center w-full border-3">
        <h3 className="text-2xl font-bold text-center mt-5">
          IIT JEE (Joint Entrance Examination)
        </h3>
        <div className="w-full mt-5 flex flex-col items-center gap-5">
          {/* Accordion for Details */}
          <div className={`accordion ${accordionsOpen[0] ? "open" : ""} border rounded-lg overflow-hidden w-full`}>
            <div className="accordion-title flex justify-between items-center p-4 cursor-pointer bg-gray-200" onClick={() => toggleAccordion(0)}>
              <h2 className="text-lg font-bold text-gray-700">What is JEE?</h2>
              <svg className={`transform transition-transform duration-200 ${accordionsOpen[0] ? "rotate-180" : ""} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`accordion-content ${accordionsOpen[0] ? "" : "hidden"} p-4`}>
              <p>
                The Joint Entrance Examination (JEE) is an engineering entrance examination conducted for admission to various engineering colleges in India. It is constituted by two different examinations - JEE Main and the JEE Advanced. The exams are of the objective pattern. JEE Advanced is regarded internationally as one of the most challenging undergraduate admission tests.
              </p>
            </div>
          </div>

          {/* Accordion for Dates */}
          <div className={`accordion ${accordionsOpen[1] ? "open" : ""} border rounded-lg overflow-hidden w-full`}>
            <div className="accordion-title flex justify-between items-center p-4 cursor-pointer bg-gray-200" onClick={() => toggleAccordion(1)}>
              <h2 className="text-lg font-bold text-gray-700">Important Dates</h2>
              <svg className={`transform transition-transform duration-200 ${accordionsOpen[1] ? "rotate-180" : ""} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`accordion-content ${accordionsOpen[1] ? "" : "hidden"} p-4`}>
              <div className="w-full">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Event</th>
                      <th className="px-4 py-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Exam Registration Opens</td>
                      <td className="border px-4 py-2">January 1, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Last Date for Registration</td>
                      <td className="border px-4 py-2">February 15, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">JEE Main Exam Date</td>
                      <td className="border px-4 py-2">April 15-20, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">JEE Advanced Exam Date</td>
                      <td className="border px-4 py-2">May 20, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Expected Result Date</td>
                      <td className="border px-4 py-2">June 15, 2024</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Accordion for Eligibility */}
          <div className={`accordion ${accordionsOpen[2] ? "open" : ""} border rounded-lg overflow-hidden w-full`}>
            <div className="accordion-title flex justify-between items-center p-4 cursor-pointer bg-gray-200" onClick={() => toggleAccordion(2)}>
              <h2 className="text-lg font-bold text-gray-700">Eligibility</h2>
              <svg className={`transform transition-transform duration-200 ${accordionsOpen[2] ? "rotate-180" : ""} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`accordion-content ${accordionsOpen[2] ? "" : "hidden"} p-4`}>
              <ul className="list-disc ml-5">
                <li>Must be an Indian National or an OCI/PIO.</li>
                <li>Must have been born on or after October 1, 1996. Five years relaxation is given to SC, ST and PwD candidates.</li>
                <li>Must have passed class 12th or equivalent in 2023 or 2024.</li>
                <li>Must have taken at least five subjects in class 12th/ qualifying examination in order to be eligible for writing JEE Main.</li>
                <li>Must have secured at least 75% marks or be in the top 20 percentile in the class 12th / qualifying examination.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Jee;