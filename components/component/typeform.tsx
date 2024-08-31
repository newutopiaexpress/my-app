import PropTypes from 'prop-types'
import { Widget } from '@typeform/embed-react'
import { Popover } from '@typeform/embed-react'

const handleOnReady = () => {
    // eslint-disable-next-line no-console
    console.log('form ready')
  }

export function Typeform({ id = '01J6JM9F4433ZNF4Q4W07AX515' }) {
  const widgetContainerStyle = {
    width: '100%',
    height: 400,
    margin: '0px auto',
  }

  return (
    <div>
        <Popover
        id={id}
        onReady={handleOnReady}
        medium="demo-test"
        hidden={{ foo: 'foo value', bar: 'bar value' }}
        buttonProps={{ ariaLabel: 'Typeform Button', dataTestid: 'demo-button' }}
        tooltip="welcome"
      />
    </div>
  )
}

Typeform.propTypes = {
  id: PropTypes.string,
}