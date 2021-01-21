/* eslint-disable import/no-extraneous-dependencies */
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@storybook/addon-console';
import '../../src/assets/styles/main.scss';

// eslint-disable-next-line import/prefer-default-export
export const parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
};
