import { SparkleIcon } from "lucide-react";
import React, { useState } from "react";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const ContactSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      question: "01. What is your current role?",
      answer:
        "I am currently working as a web developer, building responsive and scalable applications.",
    },
    {
      question: "02. How much does it cost for a high performing website?",
      answer:
        "It will depend upon the scope and requirements of the project. In a meeting, we will seek to identify specifics and objectives like number of pages, specific features, timeline, etc. All these will contribute to the cost and will vary from project to project.",
    },
    {
      question: "03. How long will the work take from start to finish?",
      answer:
        "The timeline depends on scope. A basic project may take 2-4 weeks, while larger ones can take months.",
    },
    {
      question: "04. Are you available to join as full time?",
      answer:
        "Yes, I am available to join as full time in a company that will allow me to showcase my creativity through crafting beautiful websites, designs and engaging experiences.",
    },
  ];
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full h-full flex-center flex-col px-4 md:px-10 pt-26 md:pt-40">
      <section className="w-full max-w-[1200px] mb-10">
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-30">
          <div className="">
            <span data-aos="fade"
          data-aos-offset="0"
          data-aos-duration="300"
          data-aos-easing="ease-in-out-sine"
          data-aos-delay="0">
              <div className="text-highlight flex gap-2 mb-4 items-center">
                <SparkleIcon height={18} width={18} />
                <p className="uppercase font-clash-variable [word-spacing:4px] text-sm">
                  FAQs
                </p>
              </div>
            </span>
            <span data-aos="fade"
          data-aos-offset="0"
          data-aos-duration="300"
          data-aos-easing="ease-in-out-sine"
          data-aos-delay="200">
              <h1 className="w-full sm:w-2/3 [word-spacing:4px] text-5xl font-clash-medium mb-8 leading-[1.2]">
                Have Questions?
              </h1>
            </span>
          </div>
          <div data-aos="fade"
          data-aos-offset="0"
          data-aos-duration="300"
          data-aos-easing="ease-in-out-sine"
          data-aos-delay="200" className="font-satoshi-variable space-y-3 w-full md:w-2/3">
            {data.map((item, index) => (
              <div
                key={index}
                className="border border-carousel-border rounded-2xl bg-body-secondary"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full px-4 py-4 text-left font-semibold text-primary"
                >
                  <span>{item.question}</span>
                  <span className="">{openIndex === index ? "−" : "+"}</span>
                </button>
                <div
                  className={`px-4 text-dim overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 py-2" : "max-h-0"
                  }`}
                >
                  <p className="">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="flex flex-col max-w-[1200px] items-center w-full md:flex-row justify-between mt-8">
          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="0"
          >
            <p className="font-satoshi-regular text-sm text-dim mb-14 md:text-left sm:mb-0 text-center">
              © 2025 Shubham Singh. All rights reserved.
            </p>
          </span>
          <div className="hidden sm:flex flex-row gap-6 text-dim">
            <span
              data-aos="fade"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-easing="ease-in-out-sine"
              data-aos-delay="0"
            >
              <a
                href="https://www.linkedin.com/in/coderguyshubham"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LuLinkedin size={20} />
              </a>
            </span>
            <span
              data-aos="fade"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-easing="ease-in-out-sine"
              data-aos-delay="200"
            >
              <a
                href="https://github.com/CoderGuyShubham"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LuGithub size={20} />
              </a>
            </span>
            <span
              data-aos="fade"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-easing="ease-in-out-sine"
              data-aos-delay="400"
            >
              <a
                href="mailto:singhshubham889900@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LuMail size={20} />
              </a>
            </span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default ContactSection;
