import { useEffect, useRef } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";

const PulsingShadowDiv = ({ position, firstBoxShadow, secondBoxShadow }) => {
  const divRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      { boxShadow: firstBoxShadow },
      {
        boxShadow: secondBoxShadow,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power4.inOut",
      }
    );
  }, [firstBoxShadow, secondBoxShadow]);

  return (
    <div
      ref={divRef}
      className={`absolute -z-10 ${position}`}
    />
  );
};

PulsingShadowDiv.propTypes = {
  position: PropTypes.string,
  firstBoxShadow: PropTypes.string,
  secondBoxShadow: PropTypes.string,
};

export default PulsingShadowDiv;
