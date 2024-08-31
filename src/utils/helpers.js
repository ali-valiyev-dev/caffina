const handleSmoothScroll = (event, targetId, setIsOpen) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  if (setIsOpen) {
    setIsOpen(false);
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export { handleSmoothScroll, scrollToTop };
