import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class NewPost extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h3> Add a post </h3>
        <form onSubmit={handleSubmit(this.props.createPost)}>
          <div className='form-group'>
            <label htmlFor="title">Title</label>
            <Field name="title" component="input" type="text" className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor="categories">Categories</label>
            <Field name="categories" component="input" type="text" className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor="content">Content</label>
            <Field name="content" component="textarea" type="email" className='form-control' />
          </div>
          <button type="submit" className='btn btn-primary'>Create Post</button>
        </form>
      </div>
    );
  }
}

//export default reduxForm({ form: 'NewPostForm' }, null, { createPost })(NewPost);

export default connect(null, { createPost })(reduxForm({
  form: 'NewPostForm'
})(NewPost));
