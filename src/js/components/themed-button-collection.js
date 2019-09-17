import hyperHTML from 'hyperhtml'
import _ from 'lodash'
import jss from 'jss'

import theme from './config-theme'

const mergeStyles = (base, extra) => {
  return extra ? _.merge(base, extra) : base
}

const buttonStyles = () => {
  return ({
    buttonPrimary: {
      display: 'inline-block',
      backgroundColor: `${theme.colorPrimary}`,
      padding: '10px 16px',
      border: `1px solid ${theme.colorPrimary}`,
      borderRadius: '4px',
      fontSize: '1.125rem',
      color: 'white'
    }
  })
}

function ButtonCollection(style = null) {
  let { classes } = jss
    .createStyleSheet(mergeStyles(buttonStyles(), style))
    .attach()

  return hyperHTML.wire()`
    <div style='margin-bottom:8px;'>
      <span class='${classes.buttonPrimary}'>Element</span>
      <span class='${classes.buttonPrimary}'>Element</span>
      <span class='${classes.buttonPrimary}'>Element</span>
      <span class='${classes.buttonPrimary}'>Element</span>
    </div>
  `
}

export default ButtonCollection
