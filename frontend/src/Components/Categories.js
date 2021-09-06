import React, { Component } from 'react'


// I used class here because this component will rely on more of reacts specific class components
export default class Categories extends Component {
    state = {
        categories: []
    }

    // when this component mounts its setting up the json data in a way for react to read by fetching the data from the server
    componentDidMount = () => {
        fetch('http://localhost:9292/Category')
            .then(resp => resp.json())
            .then((categories) => this.setState({ categories }))
    }

    // this function maps through the array of categories setup by the fetch request and renders them into NewJob cards
    renderCategories = () => {
        return this.state.categories.map(({id, name}, ind) => (
            <div key={ind}>
            <h3>Category #{id} {name}</h3>    
            </div>
        ))
    }



    // this class componet renders the page in order
    render() {
        return (
            <div className='text-start text-success'>
               {this.renderCategories()}
            </div>
        )
    }



}
