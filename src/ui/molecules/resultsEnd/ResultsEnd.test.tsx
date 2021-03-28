import ReactDOM from 'react-dom'
import { ResultsEnd } from './ResultsEnd'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ResultsEnd />, div)
  ReactDOM.unmountComponentAtNode(div)
})
