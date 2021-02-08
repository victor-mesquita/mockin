import ListItem from '@/common/components/List/ListItem';

export default {
  title: 'App/List/Item',
  component: ListItem,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    title: {
      control: {
        type: 'text'
      },
      defaultValue: 'Projeto 1',
      type: { name: 'string', required: true }
    },
    color: {
      control: 'color'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ListItem },
  template: '<ListItem @onClick="onClick" v-bind="$props"/>'
});

export const Default = Template.bind({});
Default.args = {};
