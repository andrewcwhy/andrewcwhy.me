interface TextAreaProps {
    name: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    title?: string
    value: string
}

export default function TextArea({
    name,
    onChange,
    title,
    value,
}: TextAreaProps) {
    return (
        <textarea
            className="w-full bg-gray-800 text-gray-200 border border-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            name={name}
            onChange={onChange}
            rows={5}
            title={title}
            value={value}
        ></textarea>
    )
}
