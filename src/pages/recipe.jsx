import React, { useEffect } from 'react';
import { Layout, Image, List } from 'antd';
import BasicButton from '../components/basic/BasicButton';
import { useNavigate } from 'react-router-dom';

//import './recipe.css'
const { Header, Sider, Content } = Layout;

function Recipe() {
  const navigate = useNavigate();

  const prevUrl = localStorage.getItem('previewUrl');
  const handleClick = () => {
    navigate(`/${prevUrl}`);
  };
  const data = JSON.parse(localStorage.getItem('currentRecipe'));
  const inputString = data.recipe_prepare;
  const myObject = inputString.split('\n').map((line) => {
    return { text: line.trim() };
  });
  const filterData = myObject.filter((obj) => obj.text !== '');

  useEffect(() => {
    return () => {
      localStorage.removeItem('previewUrl');
    };
  }, []);
  return (
    <div>
      <Layout style={{ flexDirection: 'column' }}>
        <Header>{data.recipe_name}</Header>
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Content>
            <div className='layout-recipe-page'>
              <div>
                <BasicButton text='back' onClick={handleClick} />
              </div>
              <div>
                <h5>Products</h5>
                {filterData.map((item) => {
                 return <div>{item.text}</div>;
                })}
              </div>
            </div>
          </Content>
          <Sider width='25%'>
            <Image
              src={data.recipe_img}
              alt={'pleas give me picture'}
              width={300}
              height={200}
              onClick={() => {
                handleClick(data);
              }}
            />
          </Sider>
        </div>
      </Layout>
    </div>
  );
}

export default Recipe;
