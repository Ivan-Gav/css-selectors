module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    ignorePatterns: ['webpack.config.js'],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: './tsconfig.json'
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array',
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              accessors: 'explicit',
              constructors: 'off',
              methods: 'explicit',
              properties: 'explicit',
              parameterProperties: 'explicit',
            },
          },
        ],
        'max-lines-per-function': ['error', 50],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        'no-console': 'off',
    }
}
