import Header from '@/common/components/Header';

export default {
  title: 'App/Header',
  component: Header
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Header },
  template: '<Header/>'
});

export const Default = Template.bind({});
Default.args = {};
