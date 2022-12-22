import { snippets } from './snippets';
import props from './propsSchema';
import { NumberPickerSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyNumberPicker',
  title: 'NumberPicker',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@dslc/formily-materials',
    version: 'latest',
    exportName: 'FormilyNumberPicker',
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
  icon: takeIcon(NumberPickerSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
