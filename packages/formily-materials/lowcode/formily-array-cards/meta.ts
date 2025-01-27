import { snippets } from './snippets';
import props from './propsSchema';
import { ArrayCardsSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyArrayCards',
  title: 'ArrayCards',
  group: 'Formily',
  category: 'Array',
  npm: {
    package: '@dslc/formily-materials',
    version: 'latest',
    exportName: 'FormilyArrayCards',
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
  icon: takeIcon(ArrayCardsSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
