import React from "react";

import Column from "./column";

class Row extends React.Component{

    constructor(props) {
        super(props)
        this.onViewClick = this.onViewClick.bind(this)
    }

    onViewClick() {
    
    //     <form onSubmit={this.handleSubmit}>
    //     <label>
    //             Name:
    //             <input type="text" name="name" />
    //     </label>
    //         <input type="submit" value="Submit" />
    // </form>
        console.log(this.props.values)
        const Id = this.props.values[0]
        this.props.onViewClick(Id)
    }

    render() {
        const values = this.props.values;
        let renderedCols = values.map((val,index) => 
        <Column key = {index} isHeader= {this.props.isHeader}> {val} </Column>
        );

        let actionButton;
        if(this.props.isHeader) {
            actionButton = (<Column isHeader= {this.props.isHeader}> Action</Column> )
        } else {
            actionButton = (<Column isHeader= {this.props.isHeader} value = "button here"> <button onClick = {this.onViewClick} > Edit</button> </Column>)
        }
        return (<tr>{renderedCols}{actionButton}</tr>)
    }
}

export default Row;