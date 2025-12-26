import type React from "react";
import "./TextContent.scss";
import type { CardVersionType } from "../../CardItem";
import { useLayoutEffect, useRef, useState } from "react";
import AngleDown from "@/assets/icons/angle-down.svg";
import AngleUp from "@/assets/icons/angle-up.svg";

type CardTextContentProps = {
  cardVersion: CardVersionType;
  text: string;
};

export const TextContent: React.FC<CardTextContentProps> = ({
  cardVersion,
  text,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const paragraphElement = textRef.current;

    if (!paragraphElement) return;

    const isMultiline =
      paragraphElement.scrollHeight > paragraphElement.clientHeight;

    paragraphElement.dataset.multiline = String(isMultiline);
  }, [text]);

  return (
    <div className={`card_${cardVersion}_text-container`}>
      <p
        ref={textRef}
        data-expanded={isExpanded}
        className={`card_${cardVersion}_text-content`}
      >
        {text}
      </p>
      {!isExpanded && (
        <img
          className="expand-icon"
          src={AngleDown}
          onClick={() => setIsExpanded(true)}
        />
      )}
      {isExpanded && (
        <img
          className="expand-icon"
          src={AngleUp}
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
};
