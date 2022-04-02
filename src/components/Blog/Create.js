import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
      description: '',
      author: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, content, dateModified, author } = this.state;

    this.ref.add({
      title,
      content,
      dateModifieddateModifieddateModifieddateModified,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        content: '',
        dateModified: '',
        author: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding post: ", error);
    });
  }

  render() {
    const { title, content, dateModified, author } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add Post
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="title">Date Created:</label>
                <input type="date" class="form-control" name="dateModified" value={dateModified} onChange={this.onChange} placeholder="Date Created" />
              </div>
              <div class="form-group">
                <label for="description">Content:</label>
                <textArea class="form-control" name="content" onChange={this.onChange} placeholder="Enter Content Here" cols="80" rows="3">{content}</textArea>
              </div>
              <div class="form-group">
                <label for="author">Author:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;