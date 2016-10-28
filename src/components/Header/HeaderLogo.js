import React from 'react';

import imgUrl from './banner-logo.png';
class HeaderLogo extends React.Component{
    render(){
        let style = {
            float: 'left',
            width: '280px',
            height: '48px',
            margin: '10px 0 0 40px',
            background: 'url('+imgUrl+')'
        };
        return (
            <div className="headerLogo" style={style}></div>
        );
    }
}

export default HeaderLogo;


