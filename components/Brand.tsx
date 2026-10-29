const TAIL = ["m", "a", "n", "e", "k", " "];

// "4manek AI" ↔ "4AI": the tail letters flip out one by one while the gap closes, then return.
export function Brand({ className = "", animated = true }: { className?: string; animated?: boolean }) {
  if (!animated) {
    return (
      <span className={className}>
        4manek<span className="text-accent"> AI</span>
      </span>
    );
  }

  return (
    <span className={className}>
      <span className="sr-only">4manek AI</span>
      <span aria-hidden className="brand-morph">
        <span>4</span>
        <span className="brand-tail">
          <span className="brand-tail-inner">
            {TAIL.map((ch, i) => (
              <span key={i} className="brand-letter" style={{ "--i": i } as React.CSSProperties}>
                {ch}
              </span>
            ))}
          </span>
        </span>
        <span className="brand-ai text-accent">AI</span>
      </span>
    </span>
  );
}
