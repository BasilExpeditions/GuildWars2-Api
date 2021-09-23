import react, { useState } from 'react';


// This components responsility is to save the API key for data requests on the account.
const BaseComponent = () => {

    const [api, setApi] = useState('')

    return (
        <div>
            <form action="onSubmit">
                <h1>Enter your API key</h1>
                <input type="text" />
                <button>Save</button>
            </form>
        </div>
    )
}

export default BaseComponent;