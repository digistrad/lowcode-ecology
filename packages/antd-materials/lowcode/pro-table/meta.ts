import { snippets } from './snippets'
import { uuid } from '../utils'

const ProTableMeta = {
  componentName: 'ProTable',
  title: 'Advanced Form',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: 'Advanced',
  category: 'Form',
  npm: {
    package: '@dslc/antd-materials',
    version: 'latest',
    exportName: 'ProTable',
    main: '',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        name: 'ref',
        title: {
          label: 'ref',
          tip: "ref | Get the component instance through this.$('xxx')"
        },
        defaultValue: () => {
          return `pro_table_${uuid()}`
        },
        setter: 'StringSetter'
      },
      {
        title: 'Data source',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'dataSource',
            title: { label: '表格数据', tip: 'dataSource | 表格数据' },
            propType: 'object',
            setter: 'JsonSetter'
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'request',
                'zh-CN': '请求函数'
              },
              tip: 'request | method to get dataSource'
            },
            name: 'request',
            description: 'request function',
            setter: {
              componentName: 'FunctionSetter',
              isRequired: false
            }
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'manualRequest',
                'zh-CN': '手动请求'
              },
              tip: 'manualRequest'
            },
            name: 'manualRequest',
            description: 'Whether to trigger the request manually',
            setter: {
              componentName: 'BoolSetter',
              isRequired: false,
              initialValue: false
            }
          },
          {
            name: 'loading',
            title: { label: 'Loading', tip: 'loading' },
            propType: 'bool',
            setter: 'BoolSetter'
          },
          {
            name: 'cardBordered',
            title: {
              label: 'border',
              tip: 'cardBordered | Borders for Table and Search surrounding Card components'
            },
            propType: 'bool',
            setter: 'BoolSetter'
          },
          {
            name: 'rowKey',
            title: {
              label: 'row key',
              tip: 'rowKey | The value of the table row key, which can be a string or a function'
            },
            propType: { type: 'oneOfType', value: ['string', 'func'] },
            setter: [
              'StringSetter',
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'getRowKey(record,index,${extParams}){\n//Get table row key through function\nreturn record.id;\n}'
                }
              },
              'VariableSetter'
            ],
            defaultValue: 'id'
          }
        ]
      },
      {
        name: 'columns',
        title: {
          label: 'columns',
          tip: 'The configuration description of the table columns, see the table below for specific items'
        },
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      title: { label: 'title', tip: 'title' },
                      propType: {
                        type: 'oneOfType',
                        value: ['string', 'func']
                      },
                      setter: [
                        'StringSetter',
                        {
                          componentName: 'SlotSetter',
                          title: 'column header slot',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['options'],
                            value: []
                          }
                        }
                      ],
                      isRequired: true
                    },
                    {
                      name: 'dataIndex',
                      title: { label: 'dataIndex', tip: 'dataIndex' },
                      propType: 'string',
                      setter: 'StringSetter',
                      isRequired: true
                    },
                    {
                      name: 'valueType',
                      title: { label: 'valueType', tip: 'valueType' },
                      propType: 'string',
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          options: [
                            {
                              title: 'option',
                              value: 'option'
                            },
                            {
                              title: 'text',
                              value: 'text'
                            },
                            {
                              title: 'tag',
                              value: 'tag'
                            },
                            {
                              title: 'digit',
                              value: 'digit'
                            },
                            {
                              title: 'password',
                              value: 'password'
                            },
                            {
                              title: 'money',
                              value: 'money'
                            },
                            {
                              title: 'date',
                              value: 'date'
                            },
                            {
                              title: 'dateTime',
                              value: 'dateTime'
                            },
                            {
                              title: 'dateRange',
                              value: 'dateRange'
                            },
                            {
                              title: 'dateTimeRange',
                              value: 'dateTimeRange'
                            },
                            {
                              title: 'link',
                              value: 'link'
                            },
                            // {
                            //   title: '标签',
                            //   value: 'tag',
                            // },
                            {
                              title: 'avatar',
                              value: 'avatar'
                            },
                            {
                              title: 'switch',
                              value: 'switch'
                            },
                            {
                              title: 'percent',
                              value: 'percent'
                            },
                            {
                              title: 'progress',
                              value: 'progress'
                            },
                            {
                              title: 'select',
                              value: 'select'
                            },
                            {
                              title: 'radio',
                              value: 'radio'
                            },
                            {
                              title: 'checkbox',
                              value: 'checkbox'
                            },
                            {
                              title: 'image',
                              value: 'image'
                            },
                            {
                              title: 'jsonCode',
                              value: 'jsonCode'
                            },
                            {
                              title: 'code',
                              value: 'code'
                            },
                            {
                              title: 'color',
                              value: 'color'
                            }
                          ]
                        }
                      }
                    },
                    {
                      name: 'renderTag',
                      title: {
                        label: 'renderTag',
                        tip: 'renderTag | Whether to use Tag rendering'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'valueEnum',
                      title: {
                        label: 'valueEnum',
                        tip: 'valueEnum | The enumeration of values ​​will be automatically converted and the value will be used as a key to retrieve the content to be displayed'
                      },
                      propType: 'object',
                      setter: 'JsonSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'request',
                          'zh-CN': '远程获取枚举'
                        },
                        tip: 'request'
                      },
                      name: 'request',
                      description: 'request',
                      setter: {
                        componentName: 'FunctionSetter',
                        isRequired: false
                      }
                    },
                    {
                      name: 'width',
                      title: { label: 'width', tip: 'width' },
                      propType: {
                        type: 'oneOfType',
                        value: ['number', 'string']
                      },
                      setter: ['NumberSetter', 'StringSetter', 'VariableSetter']
                    },
                    {
                      name: 'tooltip',
                      title: {
                        label: 'tooltip',
                        tip: 'tooltip'
                      },
                      propType: 'string',
                      setter: 'StringSetter'
                    },
                    {
                      name: 'ellipsis',
                      title: {
                        label: 'ellipsis',
                        tip: 'ellipsis | Whether to automatically shorten'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'copyable',
                      title: {
                        label: 'copyable',
                        tip: 'copyable'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    // {
                    //   name: 'valueEnum',
                    //   title: {
                    //     label: '枚举定义',
                    //     tip: 'valueEnum | 值的枚举，会自动转化把值当成 key 来取出要显示的内容'
                    //   },
                    //   propType: 'object',
                    //   setter: 'JsonSetter'
                    // },
                    // {
                    //   title: {
                    //     label: {
                    //       type: 'i18n',
                    //       'en-US': 'request',
                    //       'zh-CN': '远程获取枚举'
                    //     },
                    //     tip: 'request | 远程获取枚举'
                    //   },
                    //   name: 'request',
                    //   description: '远程获取枚举',
                    //   setter: {
                    //     componentName: 'FunctionSetter',
                    //     isRequired: false
                    //   }
                    // },
                    {
                      name: 'align',
                      title: { label: 'align', tip: 'align' },
                      propType: {
                        type: 'oneOf',
                        value: ['left', 'right', 'center']
                      },
                      defaultValue: 'left',
                      setter: [
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            options: [
                              {
                                title: 'left',
                                value: 'left'
                              },
                              {
                                title: 'right',
                                value: 'right'
                              },
                              {
                                title: 'center',
                                value: 'center'
                              }
                            ]
                          }
                        },
                        'VariableSetter'
                      ]
                    },
                    {
                      name: 'fixed',
                      title: { label: 'fixed', tip: 'fixed' },
                      description:
                        '(Invalid under IE) Whether the column is fixed, optional true (equivalent to left) left right',
                      defaultValue: '',
                      propType: {
                        type: 'oneOf',
                        value: ['', 'left', 'right']
                      },
                      setter: [
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            options: [
                              {
                                title: 'not fixed',
                                value: ''
                              },
                              {
                                title: 'fixed on the left',
                                value: 'left'
                              },
                              {
                                title: 'fixed to the right',
                                value: 'right'
                              }
                            ]
                          }
                        },
                        'VariableSetter'
                      ]
                    },
                    {
                      name: 'className',
                      title: {
                        label: 'className',
                        tip: 'className'
                      },
                      propType: 'string',
                      setter: 'StringSetter'
                    },
                    {
                      name: 'sorter',
                      title: {
                        label: 'sorter',
                        tip: 'sorter | Sorting function, local sorting uses a function, which needs to be set to true for server-side sorting'
                      },
                      propType: { type: 'oneOfType', value: ['bool', 'func'] },
                      setter: ['BoolSetter', 'FunctionSetter', 'VariableSetter']
                    },
                    {
                      name: 'key',
                      title: {
                        label: 'React key',
                        tip: 'key | The key required by React'
                      },
                      propType: 'string',
                      setter: 'StringSetter'
                    },
                    {
                      name: 'order',
                      title: {
                        label: 'order',
                        tip: 'order | Query the weights in the form, and the weights are sorted first'
                      },
                      propType: 'number',
                      setter: 'NumberSetter'
                    },
                    {
                      name: 'hideInSearch',
                      title: {
                        label: 'hideInSearch',
                        tip: 'hideInSearch | Do not show this item in the inquiry form'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'hideInTable',
                      title: {
                        label: 'hideInTable',
                        tip: 'hideInTable | Dont show this column in Table'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'filters',
                      title: {
                        label: 'filters',
                        tip: 'filters | Filter menu items in header'
                      },
                      propType: 'object',
                      setter: 'JsonSetter'
                    },
                    {
                      name: 'fieldProps.showSearch',
                      title: {
                        label: 'fieldProps.showSearch',
                        tip: 'fieldProps.showSearch | The drop-down box supports search'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'render',
                      title: {
                        label: 'render',
                        tip: 'render | The material expression in the slot can get the current row data through this.record, and this.index gets the index'
                      },
                      propType: 'func',
                      setter: [
                        {
                          componentName: 'SlotSetter',
                          title: 'cell slot',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['text', 'record', 'index'],
                            value: []
                          }
                        },
                        'VariableSetter'
                      ]
                    }
                  ]
                }
              },
              initialValue: { title: '标题' }
            }
          }
        }
      },
      {
        title: 'Exterior',
        display: 'block',
        type: 'group',
        items: [
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'headerTitle',
                'zh-CN': '表格名称'
              }
            },
            name: 'headerTitle',
            setter: {
              componentName: 'StringSetter',
              isRequired: false
            }
          },
          {
            name: 'showHeader',
            title: { label: 'showHeader', tip: 'showHeader' },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: true
          },
          {
            name: 'bordered',
            title: {
              label: 'bordered',
              tip: 'bordered | Whether to show outer and column borders'
            },
            propType: 'bool',
            setter: 'BoolSetter'
          },
          {
            name: 'size',
            title: { label: 'size', tip: 'size' },
            propType: {
              type: 'oneOf',
              value: ['default', 'middle', 'small']
            },
            setter: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  options: [
                    {
                      title: 'default',
                      value: 'default'
                    },
                    {
                      title: 'middle',
                      value: 'middle'
                    },
                    {
                      title: 'small',
                      value: 'small'
                    }
                  ]
                }
              },
              'VariableSetter'
            ],
            defaultValue: 'default'
          },
          {
            name: 'tableLayout',
            title: { label: 'tableLayout', tip: 'tableLayout' },
            defaultValue: '',
            propType: {
              type: 'oneOf',
              value: ['', 'auto', 'fixed']
            },
            setter: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  options: [
                    {
                      title: 'default',
                      value: ''
                    },
                    {
                      title: 'auto',
                      value: 'auto'
                    },
                    {
                      title: 'fixed',
                      value: 'fixed'
                    }
                  ]
                }
              },
              'VariableSetter'
            ]
          }
        ]
      },
      {
        title: 'Pagination',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'pagination',
            title: { label: 'pagination', tip: 'pagination' },
            propType: 'bool',
            setter: 'BoolSetter',
            extraProps: {
              setValue: (target, value) => {
                if (value) {
                  target.parent.setPropValue('pagination', {
                    pageSize: 10
                  })
                }
              }
            }
          },
          {
            name: 'pagination.pageSize',
            title: { label: 'pageSize', tip: 'pagination.pageSize' },
            propType: 'number',
            setter: 'NumberSetter',
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("pagination")'
            }
          },
          // {
          //   name: 'pagination.total',
          //   title: { label: '数据总数', tip: 'pagination.total | 数据总数' },
          //   propType: 'number',
          //   setter: 'NumberSetter',
          //   condition: {
          //     type: 'JSFunction',
          //     value: 'target => !!target.getProps().getPropValue("pagination")'
          //   }
          // },
          {
            name: 'pagination.defaultCurrent',
            title: {
              label: 'defaultCurrentPage',
              tip: 'pagination.defaultCurrent'
            },
            propType: 'number',
            setter: 'NumberSetter',
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("pagination")'
            }
          },
          // {
          //   name: 'pagination.current',
          //   title: { label: '当前页数', tip: 'pagination.current | 当前页数' },
          //   propType: 'number',
          //   setter: 'NumberSetter',
          //   condition: {
          //     type: 'JSFunction',
          //     value: 'target => !!target.getProps().getPropValue("pagination")'
          //   }
          // },
          // {
          //   name: 'pagination.showTotal',
          //   title: {
          //     label: '显示总数',
          //     tip: 'pagination.showTotal | 用于显示数据总量和当前数据顺序'
          //   },
          //   propType: 'func',
          //   setter: [
          //     {
          //       componentName: 'FunctionSetter',
          //       props: {
          //         template:
          //           'showTotal(total,range,${extParams}){\n// 用于格式化显示表格数据总量\nreturn `共 ${total} 条`;\n}'
          //       }
          //     },
          //     'VariableSetter'
          //   ],
          //   condition: {
          //     type: 'JSFunction',
          //     value: 'target => !!target.getProps().getPropValue("pagination")'
          //   }
          // },
          {
            name: 'pagination.showSizeChanger',
            title: {
              label: 'showSizeChanger',
              tip: 'pagination.showSizeChanger | Whether to show the pageSize switcher'
            },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: false,
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("pagination")'
            }
          },
          {
            name: 'pagination.showQuickJumper',
            title: {
              label: 'showQuickJumper',
              tip: 'pagination.showQuickJumper'
            },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: false,
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("pagination")'
            }
          },
          {
            name: 'pagination.simple',
            title: { label: 'simple pagination', tip: 'pagination.simple' },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: false,
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("pagination")'
            }
          },
          {
            name: 'pagination.size',
            title: { label: 'pageSize', tip: 'pagination.size' },
            propType: {
              type: 'oneOf',
              value: ['default', 'small']
            },
            setter: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  options: [
                    {
                      title: 'default',
                      value: 'default'
                    },
                    {
                      title: 'small',
                      value: 'small'
                    }
                  ]
                }
              },
              'VariableSetter'
            ],
            defaultValue: 'default',
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("pagination")'
            }
          },
          {
            name: 'pagination.position',
            title: { label: 'position', tip: 'pagination.position' },
            setter: {
              componentName: 'ArraySetter',
              props: {
                itemSetter: {
                  componentName: 'SelectSetter',
                  props: {
                    options: [
                      {
                        title: 'topLeft',
                        value: 'topLeft'
                      },
                      {
                        title: 'topCenter',
                        value: 'topCenter'
                      },
                      {
                        title: 'topRight',
                        value: 'topRight'
                      },
                      {
                        title: 'bottomLeft',
                        value: 'bottomLeft'
                      },
                      {
                        title: 'bottomCenter',
                        value: 'bottomCenter'
                      },
                      {
                        title: 'bottomRight',
                        value: 'bottomRight'
                      }
                    ]
                  },
                  initialValue: 'bottomRight'
                }
              }
            },
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("pagination")'
            }
          }
        ]
      },
      {
        title: 'Scroll',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'scroll.scrollToFirstRowOnChange',
            title: {
              label: 'scrollToFirstRowOnChange',
              tip: 'scroll.scrollToFirstRowOnChange'
            },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: true
          },
          {
            name: 'scroll.x',
            title: {
              label: 'scroll.x',
              tip: 'scroll.x | 	Set horizontal scrolling, it can also be used to specify the width of the scrolling area, which can be set as pixel value, percentage, true and max-content'
            },
            propType: { type: 'oneOfType', value: ['number', 'bool'] },
            setter: ['NumberSetter', 'BoolSetter', 'VariableSetter']
          },
          {
            name: 'scroll.y',
            title: {
              label: 'scroll.y',
              tip: 'scroll.y | 	Set the vertical scrolling, and can also be used to specify the height of the scrolling area, which can be set as a pixel value'
            },
            propType: 'number',
            setter: ['NumberSetter', 'VariableSetter']
          }
        ]
      },
      {
        title: 'Row Selection',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'rowSelection',
            title: { label: 'rowSelection', tip: 'rowSelection' },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: false,
            extraProps: {
              setValue: (target, value) => {
                if (value) {
                  target.parent.setPropValue('rowSelection', {
                    type: 'radio'
                  })
                }
              }
            }
          },
          {
            name: 'rowSelection.type',
            title: {
              label: 'type',
              tip: 'rowSelection.type | multiple choice/single choice'
            },
            propType: {
              type: 'oneOf',
              value: ['checkbox', 'radio']
            },
            setter: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  options: [
                    {
                      title: 'checkbox',
                      value: 'checkbox'
                    },
                    {
                      title: 'radio',
                      value: 'radio'
                    }
                  ]
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.preserveSelectedRowKeys',
            title: {
              label: 'preserveSelectedRowKeys',
              tip: 'rowSelection.preserveSelectedRowKeys | Retain option when data is deleted'
            },
            propType: 'bool',
            setter: 'BoolSetter',
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.fixed',
            title: {
              label: 'fixedLeft',
              tip: 'rowSelection.fixed | Pin the select box column to the left'
            },
            propType: 'bool',
            setter: 'BoolSetter',
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.selectedRowKeys',
            title: {
              label: 'selectedRowKeys',
              tip: 'rowSelection.selectedRowKeys | An array of keys specifying the selected item'
            },
            propType: 'object',
            setter: 'JsonSetter',
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.getCheckboxProps',
            title: {
              label: 'getCheckboxProps',
              tip: 'rowSelection.getCheckboxProps | The default attribute configuration of the selection box'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'getCheckboxProps(record,${extParams}){\n//The default property configuration of the checkbox\nreturn { disabled: false };\n}'
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.onChange',
            title: {
              label: 'onChange',
              tip: 'rowSelection.onChange | Callback when the selected item changes'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onChange(record,${extParams}){\n//The default attribute configuration of the selection box\nreturn { disabled: false };\n}'
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.onSelect',
            title: {
              label: 'onSelect',
              tip: 'rowSelection.onSelect | 	Callback for user to manually select/deselect a row'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onSelect(record,${extParams}){\n//The default attribute configuration of the selection box\nreturn { disabled: false };\n}'
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.onSelectAll',
            title: {
              label: 'onSelectAll',
              tip: 'rowSelection.onSelectAll | 	Callback for user to manually select/deselect all rows'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onSelectAll(record,${extParams}){\n//The default attribute configuration of the selection box\nreturn { disabled: false };\n}'
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.onSelectInvert',
            title: {
              label: 'onSelectInvert',
              tip: 'rowSelection.onSelectInvert | The callback that the user manually selects the inverse selection'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onSelectInvert(record,${extParams}){\n//The default attribute configuration of the selection box\nreturn { disabled: false };\n}'
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.onSelectNone',
            title: {
              label: 'onSelectNone',
              tip: 'rowSelection.onSelectNone | Callback for the user to clear the selection'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onSelectNone(record,${extParams}){\n//The default attribute configuration of the selection box\nreturn { disabled: false };\n}'
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          }
        ]
      },
      {
        title: 'Line Expand',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'expandable.expandedRowRender',
            title: {
              label: 'expandedRowRender',
              tip: 'expandable.expandedRowRender'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'SlotSetter',
                title: 'expand row slot',
                initialValue: {
                  type: 'JSSlot',
                  params: ['record', 'index', 'indent', 'expanded'],
                  value: []
                }
              },
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'expandedRowRender(record,index,indent,expanded,${extParams}){\n//Expanded row rendering\nreturn `${record.id}`}'
                }
              },
              'VariableSetter'
            ]
          },
          {
            name: 'expandable.rowExpandable',
            title: {
              label: 'rowExpandable',
              tip: 'expandable.rowExpandable | whether the row is expandable'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'rowExpandable(record,${extParams}){\n//Whether the row can be expanded\nreturn true;\n}'
                }
              },
              'VariableSetter'
            ]
          }
        ]
      },
      {
        title: 'Toolbar',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'toolBarRender',
            title: {
              label: 'toolBarRender',
              tip: 'toolbar | toolbar operation'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'SlotSetter',
                title: 'toolbar action slot',
                initialValue: {
                  type: 'JSSlot',
                  params: ['currentPageData'],
                  value: []
                }
              },
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'renderToolBar(currentPageData,${extParams}){\n//custom rendering table top\nreturn "table top";\n}'
                }
              },
              'VariableSetter'
            ]
          },
          {
            name: 'title',
            title: { label: 'tableTitle', tip: 'title' },
            propType: 'func',
            setter: [
              {
                componentName: 'SlotSetter',
                title: 'table title slot',
                initialValue: {
                  type: 'JSSlot',
                  params: ['currentPageData'],
                  value: []
                }
              },
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'renderTitle(currentPageData,${extParams}){\n//custom rendering table top\nreturn "table top";\n}'
                }
              },
              'VariableSetter'
            ]
          },
          {
            name: 'footer',
            title: { label: 'footer', tip: 'footer' },
            propType: 'func',
            setter: [
              {
                componentName: 'SlotSetter',
                title: 'table footer slot',
                initialValue: {
                  type: 'JSSlot',
                  params: ['currentPageData'],
                  value: []
                }
              },
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'renderFooter(currentPageData,${extParams}){\n//custom rendering table footer\nreturn "table footer";\n}'
                }
              },
              'VariableSetter'
            ]
          },
          {
            name: 'onHeaderRow',
            title: {
              label: 'onHeaderRow',
              tip: 'onHeaderRow | Set header row properties'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onHeaderRow(columns,index,${extParams}){\n//Set header row properties\nreturn {onClick:()=>{}};\n}'
                }
              },
              'VariableSetter'
            ]
          },
          {
            name: 'onRow',
            title: { label: 'onRow', tip: 'onRow | Set row properties' },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onRow(record,index,${extParams}){\n//Set row properties\nreturn {onClick:event=>{}};\n}'
                }
              },
              'VariableSetter'
            ]
          },
          {
            name: 'rowClassName',
            title: {
              label: 'row class name',
              tip: 'rowClassName | The class name of the table row'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'rowClassName(record,index,${extParams}){\n//The class name of the table row\nreturn `className-${record.type}`;\n}'
                }
              },
              'VariableSetter'
            ]
          }
        ]
      },
      {
        title: 'Search settings',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'search',
            title: { label: 'search', tip: 'search' },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: true,
            extraProps: {
              setValue: (target, value) => {
                if (value) {
                  target.parent.setPropValue('search', {
                    defaultCollapsed: true
                  })
                }
              }
            }
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'searchText',
                'zh-CN': 'searchText'
              },
              tip: 'searchText | The text of the search button'
            },
            name: 'search.searchText',
            setter: {
              componentName: 'StringSetter',
              isRequired: false,
              initialValue: ''
            },
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("search")'
            }
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'resetText',
                'zh-CN': 'resetText'
              },
              tip: 'resetText | The text of the reset button'
            },
            name: 'search.resetText',
            setter: {
              componentName: 'StringSetter',
              isRequired: false,
              initialValue: ''
            },
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("search")'
            }
          },
          {
            name: 'search.labelWidth',
            title: {
              label: 'labelWidth',
              tip: 'labelWidth'
            },
            propType: 'number',
            setter: ['StringSetter', 'NumberSetter', 'VariableSetter'],
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("search")'
            }
          },
          {
            name: 'search.span',
            title: {
              label: 'span',
              tip: 'span | Number of columns'
            },
            propType: 'number',
            setter: 'NumberSetter',
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("search")'
            }
          },
          {
            name: 'search.defaultCollapsed',
            title: {
              label: 'defaultCollapsed',
              tip: 'defaultCollapsed | Whether to close by default'
            },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: true,
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("search")'
            }
          }
          // {
          //   name: 'search.collapsed',
          //   title: {
          //     label: '是否收起',
          //     tip: 'collapsed | 是否收起'
          //   },
          //   propType: 'bool',
          //   setter: 'BoolSetter',
          //   condition: {
          //     type: 'JSFunction',
          //     value: 'target => !!target.getProps().getPropValue("search")'
          //   }
          // },
          // // {
          // //   name: 'search.onCollapse',
          // //   title: {
          // //     label: '收起按钮的事件',
          // //     tip: 'onCollapse | 收起按钮的事件'
          // //   },
          // //   propType: 'func',
          // //   setter: [
          // //     {
          // //       componentName: 'FunctionSetter',
          // //       props: {
          // //         template:
          // //           'onCollapse(collapsed,,${extParams}){\n// 设置行属性\nreturn {onClick:event=>{}};\n}'
          // //       }
          // //     },
          // //     'VariableSetter'
          // //   ],
          // //   condition: {
          // //     type: 'JSFunction',
          // //     value: 'target => !!target.getProps().getPropValue("search")'
          // //   }
          // // }
        ]
      },
      {
        title: 'Advanced',
        display: 'block',
        type: 'group',
        items: [
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'polling',
                'zh-CN': '轮询请求'
              },
              tip: 'Whether to poll ProTable, it will not automatically submit the form, if you want to automatically submit the form function, you need to call formRef.current?.submit() in onValueChange'
            },
            name: 'polling',
            description:
              'Whether to poll ProTable, it will not automatically submit the form, if you want to automatically submit the form function, you need to call formRef.current?.submit() in onValueChange',
            setter: {
              componentName: 'MixedSetter',
              props: {
                setters: [
                  {
                    componentName: 'NumberSetter',
                    isRequired: false,
                    initialValue: 0
                  },
                  {
                    componentName: 'FunctionSetter',
                    isRequired: false
                  }
                ]
              }
            }
          },
          {
            name: 'dateFormatter',
            title: {
              label: 'dateFormatter',
              tip: 'dateFormatter | number string or custom'
            },
            propType: { type: 'oneOfType', value: ['string', 'func'] },
            setter: [
              {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    {
                      title: 'number',
                      value: 'number'
                    },
                    {
                      title: 'string',
                      value: 'string'
                    }
                  ]
                }
              },
              'FunctionSetter'
            ],
            defaultValue: 'string'
          }
        ]
      },
      {
        title: 'Language',
        display: 'block',
        type: 'group',
        items: [
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'language',
                'zh-CN': '语言'
              },
              tip: 'Support Chinese and English'
            },
            name: 'intl',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: '简体中文',
                    value: 'zhCNIntl'
                  },
                  {
                    title: 'enUS',
                    value: 'enUSIntl'
                  }
                ]
              }
            }
          }
        ]
      }
    ],
    supports: {
      events: [
        {
          name: 'onLoad',
          description: 'Triggered after data loading is complete'
        },
        {
          name: 'beforeSearchSubmit',
          description: 'Format search form submission data'
        },
        {
          name: 'onSubmit',
          description: 'Fired when the form is submitted'
        },
        {
          name: 'onReset',
          description: 'Fired when the form is reset'
        },
        {
          name: 'onDataSourceChange',
          description: 'Editable form to modify data changes'
        },
        {
          name: 'onExpand',
          description: '@deprecated Use `expandable.onExpand` instead'
        },
        {
          name: 'onRow'
        },
        {
          name: 'onHeaderRow'
        },
        {
          name: 'onChange'
        },
        {
          name: 'onLoadingChange',
          description:
            'loading, Triggered when modified, usually caused by a network request'
        },
        {
          name: 'onRequestError',
          description: 'Triggered when data loading fails'
        }
      ],
      style: true,
      className: true
    },
    component: {}
  }
}

export default {
  ...ProTableMeta,
  snippets
}
