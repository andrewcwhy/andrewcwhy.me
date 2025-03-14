export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-gray-200 text-center p-4 mt-auto border-t border-gray-700">
            <p>
                &copy; {new Date().getFullYear()} Andrew Christian Young. All
                rights reserved.
            </p>
        </footer>
    )
}
