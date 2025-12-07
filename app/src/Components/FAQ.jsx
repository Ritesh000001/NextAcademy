import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is the Next Academy ?",
    answer:
      "The Next Academy is an initiative taken by RK, where we offer 1000+ free online courses in cutting-edge technologies and have successfully enrolled a whopping 5 Million+ learners across all domains. NextAcademy covers courses on Data Science, Machine Learning, Artificial Intelligence, Cloud Computing, Software Development, Sales and Business Development, Digital Marketing, Big Data, and many more.",
  },
  {
    question: "Why should I choose Great Learning Academy for free courses with certificates ?",
    answer:
      "NextAcademy provides high-quality courses designed by industry experts and offers certification upon completion. These certificates enhance your resume and improve your career opportunities.",
  },
  {
    question: "How many free courses can I enroll in at the same time?",
    answer:
      "You can enroll in multiple free courses simultaneously, allowing you to learn at your own pace.",
  },
  {
    question: "How can I enroll in these free online courses?",
    answer:
      "To enroll in a free course, simply create an account, browse the available courses, and click on the 'Enroll Now' button.",
  },
  {
    question: "What are the most popular free courses offered by Next Academy ?",
    answer:
      "Some of the most popular courses include Data Science, Machine Learning, Python Programming, Cloud Computing, and Web Development.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 ml-6 mr-6 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="bg-gray-100 rounded-lg shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b last:border-b-0">
              {/* Question */}
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-semibold focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={openIndex === index ? "text-orange-500" : "text-gray-900"}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-700" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-blue-50 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
