import { snippets } from './snippets';
import props from './propsSchema';
import { TreeSelectSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyTreeSelect',
  title: 'TreeSelect',
  group: 'Formily',
  category: 'Input',
  npm: {
    package: '@dslc/formily-materials',
    version: 'latest',
    exportName: 'FormilyTreeSelect',
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
  icon: takeIcon(TreeSelectSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
