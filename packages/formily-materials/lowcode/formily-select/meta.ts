import { snippets } from './snippets';
import props from './propsSchema';
import { SelectSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilySelect',
  title: 'Select',
  group: 'Formily',
  category: 'Input',
  npm: {
    package: '@dslc/formily-materials',
    version: 'latest',
    exportName: 'FormilySelect',
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
  icon: takeIcon(SelectSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
