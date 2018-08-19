import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary' style={{ marginTop: 20, marginRight: 20 }}>
            Add a Post
          </Link>
        </div>
        <p> List of posts</p>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
