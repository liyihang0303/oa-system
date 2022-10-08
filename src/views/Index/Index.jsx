import { Outlet, Link } from 'react-router-dom' 
import { Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content } = Layout;
export default function Index() {
  return (
    <Layout className='HEADER'>
      <Header className="header" style={{ backgroundImage: 'linear-gradient(#475DFF , #259DFE)' }}>
        <div className="logo" />
        <h1 style={{ color: 'white', float: 'left',marginRight: '50px',  fontWeight: 'bold'}}>员工中心</h1>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ backgroundImage: 'linear-gradient(#475DFF , #259DFE)' }} items={[
           
            {
              key: '1',
              label: '门户'
            },
            {
              key: '2',
              label: '会议'
            },
            {
              key: '3',
              label: '资产'
            },
            {
              key: '4',
              label: <Link to="/reimbursement">报销</Link>
            },
            {
              key: '5',
              label: '名片制作'
            },
            {
              key: '6',
              label: '考勤'
            },
            {
              key: '7',
              label: '常用'
            },
        ]} />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
        className="main"
      >
      <Layout
        
        style={{
          padding: '24px 0',
        }}
      >
        
        <Content
          style={{
            padding: '0 24px',
            
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Content>
  </Layout>
  )
}