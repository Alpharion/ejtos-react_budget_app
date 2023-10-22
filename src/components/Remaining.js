import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const {remaining, currency} = useContext(AppContext);
    

    return (
        <div className='alert alert-primary'>
            Remaining: {currency}{remaining}
        </div>
    )
}

export default Remaining;
