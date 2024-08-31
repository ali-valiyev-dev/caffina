import { Icon } from "@iconify/react";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      type="button"
      aria-label="Scroll to top"
      className="flex items-center justify-center w-14 h-14 border border-cappuccino-light rounded-2xl text-cappuccino-light text-5xl font-light xl:w-20 xl:h-20 xl:rounded-3xl hover:bg-espresso transition-all duration-300">
      <Icon
        icon="mdi:arrow-up"
        width={32}
        height={32}
      />
    </button>
  );
};

export default ScrollToTop;
