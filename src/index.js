import Map from 'j/components/Map';
import SiteHeader from 'j/components/SiteHeader';
import SiteMain from 'j/components/SiteMain';
import styles from 'c/components/site.css.js'
import React from "react";
import ReactDOM from "react-dom";

class Site extends React.Component {
    
  render() {
    return (
      <div className='Site' style = {styles}>
        <SiteHeader/>
        <SiteMain/>
        <Map/>
        <div>THIS IS GOING TO BE A MAP</div>
      </div>
    )
  }
}

ReactDOM.render(<Site />, document.getElementById('root'));
