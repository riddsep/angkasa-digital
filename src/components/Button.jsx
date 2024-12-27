const Button = ({ children, onClick, variant, width }) => {
  const styles = {
    primary: "bg-[#F27121] text-white border-0 hover:bg-[#D85E12]",
    secondary: "bg-white border-0 hover:bg-[#eeeeee]",
  };

  return (
    <button
      className={`px-4 py-2 rounded-2xl transition-all text-xs sm:text-base ${styles[variant]} ${width}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
