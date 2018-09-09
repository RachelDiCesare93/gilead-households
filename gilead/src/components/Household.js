import React from 'react';



const Household = (props) => {
    return (
        <div>
            <h2>{props.household.lastname}</h2>
            <div className="household">
            <h3 className="commander">Commander: {props.household.commander}</h3>
            <h3 className="wife">Wife: {props.household.wife}</h3>
            <h3 className="handmaid">Handmaid: {props.household.handmaid}</h3>
            </div>
        </div>
    );
}

export default Household;