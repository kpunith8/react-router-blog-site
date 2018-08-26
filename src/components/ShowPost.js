import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class ShowPost extends Component {
  // Check for props on load, react-router-dom adds default props on load
  // Use HOC to the main router using, withRouter to pass all the props to it
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  onDelete = () => {
    this.props.deletePost(this.props.match.params.id).then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return (<p>Loading...</p>);
    }

    return (
      <div>
        <Link to='/'>Back to posts</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDelete}>Delete</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.posts.post,
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost);
