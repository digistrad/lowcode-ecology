import { snippets } from './snippets';
import props from './propsSchema';
import { TimePickerSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyTimePicker',
  title: 'TimePicker',
  group: 'Formily',
  category: 'Input',
  npm: {
    package: '@dslc/formily-materials',
    version: 'latest',
    exportName: 'FormilyTimePicker',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props,
    supports: {
      style: true,
    },
  },
  advanced: {},
  icon: takeIcon(TimePickerSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
