import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicButton from '../basic/BasicButton';
import { HomeOutlined, UserOutlined, LineOutlined, LogoutOutlined } from '@ant-design/icons';
import './Headers.css';

function Headers({ user }) {
  const handleClick = () => {
    console.log('click me');
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className='sticky-header'>
      <div className='divRoot'>
        <div className='profile'>
          <Link to='/profile'>
            <UserOutlined className='profileIcon' />
            <span className='profile-name'>{user ? user.name : ''}</span>
          </Link>
        </div>

        <div className='home'>
          <Link to='/'>
            <HomeOutlined className='homeIcon' />
          </Link>
        </div>

        <div className='linkes'>
          <Link to='/about'>
            <BasicButton className="link" size='large' text='About' onClick={handleClick} />
          </Link>
          <LineOutlined rotate={90} />
          <Link to='/cakes'>
            <BasicButton className="link" size='large' text='Cakes' onClick={handleClick} />
          </Link>
          <LineOutlined rotate={90} />
          <Link to='/cookies'>
            <BasicButton className="link" size='large' text='Cookies' onClick={handleClick} />
          </Link> 
          <LineOutlined rotate={90} />
          <Link to='/deserts'>
            <BasicButton className="link" size='large' text='Deserts' onClick={handleClick} />
          </Link>
        </div>


        <div className='logout'>
          <Link to='/logout'>
            <span className='logout-text'>Sign Out</span>
            <LogoutOutlined className='logoutIcon' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Headers;
