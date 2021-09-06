import React, { Component } from 'react'
import Board from './Board'
import NewJobForm from './NewJobForm'


export default class Jobs extends Component {
    state = {
        jobs: []
    }

    // when this component mounts its setting up the json data in a way for react to read by fetching the data from the server
    componentDidMount = () => {
        fetch('http://localhost:9292/Jobs')
            .then(resp => resp.json())
            .then((jobs) => this.setState({ jobs }))
    }

    renderJobs = () => {
        return this.state.jobs.map(({ id, name, price, location, desc}, ind) => (
            <Board className='card' key={ind}
                id={id}
                name={name}
                price={price}
                location={location}
                desc={desc}  
                onClick={this.handleClick} 
            />
        ))
    }

    addJob = (job) => {
        this.setState({jobs : this.state.comments.concat(job)})
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <NewJobForm classname='card' addJob={this.addJob}/>
                    {this.renderJobs()}
                </div>
            </div>
        )
    }
}