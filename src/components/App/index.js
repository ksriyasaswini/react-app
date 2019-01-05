import React from "react";

import Table from "./table/index";
import Incrementer from "./incrementer/index";
import Hello from "./hello";
import View from "./view/index";
import Form from "./form/index";

import  {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
}from 'react-router-dom'


const tableHeaders=['Id','Name', 'Alias', 'Team'];


class App extends React.Component {

    constructor(props) {
        super(props)
        this.createRecord = this.createRecord.bind(this)
    }

    state = {
        tableValues : [
            ['101','Tony Stark', 'Iron Man', 'Avengers'],
            ['102','Peter Parker', 'Spider Man', 'Avengers'],
            ['103','Bruce Mayne', 'Bat Man', 'Justice League']
        ]
    }
    createRecord(name, alias, team) {
        console.log(name, alias , team)
        const Id = (Math.random() * 100).toString()
        const newRecord = [Id, name, alias, team]
        //const newTableValues = this.state.tableValues.map(val => val)
        const newTableValues = [...this.state.tableValues]
        newTableValues.push(newRecord)
        this.setState({tableValues: newTableValues})
    }

    /*onViewClick(id) {
        console.log(id)
        const data = this.state.tableValues.find(val => val[0] ===id)
                    const newRecord = {
                    name: data[1],
                    alias: data[2],
                    team: data[3]
        }
        this.setState({ 
            selectedId: id,
            selectedRecord: newRecord
        })
    }*/
    
    render() {
        return (
            //<Hello/>
            //<Incrementer/>
           
            <Router>
                <Switch>
                    <Route exact path="/list" render = { (props) => {
                        return <Table 
                                    values = {this.state.tableValues} 
                                    headers = {tableHeaders} 
                                    history = {props.history}/>
                    }}/>

                    <Route exact path="/view/:id" render = { (props) => {
                        console.log(props)
                        const data = this.state.tableValues.find(val => val[0] === props.match.params.id)
                        const newRecord = {
                            name: data[1],
                            alias: data[2],
                            team: data[3]
                        }
                        return <View 
                                name = {newRecord.name}
                                alias = {newRecord.alias}
                                team = {newRecord.team}/>
                    }}/>

                    <Route exact path="/create" render = { (props) => {
                        console.log(props)
                        
                        return <Form formSubmitCallback = {this.createRecord}
                                        history = {props.history}/>

                    }}/>

                    <Redirect to="/list" />
                </Switch>              
            </Router>
        );
    }
} 

export default App; 