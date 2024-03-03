import React, { useEffect } from 'react';
import { Select, Space } from 'antd';

const products = JSON.parse(localStorage.getItem('products'));
const options = products?.map(p=>p.product_name);

const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};
const DropDown = () => {
  
  // useEffect(()=>{
  //   GetRequest("products/all").then(res => {
  //   console.log("useEffect", res);
  //     localStorage.setItem('products',JSON.stringify(res) )
  // }
  // ).catch(e => console.log(e))
  
  //  },[]);

  return (
    <div>
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <Select
          mode="multiple"
          size="large"
          placeholder="Please select"
          onChange={handleChange}
          style={{
            width: '100%',
          }}
          options={options?.map(option => ({ label: option, value: option }))}
        />
      </Space>
      </div>
  );
};
export default DropDown;