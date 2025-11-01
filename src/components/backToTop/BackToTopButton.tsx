import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollContainer =
      document.scrollingElement || document.documentElement || document.body;

    if ("scrollBehavior" in document.documentElement.style) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      let currentScroll = scrollContainer.scrollTop;
      const step = () => {
        currentScroll -= 50;
        if (currentScroll > 0) {
          scrollContainer.scrollTop = currentScroll;
          requestAnimationFrame(step);
        } else {
          scrollContainer.scrollTop = 0;
        }
      };
      requestAnimationFrame(step);
    }
  };

  if (!visible) return null;

  return (
    <button
      className="btn btn-secondary position-fixed bottom-0 end-0 m-3 border-4 rounded-5"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
