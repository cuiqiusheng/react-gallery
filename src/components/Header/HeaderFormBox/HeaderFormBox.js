import React from 'react';

import HeaderForm from  './HeaderForm/HeaderForm';

class HeaderFormBox extends React.Component{
    render(){
        let style = {
            float: 'right',
            marginTop: '15px'
        };
        return (
            <div className="headerFormBox" style={style}>
                <HeaderForm>李靖</HeaderForm>
                <HeaderForm>退出</HeaderForm>
            </div>
        );
    }
}

export default HeaderFormBox;

