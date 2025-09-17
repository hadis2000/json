import React from 'react';
import { BtnForm,Spn } from './Btn.style';

const Btn=(props)=> {
    return (
        <BtnForm type='submit'
        onClick={props.onClick} 
        fontColor={props.fontColor}
        fontSize={props.fontSize}
        Mrg={props.Mrg}
        customStyle={props.customStyle}>
            <Spn/>
            <Spn/>
            <Spn/>
            <Spn/>
            {props.children}
        </BtnForm>
    );
}

export default Btn;
