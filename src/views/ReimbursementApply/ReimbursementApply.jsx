import React from 'react'
import { Form, Input } from 'antd';
import './ReimbursementApply.scss'

export default function ReimbursementApply() {

  const onFinish = () => {}
  const onFinishFailed = () => {}

  return (
    <div className='ReimbursementApply'>
      <h3>数据筛选</h3>
      <Form
      style={{}}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
        <Form.Item
          label="名称"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入名称!',
            },
          ]}
        >
          <Input style={{width: '400px'}} />
        </Form.Item>
        </Form>
    </div>
  )
}
