import React from 'react';
import { Button } from 'antd';

function BasicButton({ type , text , isDisabled , isDanger, size, onClick}){

    return(
        <Button
        type={type}
        disabled={isDisabled}
        danger={isDanger}
        size={size}
        onClick={onClick}
        >{text}
        </Button>
    )}

export default BasicButton;