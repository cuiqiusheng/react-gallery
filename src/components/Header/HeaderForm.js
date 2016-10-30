import React from 'react';

class HeaderForm extends React.Component{
    render(){
        let headerFormStyle = {
            display: 'inline-block',
            marginRight: '40px',
            lineHeight: '40px'
        };
        let headerFormTextStyle = {
            float: 'left',
            fontSize: '17px',
            color: '#fff'
        };
        return (
            <a href="javascript:;" className="headerForm" style={headerFormStyle}>
                <span className="headerFormIcon" style={this.props.style}></span>
                <i className="headerFormText" style={headerFormTextStyle}>{this.props.children}</i>
            </a>
        );
    }
}

export default HeaderForm;

