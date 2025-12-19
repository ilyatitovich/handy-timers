import vue from 'eslint-plugin-vue'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import perfectionist from 'eslint-plugin-perfectionist'
import prettier from 'eslint-config-prettier'

export default [
  prettier,

  {
    files: ['**/*.{ts,tsx,vue}'],
    languageOptions: {
      parser: tsParser
    },

    plugins: {
      perfectionist,
      '@typescript-eslint': tsPlugin
    },

    rules: {
      /* ======================
         General code quality
      ====================== */
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'eqeqeq': ['error', 'always'],
      'prefer-const': 'error',
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',

      /* ======================
         Vue
      ====================== */
      'vue/no-mutating-props': 'error',
      'vue/no-unused-components': 'warn',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/block-lang': ['error', { script: { lang: 'ts' } }],
      'vue/define-macros-order': 'error',
      'vue/no-ref-as-operand': 'error',

      /* ======================
         Imports
      ====================== */
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'side-effect',
            'side-effect-style',
            'style',
            ['builtin-type', 'type', 'builtin', 'external', 'unknown'],
            [
              'internal-type',
              'parent-type',
              'sibling-type',
              'index-type',
              'internal',
              'parent',
              'sibling',
              'index'
            ],
            ['object']
          ],
          newlinesBetween: 'always',
          order: 'asc',
          type: 'alphabetical'
        }
      ]
    }
  },

  {
    files: ['**/*.config.{js,ts}', 'vite.config.ts'],
    rules: {
      'no-console': 'off'
    }
  }
]
