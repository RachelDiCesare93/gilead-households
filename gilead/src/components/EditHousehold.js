import React, { Component } from 'react';
import './App.css';

class EditHousehold extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            households: props.households,
            household: {},
            handmaid: ''
        }
    }

    componentDidMount() {
    let householdID = this.props.match.params.id;
    const household = this.state.households.find(
        household => household.id ==== Number(householdID)
    );
    if (!household) return;
    this.setState({household})
    }

    handleSubmit = (event) => {
    event.preventDefault();
    const editedHousehold = {
        handmaid: this.state.handmaid
    }
    this.props.editHousehold(editedHousehold)
    }

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render () {
        return (
            <div className="edit-household">
            <h2>Edit Household</h2>
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleInputChange} type="text" name="handmaid" placeholder="Handmaid" value={this.state.handmaid}/>
            <button onClick={this.handleSubmit} onMouseUp={() => this.props.history.goBack()}>Edit</button>

            </form>
            </div>


        );
    }
}