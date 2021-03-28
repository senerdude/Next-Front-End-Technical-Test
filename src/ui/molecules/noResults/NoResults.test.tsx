import ReactDOM from 'react-dom'
import { NoResults } from './NoResults'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NoResults searchTerm="Test" />, div)
  ReactDOM.unmountComponentAtNode(div)
})
