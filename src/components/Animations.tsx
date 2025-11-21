"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Animations = () => {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Kill old animations when route changes
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.globalTimeline.clear();

    // Refresh on layout shifts (important for mobile)
    ScrollTrigger.refresh(true);

    const heroTitle = document.querySelector(".hero-title");
    const archiveTitle = document.querySelector(".archive-title");

    let heroSplit: SplitText | null = null;
    let archTitleSplit: SplitText | null = null;

    if (heroTitle) {
      heroSplit = new SplitText(heroTitle, { type: "words,chars" });
    }

    if (archiveTitle) {
      archTitleSplit = new SplitText(archiveTitle, { type: "words,chars" });
    }

    // ---------------- NAVBAR ----------------
    gsap.from(".nav-item", {
      y: -30,
      opacity: 0,
      stagger: 0.15,
      ease: "power3.out",
      duration: 1,
    });

    // ---------------- HERO ----------------
    if (heroSplit) {
      gsap.from(heroSplit.chars, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.03,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.5,
      });
    }

    gsap.from(".hero-subtitle, .hero-tiny-text", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      duration: 0.8,
      delay: 1,
    });

    gsap.from(".hero-cta", {
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)",
      duration: 0.7,
      delay: 1.5,
    });

    gsap.from(".hero-icons, .hero-wings", {
      scale: 0.8,
      opacity: 0,
      ease: "power3.out",
      duration: 1,
      delay: 1,
    });

    // Helper function (TS safe now)
    const scrollAnim = (
      selector: string,
      props: gsap.TweenVars = {},
      triggerSelector?: string
    ) => {
      gsap.from(selector, {
        scrollTrigger: {
          trigger: triggerSelector || selector,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
        ...props,
      });
    };

    // ---------------- COMPANIES ----------------
    scrollAnim(
      ".company",
      {
        scale: 0.7,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
      },
      ".company-container"
    );

    // ---------------- FEATURES ----------------
    scrollAnim(".feature-item", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
    });

    scrollAnim(".feature-img, .feature-img2", {
      scale: 0.7,
      opacity: 0,
      duration: 0.8,
    });

    // ---------------- RED SECTION 1 ----------------
    scrollAnim(".rs1-item", {
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
    });

    scrollAnim(".rs1-img, .rs1-img2, .rs1-img3, .rs1-img4", {
      scale: 0.7,
      opacity: 0,
      duration: 0.8,
    });

    // ---------------- ARCHIVE ----------------
    if (archTitleSplit) {
      gsap.from(archTitleSplit.chars, {
        scrollTrigger: {
          trigger: ".archive-title",
          start: "top 85%",
        },
        yPercent: 100,
        stagger: 0.02,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    scrollAnim(".archive-item, .archive-item2", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
    });

    // ---------------- TESTIMONIALS ----------------
    scrollAnim(".testimonial-img, .testimonial-img2", {
      scale: 0.7,
      opacity: 0,
      duration: 0.8,
    });

    scrollAnim(".testimonial-item, .testimonial-item2", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
    });

    // ---------------- LOVED BY ----------------
    scrollAnim(".designer-text", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
    });

    scrollAnim(".designer-item", {
      scale: 0.6,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
    });

    // ---------------- RED SECTION 2 ----------------
    scrollAnim(".rs2-item", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
    });

    scrollAnim(".rs2-item2", {
      scale: 0.7,
      opacity: 0,
      duration: 0.8,
    });

    // ---------------- LAST SECTION ----------------
    scrollAnim(".last-img", {
      scale: 0.7,
      opacity: 0,
      duration: 0.8,
    });

    scrollAnim(".last-text", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
    });

    scrollAnim(".last-cta", {
      x: -50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
    });

    // ---------------- FOOTER ----------------
    scrollAnim(".footer-img", {
      scale: 0.7,
      opacity: 0,
      duration: 0.8,
    });

    scrollAnim(".footer-item", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
    });

    // ---------------- NOT FOUND ----------------
    gsap.from(".not-found-img", {
      scale: 0.7,
      opacity: 0,
      duration: 0.8,
    });

    scrollAnim(".not-found-text", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (heroSplit) heroSplit.revert();
      if (archTitleSplit) archTitleSplit.revert();
    };
  }, [pathname]);

  return null;
};

export default Animations;
