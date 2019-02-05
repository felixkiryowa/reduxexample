import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createPost } from '../actions/postsActions'

class PostsForm extends Component {

    constructor() {
        super();

        this.state = {
            title:"",
            body:""
        }
    }

  handleChange = (event) => {
      const {name, value}  = event.target;
        this.setState({
            [name]:value
        })
  }

  handleSubmit = (event) => {
      const post = {
          title:this.state.title,
          body:this.state.body
      }
      event.preventDefault();

    //   fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: "POST", // *GET, POST, PUT, DELETE, etc.
    //     mode: "cors", // no-cors, cors, *same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: "same-origin", // include, *same-origin, omit
    //     headers: {
    //         "Content-Type": "application/json",
    //         // "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     redirect: "follow", // manual, *follow, error
    //     referrer: "no-referrer", // no-referrer, *client
    //     body: JSON.stringify(this.state), // body data type must match "Content-Type" header
    // })
    // .then(response => response.json()).then(data => console.log(data)); // parses response to JSON

    // Call to action
    this.props.createPost(post);



  }

  render() {
    return (
      <div>
          <h1>Add Post</h1>
          <form  onSubmit={this.handleSubmit}>
             <div>
                  <label>Title :</label>
                  <br></br>
                  <input type="text" name="title" value={this.state.title} 
                  onChange={this.handleChange} placeholder="Enter Post Title"/>
                  <br></br>
                  <br></br>
                  <label>Body :</label>
                  <br></br>
                  <textarea name="body" value={this.state.body}  onChange={this.handleChange}>
                       Enter Post Body.......
                  </textarea>
                  <br></br>
                  <br></br>
                  <br></br>
                  <button type="submit">Submit</button>
             </div> 
          </form>
          <p>{this.state.title}</p>
          <p>{this.state.body}</p>
      </div>
    )
  }
}

PostsForm.propTypes = {
    createPost:PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostsForm);
