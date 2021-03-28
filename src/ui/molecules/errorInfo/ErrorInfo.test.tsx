import ReactDOM from 'react-dom'
import { ErrorInfo } from './ErrorInfo'

it('renders without crashing', () => {
  const div:HTMLDivElement = document.createElement('div')
  ReactDOM.render(<ErrorInfo errorText="Error" />, div)
  ReactDOM.unmountComponentAtNode(div)
})