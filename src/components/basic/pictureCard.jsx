import React from 'react';
import { Card, Image, Col } from 'antd';
import {Row} from 'antd';

import './pictureCard.css'

//add className and add div that will ger this class name
function PictureCard  ({title, data})
 {
  console.log("title",title)
  console.log("data",data)
   
    return (
      <div className='propeties'>
      
            <Card title={title}>
              <Image src={data} alt={'pleas give me picture'} width={300} height={200} />
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