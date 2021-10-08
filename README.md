This is Next.js typescript project using eslint and prettier for checking types and fixing format.

This is original [manual](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js).

# Add ESLint, and a TypeScript parser for Eslint, and a react ESLint plugin
yarn add --dev eslint @typescript-eslint/parser  @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
# If using npm...
npm install --save-dev eslint @typescript-eslint/parser  @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y

# Add Prettier, and the ESLint plugin and config for prettier
yarn add --dev prettier eslint-plugin-prettier eslint-config-prettier
# If using npm...
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier

# Setup husky.
yarn add --dev husky
npm install --save-dev husky

# Setup lint-staged
npm install --save-dev lint-staged
