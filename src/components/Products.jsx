import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  products as initialProducts,
  subtitles,
  titles,
} from "../../constants";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import PulsingShadow from "./PulsingShadow";
import { animateElements } from "../utils/Animations";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    animateElements([
      {
        selector: ".animate-products-title",
        from: { opacity: 0, x: 1000 },
      },
      {
        selector: ".animate-products-list",
        from: { opacity: 0, x: -1000 },
      },
    ]);
  }, []);

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
    <section
      id="products"
      className="relative py-8 xl:py-4">
      <div className="animate-products-title max-xl:px-10 xl:ml-32 max-w-[908px] flex flex-col xl:flex-row xl:gap-[88px] xl:items-center">
        <SectionTitle title={titles[2]} />
        <div className="my-9 xl:my-0">
          <SectionSubtitle subtitle={subtitles[2]} />
        </div>
      </div>

      <div className="animate-products-list flex items-center xl:mt-14">
        <div className="w-[100rem] flex gap-9 xl:gap-12 justify-end xl:pr-14 overflow-hidden">
          {products.map(product => (
            <div
              key={product.id}
              className={`transition-transform duration-500 ease-in-out ${
                isTransitioning ? "transform translate-x-[120%]" : ""
              }`}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="xl:w-[450px] px-9">
          <button
            onClick={handleNext}
            type="button"
            className="w-14 xl:w-20 h-14 xl:h-20 border border-cappuccino text-cappuccino active:bg-espresso transition-all duration-300 ease-in-out text-2xl xl:text-3xl rounded-2xl xl:rounded-3xl">
            &#8594;
          </button>
        </div>
      </div>
      <PulsingShadow position="bottom-72 right-72 z-10" />
    </section>
  );
};

export default Products;
