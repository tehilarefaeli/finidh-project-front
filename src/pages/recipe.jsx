import React, { useEffect } from 'react';
import { Layout, Image, List } from 'antd';
import BasicButton from '../components/basic/BasicButton';
import { useNavigate } from 'react-router-dom';

//import './recipe.css'
const { Header, Sider, Content } = Layout;

function Recipe() {
  const navigate = useNavigate();

const prevUrl = localStorage.getItem('previewUrl')
  const handleClick = ()=>{
    navigate(`/${prevUrl}`); 
  }
    const data =  JSON.parse(localStorage.getItem('currentRecipe'));
    const inputString = data.recipe_prepare;
const myObject = inputString.split('\n').map(line => {
  return { text: line.trim() };
});
const filterData = myObject.filter(obj => obj.text !== "")

useEffect(()=>{
  return () => {
    localStorage.removeItem('previewUrl');
  };
},[])
  return (
    <div>
          <Layout >
      <Header >{data.recipe_name}</Header>
      <Layout>
        <Content >
            <div className='layout-recipe-page'>
            <div>
 {/* <h5>Products</h5>
        <List
    itemLayout="horizontal"
    dataSource={products}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          title={item.title}
        />
      </List.Item>
    )}
  /> */}
  <BasicButton
  text='back'
  onClick={handleClick}
  />

  </div>
  <div>
  <h5>Products</h5>
        <List
    itemLayout="horizontal"
    dataSource={filterData}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          title={item.text}
        />
      </List.Item>
    )}
    />
  

  </div>
  </div>
        </Content>
        <Sider width="25%" >
        <Image src={data.recipe_img}
               alt={'pleas give me picture'}
                width={300} height={200} 
                onClick={()=>{
                  handleClick(data) }}
                />
        </Sider>
      </Layout>
    </Layout>

    </div>
  );
}

export default Recipe;
