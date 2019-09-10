import hyperHTML from 'hyperhtml'

function TimeTicker (node) {
    hyperHTML.bind(node)`
        <h2>It is ${new Date().toLocaleTimeString()}.</h2>
    `
}

export default TimeTicker
