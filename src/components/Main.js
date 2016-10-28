import React from 'react';

require('normalize.css/normalize.css');
require('styles/App.css');

let Header = require('./Header/Header.js');
let Nav = require('./Nav/Nav.js');

class App extends React.Component{
    render(){
        return (
            <div className="rootApp">
                <Header />
                <Nav />
            </div>
        );
    }
}

App.defaultProps = {
};

export default App;
