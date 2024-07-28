import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return (
    <h2 className="leading-[52px] md:leading-[87px] font-sans text-white text-5xl md:text-[80px] font-extrabold -tracking-[0.03em]">
      {`${title.split(" ").slice(0, -1).join(" ")} `}

      <span className="text-transparent bg-clip-text bg-logo-gradient">
        {`${title.split(" ").slice(-1)}`}
      </span>
    </h2>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;

// fix: Improve SectionTitle component code

// - Ensured consistent formatting and removed redundant imports.
// - Improved readability and maintainability of the component.
// - Kept existing functionality intact.

// fix: Update Navbar component for better responsiveness and style improvements

// - Adjusted breakpoints for responsive design (max-md to max-lg and max-lg to lg).
// - Enhanced hover effects for desktop view navigation links.
// - Added transition effects for hover states on navigation links.
// - Updated mobile view styles to include active state background color and border when menu is open.
// - Improved layout consistency with additional padding and margin adjustments.

// fix: Enhance Hero component with responsive design improvements

// - Integrated breakpoints from `@react-hooks-library/core` for responsive behavior.
// - Updated layout styles for better alignment and spacing on different screen sizes.
// - Adjusted class names and added new styles for improved visual consistency.
// - Incorporated conditional rendering of images based on screen size.
// - Removed redundant and commented-out code for clarity.

// fix: Improve CustomButton component for better flexibility and styling

// - Updated `bgColor` and `borderColor` props to allow dynamic class generation based on provided values.
// - Improved class handling for background and border colors with fallback defaults.
// - Ensured consistent style application across different screen sizes.
// - Retained existing functionality while enhancing code readability and maintainability.

// fix: Update App component styles for improved layout

// - Changed `h-screen` to `min-h-screen` to ensure the header covers at least the full height of the viewport.
// - Added `overflow-hidden` to prevent unwanted scrolling and improve visual consistency.
// - Maintained existing structure and functionality of the App component.
