import List from '@/common/components/List/List';

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
Default.args = {
  projects: [
    { id: '1', name: 'Project 1', color: '#EF4444' },
    { id: '2', name: 'Project 2', color: '#A78BFA' },
    { id: '3', name: 'Project 3', color: '#F59E0B' }
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  projects: [],
  loading: true
};
