import { useEffect, useRef } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";

const PulsingShadow = ({ position }) => {
  const divRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      { boxShadow: "0px 0px 300px 150px rgba(35, 114, 73, 0.10)" },
      {
        boxShadow: "0px 0px 300px 150px rgba(53, 198, 107, 0.15)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
      }
    );
  }, []);

  return (
    <div
      ref={divRef}
      className={`absolute -z-10 ${position}`}
    />
  );
};

PulsingShadow.propTypes = {
  position: PropTypes.string,
};

export default PulsingShadow;
