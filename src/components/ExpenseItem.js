import React, {useContext} from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../context/AppContext'

export default function ExpenseItem(props) {
    const {currency, dispatch} = useContext(AppContext)

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }
    const handleDelete = (name) => {
        const expense = {
            name: name,
            cost: 10
        }
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        })
    }
  return (
    <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <button onClick={(e) => increaseAllocation(props.name)}>+</button>
        </td>
        <td>
            <TiDelete size='1.5em' onClick={(e) => handleDelete(props.name)}/>
        </td>
    </tr>
  )
}
