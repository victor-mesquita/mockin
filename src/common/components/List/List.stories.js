import List from './List';

export default {
  title: 'App/List',
  component: List,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List },
  template: '<List v-bind="$props"/>'
});

export const Default = Template.bind({});
Default.args = {};
