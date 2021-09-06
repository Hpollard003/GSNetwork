import React, { Component } from "react";
import Board from "./Board";
import NewJobForm from "./NewJobForm";

export default class Jobs extends Component {
  state = {
    jobs: [],
  };

  // when this component mounts its setting up the json data in a way for react to read by fetching the data from the server
  componentDidMount = () => {
    fetch("http://localhost:9292/Jobs")
      .then((resp) => resp.json())
      .then((jobs) => this.setState({ jobs }));
  };

  componentDidUpdate = () => {
    fetch("http://localhost:9292/Jobs")
    .then((resp) => resp.json())
    .then(data => {
        if(data.length === this.state.jobs.length){
            console.log(data)
        } else {
            this.setState({jobs: data})
        }
    });
    
  }

  handleClick = (event) => {
    fetch(`http://localhost:9292/concerts/${event.target.id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => this.setState({
            jobs: [...this.state.jobs], data
        }))
}


  addJob = (job) => {
    this.setState({jobs : this.state.jobs.concat(job)})
}

  renderJobs = () => {
    return this.state.jobs.map(({ id, name, price, location, desc}, ind) => (
      <Board className='row'
        key={ind}
        id={id}
        name={name}
        price={price}
        location={location}
        desc={desc}
        handleClick={this.handleClick}
      />
    ));
  };

  render() {
    return (
      <div className="card bg-dark bg-gradient container">
        <NewJobForm addJob={this.addJob}/>
        <div className='row'>
        {this.renderJobs()}
        </div>
      </div>
    );
  }
}
