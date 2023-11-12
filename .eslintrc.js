/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  plugins: ['simple-import-sort'],
  extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react', '^@?\\w'], // External packages.
              ['^@(/.*|$)'], // Internal packages.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Parent imports. Put `..` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // // Other relative imports. Put same-folder imports and `.` last.
              ['^\\u0000'], // Side effect imports.
              ['^.+\\.s?css$', '^.+\\.(jpe?g|png|gif|svg)$'], // Style and image imports.
            ],
          },
        ],
      },
    },
  ],
};
