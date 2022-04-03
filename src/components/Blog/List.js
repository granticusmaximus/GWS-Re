import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from '../Auth/firebase';

class List extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('posts');
    this.unsubscribe = null;
    this.state = {
      posts: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      const { title, content, author, imageURL, dateModified } = doc.data();
      posts.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        content,
        author,
        imageURL,
        dateModified,
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Blog
            </h3>
          </div>
          <div class="panel-body">
            
                {this.state.posts.map(post =>
                  <div class="card" style="width: 18rem;">
                  <img class="card-img-top" src={imageURL} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">{post.title}</h5>
                    <p class="card-text">
                      <td>{post.dateModified}</td>
                      <td>{post.author}</td>
                    </p>
                    <Link className='btn btn-primary' to={`/blog/show/${post.key}`}>Read Post</Link>
                  </div>
                </div>
                )}
          </div>
        </div>
      </div>
    );
  }
}

export default List;