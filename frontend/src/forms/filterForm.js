import React from 'react';

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.filter(this.state.value);
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <h3>Filter books</h3>
                <label>
                    Genre: <br/>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br/>
                <hr/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FilterForm;