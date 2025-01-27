import { snippets } from './snippets';
import props from './propsSchema';
import { SpaceSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilySpace',
  title: 'Space',
  group: 'Formily',
  category: 'Layout',
  npm: {
    package: '@dslc/formily-materials',
    version: 'latest',
    exportName: 'FormilySpace',
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
  icon: takeIcon(SpaceSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
