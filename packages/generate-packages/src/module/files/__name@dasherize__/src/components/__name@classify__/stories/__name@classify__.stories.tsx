
import <%= classify(name) %> from '../<%= classify(name) %>';
import '../../../../styles.css'

export default {
  title: 'Example/<%= classify(name) %>',
  component: <%= classify(name) %>,
  parameters: {
   
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

