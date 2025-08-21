import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTextWordByWord() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    const words = el.querySelectorAll(".word");
    // const styles = getComputedStyle(document.documentElement);
    // const startColor = styles.getPropertyValue("--typing-start").trim();
    // const endColor = styles.getPropertyValue("--typing-end").trim();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          color: () =>
            getComputedStyle(document.documentElement)
              .getPropertyValue("--typing-start")
              .trim(),
        },
        {
          color: () =>
            getComputedStyle(document.documentElement)
              .getPropertyValue("--typing-end")
              .trim(),
          stagger: 2,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1,
            // markers: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const text =
    "I'm Shubham Singh, with over 2+ years of experience in design & development with strong focus on producing high quality & impactful digital experiences. I have worked with some of the most innovative industry leaders to help build their top-notch products.";

  return (
    <section className="pt-8">
      <h1
        ref={containerRef}
        className="flex flex-wrap items-center justify-center gap-2 md:gap-4 font-satoshi-medium text-2xl md:text-3xl leading-[1.2]"
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="word">
            {word}
          </span>
        ))}
      </h1>
    </section>
  );
}
