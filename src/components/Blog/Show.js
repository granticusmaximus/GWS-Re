import React, { Component } from 'react';
import firebase from '../Auth/firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('posts').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such post!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('posts').doc(id).delete().then(() => {
      console.log("Post successfully deleted!");
      this.props.history.push("/blog")
    }).catch((error) => {
      console.error("Error removing post: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/blog">Back to All Posts</Link></h4>
            <h3 class="panel-title">
              {this.state.post.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Author:</dt>
              <dd>{this.state.post.author}</dd>
              <dt>Date Modified:</dt>
              <dd>{this.state.post.dateModified}</dd>
              <dt>Content:</dt>
              <dd>{this.state.post.content}</dd>
              
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;