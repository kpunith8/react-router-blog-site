import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return this.props.posts.map(post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary' style={{ marginTop: 20, marginRight: 20 }}>
            Add a Post
          </Link>
        </div>
        <h3> List of posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.all,
    post: state.posts.post
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
