import { build, fake } from '@jackfranklin/test-data-bot'
import { render } from '@testing-library/react'
import NoItem, { NoItemProps } from './NoItem'

const noItemBuilder = build<NoItemProps>('', {
    fields: {
        text: fake((f) => f.lorem.words(10)),
    },
})
test('renders NoItem', () => {
    const data = noItemBuilder()

    const { container, getByText } = render(
        <NoItem {...data} />
    )

    expect(container).toBeInTheDocument()

    expect(getByText(data.text)).toBeInTheDocument()

    expect(container.querySelector('svg')).toBeInTheDocument()
})




