import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Accordion.css";

const Accordion = ({text, title}) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  const ExpandIcon = <FontAwesomeIcon icon={faChevronRight} />;

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={toggleActive}>
        {title}
        <span className={active ? "accordion-icon rotate" : "accordion-icon"}>
          {ExpandIcon}
        </span>
      </button>

      <div ref={contentRef} className="accordion-content">
        {text}
      </div>
    </div>
  );
};

export default Accordion;
