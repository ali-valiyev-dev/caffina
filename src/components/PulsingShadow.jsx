import { useEffect, useRef } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";

const PulsingShadow = ({ position }) => {
  const boxShadowFrom = "0px 0px 300px 150px rgba(90, 66, 58, 0.10)";
  const boxShadowTo = "0px 0px 300px 150px rgba(193, 166, 141, 0.15)";

  const divRef = useRef(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      divRef.current,
      { boxShadow: boxShadowFrom },
      {
        boxShadow: boxShadowTo,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
      }
    );

    return () => {
      animation.kill();
    };
  }, [boxShadowFrom, boxShadowTo]);

  return (
    <div
      ref={divRef}
      className={`absolute -z-10 ${position}`}
    />
  );
};

PulsingShadow.propTypes = {
  position: PropTypes.string.isRequired,
};

export default PulsingShadow;
