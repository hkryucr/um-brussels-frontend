import s from 'c/core/ui-spacing.css.js'

export default {
  backgroundColor: 'black',
  display: 'block',
  height: '115px',
  margin: '0',
  overflow: 'hidden',
  fontSize: '20px',

  justifyContent: 'space-between',
  // minHeight: "60px",
  heighet:'3rem',
  padding: '0px 10px 0px 15px',
  fontFamily: 'open_sanssemibold, sans-serif',
  color: 'white',
  '& .UIHeading': {
    color: 'mintGreen',
  }
}; 

export const headerTitle = {
  height: s.UISpacing_24,
  marginTop: s.UISpacing_14,
  paddingTop: s.UISpacing_4,
  fontSize: s.UISpacing_20,
  fontWeight: '400',
  textAlign: 'left',
  overflow: 'hidden', 
}

export const headerSubtitle = {
  height: s.UISpacing_24,
  paddingTop: s.UISpacing_4,
  fontSize: s.UISpacing_12,
  fontWeight: '200',
  textAlign: 'left',
  overflow: 'hidden',
  color: '#C5D5D5'
}
