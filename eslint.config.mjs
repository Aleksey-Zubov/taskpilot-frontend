import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import a11y from 'eslint-plugin-jsx-a11y';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended, // Рекомендованные правила ESLint
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], // Целевые файлы
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Указываем, что доступно в глобальной области видимости (для браузера)
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        HTMLElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLButtonElement: 'readonly',
        // Указываем, что доступно в глобальной области видимости (для node)
        __dirname: 'readonly',
      },
    },
    plugins: {
      react,
      reactHooks,
      a11y,
      '@typescript-eslint': ts,
      prettier,
    },
    rules: {
      // Общие правила
      'prettier/prettier': 'error', // Ошибки Prettier показываются как ошибки ESLint
      'react/react-in-jsx-scope': 'off', // Не нужно импортировать React в новом JSX
      'react/prop-types': 'off', // Не используем PropTypes в TypeScript
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Отключаем обязательность типов у экспорта
      "no-unused-vars": "off",
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "vars": "all", // Проверяет все переменные
          "args": "after-used", // Проверяет аргументы функций только после использования
          "ignoreRestSiblings": true // Игнорирует остаточные параметры (rest properties)
        }
    ]
    },
    settings: {
      react: {
        version: 'detect', // Автоматическое определение версии React
      },
    },
  },
];
