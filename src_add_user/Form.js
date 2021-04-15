import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            job: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateNames({...this.state})
    }
    componentDidUpdate(){
        
    }
    render() {
        
        return (
            <form>
                <h2>Your name is: {this.state.name} <br/>
                And the job is: {this.state.job}
                </h2>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    onChange={this.handleChange}
                     />
                <label htmlFor="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    onChange={this.handleChange}
                     />
                <button type="submit" onClick={this.handleSubmit}>
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
