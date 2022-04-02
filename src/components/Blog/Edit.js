import React, { Component } from 'react';
import firebase from '../Auth/firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      content: '',
      dateModified: '',
      author: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('posts').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const post = doc.data();
        this.setState({
          key: doc.id,
          title: post.title,
          content: post.content,
          dateModified: post.dateModified,
          author: post.author
        });
      } else {
        console.log("No such post!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({[post]:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, dateModified, content, author } = this.state;

    const updateRef = firebase.firestore().collection('posts').doc(this.state.key);
    updateRef.set({
      title,
      content,
      dateModified,
      author
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        dateModified: '',
        content: '',
        author: ''
      });
      this.props.history.push("/blog/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding post: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Edit Post
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Board List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="description">Date Updated:</label>
                <input type="date" class="form-control" name="dateModified" value={this.state.dateModified} onChange={this.onChange} placeholder="Update Content" />
              </div>
              <div class="form-group">
                <label for="description">Content:</label>
                <input type="text" class="form-control" name="description" value={this.state.content} onChange={this.onChange} placeholder="Update Content" />
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={this.state.author} onChange={this.onChange} placeholder="Author" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;