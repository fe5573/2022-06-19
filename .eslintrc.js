const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendConfigs, overrides } = createConfig({
  type: 'frontend',
  project: './tsconfig.json',
})

module.exports = {
  extends: [
    ...extendConfigs,
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [...overrides],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
}
