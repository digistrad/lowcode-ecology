import { snippets } from './snippets';
import props from './propsSchema';
import { TabSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyArrayTabs',
  title: 'ArrayTabs',
  group: 'Formily',
  category: 'Array',
  npm: {
    package: '@dslc/formily-materials',
    version: 'latest',
    exportName: 'FormilyArrayTabs',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props,
    supports: {
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
  advanced: {},
  icon: takeIcon(TabSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
