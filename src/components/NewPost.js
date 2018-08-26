import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required'
  } else if (values.title.length < 3) {
    errors.title = 'Must be 3 characters or more'
  }
  if (!values.categories) {
    errors.categories = 'Required'
  }
  if (!values.content) {
    errors.content = 'Required'
  } else if (values.content.length < 3) {
    errors.content = 'Must be 3 characters or more'
  }

  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  ...otherProps
}) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} {...otherProps} />
        {touched &&
          ((error && <div className='text-help'>{error}</div>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );

class NewPost extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = props => {
    this.props.createPost(props).then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div>
        <h3> Add a post </h3>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className='form-group'>
            <label htmlFor="title">Title</label>
            <Field name="title" component={renderField} type="text" className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor="categories">Categories</label>
            <Field name="categories" component={renderField} type="text" className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor="content">Content</label>
            <Field name="content" component="textarea" className='form-control' />
          </div>
          <button type="submit" disabled={submitting} className='btn btn-primary'>Create a Post</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

//export default reduxForm({ form: 'NewPostForm' }, null, { createPost })(NewPost);

export default connect(null, { createPost, fetchPosts })(reduxForm({
  form: 'NewPostForm',
  validate,
})(NewPost));
