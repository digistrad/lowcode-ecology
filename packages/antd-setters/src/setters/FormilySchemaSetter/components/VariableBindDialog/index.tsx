import React, { useState, useEffect, useMemo, useRef } from 'react'
import { Modal, Input, Button, Tooltip } from 'antd'
import { project } from '@alilc/lowcode-engine'
import MonacoEditor from '@alilc/lowcode-plugin-base-monaco-editor'
import { useField } from '@formily/react'
import { FormItem } from '@formily/antd'
import { Field } from '@formily/core'
import { PaperClipOutlined } from '@ant-design/icons'
import './style'

const EXPRESSION_REX = /^\{\{([\s\S]*)\}\}$/

const isExpression = (value: any) => {
  return typeof value === 'string' && EXPRESSION_REX.test(value)
}

const parseExpression = (value) => {
  const matched = String(value).match(EXPRESSION_REX)
  return matched?.[1] || value || ''
}

const HelpText = `You can bind variables or processing functions by clicking the area on the left, and of course you can also enter complex expressions above.
Variables are supported by default in the input box, and the writing method is exactly the same as the JS writing method. <br>
$this: 'page instance'<br>
$self: 'Field instance of the current Formily component'<br>
`

const defaultEditorProps = {
  style: { width: '100%', height: '200px' }
}

const defaultEditorOption = {
  readOnly: false,
  automaticLayout: true,
  folding: true, // 默认开启折叠代码功能
  lineNumbers: 'on',
  wordWrap: 'off',
  formatOnPaste: true,
  fontSize: 12,
  tabSize: 2,
  scrollBeyondLastLine: false,
  fixedOverflowWidgets: false,
  snippetSuggestions: 'top',
  minimap: {
    enabled: false
  },
  scrollbar: {
    vertical: 'auto',
    horizontal: 'auto'
  }
}

