import { Outlet, Link } from 'react-router-dom' 
import { Layout, Menu } from 'antd';
import React from 'react';
const { Content, Sider } = Layout;


export default function Reimbursement() {
  return (
    <div className='all'>
      <Layout>
        <Content
          style={{
            padding: '0',
            height:'calc(100vh - 113px)'
          }}
          className="main"
        >
        <Layout
        
        style={{
          
        }}
      >
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{
              height:'calc(100vh - 113px)',
            }}
            items={[
                {
                  key: '1',
                  label: <Link to="/reimbursement/reimbursement/apply">报销申请</Link>
                },
                {
                  key: '2',
                  label: <Link to="/reimbursement/all/reimbursement">全部报销</Link>
                },
                {
                  key: '3',
                  label: <Link to="/reimbursement/my/reimbursement">我的报销</Link>
                },
                {
                  key: '4',
                  label: <Link to="/reimbursement/reimbursement/examine">报销审核</Link>
                },
                {
                  key: '5',
                  label: <Link to="/reimbursement/with/me">与我相关</Link>
                },
            ]}
          />
        </Sider>
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
    </div>
  )
}
