import React from 'react';

import { Image, TokenProvider, whiteLabelTokens } from 'design-system-react';

export default {
  title: 'Example/Image',
  component: Image,
  argTypes: {
  },
};

const Template = (args) => (
  <TokenProvider value={whiteLabelTokens}>
    <Image src="https://www.ubabelgium.be/l/nl/library/download/urn:uuid:6a22a4a8-b36e-4155-9f23-0bd7eb8dc1f0/vrt.png?scaleType=1&width=596&height=370" {...args} />
  </TokenProvider>
);

export const Primary = Template.bind({});
Primary.args = {
};


