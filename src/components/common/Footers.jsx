import {
  FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined, UsbOutlined
} from '@ant-design/icons';
import { Button, Layout, Typography } from 'antd';
import React from 'react';

const { Footer } = Layout;
const { Text } = Typography;

function Footers() {
  const handleYoutubeClick = () => {
    window.location.href = 'https://www.youtube.com/channel/UCAoBGRZ-vhFYCX-6nVJBJWQ';
  };

  return (
    <Footer className='flex flex-col items-center md:flex-row px-2 md:px-12 lg:px-24 justify-center'>
      <div className='flex justify-center space-x-4 md:space-x-2 md:order-first'>
        <Button type='dashed' shape='circle' icon={<FacebookOutlined />} size='middle' />
        <Button type='dashed' shape='circle' icon={<InstagramOutlined />} size='middle' />
        <Button type='dashed' shape='circle' icon={<TwitterOutlined />} size='middle' />
        <Button type='dashed' shape='circle' icon={<YoutubeOutlined />} size='middle' onClick={handleYoutubeClick} />
      </div>

      <div className='mb-4 md:mb-0'>
        <Text className='md:text-center'>{` ${new Date().getFullYear()}  sweetime ©️כל הזכויות שמורות`}</Text>
      </div>
    </Footer>
  );
}

export default Footers;
