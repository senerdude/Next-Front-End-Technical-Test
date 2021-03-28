import ReactDOM from 'react-dom'
import { Artist } from './Artist'

it('renders without crashing', () => {
  const div:HTMLDivElement = document.createElement('div')
  ReactDOM.render(<Artist data={{}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})