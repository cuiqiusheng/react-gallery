import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderFormBox from  './HeaderFormBox';
import imgUrl from './banner.jpg';

class Header extends React.Component{
    render(){
        let headerStyle = {
            width: '100%',
            height: '68px',
            background: 'url('+imgUrl+')',
            overflow: 'hidden',
            backgroundSize: 'cover'
        };
        return (
            <div className="header" style={headerStyle}>
                <HeaderLogo></HeaderLogo>
                <HeaderFormBox></HeaderFormBox>
            </div>
        )
    }
}

module.exports = Header;








