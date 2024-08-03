import {
  products as initialProducts,
  subtitles,
  titles,
} from "../../constants";
import { useState } from "react";
import Box from "@mui/material/Box";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setProducts(prevProducts => {
        const lastItem = prevProducts[prevProducts.length - 1];
        return [lastItem, ...prevProducts.slice(0, -1)];
      });
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <section className="mt-16 xl:mt-24">
      <div className="max-xl:px-10 xl:ml-32 max-w-[908px] flex flex-col xl:flex-row xl:gap-[88px] xl:items-center">
        <SectionTitle title={titles[2]} />
        <div className="my-9 xl:my-0">
          <SectionSubtitle subtitle={subtitles[2]} />
        </div>
      </div>

      <div className="flex items-center xl:mt-16 ">
        <div className="w-[100rem] flex gap-9 xl:gap-12 justify-end  xl:pr-14 overflow-hidden ">
          {products.map(product => (
            <Box
              key={product.id}
              sx={{
                transition: "transform 400ms ease-in-out",
                transform: isTransitioning ? "translateX(117%)" : "none",
              }}>
              <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
                capacity={product.capacity}
                image={product.image}
              />
            </Box>
          ))}
        </div>

        <div className="xl:w-[450px] px-9">
          <button
            onClick={handleNext}
            type="button"
            className="w-14 xl:w-20 h-14 xl:h-20 border border-[#237249] text-[#237249] text-3xl rounded-2xl xl:rounded-3xl">
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
