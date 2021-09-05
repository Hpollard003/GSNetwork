import React, { Component } from 'react'

export default class CommentBox extends Component {

  // the class component constructor calls the super method to initialize the state and has props as an arguement
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      comment: ''
    }
  }

  changeHandler = (e) => {
    // below i set or render the new state of the name value with whatever is being input from the user
    this.setState({[e.target.name]: e.target.value})
  }

  // Submit Handler handles posting new inputs from the form rendered below
  submitHandler = (e) => {
    e.preventDefault()
    // // console.log(this.state)
    // axios.post('http://localhost:3001/comments', this.state)
    // // addComment is a function that takes props in this case it takes the resp data which contains new names and comment
    // .then(resp => this.props.addComment(resp.data))
    // .catch(error => console.error(error))
    // // below this I'm clearing the input fields on my form after execution
    // this.setState({
    //   name : "",
    //   comment : ""
    // })
  }
  
  render() {
    const {name, comment} = this.state
    return (
      <div className='text-start card m-2 bg-dark bg-gradient'>
          <h3>Write your comment below</h3>
        {/* this form takes the user id and comment from the user */}
        <form id='form1' onSubmit={this.submitHandler}>
          <div id='comment' className='col'>
            <input 
            type='text' 
            name='name' 
            placeholder='Codename' 
            value={name}
            onChange={this.changeHandler}
            />
          </div>
          <div id='comment' className='col'>
            <input 
            type='comment' 
            name='comment' 
            placeholder='Comments' 
            value={comment}
            onChange={this.changeHandler}
            />
          </div>
          <button className="btn btn-success" type='submit'>Post</button>
        </form>
      </div>
    )
  }
}
