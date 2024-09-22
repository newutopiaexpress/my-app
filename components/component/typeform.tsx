import { Popover, PopupButton } from '@typeform/embed-react'
import { useSearchParams } from 'next/navigation'



const handleOnReady = () => {
  // eslint-disable-next-line no-console
  console.log('form in popover ready')
}

export function Typeform() {


  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: 10,
    border: 'none',
    background: 'navy',
    color: 'white',
    fontSize: 16,
    cursor: 'pointer',
  }

  return (
    <main>
      <p>
        <PopupButton
          id="DqroYPcW"
          style={buttonStyle}
          size={66}
          medium="demo-test"
          hidden={{ foo: 'foo value', bar: 'bar value' }}
        >
          <span style={{ marginLeft: 10 }}>open popup</span>
        </PopupButton>
      </p>


    </main>
  )
}