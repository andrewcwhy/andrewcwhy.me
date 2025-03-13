interface ButtonProps {
    text: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    className?: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "primary", className }) => {
    const baseStyles = "px-6 py-3 font-semibold rounded-lg transition";
    const variantStyles = variant === "primary"
      ? "bg-blue-500 hover:bg-blue-600 text-white"
      : "bg-gray-300 hover:bg-gray-400 text-gray-900";
  
    return (
      <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>
        {text}
      </button>
    );
  };
  
  export default Button;
  