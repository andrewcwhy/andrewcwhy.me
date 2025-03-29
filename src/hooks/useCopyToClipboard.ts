import { useCallback, useState } from "react";

export function useCopyToClipboard(
  initialValue: boolean = false,
): [isCopied: boolean, handleCopy: (text: string) => void] {
  const [isCopied, setIsCopied] = useState(initialValue);

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      // Reset copied state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    });
  }, []);

  return [isCopied, handleCopy];
}
