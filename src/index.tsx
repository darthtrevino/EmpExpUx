import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { initializeIcons } from '@uifabric/icons'
import 'office-ui-fabric-react/dist/css/fabric.css'
initializeIcons()

ReactDOM.render(<App />, document.getElementById('root'))
