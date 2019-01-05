import React from "react"

class Form extends React.Component {
    render() {
        return(
            <form>
                <h3>View Details</h3>
                <label>Name: <input type="text"></input></label>
                <label>Alias: <input type="text"></input></label>
                <label>Team: <input type="text"></input></label>
            </form>
        )
    }
}

export default Form;