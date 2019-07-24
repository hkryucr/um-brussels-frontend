import React from 'react';
import styles, {headerTitle, headerSubtitle} from 'c/components/site-header.css.js'

class SiteHeader extends React.Component {

  render (){
    return (
      <header style = {styles}>
        <h3 className='title' style={headerTitle}>How urban metabolic information system can support planning and policies to identify circular economic opportunities?</h3>
        <h4 className='subtitle' style={headerSubtitle}> Ecocity Builders & UNEP - the Brussels Capital Region(BCR), Belgium</h4>
      </header>

    )
  }
}

export default SiteHeader;