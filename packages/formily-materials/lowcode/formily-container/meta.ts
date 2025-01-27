import { snippets } from './snippets';
import props from './propsSchema';
import { ContainerSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyContainer',
  title: 'Container',
  group: 'Formily',
  category: 'Layout',
  npm: {
    package: '@dslc/formily-materials',
    version: 'latest',
    exportName: 'FormilyContainer',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props,
    component: {
      isContainer: true,
    },
    supports: {
      style: true,
    },
  },
  advanced: {},
  icon: takeIcon(ContainerSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
