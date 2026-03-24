import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // force scroll instantly (more reliable)
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;