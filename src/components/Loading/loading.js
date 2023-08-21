import React from 'react';
import { Alert, Space, Spin } from 'antd';
import './loading.css'
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
      textAlign:'center',
      marginTop:'20%'
      
    }}
  >
    <Space>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Space>
  </Space>
);
export default App;