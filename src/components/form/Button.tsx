interface ButtonProps {
    text: string
    onClick?: () => void
    variant?: 'primary' | 'secondary'
    className?: string
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    variant = 'primary',
    className,
}) => {
    const baseStyles = 'px-6 py-3 font-semibold rounded-lg transition border'
    const variantStyles =
        variant === 'primary'
            ? 'bg-gray-700 border-gray-600 hover:bg-gray-600 text-white'
            : 'bg-gray-500 border-gray-400 hover:bg-gray-400 text-white'

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles} ${className}`}
        >
            {text}
        </button>
    )
}

export default Button
