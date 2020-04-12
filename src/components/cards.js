import React from 'react'

function cards(props) {
    // Using map to go through the list of employees and return an li for each
     let eList = props.list.map(employee => {
        return(
        <li className={"list-group-item"} key={employee.id}>
            <h5>Name: { employee.firstName + " " + employee.lastName }</h5>
            <hr/>
            <h6>Role: { employee.role}</h6>
            <hr/>
            <h6>Phone: { employee.phoneNumber}</h6>
            <hr/>
            <h6>Email: { employee.email}</h6>
        </li>
        )
    });
    // Return the results of the map to the parent component
    return (
        <div>
            {eList}
        </div>
    )
}

export default cards;
