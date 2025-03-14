interface InputProps {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    title?: string;
    type: string;
    value: string;
}

export default function Input({ name, onChange, title, type, value }: InputProps) {
    return (
        <input
            className="w-full bg-gray-800 text-gray-200 border border-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            name={name}
            onChange={onChange}
            title={title}
            type={type}
            value={value}
        />
    );
}
