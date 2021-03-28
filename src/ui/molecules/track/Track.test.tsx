import ReactDOM from 'react-dom'
import { Track } from './Track'

it('renders without crashing', () => {
  const div:HTMLDivElement = document.createElement('div')
  ReactDOM.render(<Track data={{}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
