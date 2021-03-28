import ReactDOM from 'react-dom'
import { SearchButton } from './SearchButton'

it('renders without crashing', () => {
  const div:HTMLDivElement = document.createElement('div')
  ReactDOM.render(<SearchButton />, div)
  ReactDOM.unmountComponentAtNode(div)
})