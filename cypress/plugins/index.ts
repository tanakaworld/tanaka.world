import webpackPreprocessor from '@cypress/webpack-preprocessor';
import webpackOptions from '../webpack.config';

const pluginsFunction: Cypress.PluginConfig = (on) => {
  on(
    'file:preprocessor',
    webpackPreprocessor({
      webpackOptions,
    })
  );
};

export default pluginsFunction;
