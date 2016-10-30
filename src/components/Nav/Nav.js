import React from 'react';

import sprites from '../../images/sprites.png';

var NavLi = React.createClass({
    getInitialState: function(){
        return {hover: false}
    },
    toggleHover: function(){
        this.setState({hover: !this.state.hover})
    },
    render: function(){
        let style;
        if (this.state.hover) {
            style = {
                position: 'relative',
                display: 'block',
                height: '52px',
                lineHeight: '52px',
                fontSize: '18px',
                paddingLeft: '85px',
                borderLeft: '4px solid #e55d74',
                background: '#40444e',
                color: '#e55d74',
                transition: 'all 0.25s cubic-bezier(0.35,-0.66, 0.85, 2.11)'
            }
        } else {
            style = {
                position: 'relative',
                display: 'block',
                height: '52px',
                lineHeight: '52px',
                fontSize: '18px',
                paddingLeft: '85px',
                borderLeft: '4px solid #32363e',
                color: '#a7aaab',
                background: '#32363e'
            }
        }
        let spanStyle = {
            position: 'absolute',
            left: '36px',
            top: '13px',
            width: '30px',
            height: '30px',
            backgroundImage: 'url('+sprites+')',
            backgroundPosition: '-21px -20px'
        }
        return (
            <li className="navLi">
                <a href="javascript:;" style={style} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    <span style={spanStyle}></span>
                    {this.props.children}
                </a>
            </li>
        );
    }
});

var Nav = React.createClass({
    render: function(){
        let navStyle = {
            width: '210px',
            height: 'calc(100% - 68px)',
            background: '#32363e'
        };
        return (
            <div className="nav" style={navStyle}>
                <ul>
                    <NavLi>人员信息</NavLi>
                    <NavLi>样本信息</NavLi>
                    <NavLi>护照管理</NavLi>
                    <NavLi>信息查询</NavLi>
                    <NavLi>系统管理</NavLi>
                </ul>
            </div>
        );
    }
});

module.exports = Nav;





