import React from 'react';
import Homepage from '../pages/homePage';
import { Layout } from 'antd';


function Home({user, setUser}) {
  //window.document.title = 'Sweetime';

  return (
    <Layout>
    <Homepage
    user={user}
    setUser={setUser}/>
    </Layout>
   
  );
}

export default Home;