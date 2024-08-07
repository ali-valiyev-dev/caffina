import { features } from "../../constants";
import PulsingShadow from "./PulsingShadow";

const FeatureHighlights = () => {
  return (
    <div className="lg:w-[1030px] md:w-[650px] gap-4 flex items-center justify-between flex-col md:flex-row px-11 pb-5 xl:pb-8 xl:pt-4 xl:px-20 bg-white-gradient rounded-[26px] lg:rounded-[46px] relative">
      {features.map(({ title, subtitle, icon }) => (
        <div
          key={title}
          className="flex items-center text-center flex-col w-36 lg:w-[210px]">
          <img
            width={200}
            height={200}
            src={icon}
            alt=""
          />

          <h4 className="text-xl lg:text-[32px] text-[#121517] font-medium leading-8 lg:leading-[52px] -tracking-wide">
            {title}
          </h4>

          <p className="text-xs lg:text-xl text-[#121517E5] font-normal leading-5 lg:leading-8 -tracking-wide">
            {subtitle}
          </p>
        </div>
      ))}

      <img
        className="absolute w-28 lg:w-44 -top-14 -right-14 lg:-top-20 lg:-left-20"
        src="/star-mark-2.svg"
        alt=""
      />

      <PulsingShadow position="top-1/2 left-20" />
    </div>
  );
};

export default FeatureHighlights;
