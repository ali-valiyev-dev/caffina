import PropTypes from "prop-types";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { CustomButton } from "../common";

const ProductCard = ({ name, description, price, rating, image, alt }) => {
  return (
    <div className="rounded-[20px] lg:rounded-[30px] px-5 lg:px-11 py-5 lg:py-6 border border-cappuccino-light w-[183px] lg:w-[277px] h-full text-center flex flex-col gap-4 lg:gap-6 justify-between items-center">
      <div className="relative h-[141px] lg:h-[241px] flex items-center justify-center overflow-hidden">
        <div className="w-28 lg:w-44 h-28 lg:h-44 bg-espresso-gradient rounded-full" />
        <img
          className="absolute w-full"
          src={image}
          alt={alt}
        />
      </div>

      <h3 className="font-medium text-xl lg:text-2xl text-white">{name}</h3>

      <p className="font-normal text-sm lg:text-xl text-latte">{description}</p>

      <div className="flex w-full justify-between items-center">
        <h3 className="font-medium text-xl lg:text-2xl text-white">{price}$</h3>
        <span className="font-normal text-sm lg:text-xl text-latte flex items-center">
          {rating}
          <StarBorderIcon />
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
  rating: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProductCard;
