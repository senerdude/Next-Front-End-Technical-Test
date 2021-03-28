import ReactDOM from 'react-dom'
import { LoadingIndicator } from './LoadingIndicator'
import { render, screen } from '@testing-library/react'

it('renders without crashing', () => {
  const div:HTMLDivElement = document.createElement('div')
  ReactDOM.render(<LoadingIndicator />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders Loading text', () => {
  render(<LoadingIndicator />)
  const linkElement = screen.getByText(/Loading.../i)
  expect(linkElement).toBeInTheDocument()
})
