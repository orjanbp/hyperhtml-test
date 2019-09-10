import hyperHTML from 'hyperhtml'

import HelloWorld from './components/helloworld'
import TimeTicker from './components/timeticker'

let rootContainer = hyperHTML.wire()`
  <div>
    ${HelloWorld}
    <span id='timeticker'>
    </span>
  </div>
`

hyperHTML.bind(document.getElementById('root'))`
  ${rootContainer}
`

setInterval(1000, TimeTicker(document.querySelector('#timeticker')))

