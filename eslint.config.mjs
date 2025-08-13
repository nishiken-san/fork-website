import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;


// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals"),
//   {
//     rules: {
//       // 全てのエラーを無効化
//       "@typescript-eslint/no-unused-vars": "off",
//       "@typescript-eslint/no-explicit-any": "off",
//       "react/no-unescaped-entities": "off",
//       "@next/next/no-img-element": "off",
//       "@next/next/no-html-link-for-pages": "off",
//       "jsx-a11y/alt-text": "off",
//       // 追加で無効化
//       "@typescript-eslint/no-inferrable-types": "off",
//       "@typescript-eslint/no-empty-function": "off",
//       "react-hooks/exhaustive-deps": "off",
//       "prefer-const": "off",
//       "no-var": "off",
//       "no-console": "off",
//     },
//   },
// ];

// export default eslintConfig;