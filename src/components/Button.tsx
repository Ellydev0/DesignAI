const Button = ({ className, text }: { className?: string; text: string }) => {
  return (
    <button
      className={`${className} bg-primary px-4 py-2 rounded-xl hover:bg-accent active:bg-text-1 transition-colors duration-330 text-text`}
    >
      {text}
    </button>
  );
};

export default Button;
