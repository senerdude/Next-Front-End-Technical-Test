import ReactDOM from 'react-dom'
import { Album } from './Album'

it('renders without crashing', () => {
  const div:HTMLDivElement = document.createElement('div')
  ReactDOM.render(<Album data={{}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})