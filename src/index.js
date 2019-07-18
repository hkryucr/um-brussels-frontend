import Map from 'j/components/Map';
import SiteMain from 'j/components/SiteMain';
import React from "react";
import ReactDOM from "react-dom";

class Site extends React.Component {
    
  render() {
    return (
      <div className='Site' >
        Hello React,Webpack 4 & Babel 7!
        <SiteMain/>
        <Map/>
      </div>
    )
  }
}

ReactDOM.render(<Site/>, document.getElementById('root'));
