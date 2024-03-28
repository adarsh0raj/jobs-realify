import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';

const JeePattern: React.FC = () => {

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
          IIT JEE Pattern
        </h3>
        <div className="w-full mt-5 flex flex-col items-center gap-5">
          {/* Accordion for Details */}
          <div className={`accordion ${accordionsOpen[0] ? "open" : ""} border rounded-lg overflow-hidden w-full`}>
            <div className="accordion-title flex justify-between items-center p-4 cursor-pointer bg-gray-200" onClick={() => toggleAccordion(0)}>
              <h2 className="text-lg font-bold text-gray-700">Stages</h2>
              <svg className={`transform transition-transform duration-200 ${accordionsOpen[0] ? "rotate-180" : ""} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`accordion-content ${accordionsOpen[0] ? "" : "hidden"} p-4`}>
              <ul className="list-decimal ml-5">
                <li><strong>Stage 1: JEE Main Paper 1 (B.E./B.Tech)</strong> - It is an online examination of 3 hours duration having 90 multiple choice questions from Physics, Chemistry, and Mathematics. Each question carries 4 marks.</li>
                <li><strong>Stage 2: JEE Main Paper 2 (B.Arch/B.Planning)</strong> - It is an online examination for architecture aspirants. The exam is divided into three parts - Mathematics, Aptitude, and Drawing.</li>
                <li><strong>Stage 3: JEE Advanced</strong> - Only the top 2,50,000 rankers in JEE Main (including all categories) are eligible to appear for JEE Advanced. The examination consists of two papers (Paper 1 and Paper 2) of three hours duration each. Both the papers are compulsory.</li>
              </ul>
            </div>
          </div>

          {/* Accordion for Dates */}
          <div className={`accordion ${accordionsOpen[1] ? "open" : ""} border rounded-lg overflow-hidden w-full`}>
            <div className="accordion-title flex justify-between items-center p-4 cursor-pointer bg-gray-200" onClick={() => toggleAccordion(1)}>
              <h2 className="text-lg font-bold text-gray-700">JEE Main Exam Pattern</h2>
              <svg className={`transform transition-transform duration-200 ${accordionsOpen[1] ? "rotate-180" : ""} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`accordion-content ${accordionsOpen[1] ? "" : "hidden"} p-4`}>
              <div className="w-full">
                <div className="shadow overflow-hidden sm:rounded-lg mb-8">
                  <table className="table-auto min-w-full divide-y">
                    <thead>
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Particulars</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">BTech/BE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Exam mode</td>
                        <td className="px-6 py-4 whitespace-nowrap">Online (Computer based)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Number of sections and subjects</td>
                        <td className="px-6 py-4 whitespace-nowrap">3 (Physics, Chemistry, and Mathematics)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Duration of exam</td>
                        <td className="px-6 py-4 whitespace-nowrap">3 hours (180 minutes)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Type of questions</td>
                        <td className="px-6 py-4 whitespace-nowrap">MCQs: 4 options with only 1 correct option <br /> Numerical Value Questions: Questions whose answers are to be filled in as a numerical value</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Section A (MCQ)</td>
                        <td className="px-6 py-4 whitespace-nowrap">Mathematics: 20 <br /> Physics: 20 <br /> Chemistry: 20</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Section B (Numerical Value)</td>
                        <td className="px-6 py-4 whitespace-nowrap">Mathematics: 10 <br /> Physics: 10 <br /> Chemistry: 10 <br /> (Candidates have to attempt any five questions out of 10)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">How many questions in JEE Mains</td>
                        <td className="px-6 py-4 whitespace-nowrap">90</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">JEE Mains Total Marks</td>
                        <td className="px-6 py-4 whitespace-nowrap">300 marks</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Language of paper</td>
                        <td className="px-6 py-4">Assamese, Bengali, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, Urdu in addition to Hindi, English, and Gujarati</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion for Eligibility */}
          <div className={`accordion ${accordionsOpen[2] ? "open" : ""} border rounded-lg overflow-hidden w-full`}>
            <div className="accordion-title flex justify-between items-center p-4 cursor-pointer bg-gray-200" onClick={() => toggleAccordion(2)}>
              <h2 className="text-lg font-bold text-gray-700">JEE Main Marking Scheme</h2>
              <svg className={`transform transition-transform duration-200 ${accordionsOpen[2] ? "rotate-180" : ""} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={`accordion-content ${accordionsOpen[2] ? "" : "hidden"} p-4`}>
              <div className="w-full">
                <div className="shadow overflow-hidden sm:rounded-lg mb-8">
                  <table className="table-auto min-w-full divide-y">
                    <thead>
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Particulars</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">BE/BTech Marking Scheme</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">BArch Marking Scheme</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">BPlan Marking Scheme</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Correct Answer</td>
                        <td className="px-6 py-4 whitespace-nowrap">+4 (Four marks awarded)</td>
                        <td className="px-6 py-4 whitespace-nowrap">+4 (Four marks awarded)</td>
                        <td className="px-6 py-4 whitespace-nowrap">+4 (Four marks awarded)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Incorrect Answer</td>
                        <td className="px-6 py-4 whitespace-nowrap">-1 (One mark deducted)</td>
                        <td className="px-6 py-4 whitespace-nowrap">-1 (One mark deducted)</td>
                        <td className="px-6 py-4 whitespace-nowrap">-1 (One mark deducted)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Un-attempted Question</td>
                        <td className="px-6 py-4 whitespace-nowrap">0 (No marks deducted)</td>
                        <td className="px-6 py-4 whitespace-nowrap">0 (No marks deducted)</td>
                        <td className="px-6 py-4 whitespace-nowrap">0 (No marks deducted)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Marks per section</td>
                        <td className="px-6 py-4">
                          <ul>
                            <li>Mathematics: 25 questions X 4 marks = 100 marks</li>
                            <li>Physics: 25 questions X 4 marks = 100 marks</li>
                            <li>Chemistry: 25 questions X 4 marks = 100 marks</li>
                          </ul>
                        </td>
                        <td className="px-6 py-4">
                          <ul>
                            <li>Mathematics: 25 questions X 4 marks = 100 marks</li>
                            <li>Aptitude Test: 50 questions X 4 marks = 200 marks</li>
                            <li>Drawing test: 2 questions X 50 marks = 100 marks</li>
                          </ul>
                        </td>
                        <td className="px-6 py-4">
                          <ul>
                            <li>Mathematics: 25 questions X 4 marks = 100 marks</li>
                            <li>Aptitude Test = 50 questions X 4 marks = 200 marks</li>
                            <li>Planning Based Questions = 25 X 4 marks = 100 marks</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default JeePattern;