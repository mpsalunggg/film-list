import { render } from '@testing-library/react'
import Loading from '..'

describe('Loading Component', () => {
  it('renders Loading component with Ant Design loading spinner', () => {
    const { getByTestId } = render(<Loading />)

    const loadingComponent = getByTestId('loading-spinner')
    expect(loadingComponent).toBeInTheDocument()

    const antIcon = getByTestId('loading-icon')
    expect(antIcon).toBeInTheDocument()
  })
})
