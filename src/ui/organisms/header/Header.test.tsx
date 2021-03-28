import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import { Header } from './Header'

it("renders without crashing", () => {
  shallow(<Header />)
})