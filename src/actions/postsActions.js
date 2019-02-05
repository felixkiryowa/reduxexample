
import { FETCH_POSTS, NEW_POST }  from './types';

export const fetchPosts = () => dispatch => {
     
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(
            posts => dispatch({
                type: FETCH_POSTS,
                payload:posts 
            })
        )
}


export const createPost = (postData) => dispatch => {
    console.log('Posting')
     
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(postData), // body data type must match "Content-Type" header
    })
    .then(response => response.json()).then(
        post => dispatch({
            type: NEW_POST,
            payload:post
        })
        
    ); // parses response to JSON
}

