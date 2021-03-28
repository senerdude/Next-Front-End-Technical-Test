import ReactDOM from 'react-dom'
import { ScrollTop } from './ScrollTop'

it('renders without crashing', () => {
  const div:HTMLDivElement = document.createElement('div')
  ReactDOM.render(<ScrollTop />, div)
  ReactDOM.unmountComponentAtNode(div)
})