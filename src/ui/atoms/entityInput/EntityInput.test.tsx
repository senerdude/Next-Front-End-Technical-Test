import ReactDOM from 'react-dom'
import { EntityInput } from './EntityInput'

it('renders without crashing', () => {
  const div:HTMLDivElement = document.createElement('div')
  ReactDOM.render(<EntityInput />, div)
  ReactDOM.unmountComponentAtNode(div)
})