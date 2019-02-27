module.exports = {
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "jquery": true,
    "node": true
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "extends": [
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "error"
  },
  "settings": {
    "react": {
      "version": "16.0"
    }
  }
}