const VariableBind = () => {
  const [visible, setVisible] = useState(false)

  // 可选项
  const [options, setOptions] = useState({})

  // 选项类型
  const [optionType, setOptionType] = useState<string>('vars')

  // 搜索值
  const [searchValue, setSearchValue] = useState('')

  // 编辑器值
  const [code, setCode] = useState('')

  // formily field
  const field = useField<Field>()

  const monocoEditor = useRef(null)

  const cacheValueRef = useRef(null)

  const setCacheValue = (value) => {
    if (!isExpression(value)) {
      console.log('cached value is set', value)
      cacheValueRef.current = value
    }
  }

  const clearCacheValue = () => {
    cacheValueRef.current = null
    console.log('clear cache value')
  }

  const open = () => {
    setCacheValue(field.value)
    setVisible(true)
  }

  const close = () => {
    setVisible(false)
  }

  /**
   * 获取AutoComplete数据源
   */
  const getVars = () => {
    const schema = project.exportSchema()

    const stateMap = schema.componentsTree[0]?.state

    const dataSource = []

    for (const key in stateMap) {
      if (Object.prototype.hasOwnProperty.call(stateMap, key) && key) {
        dataSource.push(`$this.state.${key}`)
      }
    }

    return dataSource
  }

  /**
   * 获取数据源面板中的数据
   */
  const getDataSource = () => {
    const schema = project.exportSchema()

    const stateMap = schema.componentsTree[0]?.dataSource

    const list = stateMap?.list || []

    const dataSource = []

    for (const item of list) {
      if (item && item.id) {
        dataSource.push(`$this.state.${item.id}`)
      }
    }

    return dataSource
  }

  /**
   * 获取methods数据源
   */
  const getMethods = () => {
    const schema = project.exportSchema()

    const methodsMap = schema.componentsTree[0]?.methods

    const methods = []

    for (const key in methodsMap) {
      if (Object.prototype.hasOwnProperty.call(methodsMap, key) && key) {
        methods.push(`$this.${key}`)
      }
    }

    return methods
  }

  useEffect(() => {
    if (visible) {
      const methods = getMethods()

      const vars = getVars()

      const dataSource = getDataSource()

      setOptions({
        vars: {
          name: 'State property',
          childrens: vars
        },
        methods: {
          name: 'custom handler',
          childrens: methods
        },
        dataSource: {
          name: 'data source',
          childrens: dataSource
        }
      })

      if (isExpression(field.value)) {
        setCode(parseExpression(field.value))
      }
    }
  }, [visible])

  // 二级选项
  const secondaryOptions = useMemo(() => {
    let list = (options[optionType] && options[optionType].childrens) || []

    if (searchValue) {
      list = list.filter((item) => {
        return item.indexOf(searchValue) > -1
      })
    }

    return list
  }, [searchValue, optionType, options])

  const onSelect = (text) => {
    const { lineNumber, column } = monocoEditor.current.getPosition()

    monocoEditor.current.executeEdits('update-code', [
      {
        range: {
          startLineNumber: lineNumber,
          startColumn: column,
          endLineNumber: lineNumber,
          endColumn: column
        },
        text
      }
    ])
  }

  const onEditorDidMount = (_, editor) => {
    monocoEditor.current = editor
  }

  // 确认绑定
  const onOk = () => {
    if (code) {
      field.value = `{{${code}}}`
    }

    close()
  }

  // 移除绑定
  const removeBinding = () => {
    setCode('')

    // 存在缓存
    if (cacheValueRef.current !== null) {
      if (cacheValueRef.current === undefined) {
        // 直接清掉整个字段
        field.destroy()
      } else {
        field.setValue(cacheValueRef.current)
      }
      // clearCacheValue()
    } else {
      // 直接清掉整个字段
      field.destroy()
    }

    close()
  }

  const renderFooter = () => {
    return (
      <div className="variable-bind-dialog-bottom">
        <div className="bottom-left-container">
          {code && code.length > 0 && (
            <Button danger onClick={removeBinding}>
              Remove binding
            </Button>
          )}
        </div>

        <div className="bottom-right-container">
          <Button type="primary" onClick={onOk}>
            Confirm
          </Button>
          &nbsp;&nbsp;
          <Button onClick={close}>Cancel</Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <PaperClipOutlined onClick={open} />
      <Modal
        width={736}
        visible={visible}
        title="变量绑定"
        onCancel={close}
        footer={renderFooter()}
      >
        <div className="variable-dialog-body">
          <div className="dialog-left-container">
            <div className="dialog-small-title">variable list</div>

            <div className="vs-variable-selector-inner">
              <ul className="vs-variable-selector-category vs-variable-selector-ul">
                {Object.keys(options).map((key) => {
                  return (
                    <li
                      onClick={() => setOptionType(key)}
                      className={optionType === key && 'active'}
                      key={key}
                    >
                      {options[key].name}
                    </li>
                  )
                })}
              </ul>
              <div className="vs-variable-selector-items-container">
                <div className="ve-search-control">
                  <Input.Search
                    placeholder="Search"
                    aria-label="search"
                    style={{ width: '100%' }}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.currentTarget.value)}
                  />
                </div>
                <ul className="vs-variable-selector-items vs-variable-selector-ul">
                  {secondaryOptions.map((item) => (
                    <li key={item} onClick={() => onSelect(item)}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="dialog-right-container">
            <div className="dialog-small-title">绑定</div>
            <div id="jsEditorDom" className="editor-context">
              <MonacoEditor
                {...defaultEditorProps}
                {...defaultEditorOption}
                {...{ language: 'javascript' }}
                value={code}
                onChange={(code) => setCode(code)}
                editorDidMount={onEditorDidMount}
              />
            </div>

            <div className="dialog-help-tip-input">
              <p className="vs-variable-content-desc-title">用法</p>
              <p dangerouslySetInnerHTML={{ __html: HelpText }} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export const VarFormItem = (props) => {
  const { children, ...extra } = props

  const field = useField<any>()

  const renderChildren = () => {
    if (isExpression(field.value)) {
      const text = `${parseExpression(field.value)}`

      return (
        <Tooltip placement="top" title={text}>
          <div
            style={{
              width: '110px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}
          >
            {text}
          </div>
        </Tooltip>
      )
    } else {
      return <>{children}</>
    }
  }

  return (
    <FormItem {...extra} addonAfter={VariableBind()}>
      {renderChildren()}
    </FormItem>
  )
}
