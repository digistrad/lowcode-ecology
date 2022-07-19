import * as React from 'react';
import { createElement } from 'react';
import { useSchemaField } from '../../shared/hooks';
import { FormItem } from '@formily/antd';

const FormilyRadioGroup: React.ForwardRefRenderFunction<any, any> = React.forwardRef(
  (props, ref) => {
    console.log('FormilyRadioGroup props', props);
    const SchemaField = useSchemaField();

    return (
      <SchemaField.String
        name="gender"
        title="性别"
        x-decorator={(props) => {
          return (
            <div ref={ref}>
              <FormItem {...props} />
            </div>
          );
        }}
        x-component="Radio.Group"
        required
        x-component-props={{
          options: [
            { label: '日', value: 'day' },
            { label: '周', value: 'week' },
            { label: '月', value: 'month' },
          ],
          ...props,
        }}
      />
    );
  },
);

export default FormilyRadioGroup;