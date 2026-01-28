// languageConfig.ts
export const languageConfig = {
  html: { label: "HTML", color: "#E34F26" },
  css: { label: "CSS", color: "#1572B6" },
  js: { label: "JavaScript", color: "#F7DF1E" },
  react: { label: "React", color: "#61DAFB" },
  python: { label: "Python", color: "#3776AB" },
} as const;

export type LanguageKey = keyof typeof languageConfig;
