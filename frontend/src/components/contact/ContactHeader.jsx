import { images } from "@/assets/assets";
import Button from "@/utilities/Button";
import { SparkleIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";

const ContactHeader = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    toast.info("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "c98ce9a0-4f29-4ae5-93ec-a7e73e6c91b0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully!");
        event.target.reset();
      } else {
        if (data.errors) {
          Object.values(data.errors).forEach((errMsg) => {
            toast.error(errMsg);
          });
        } else {
          toast.error(data.message || "Something went wrong!");
        }
        console.log("Error", data);
      }
    } catch (error) {
      toast.error("Failed to send. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full flex-center flex-col px-4 md:px-10 pt-36 md:pt-44">
      <ToastContainer
        theme={isDark ? "dark" : "light"}
        position="bottom-right"
        autoClose={2000}
        newestOnTop
      />
      <section className="w-full max-w-[1200px]">
        <span>
          <div className="text-highlight flex gap-2 mb-4 items-center">
            <SparkleIcon height={18} width={18} />
            <p className="uppercase font-clash-variable [word-spacing:4px] text-sm">
              Connect With Me
            </p>
          </div>
        </span>
        <span>
          <h1 className="w-full sm:w-2/3 lg:w-1/2 [word-spacing:4px] text-5xl font-clash-medium mb-8 leading-[1.2]">
            Let's start a project together
          </h1>
        </span>
        <div className="w-full flex flex-col sm:flex-row gap-10 sm:gap-8 font-satoshi-medium text-sm">
          <form onSubmit={onSubmit} className="w-full space-y-4">
            <div className="space-y-2 mb-3">
              <label className="leading-none" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                placeholder=""
                id="fullName"
                name="name"
                required
                className="text-dim flex h-11 w-full rounded-xl border border-input-border bg-input-bg  px-3 py-2 mt-1 ring-offset-body-secondary focus:outline-hidden focus:ring-2 focus:ring-highlight focus:ring-offset-2 "
              />
            </div>
            <div className="space-y-2 mb-3">
              <label className="leading-none" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder=""
                id="email"
                name="email"
                required
                className="text-dim flex h-11 w-full rounded-xl border border-input-border bg-input-bg px-3 py-2 mt-1 ring-offset-body-secondary focus:outline-hidden focus:ring-2 focus:ring-highlight focus:ring-offset-2"
              />
            </div>
            <div className="space-y-2 mb-4">
              <label className="leading-none" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder=""
                rows="4"
                required
                className="text-dim min-h-[100px] flex h-11 w-full rounded-xl border border-input-border  bg-input-bg  px-3 py-2 mt-1 ring-offset-body-secondary focus:outline-hidden focus:ring-2 focus:ring-highlight focus:ring-offset-2 resize-none"
              />
            </div>
            <button type="submit">
              <Button initialText="Submit" hoverText="Submit" />
            </button>
          </form>
          <div className="bg-body-secondary h-full w-full rounded-3xl p-6 shadow-xs">
            <span>
              <div className="rounded-full flex-center gap-2 bg-work-btn px-4 py-2 mb-4 w-fit">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="bg-highlight absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                  <span className="bg-highlight relative inline-flex h-full w-full rounded-full"></span>
                </span>
                <p className="font-satoshi-regular text-xs">
                  Available for work
                </p>
              </div>
            </span>
            <span>
              <img
                src={images.dp2}
                alt=""
                className="border border-carousel-border aspect-square overflow-hidden rounded-full object-cover p-2"
                height={100}
                width={100}
              />
            </span>
            <span>
              <p className="font-satoshi-regular mt-4 mb-6 text-base text-dim">
                My inbox is always open, Whether you have a project or just want
                to say Hi. I would love to hear from you. Feel free to contact
                me and I'll get back to you.
              </p>
            </span>
            <span>
              <div className="text-dim flex items-center justify-start gap-6">
                <span>
                  <a
                    href="https://www.linkedin.com/in/coderguyshubham"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LuLinkedin size={20} />
                  </a>
                </span>
                <span>
                  <a
                    href="https://github.com/CoderGuyShubham"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LuGithub size={20} />
                  </a>
                </span>
                <span>
                  <a
                    href="mailto:singhshubham889900@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LuMail size={20} />
                  </a>
                </span>
              </div>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactHeader;
