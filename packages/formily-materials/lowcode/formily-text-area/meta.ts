import { snippets } from './snippets';
import props from './propsSchema';
import { TextAreaSource, takeIcon } from '../icons';

const FormilyTextareaMeta = {
  componentName: 'FormilyTextArea',
  title: 'TextArea',
  group: 'Formily',
  category: 'Input',
  npm: {
    package: '@dslc/formily-materials',
    version: 'latest',
    exportName: 'FormilyTextArea',
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
  icon: takeIcon(TextAreaSource),
};

export default {
  ...FormilyTextareaMeta,
  snippets,
};
