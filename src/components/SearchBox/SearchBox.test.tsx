import { fireEvent, render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import SearchBox from './SearchBox'


test('renders SearchText', () => {
    const history = createMemoryHistory()

    const { container, getByRole, getByTestId } = render(
        <Router history={history}>
            <SearchBox />
        </Router>
    )

    expect(container).toBeInTheDocument()
    expect(getByTestId('searchForm')).toBeInTheDocument()
    expect(getByRole('textbox')).toBeInTheDocument()
    expect(getByRole('button', {
        name: /search/i
    })).toBeInTheDocument()

})
test('search something by submitting form', async () => {

    const history = createMemoryHistory()

    const { getByRole } = render(
        <Router history={history}>
            <SearchBox />
        </Router>
    )

    const searchButton = getByRole('button', {
        name: /search/i
    })
    const searchInput = getByRole('textbox', {
        name: /search/i
    })

    fireEvent.change(searchInput, { target: { value: 'godfather' } })
    expect(searchInput).toHaveValue('godfather')

    await fireEvent.click(searchButton)
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe('/search');
    expect(history.location.search).toBe('?q=godfather')
})








