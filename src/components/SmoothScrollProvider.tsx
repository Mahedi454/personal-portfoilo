import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScrollProvider = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    let rafId = 0;

    const onFrame = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(onFrame);
    };

    rafId = window.requestAnimationFrame(onFrame);

    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest('a[href^="#"]');

      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      const href = link.getAttribute("href");

      if (!href) {
        return;
      }

      const url = new URL(href, window.location.href);
      const { hash, pathname } = url;

      if (!hash || hash === "#" || pathname !== window.location.pathname) {
        return;
      }

      const section = document.querySelector(hash);

      if (!section) {
        return;
      }

      event.preventDefault();

      lenis.scrollTo(section, {
        offset: -88,
        duration: 1.1,
      });

      window.history.replaceState(null, "", hash);
    };

    document.addEventListener("click", handleHashLinkClick);

    return () => {
      document.removeEventListener("click", handleHashLinkClick);
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScrollProvider;
