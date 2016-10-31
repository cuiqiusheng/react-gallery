import React from 'react';
import $ from 'jquery';

var NavLi = React.createClass({
    handleClick: function(){
        $(this).addClass('span-1-active');
    },
    render: function(){
        require('./Nav.css');
        return (
            <li className="navLi">
                <a href="javascript:;" className='nav-a' onClick={this.handleClick}>
                    <span className={this.props.class}></span>
                    {this.props.children}
                </a>
            </li>
        );
    }
});

var Nav = React.createClass({
    render: function(){
        require('./Nav.css');
        return (
            <div className="nav">
                <ul>
                    <NavLi class={'span-1'}>人员信息</NavLi>
                    <NavLi class={'span-2'}>样本信息</NavLi>
                    <NavLi class={'span-3'}>护照管理</NavLi>
                    <NavLi class={'span-4'}>信息查询</NavLi>
                    <NavLi class={'span-5'}>系统管理</NavLi>
                </ul>
            </div>
        );
    }
});

module.exports = Nav;





