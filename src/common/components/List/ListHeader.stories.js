import ListHeader from './ListHeader';

export default {
  title: 'App/List/Header',
  component: ListHeader,
  argTypes: {
    title: { defaultValue: 'Escolha um projeto' }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ListHeader },
  template: '<ListHeader v-bind="$props"/>'
});

export const Default = Template.bind({});
Default.args = {};
