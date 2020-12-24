module.exports = {
    env: {
        browser: true,
        jest: true
    },
    plugins: ['react', 'jsx-a11y', 'prettier'],
    parser: 'babel-eslint',
    extends: [
        'react-app',
        'react-app/jest',
        'plugin:jsx-a11y/recommended',
        // 'plugin:redux-saga/recommended',
        'prettier',
        'prettier/react'
    ],
    rules: {
        'max-len': [0, {'code': 120}],
        "jsx-a11y/no-autofocus": [2, {"ignoreNonDOM": true}]
    }
};
