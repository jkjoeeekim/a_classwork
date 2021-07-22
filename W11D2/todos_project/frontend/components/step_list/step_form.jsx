import React from 'react';

export default class StepForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            id: 5,
            done: false,
            todo_id: this.props.todo_id
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.saveStep = this.saveStep.bind(this);
    }

    updateTitle (e) {
        this.setState({title: e.target.value});
    }
    saveStep (e) {
        e.preventDefault();
        this.props.receiveStep(this.state);
        this.setState({ 
            title: "",
            id: this.state.id + 1,
            done: false,
            todo_id: this.props.todo_id
        });
    }

    render() {
        return (
            <form >
                <label>Title
                    <input type="text" name="title" value={this.state.title} onChange={this.updateTitle}/>
                </label>
                <input type="submit" value="Save Step" onClick={this.saveStep}/>
            </form>
        )
    }
}
