import React from 'react';

var NavLi = React.createClass({
    getInitialState: function(){
        return {
            borderLeft: '4px solid #32363e',
            background: '#32363e',
            color: '#a7aaab'
        };
    },
    getActiveState: function(){
        return {
            borderLeft: '4px solid #e55d74',
            background: '#40444e',
            color: '#e55d74',
            transition: 'all 0.25s cubic-bezier(0.35,-0.66, 0.85, 2.11)'
        };
    },
    handleClick: function(){
        alert(1)
    },
    render: function(){
        let liAStyle = {
            position: 'relative',
            display: 'block',
            height: '52px',
            lineHeight: '52px',
            fontSize: '18px',
            paddingLeft: '85px',
            borderLeft: '4px solid #32363e',
            color: '#a7aaab'
        };
        return (
            <li className="navLi">
                <a href="javascript:;" onClick={this.handleClick} style={liAStyle}>
                    <span></span>
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





