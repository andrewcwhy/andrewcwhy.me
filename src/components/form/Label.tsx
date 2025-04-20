interface LabelProps {
	children: React.ReactNode;
	htmlFor: string;
}

export default function Label({ children, htmlFor }: LabelProps) {
	return (
		<label className="block mb-1" htmlFor={htmlFor}>
			{children}
		</label>
	);
}
