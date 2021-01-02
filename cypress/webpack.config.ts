import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const configFile = 'tsconfig.cypress.json';

export default {
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile,
      }),
    ],
  },
  plugins: [
    // NOTE: Cypress enables `transpileOnly` as default. So ForkTsCheckerWebpackPlugin is added.
    // https://github.com/cypress-io/cypress/blob/da7c6a12f33b5abcbf6da9fd3b104c9178ec3598/packages/server/lib/util/ts-node-options.js#L10
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              // NOTE: The same settings as the official's.
              // https://github.com/cypress-io/cypress/blob/aae90bbbe06fc2d4de4b14f5b724b254731f9065/packages/server/lib/util/ts-node-options.js#L9-L15
              transpileOnly: true,
              compilerOptions: {
                module: 'CommonJS',
                esModuleInterop: true,
              },
            },
          },
        ],
      },
    ],
  },
};
