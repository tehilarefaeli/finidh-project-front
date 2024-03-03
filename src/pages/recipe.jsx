import React, { useEffect } from 'react';
import { Layout, Image, List } from 'antd';
import BasicButton from '../components/basic/BasicButton';
import { useNavigate } from 'react-router-dom';

import './recipe.css'

const { Header, Sider, Content } = Layout;

function Recipe() {
  const navigate = useNavigate();

  const prevUrl = localStorage.getItem('previewUrl');
  const handleClick = () => {
    navigate(`/${prevUrl}`);
  };
  const currentRecipe = JSON.parse(localStorage.getItem('currentRecipe'));
  console.log(currentRecipe)
  const inputString = currentRecipe.recipe_prepare;
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
        <Header >
          <div className='recipe-name'>{currentRecipe.recipe_name}</div></Header>
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Content>
            <div className='layout-recipe-page'>
              <div>
                <BasicButton text='back' onClick={handleClick} />
              </div>
              <div className='content'>
                <div>
                  <h3 >Ingridients</h3>

                  {currentRecipe.ingridients?.split(',').map((ingridient) => {
                    return <div>{ingridient}</div>;
                  })}
                </div>
                <div>
                  <h3 >Preparation steps</h3>

                  {filterData.map((item) => {
                    return <div className='preparation-step'>{item.text}</div>;
                  })}
                </div>
              </div>
            </div>
          </Content>
          <Sider width='25%'>
            <Image
              src={currentRecipe.recipe_img}
              alt={'pleas give me picture'}
              width={300}
              height={200}
              onClick={() => {
                handleClick(currentRecipe);
              }}
            />
          </Sider>
        </div>
      </Layout>
    </div>
  );
}

export default Recipe;
