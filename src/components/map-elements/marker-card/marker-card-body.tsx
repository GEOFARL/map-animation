import { cn } from "@/lib/utils/cn";

type Props = {
  text: string;
  highlightedPhrases: { phrase: string; className: string }[];
  className?: string;
};

const MarkerCardBody: React.FC<Props> = ({
  text,
  highlightedPhrases,
  className,
}) => {
  const parts = getHighlightedParts(text, highlightedPhrases);
  return (
    <p
      className={cn(
        "body-t1 font-[500] leading-[130%] text-text-primary",
        className
      )}
    >
      {parts.map((part, idx) =>
        part.highlightClass ? (
          <span key={idx} className={part.highlightClass}>
            {part.text}
          </span>
        ) : (
          <span key={idx}>{part.text}</span>
        )
      )}
    </p>
  );
};

type HighlightPart = { text: string; highlightClass?: string };
const getHighlightedParts = (
  text: string,
  highlightedWords: { phrase: string; className: string }[]
): HighlightPart[] => {
  const lowerText = text.toLowerCase();

  const process = (index: number): HighlightPart[] => {
    if (index >= text.length) return [];

    const match = highlightedWords.find(({ phrase: word }) =>
      lowerText.startsWith(word.toLowerCase(), index)
    );

    if (match) {
      const matchedText = text.slice(index, index + match.phrase.length);
      return [
        { text: matchedText, highlightClass: match.className },
        ...process(index + match.phrase.length),
      ];
    }

    const nextHighlightIndex =
      highlightedWords
        .map(({ phrase: word }) => lowerText.indexOf(word.toLowerCase(), index))
        .filter((i) => i !== -1)
        .sort((a, b) => a - b)[0] ?? text.length;

    const plainText = text.slice(index, nextHighlightIndex);
    return [{ text: plainText }, ...process(nextHighlightIndex)];
  };

  return process(0);
};

export default MarkerCardBody;
