import { snippets } from './snippets';
import props from './propsSchema';
import { UploadSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyUpload',
  title: 'Upload',
  group: 'Formily',
  category: 'Input',
  npm: {
    package: '@dslc/formily-materials',
    version: 'latest',
    exportName: 'FormilyUpload',
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
  icon: takeIcon(UploadSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
