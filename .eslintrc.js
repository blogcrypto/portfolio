module.exports = {
    env: {
        browser: true,
        jest: true
    },
    plugins: ["react", "jsx-a11y", "prettier"],
    parser: "babel-eslint",
    extends: [
        "airbnb",
        "plugin:jsx-a11y/recommended",
        "plugin:redux-saga/recommended",
        "prettier",
        "prettier/react"
    ],
    rules: {
        "max-len": ["warn", { "code": 120 }],
        "prefer-promise-reject-errors": ["off"],
        "react/jsx-closing-bracket-location": [1, "tag-aligned"],
        "react/prop-types": ["off"],
        "no-return-assign": ["off"],
        "no-nested-ternary": 0,
        "import/prefer-default-export": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js", ".jsx"]
            }
        ]
    }
};
