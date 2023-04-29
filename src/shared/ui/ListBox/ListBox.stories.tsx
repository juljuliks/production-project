import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  value: '1',
  items: [
    { content: 'Value 1', value: '1' },
    { content: 'Value 2', value: '2' },
  ],
};

export const topLeft = Template.bind({});
topLeft.args = {
  direction: 'top left',
  value: '1 ',
  items: [
    { content: 'Value 1', value: '1' },
    { content: 'Value 2', value: '2' },
  ],
};

export const topRight = Template.bind({});
topRight.args = {
  direction: 'top right',
  value: '1',
  items: [
    { content: 'Value 1', value: '1' },
    { content: 'Value 2', value: '2' },
  ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  direction: 'bottom left',
  value: '1',
  items: [
    { content: 'Value 1', value: '1' },
    { content: 'Value 2', value: '2' },
  ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  direction: 'bottom right',
  value: '1',
  items: [
    { content: 'Value 1', value: '1' },
    { content: 'Value 2', value: '2' },
  ],
};
