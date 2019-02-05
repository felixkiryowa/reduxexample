import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchPosts }  from '../actions/postsActions';

class Posts extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         all_posts:[]

    //     }
    // }


    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(
    //         data => {
    //             this.setState({
    //                 all_posts:data
    //             })
    //         }
    //     )
    // }

    componentWillMount() {
        this.props.fetchPosts();
    }


    componentWillReceiveProps (nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }

    }

  
  render() {

    const PostItems = this.props.posts.map((post) => {
        return <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    })
    return (
      <div>
           <h1>Posts</h1>
           <hr></hr>
           {PostItems}
      </div>
    )
  }
}

Posts.propTypes = {
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newPost:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   posts:state.posts.items,
   newPost:state.posts.item
})


export default connect(mapStateToProps, { fetchPosts })(Posts);

