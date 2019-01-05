import React from "react"
import Form from "../form/index"


class View extends React.Component {
    render() {
        return(
            <section>
                
                <h3>View Details</h3>
                <div>Name: {this.props.name}</div>
                <div>Alias: {this.props.alias}</div>
                <div>Team: {this.props.team}</div>
            </section>
        )
    }
}

export default View;