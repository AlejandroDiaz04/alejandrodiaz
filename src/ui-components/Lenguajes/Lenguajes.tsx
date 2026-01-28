// LanguageChip.tsx
import React from "react";
import { languageConfig, LanguageKey } from "./Lenguajes";

interface Props {
  language: LanguageKey;
}

const LanguageChip: React.FC<Props> = ({ language }) => {
  const { label, color } = languageConfig[language];

  return (
    <span
      style={{
        backgroundColor: color,
        color: "#000",
        padding: "4px 10px",
        borderRadius: "999px",
        fontSize: "0.8rem",
        fontWeight: 500,
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {label}
    </span>
  );
};

export default LanguageChip;
