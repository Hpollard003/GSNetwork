import React, { Component } from 'react'
import CommentBox from './Commentbox'
import Comment from './comment'


// I used class here because this component will rely on more of reacts specific class components
export default class Intel extends Component {
    state = {
        comments: []
    }

    // when this component mounts its setting up the json data in a way for react to read by fetching the data from the server
    componentDidMount = () => {
        fetch('http://localhost:9292/Intel')
            .then(resp => resp.json())
            .then((comments) => this.setState({ comments }))
    }

    // 
    addComment = (comment) => {
        this.setState({comments : this.state.comments.concat(comment)})
    }

    // this function maps through the array of comments setup by the fetch request and renders them into comment cards
    renderComments = () => {
        return this.state.comments.map(({ id, name, comment, job_id }, ind) => (
            <Comment className='card' key={ind}
                id={id}
                name={name}
                comment={comment}
                job_id={job_id}
            />
        ))
    }



    // this class componet renders the page in order
    render() {
        return (
            <div className='text-center'>
                <CommentBox addComment={this.addComment}/>
                <div>
                    {this.renderComments()}
                </div>
            </div>
        )
    }



}
