import React, { Component } from 'react'
import employees from "../assets/employees";
import Cards from "./cards";

export default class Container extends Component {

    // Setting up state
    constructor(props) {
        super(props);
        this.state = {
            list: employees,
        }
    }

    // Order the employee list by first name
    orderByName = () => {
        function compare(a, b) {
            const nameA = a.firstName.toUpperCase();
            const nameB = b.firstName.toUpperCase();
    
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        }
        
        // Set hte state to the new array
        let sorted = employees.sort(compare);
        this.setState({list: sorted })
    }


    // Order the list by last name
    orderByLast = () => {
        function compare(a, b) {
            const nameA = a.lastName.toUpperCase();
            const nameB = b.lastName.toUpperCase();
    
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        }
        
        // Set the state to the new array
        let sorted = employees.sort(compare);
        this.setState({list: sorted })
    }

    render() {
        return (
            <div>
                <div className={"container"}>
                    <div className="row">
                        <div className={"col-12 text-center"}>
                            <h1 className="jumbotron bg-info text-white display-1">Employee List</h1>
                            <div>
                                <h4>Filter by:</h4>
                                <hr/>
                                <div>
                                    <button type="button" className="btn btn-outline-primary mr-1 mb-4" onClick={this.orderByName}> First Name</button>
                                    <button type="button" className="btn btn-outline-primary mr-1 mb-4" onClick={this.orderByLast}> Last Name</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-12"}>
                            <ul className="list-group">
                                <Cards list={this.state.list} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

