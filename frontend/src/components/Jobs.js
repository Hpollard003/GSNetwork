import React, { Component } from 'react'
import Board from './Board'

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
        return this.state.jobs.map(({ id, name, price, location, desc }, ind) => (
            <Board className='card' key={ind}
                id={id}
                name={name}
                price={price}
                location={location}
                desc={desc}
            />
        ))
    }

    render() {
        return (
            <div className='text-center'>
                <div>
                    {this.renderJobs()}
                </div>
            </div>
        )
    }
}