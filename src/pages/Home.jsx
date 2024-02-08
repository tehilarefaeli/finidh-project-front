import React from 'react';
import Homepage from '../pages/homePage';
import { Layout } from 'antd';


function Home() {
  window.document.title = 'React App — Home';

  return (
    <Layout>
    <Homepage/>
    </Layout>
   
  );
}

export default Home;
