import React from 'react';

import { Text, whiteLabelTokens, TokenProvider } from 'design-system-react';

export default {
  title: 'Example/Text',
  component: Text,
  argTypes: {
  },
};

const Template = (args) => (
  <TokenProvider value={whiteLabelTokens}>
    <Text {...args}>Dit is een tekst</Text>
  </TokenProvider>
);

export const Primary = Template.bind({});
Primary.args = {
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};


