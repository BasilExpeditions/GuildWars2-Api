import React, { useState } from 'react';


// This components responsility is to save the API key for data requests on the account.
const BaseComponent = () => {

    const [api, setApi] = useState('')

    const handleChange = e => {
        e.preventDefault()
        setApi(e.target.value)
    }

    return (
        <div>
            <form>
                <h1>Enter your API key</h1>
                <label>Account API </label>
                <input type="text" placeholder="Enter Key" onChange={handleChange} />
                <button>Save</button>
                <h3>API: {api}</h3>
            </form>
        </div >
    )
}

export default BaseComponent;