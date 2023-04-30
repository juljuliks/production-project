import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import ArticlesInfiniteList from './ArticlesInfiniteList';

export default {
  title: 'pages/ArticlesInfiniteList',
  component: ArticlesInfiniteList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesInfiniteList>;

const Template: ComponentStory<typeof ArticlesInfiniteList> = (args) => <ArticlesInfiniteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};

Normal.decorators = [StoreDecorator({})];
