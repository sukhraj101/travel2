import { setupCounter } from './counter.js'
import './style.scss'

document.querySelector('#app').innerHTML = `<h1>My Travel</h1>`

setupCounter(document.querySelector('#counter'))
