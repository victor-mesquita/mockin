import BaseText from '@/common/components/BaseText';

export default {
  title: 'App/BaseText',
  component: BaseText,
  argTypes: {
    text: {
      control: {
        type: 'text'
      },
      defaultValue: 'Hello Mockin',
      type: { name: 'string', required: true }
    },
    bulletColor: {
      control: {
        type: 'color'
      }
    },
    size: { control: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] } },
    color: { control: { type: 'color' } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseText },
  template: '<BaseText v-bind="$props"/>'
});

export const Default = Template.bind({});
Default.args = {};

export const WithBullet = Template.bind({});
WithBullet.args = {
  ...Default.args,
  showBullet: true
};
