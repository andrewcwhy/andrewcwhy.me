import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { ReactNode } from "react";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";

interface CopyButtonProps {
  textToCopy: string;
  children?: ReactNode;
  showIcon?: boolean;
  className?: string;
}

export default function CopyButton({
  textToCopy,
  children,
  showIcon = true,
  className = "",
}: CopyButtonProps) {
  const [isCopied, handleCopy] = useCopyToClipboard();

  return (
    <button
      onClick={() => handleCopy(textToCopy)}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-md border bg-gray-800 text-white hover:bg-gray-700 transition ${className}`}
    >
      {showIcon &&
        (isCopied ? (
          <FaClipboardCheck className="text-green-400" />
        ) : (
          <FaClipboard />
        ))}
      {children && <span>{isCopied ? "Copied!" : children}</span>}
      {!children && !showIcon && (isCopied ? "Copied!" : "Copy")}
    </button>
  );
}
