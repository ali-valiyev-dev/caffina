import CustomButton from "./CustomButton";
import PropTypes from "prop-types";

const ProductCard = ({ name, description, price, capacity, image }) => {
  return (
    <div className="rounded-[20px] lg:rounded-[30px] px-5 lg:px-11 py-5 lg:py-6 border border-[#dadada70] w-[183px] lg:w-[277px] h-[380px] lg:h-[565px] text-center flex flex-col justify-between items-center">
      <div className="images relative h-[141px] lg:h-[241px] flex items-center justify-center overflow-hidden">
        <div className="w-28 lg:w-44 h-28 lg:h-44 bg-green-gradient rounded-full" />

        <img
          className="absolute w-[105px] lg:w-[180px]"
          src={image}
          alt="Coffee Cup"
        />
      </div>

      <h3 className="font-medium text-xl xl:text-2xl -tracking-[0,02em] text-white">
        {name}
      </h3>

      <p className="font-normal text-sm xl:text-xl text-[#d9d9d9]">
        {description}
      </p>

      <div className="flex w-full justify-between items-center">
        <h3 className="font-medium text-xl xl:text-2xl -tracking-[0,02em] text-white">
          {price}$
        </h3>

        <span className="font-normal text-sm xl:text-xl text-[#d9d9d9]">
          {capacity} ml
        </span>
      </div>

      <CustomButton title="Buy Coffee" />
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
