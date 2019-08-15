import s from 'c/core/ui-spacing.css.js'

export default {
  backgroundColor: 'black',
  color: 'white',
  display: 'block',
  height: s.UIspacing_100,
  margin: '0',
  overflow: 'hidden',
  fontSize: '20px',
  heighet:'3rem',
  padding: '0px 10px 0px 15px',
  '@media (max-width: 700px)': {
    backgroundColor: 'white'
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
