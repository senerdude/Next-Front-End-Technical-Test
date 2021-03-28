import ReactDOM from 'react-dom'

import Home from './Home'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

it('renders without crashing', () => {
  const div:HTMLDivElement = document.createElement('div')
  ReactDOM.render(<Provider store={store}><Home /></Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
