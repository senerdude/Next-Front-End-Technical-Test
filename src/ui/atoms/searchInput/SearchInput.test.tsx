import ReactDOM from 'react-dom'
import { SearchInput } from './SearchInput'

it('renders without crashing', () => {
  const div:HTMLDivElement = document.createElement('div')
  ReactDOM.render(<SearchInput />, div)
  ReactDOM.unmountComponentAtNode(div)
})