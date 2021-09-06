import React, { Component } from 'react'
import Categories from './Categories'



export default class NewJobForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      price: "",
      location: "",
      desc: "",
      category_id: ""
    }
}

  changeHandler = (e) => {
    // below i set or render the new state of the name value with whatever is being input from the user
    this.setState({[e.target.name]: e.target.value})
  }

  
  handleFormSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:9292/Jobs', {
      method: 'POST',
      headers: {
          'Content-type' : 'application/json',
          'Accept' : 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        price: this.state.price,
        location: this.state.location,
        desc: this.state.desc,
        category_id: this.state.category_id
      })
  })
    .then(response => response.json())
    .then(data => this.props.addJob(data))
    .catch(error => console.error(error))
    this.setState({
      name: "",
      price: "",
      location: "",
      desc: "",
      category_id: ""
    })
    
}


  render() {
    const {name, price, location, desc, category_id} = this.state
    return (
      <div>
          <h3>Post New Jobs Below</h3>
        {/* this form takes the user id and comment from the user */}
        <form id='form1' onSubmit={this.handleFormSubmit}>
          <div id='name' className='col'>
            <input 
            type='text' 
            name='name' 
            placeholder='Mission Codename' 
            value={name}
            onChange={this.changeHandler}
            />
          </div>
          <div id='reward' className='col'>
            <input 
            type='text' 
            name='price' 
            placeholder='Reward Value' 
            value={price}
            onChange={this.changeHandler}
            />
          </div>
          <div id='location' className='col'>
            <input 
            type='text' 
            name='location' 
            placeholder='Country' 
            value={location}
            onChange={this.changeHandler}
            />
          </div>
          <div id='description' className='col'>
            <input 
            type='text' 
            name='desc' 
            placeholder='Brief Description' 
            value={desc}
            onChange={this.changeHandler}
            />
          </div>
          <div id='category' className='col'>
            <input 
            type='text' 
            name='category_id' 
            placeholder='Category#' 
            value={category_id}
            onChange={this.changeHandler}
            />
          </div>
          <button className="btn btn-success" type='submit'>Post</button>
        </form>
        <Categories/>
      </div>
    )
  }
}
