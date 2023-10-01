const MobileMenuButton = ({ mobileToggle, setMobileToggle }) => {
  return (
    <div className="md:hidden flex items-center">
      <button
        className="outline-none mobile-menu-button"
        onClick={() => setMobileToggle(!mobileToggle)}
      >
        <svg
          className={`w-6 h-6 text-gray-500 hover:text-green-500 ${
            mobileToggle ? "hidden" : ""
          }`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg
          className={`w-6 h-6 text-gray-500 hover:text-green-500 ${
            mobileToggle ? "" : "hidden"
          }`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );
};

export default MobileMenuButton;
