"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Animations = () => {
  //   const isDesktop = useMediaQuery({ minWidth: 992 });
  //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  //   const isMobile = useMediaQuery({ maxWidth: 767 });

  const pathname = usePathname();
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;
    // --- HERO SECTION ---
    const heroSplit = new SplitText(".hero-title", { type: "words,chars" });
    // const paragraphSplit = new SplitText(".hero-subtitle", { type: "lines" });

    // navbar
    gsap.from(".nav-item", {
      xPercent: -50,
      opacity: 0,
      stagger: 0.3,
      ease: "expo.out",
      duration: 2,
    });

    // hero
    gsap.from(heroSplit.chars, {
      xPercent: -100,
      rotateX: -90,
      opacity: 0,
      stagger: 0.06,
      ease: "expo.out",
      duration: 0.8,
      delay: 1,
    });

    gsap.from(".hero-subtitle", {
      xPercent: -50,
      opacity: 0,
      stagger: 0.5,
      ease: "sine.out",
      duration: 1,
      delay: 2,
    });

    gsap.from(".hero-cta", {
      scale: 0,
      opacity: 0,
      stagger: 0.3,
      ease: "elastic.out(1, 0.5)",
      duration: 0.5,
      delay: 3,
    });

    gsap.from(".hero-tiny-text", {
      xPercent: -50,
      opacity: 0,
      stagger: 0.3,
      ease: "expo.out",
      duration: 0.5,
      delay: 3.5,
    });

    gsap.from(".hero-icons", {
      rotateY: -180,
      opacity: 0,
      stagger: 0.3,
      ease: "sine.out",
      duration: 2,
      delay: 1.5,
    });

    gsap.from(".hero-wings", {
      scale: 0,
      opacity: 0,
      stagger: 0.3,
      ease: "sine.out",
      duration: 2,
      delay: 0.5,
    });

    // companies
    gsap.from(".company", {
      scrollTrigger: {
        trigger: ".company-container",
        start: "center bottom +=200",
        end: "+=500",
        scrub: 1,
        once: true,
      },
      scale: 0.5,
      stagger: 0.2,
      opacity: 0,
      duration: 0.8,
    });

    // features

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".feature-item",
        },
        defaults: {
          stagger: 0.2,
          opacity: 0,
          duration: 0.8,
        },
      })
      .from(".feature-item", {
        scrollTrigger: {
          trigger: ".feature-item",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        yPercent: 50,
      })
      .from(".feature-img", {
        scrollTrigger: {
          trigger: ".feature-img",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        scale: 0.5,
      })
      .from(".feature-item2", {
        scrollTrigger: {
          trigger: ".feature-item2",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        yPercent: 50,
      })
      .from(".feature-img2", {
        scrollTrigger: {
          trigger: ".feature-img2",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        scale: 0.5,
      });

    // red section 1

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".rs1-item",
        },
        defaults: {
          stagger: 0.2,
          opacity: 0,
          duration: 0.8,
        },
      })
      .from(".rs1-item", {
        scrollTrigger: {
          trigger: ".rs1-item",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        yPercent: 50,
      })
      .from(".rs1-img", {
        scrollTrigger: {
          trigger: ".rs1-img",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        scale: 0.5,
      })
      .from(".rs1-img2", {
        scrollTrigger: {
          trigger: ".rs1-img2",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        scale: 0.5,
      })
      .from(".rs1-img3", {
        scrollTrigger: {
          trigger: ".rs1-img3",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        scale: 0.5,
      })
      .from(".rs1-img4", {
        scrollTrigger: {
          trigger: ".rs1-img4",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        scale: 0.5,
      });

    //   archive

    const archTitleSplit = new SplitText(".archive-title", {
      type: "words,chars",
    });

    gsap.from(archTitleSplit.chars, {
      scrollTrigger: {
        trigger: ".archive-title",
      },
      yPercent: 100,
      duration: 0.5,
      stagger: 0.03,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".archive-title",
        },
        defaults: {
          stagger: 0.2,
          opacity: 0,
          duration: 0.8,
        },
      })
      .from(".archive-item", {
        scrollTrigger: {
          trigger: ".archive-item",
          start: "center bottom +=100",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        yPercent: 50,
      })
      .from(".archive-item2", {
        scrollTrigger: {
          trigger: ".archive-item2",
          start: "center bottom +=100",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        yPercent: 50,
      });

    //   testimonials

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".testimonial-item",
        },
        defaults: {
          stagger: 0.2,
          opacity: 0,
          duration: 0.8,
        },
      })
      .from(".testimonial-img", {
        scrollTrigger: {
          trigger: ".testimonial-img",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        scale: 0.5,
      })
      .from(".testimonial-item", {
        scrollTrigger: {
          trigger: ".testimonial-item",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        yPercent: 50,
      })

      .from(".testimonial-img2", {
        scrollTrigger: {
          trigger: ".testimonial-img2",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        scale: 0.5,
      })
      .from(".testimonial-item2", {
        scrollTrigger: {
          trigger: ".testimonial-item2",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        yPercent: 50,
      });

    //   loved by
    gsap.from(".designer-text", {
      scrollTrigger: {
        trigger: ".designer-text",
        start: "center bottom +=200",
        end: "+=500",
        scrub: 1,
        once: true,
      },
      yPercent: 50,
      stagger: 0.2,
      opacity: 0,
      duration: 0.8,
    });

    gsap.from(".designer-item", {
      scrollTrigger: {
        trigger: ".designer-item",
        start: "center bottom +=200",
        end: "+=500",
        scrub: 1,
        once: true,
      },
      scale: 0.5,
      stagger: 0.2,
      opacity: 0,
      duration: 0.8,
    });

    // red-section-2

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".rs2-item",
        },
        defaults: {
          stagger: 0.2,
          opacity: 0,
          duration: 0.8,
        },
      })
      .from(".rs2-item", {
        scrollTrigger: {
          trigger: ".rs2-item",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        yPercent: 50,
      })

      .from(".rs2-item2", {
        scrollTrigger: {
          trigger: ".rs2-item2",
          start: "center bottom +=200",
          end: "+=500",
          scrub: 1,
          once: true,
        },
        scale: 0.5,
      });

    //   last section
    gsap.from(".last-img", {
      scrollTrigger: {
        trigger: ".last-img",
        start: "center bottom +=200",
        end: "+=500",
        scrub: 1,
        once: true,
      },
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
    });
    gsap.from(".last-text", {
      scrollTrigger: {
        trigger: ".last-text",
        start: "center bottom +=200",
        end: "+=500",
        scrub: 1,
        once: true,
      },
      yPercent: 50,
      stagger: 0.2,
      opacity: 0,
      duration: 0.8,
    });
    gsap.from(".last-cta", {
      scrollTrigger: {
        trigger: ".last-cta",
        start: "center bottom +=200",
        end: "+=500",
        scrub: 1,
        once: true,
      },
      xPercent: -50,
      stagger: 0.2,
      opacity: 0,
      duration: 0.8,
    });

    // footer
    gsap.from(".footer-img", {
      scrollTrigger: {
        trigger: ".footer-img",
        start: "top bottom +=200",
        end: "+=300",
        scrub: 1,
        once: true,
      },
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
    });

    gsap.from(".footer-item", {
      scrollTrigger: ".footer-item",
      yPercent: 50,
      opacity: 0,
      stagger: 0.3,
      ease: "expo.out",
      duration: 2,
    });

    // not-found
    gsap.from(".not-found-img", {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
    });

    gsap.from(".not-found-text", {
      scrollTrigger: ".not-found-text",
      yPercent: 50,
      opacity: 0,
      stagger: 0.3,
      ease: "expo.out",
      duration: 2,
    });
  }, [pathname]);
  return null;
};

export default Animations;
