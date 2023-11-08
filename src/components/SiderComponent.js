import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function SiderComponent() {
  return (
    <Sider width={200} theme="light">
      <Menu
        theme="light"
        mode="vertical"
        defaultSelectedKeys={['1']}
        style={{
            fontWeight:"900", 
            fontSize:"18px",
             border:"1px solid black"
        }}
      >
        <Menu.Item key="1">
          <Link to="/get">GET DETAIL Film</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/post">POST Film</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/delete">DELETE Film</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/update">UPDATE Film</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SiderComponent;
