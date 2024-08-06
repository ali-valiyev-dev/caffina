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
      className="flex items-center justify-center w-14 h-14 border border-[#237249] rounded-2xl text-[#237249] text-5xl font-light xl:w-20 xl:h-20 xl:rounded-3xl">
      &#8593;
    </button>
  );
};

export default ScrollToTop;
