import React from 'react';

import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

// This implements the default behavior from styled-components v5
function shouldForwardProp(propName, target) {
  if (typeof target === 'string') {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

export const decorators = [
  Story => {
    return (
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <Story />
      </StyleSheetManager>
    );
  },
];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
