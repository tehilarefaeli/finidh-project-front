import React from 'react';
import { Card, Image, Col } from 'antd';
import { Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import {HeartOutlined, HeartFilled } from '@ant-design/icons';

import './pictureCard.css';
import PostRequest from '../../helpers/postRequest';

//add className and add div that will ger this class name
function RecipeCard({ title, img, data,user }) {
  const navigate = useNavigate();

  const url = window.location.href;
  const parts = url.split('/');
  const lastWord = parts.pop();


  const isLiked = false;

  const handleClick = (currentData) => {
    localStorage.setItem('currentRecipe', JSON.stringify(currentData));
    console.log({ lastWord });
    localStorage.setItem('previewUrl', lastWord);
    navigate('/recipe');
  };

  const handleLike = async()=>{
    try {
      await PostRequest('', {
        type: isLiked ? 'unlike': 'like',
        email: user.email
      })
    } catch (err){
      
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
