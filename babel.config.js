module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-class-properties',
      {loose: true}, // Ensure 'loose' mode is set consistently
    ],
    [
      '@babel/plugin-transform-private-methods',
      {loose: true}, // Ensure 'loose' mode is set consistently
    ],
    [
      '@babel/plugin-transform-private-property-in-object',
      {loose: true}, // Ensure 'loose' mode is set consistently
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          //  tests: ['./tests/'],
          //  "@components": "./src/components",
        },
      },
    ],
  ],
};
