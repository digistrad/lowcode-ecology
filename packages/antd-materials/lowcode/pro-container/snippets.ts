import { Snippet } from '@alilc/lowcode-types'

export const snippets: Snippet[] = [
  {
    title: 'ProContainer',
    screenshot: require('./__screenshots__/container.jpg'),
    schema: {
      componentName: 'ProContainer',
      props: {
        fixedHeader: true,
        header: {
          title: 'Page Title',
          subTitle: 'Subtitle',
          extra: [
            {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Button',
                  props: {
                    type: 'default',
                    children: 'Secondary Button',
                    __component_name: 'Button',
                    htmlType: 'button',
                    size: 'middle',
                    shape: 'default',
                    block: false,
                    danger: false,
                    ghost: false,
                    disabled: false
                  }
                }
              ]
            },
            {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Button',
                  props: {
                    type: 'default',
                    children: 'Secondary Button',
                    __component_name: 'Button',
                    htmlType: 'button',
                    size: 'middle',
                    shape: 'default',
                    block: false,
                    danger: false,
                    ghost: false,
                    disabled: false
                  }
                }
              ]
            },
            {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Button',
                  props: {
                    type: 'primary',
                    children: 'Primary Button',
                    __component_name: 'Button',
                    htmlType: 'button',
                    size: 'middle',
                    shape: 'default',
                    block: false,
                    danger: false,
                    ghost: false,
                    disabled: false
                  }
                }
              ]
            }
          ],
          breadcrumb: {
            routes: [
              {
                path: '',
                breadcrumbName: 'first page'
              },
              {
                path: '',
                breadcrumbName: 'second page'
              },
              {
                path: '',
                breadcrumbName: 'current page'
              }
            ]
          }
        },
        tabProps: {
          type: 'editable-card',
          hideAdd: true
        },
        tabList: [
          {
            tab: 'Basic Information',
            key: 'base',
            closable: false
          },
          {
            tab: 'Details',
            key: 'info'
          },
          {
            tab: 'Disabled',
            key: '3',
            disabled: true
          }
        ]
      }
    }
  }
]
