import React from 'react';
import Household from './Household';

const HouseholdList = (props) => {
    return <div>{props.householdsArray.map((each) => <Household household={each}/>)}</div>
}

export default HouseholdList;