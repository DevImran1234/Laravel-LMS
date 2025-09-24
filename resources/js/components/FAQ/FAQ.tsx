import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Backend Development?",
      answer:
        "Backend development focuses on server-side logic, databases, and APIs that power the functionality of web and mobile applications.",
    },
    {
      question: "What is Frontend Development?",
      answer:
        "Frontend development deals with the design and user interface of a website or app. It ensures that users have a smooth and interactive experience.",
    },
    {
      question: "What is AI & Machine Learning?",
      answer:
        "Artificial Intelligence refers to machines performing tasks that require human intelligence, while Machine Learning is a subset of AI that enables systems to learn from data and improve over time.",
    },
    {
      question: "Do you provide real-world projects?",
      answer:
        "Yes, we provide hands-on projects so learners and developers can apply their knowledge to real-world scenarios, building confidence and experience.",
    },
    {
      question: "How can I get started?",
      answer:
        "You can get started by signing up on our platform, exploring our courses, and joining our community to start your journey in tech.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
