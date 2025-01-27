import { snippets } from './snippets';
import props from './propsSchema';
import { InputSource, takeIcon } from '../icons';

const FormilyInputMeta = {
  componentName: 'FormilyInput',
  title: 'Input',
  group: 'Formily',
  category: 'Input',
  npm: {
    package: '@dslc/formily-materials',
    version: 'latest',
    exportName: 'FormilyInput',
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
  icon: takeIcon(InputSource),
};

export default {
  ...FormilyInputMeta,
  snippets,
};
