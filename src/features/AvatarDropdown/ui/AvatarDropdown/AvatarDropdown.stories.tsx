import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { UserRole } from '@/entities/User';

export default {
  title: 'shared/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '1',
      username: 'admin',
      roles: [UserRole.USER],
    },
  },
})];
