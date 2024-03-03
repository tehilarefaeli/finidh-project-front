import React from 'react';
import { Card, Image, Col } from 'antd';
import { Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import {HeartOutlined, HeartFilled } from '@ant-design/icons';

import './pictureCard.css';
import PostRequest from '../../helpers/postRequest';

//add className and add div that will ger this class name
function RecipeCard({ title, img, data,user, isLiked,getUserLikes }) {
  const navigate = useNavigate();

  const url = window.location.href;
  const parts = url.split('/');
  const lastWord = parts.pop();
  

  const handleClick = (currentData) => {
    localStorage.setItem('currentRecipe', JSON.stringify(currentData));
    console.log({ lastWord });
    localStorage.setItem('previewUrl', lastWord);
    navigate('/recipe');
  };

  const handleLike = async()=>{
    if(!user?.email){
      return alert('You must be logged in to like recipes')
    }
    try {
      await PostRequest('recipes/likes', {
        type: isLiked ? 'unlike': 'like',
        recipe_id: data.recipe_id,
        email: user.email
      })

      getUserLikes(user.email)
    } catch (err){
      console.log(err)
    }
  }

  return (
    <div className='propeties'>
      <Card title={title} >
        <Image
          src={img}
          alt={'pleas give me picture'}
          width={300}
          height={200}
          onClick={() => {
            handleClick(data);
          }}
        />
      </Card>
       {isLiked ? <HeartFilled onClick={handleLike} />:<HeartOutlined onClick={handleLike}/>}
    </div>
  );
}
export default RecipeCard;
/* <Row>
          <Col span={8}>
            <Card title={title}>
              <Image src={data} alt={'jj'} width={300} height={200} />
            </Card>
          </Col>
      </Row> */
