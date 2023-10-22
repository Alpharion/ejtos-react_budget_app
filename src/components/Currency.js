import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

export default function Currency() {
    const {currency, dispatch} = useContext(AppContext);

  return (
    <select className='custom-select' onChange={(e) => dispatch({
        type: 'CHG_CURRENCY',
        payload: e.target.value
    })}>
        <option hidden defaultValue>{currency} Currency</option>
        <option value='$'>$ Dollar</option>
        <option value='£'>£ Pound</option>
        <option value='€'>€ Euro</option>
        <option value='₹'>₹ Ruppee</option>

    </select>
  )
}
