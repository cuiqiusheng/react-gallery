import React from 'react';

import HeaderForm from  './HeaderForm';
import s from '../../images/sprites.png';

class HeaderFormBox extends React.Component{
    render(){
        let boxStyle = {
            float: 'right',
            marginTop: '15px'
        };
        let quitStyle = {
            background: 'url('+s+') -147px -353px',
            float: 'left',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            margin: '3px 8px 0 0'
        }
        let userStyle = {
            background: 'url('+s+') -147px -297px',
            float: 'left',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            margin: '3px 8px 0 0'
        }
        return (
            <div className="headerFormBox" style={boxStyle}>
                <HeaderForm style={userStyle}>李靖</HeaderForm>
                <HeaderForm style={quitStyle}>退出</HeaderForm>
            </div>
        );
    }
}

export default HeaderFormBox;

