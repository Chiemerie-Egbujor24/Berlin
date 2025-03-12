import React, { useState, useEffect } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import "./scrolltotop.css"; 

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        // <button className="scroll-to-top" >
          <FaCircleArrowUp className="scroll" onClick={scrollToTop} size={90} />
        // </button>
      )}
    </div>
  );
};

export default ScrollToTop;