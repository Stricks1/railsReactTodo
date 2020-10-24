module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "arrow-parens": "off",
    "object-curly-newline": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/style-prop-object": "off",
    "react/no-multi-comp": "off",
    "react/prefer-stateless-function": "off",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    "no-restricted-syntax": "off",
    "no-plusplus": "off",
    "semi": ["error", "never"]
  },
  "env": {
    "browser": true,
    "jest": true
  }
}
