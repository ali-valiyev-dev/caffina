import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

const Statistic = ({ label, total }) => {
  const valueRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const animation = gsap.fromTo(
      valueRef.current,
      { innerHTML: 0 },
      {
        innerHTML: total,
        duration: 2,
        ease: "power1.inOut",
        snap: { innerHTML: 1 },
        onComplete: () => {
          const formattedTotal =
            total > 1000 ? `${(total / 1000).toFixed(0)}K` : `${total}`;
          valueRef.current.innerHTML = formattedTotal;
          setIsLoaded(true);
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [total]);

  return (
    <div className="statistic max-w-32">
      <div className="flex items-center">
        <h3
          ref={valueRef}
          className="text-[41px] xl:text-6xl leading-[45px] xl:leading-[68px] tracking-tight font-normal text-white">
          0
        </h3>
        {isLoaded && (
          <span className="text-espresso text-[41px] xl:text-6xl leading-[45px] xl:leading-[68px]">
            +
          </span>
        )}
      </div>
      <p className="text-lg text-latte">{label}</p>
    </div>
  );
};

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistic;
