const Button = ({ children, onClick, variant, width, href }) => {
  const styles = {
    primary: "bg-[#F27121] text-white border-0 hover:bg-[#D85E12]",
    secondary: "bg-white border-0 hover:bg-[#eeeeee]",
  };

  if (href) {
    return <a href={href}>{children}</a>;
  }

  return (
    <button
      className={`rounded-2xl px-4 py-2 text-xs transition-all sm:text-base ${styles[variant]} ${width}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
