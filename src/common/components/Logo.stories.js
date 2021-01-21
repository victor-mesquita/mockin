import Logo from './Logo';

export default {
  title: 'App/Logo',
  component: Logo
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Logo },
  template: '<Logo/>'
});

export const Default = Template.bind({});
Default.args = {};
