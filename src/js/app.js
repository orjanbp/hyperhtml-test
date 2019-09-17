import hyperHTML from 'hyperhtml'
import jss from 'jss'
import preset from 'jss-preset-default'

import HelloWorld from './components/helloworld'
import ButtonCollection from './components/themed-button-collection'

jss.setup(preset())

let OrangeButtonCollection = {
  buttonPrimary: {
    'background-color': 'orange',
    'border-color': 'orange'
  }
}

let VioletButtonCollection = {
  buttonPrimary: {
    'background-color': 'Violet',
    'border-color': 'Violet'
  }
}

let rootContainer = hyperHTML.wire()`
  <div>
    ${HelloWorld}
    ${ButtonCollection()}
    ${ButtonCollection(OrangeButtonCollection)}
    ${ButtonCollection(VioletButtonCollection)}
  </div>
`

hyperHTML.bind(document.getElementById('root'))`
  ${rootContainer}
`
