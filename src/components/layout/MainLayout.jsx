import { Layout } from 'antd';
import React from 'react';
import Footers from '../common/Footers';
import Headers from '../common/Headers';
import Homepage from '../../pages/homePage';


const { Content } = Layout;

function MainLayout({ children }) {
  return (
    <Layout>
      <Homepage/>
      <Footers/>
      {/* <Content className='min-h-[75vh]'>{ children }</Content> */}
      {/* <Footers /> */}
    </Layout>
  );
}

export default MainLayout;
