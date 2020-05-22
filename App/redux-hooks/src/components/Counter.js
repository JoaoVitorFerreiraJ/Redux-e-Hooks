import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles.css'

import  { actions } from '../actions/counter' 
import { selectors } from '../selectors/counter'

const Counter = () => {
    const counter = useSelector(selectors.getCounter)
    const dispatch = useDispatch()

    const handleDecrement = () => dispatch(actions.decrement())
    const handleIncrement = () => dispatch(actions.increment())


    return(
        <div className='counter-container'>
            <div onClick={handleIncrement} className='increment'>
                <h1>
                    Increment
                </h1>
            </div>
            <div className='counter'>
                <h1>{ counter }</h1>
            </div>
            <div onClick={handleDecrement} className='decrement'>
                <h1>
                    Decrement
                </h1>
            </div>      
        </div>    
    )
}

export default Counter
