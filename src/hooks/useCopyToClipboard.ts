import { useCallback, useState } from "react";

export function useCopyToClipboard(): [
  copy: (text: string) => void,
  isCopied: boolean,
] {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      // Reset copied state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    });
  }, []);

  return [copy, isCopied] as const;
}
