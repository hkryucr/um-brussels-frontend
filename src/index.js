import Map from 'j/components/Map';
import SiteHeader from 'j/components/SiteHeader';
import SiteMain from 'j/components/SiteMain';
import React from "react";
import ReactDOM from "react-dom";

class Site extends React.Component {
    
  render() {
    return (
      <div className='Site' >
        <SiteHeader/>
        Hello React,Webpack 4 & Babel 7!
        <SiteMain/>
        <Map/>
      </div>
    )
  }
}

ReactDOM.render(<Site/>, document.getElementById('root'));
