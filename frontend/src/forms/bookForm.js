import React from 'react';

class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '', description: '', genre: '', imageURL:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.className]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state),
        }
        fetch('http://localhost:8080/add_book', requestOptions).then(() => {})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Add book</h3>
                <label>
                    Title: <br/>
                    <input className={'title'} type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br/>

                <label>
                    ImageURL: <br/>
                    <input className={'imageURL'} type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <br/>
                <label>
                    Description: <br/>
                    <input className={'description'} type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Genre: <br/>
                    <input className={'genre'} type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br/>
                <hr/>

                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default BookForm;