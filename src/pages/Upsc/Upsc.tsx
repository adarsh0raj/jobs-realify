import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';

const Upsc: React.FC = () => {

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
          UPSC (Union Public Service Commission)
        </h3>
        <div className="w-full mt-5 flex flex-col items-center gap-5">
          {/* Accordion for Details */}
          <div className={`accordion ${accordionsOpen[0] ? "open" : ""} border rounded-lg overflow-hidden w-full`}>
            <div className="accordion-title flex justify-between items-center p-4 cursor-pointer bg-gray-200" onClick={() => toggleAccordion(0)}>
              <h2 className="text-lg font-bold text-gray-700">What is UPSC?</h2>
              <svg className={`transform transition-transform duration-200 ${accordionsOpen[0] ? "rotate-180" : ""} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`accordion-content ${accordionsOpen[0] ? "" : "hidden"} p-4`}>
              <p>
                The Union Public Service Commission (UPSC) is India's premier central recruiting agency. It is responsible for appointments to and examinations for All India services and group A & group B of Central services. It was established on 1 October 1926 as Public Service Commission, it was later reconstituted as Federal Public Service Commission by the Government of India Act, 1935; only to be renamed as today's Union Public Service Commission after the independence.
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
                      <td className="border px-4 py-2">February 10, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Last Date for Registration</td>
                      <td className="border px-4 py-2">March 10, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">UPSC Preliminary Exam Date</td>
                      <td className="border px-4 py-2">June 2, 2024</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">UPSC Main Exam Date</td>
                      <td className="border px-4 py-2">September 20, 2024</td>
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
                <li>Must hold a degree from a recognized University or equivalent.</li>
                <li>Age limit is between 21 and 32 years.</li>
                <li>Age relaxation is provided to the reserved category candidates.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Upsc;