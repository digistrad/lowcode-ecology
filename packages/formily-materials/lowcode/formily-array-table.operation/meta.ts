const FormilyComponentMeta = {
  componentName: 'FormilyArrayTable.Operation',
  title: 'ArrayTable.Operation',
  group: 'Formily',
  category: 'Array',
  npm: {
    package: '@dslc/formily-materials',
    version: 'latest',
    exportName: 'FormilyArrayTable',
    main: '',
    destructuring: true,
    subName: 'Operation',
  },
  configure: {
    supports: {
      style: true,
    },
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['FormilyArrayTable'],
      },
    },
  },
  advanced: {},
  icon: 'https://img.alicdn.com/imgextra/i3/O1CN01G7Lc8e1pZL7p4cdKc_!!6000000005374-2-tps-112-112.png',
};

export default {
  ...FormilyComponentMeta,
};
