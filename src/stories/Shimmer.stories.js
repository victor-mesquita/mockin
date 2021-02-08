import Shimmer from '@/common/components/Shimmer';

export default {
  title: 'Common/Shimmer',
  component: Shimmer
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Shimmer },
  template: '<Shimmer v-bind="$props"/>'
});

export const Default = Template.bind({});
Default.args = {
  width: 10,
  height: 10
};

export const Circle = Template.bind({});
Circle.args = {
  type: 'circle',
  width: 10,
  height: 10
};
