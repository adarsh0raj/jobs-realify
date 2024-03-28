import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';

const SscCgl: React.FC = () => {

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
          SSC CGL (Staff Selection Commission - Combined Graduate Level)
        </h3>
        <div className="w-full mt-5 flex flex-col items-center gap-5">
          {/* Accordion for Details */}
          <div className={`accordion ${accordionsOpen[0] ? "open" : ""} border rounded-lg overflow-hidden w-full`}>
            <div className="accordion-title flex justify-between items-center p-4 cursor-pointer bg-gray-200" onClick={() => toggleAccordion(0)}>
              <h2 className="text-lg font-bold text-gray-700">What is SSC CGL?</h2>
              <svg className={`transform transition-transform duration-200 ${accordionsOpen[0] ? "rotate-180" : ""} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`accordion-content ${accordionsOpen[0] ? "" : "hidden"} p-4`}>
              <p>
                The Staff Selection Commission - Combined Graduate Level (SSC CGL) is an examination conducted to recruit staff to various posts in ministries, departments and organisations of the Government of India. It is conducted by the Staff Selection Commission for selecting staff for various Group B and Group C posts. The Staff Selection Commission was established in 1975.
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
                      <td className="border px-4 py-2">December 29, 2023</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Last Date for Registration</td>
                      <td className="border px-4 py-2">January 31, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">SSC CGL Tier-I Exam Date</td>
                      <td className="border px-4 py-2">May 29-June 7, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">SSC CGL Tier-II & III Exam Date</td>
                      <td className="border px-4 py-2">September 28-October 1, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Expected Result Date</td>
                      <td className="border px-4 py-2">To be announced</td>
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
                <li>Must be a citizen of India.</li>
                <li>Must have a Bachelor’s degree from a recognized university or institute.</li>
                <li>Age limit varies from post to post. The minimum age limit is 18 years and the maximum age limit is 32 years.</li>
                <li>Age relaxation is provided to the reserved category candidates.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SscCgl;