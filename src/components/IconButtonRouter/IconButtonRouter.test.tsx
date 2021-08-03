import { render } from '@testing-library/react'
import IconButtonRouter from './IconButtonRouter'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'


test('renders IconButtonRouter', () => {
    const history = createMemoryHistory()

    const { container } = render(
        <Router history={history}>
            <IconButtonRouter to='./' />
        </Router>
    )

    expect(container).toBeInTheDocument()
})

test('IconButtonRouter should have link', () => {
    const history = createMemoryHistory()

    const { getByRole } = render(
        <Router history={history}>
            <IconButtonRouter to='./' />
        </Router>
    )

    expect(getByRole('link')).toBeInTheDocument()
})


