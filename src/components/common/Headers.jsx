import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import BasicButton from '../basic/BasicButton';
import BasicInput from '../basic/BasicInput'


function Headers() {
  
const handleClick =()=>{
  console.log("click me");
}
const handleChange = (e)=>{
  console.log(e.target.value);
}


  return (
    <div>
      <BasicButton 
      isDanger
      size='large'
      text='I am Large'
      onClick={handleClick}
      />
      <BasicButton
      isDisabled
      size='small'
      text='Im small'
      />
      <BasicButton
      text='no atribute'
      />
<br/>
      <BasicInput onChange={handleChange} type='number' size='small ' className='auto-width'/>
      <BasicInput  size='small 'className='content-width'maxLength={50} />
      <BasicInput  size='small ' className='present-25'isDisabled />



     
    </div>
  
  );
}

export default Headers;
