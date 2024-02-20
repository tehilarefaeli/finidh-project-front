import React from 'react';
import { Card, Image, Col } from 'antd';
import {Row} from 'antd';
import {  useNavigate } from 'react-router-dom';


import './pictureCard.css'

//add className and add div that will ger this class name
function PictureCard  ({title, img , data }){
  const navigate = useNavigate();
  
  const url = window.location.href;
  const parts = url.split('/');
  const lastWord = parts.pop(); 

  const handleClick =(currentData)=>{
    localStorage.setItem('currentRecipe',JSON.stringify(currentData) )    
 console.log({lastWord});
    localStorage.setItem('previewUrl',lastWord)
    navigate('/recipe'); 


  }


    return (
      <div className='propeties'>
      
            <Card title={title}>
              <Image src={img}
               alt={'pleas give me picture'}
                width={300} height={200} 
                onClick={()=>{
                  handleClick(data) }}
                />
            </Card>
          
      
      </div>
    );
  }
export default PictureCard;
/* <Row>
          <Col span={8}>
            <Card title={title}>
              <Image src={data} alt={'jj'} width={300} height={200} />
            </Card>
          </Col>
      </Row> */