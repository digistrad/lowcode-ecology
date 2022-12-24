import { Snippet } from '@alilc/lowcode-types'

const getColumns = () => {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      valueType: 'text'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      valueType: 'digit'
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      valueType: 'avatar'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      renderTag: true,
      valueEnum: {
        all: { text: 'All', status: 'Default' },
        close: { text: 'Close', status: 'Default' },
        running: { text: 'Running', status: 'Processing' },
        online: { text: 'Online', status: 'Success' },
        error: { text: 'Error', status: 'Error' }
      }
    },
    {
      title: 'Loan Amount',
      dataIndex: 'loan',
      valueType: 'money'
    },
    {
      title: 'Transaction Progress',
      dataIndex: 'trade_progress',
      valueType: 'progress'
    },
    {
      title: 'Personal Profile',
      dataIndex: 'link',
      valueType: 'link',
      copyable: true
    },
    {
      title: 'Address',
      dataIndex: 'address',
      valueType: 'tag'
    },
    {
      title: 'Creation Time',
      dataIndex: 'create_time',
      valueType: 'dateTime'
    }
  ]
}

const getDataSource = () => {
  return [
    {
      id: '1',
      name: '肖战',
      age: 30,
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Xiao_Zhan_at_the_Weibo_Night_Ceremony_January_11_2020.jpg/1280px-Xiao_Zhan_at_the_Weibo_Night_Ceremony_January_11_2020.jpg',
      link: 'https://en.wikipedia.org/wiki/Xiao_Zhan',
      loan: 700000,
      trade_progress: 17,
      address: 'No. 1 Lake Bottom Park, West Lake District',
      create_time: '2022-04-21 21:00',
      status: 'close'
    },
    {
      id: '2',
      name: 'John Doe',
      age: 28,
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/9/9a/%E7%8E%8B%E4%B8%80%E5%8D%9A.jpg',
      link: 'https://en.wikipedia.org/wiki/Wang_Yibo',
      loan: 600000,
      trade_progress: 36,
      address: 'No. 699 Wangshang Road, Binjiang District',
      create_time: '2022-04-21 22:00',
      status: 'running'
    }
  ]
}

export const snippets: Snippet[] = [
  {
    title: 'CRUD',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/table-1.png',
    schema: {
      componentName: 'ProTable',
      props: {
        cardBordered: true,
        dataSource: getDataSource(),
        columns: [
          ...getColumns(),
          {
            title: 'Operate',
            dataIndex: 'options',
            valueType: 'option',
            align: 'left',
            fixed: '',
            render: {
              type: 'JSSlot',
              params: ['text', 'record', 'index'],
              value: [
                {
                  componentName: 'Button',
                  props: {
                    type: 'link',
                    children: 'Edit',
                    htmlType: 'button',
                    size: 'small',
                    shape: 'default',
                    block: false,
                    danger: false,
                    ghost: false,
                    disabled: false,
                    icon: ''
                  }
                },
                {
                  componentName: 'ProPopconfirm',
                  props: {
                    title: 'Confirm delete?',
                    okType: 'primary',
                    okText: 'Confirm',
                    cancelText: 'Cancel'
                  },
                  children: [
                    {
                      componentName: 'Button',
                      props: {
                        children: 'Delete',
                        htmlType: 'button',
                        type: 'link',
                        size: 'small',
                        shape: 'default',
                        block: false,
                        danger: true,
                        ghost: false,
                        disabled: false,
                        icon: ''
                      }
                    }
                  ]
                }
              ]
            }
          }
        ],
        rowKey: 'id',
        pagination: {
          pageSize: 10
        },
        search: {
          defaultCollapsed: false,
          resetText: '',
          searchText: '',
          labelWidth: 'auto'
        },
        toolBarRender: {
          type: 'JSSlot',
          params: ['currentPageData'],
          value: [
            {
              componentName: 'Button',
              props: {
                type: 'primary',
                children: 'Add',
                htmlType: 'button',
                size: 'middle',
                shape: 'default',
                icon: {
                  type: 'JSSlot',
                  value: [
                    {
                      componentName: 'Icon',
                      props: {
                        type: 'PlusOutlined',
                        size: 16,
                        rotate: 0,
                        spin: false
                      }
                    }
                  ]
                },
                block: false,
                danger: false,
                ghost: false,
                disabled: false
              }
            }
          ]
        },
        intl: 'enUSIntl'
      }
    }
  },
  {
    title: 'Inquiry Form',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/table-1.png',
    schema: {
      componentName: 'ProTable',
      props: {
        cardBordered: true,
        dataSource: getDataSource(),
        columns: getColumns(),
        rowKey: 'id',
        pagination: {
          pageSize: 10
        },
        search: {
          defaultCollapsed: false,
          resetText: '',
          searchText: '',
          labelWidth: 'auto'
        },
        intl: 'enUSIntl'
      }
    }
  },
  {
    title: 'Nested Table',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/table-1.png',
    schema: {
      componentName: 'ProTable',
      props: {
        cardBordered: true,
        dataSource: getDataSource(),
        columns: getColumns(),
        rowKey: 'id',
        pagination: {
          pageSize: 10
        },
        expandable: {
          expandedRowRender: {
            type: 'JSSlot',
            params: ['record', 'index', 'indent', 'expanded'],
            value: [
              {
                componentName: 'ProTable',
                props: {
                  columns: [
                    { title: 'Date', dataIndex: 'date', key: 'date' },
                    { title: 'Name', dataIndex: 'name', key: 'name' },
                    {
                      title: 'Upgrade Status',
                      dataIndex: 'upgradeNum',
                      key: 'upgradeNum'
                    }
                  ],
                  headerTitle: false,
                  search: false,
                  options: false,
                  dataSource: [
                    {
                      key: 0,
                      date: '2014-12-24 23:12:00',
                      name: 'This is production name',
                      upgradeNum: 'Upgraded: 56'
                    },
                    {
                      key: 1,
                      date: '2014-12-24 23:12:00',
                      name: 'This is production name',
                      upgradeNum: 'Upgraded: 57'
                    },
                    {
                      key: 2,
                      date: '2014-12-24 23:12:00',
                      name: 'This is production name',
                      upgradeNum: 'Upgraded: 58'
                    }
                  ],
                  pagination: false
                }
              }
            ]
          }
        },
        intl: 'enUSIntl'
      }
    }
  }
]
