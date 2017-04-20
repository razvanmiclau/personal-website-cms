import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form/immutable';

class Form extends PureComponent {
  render() {
    const { image, uploadImage } = this.props;
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="field">
          <label htmlFor="project-title">Project Title</label>
          <Field
            name="project_name"
            type="text"
            className="form-control"
            component="input"
            placeholder="Project Title" />
        </div>

        <div className="field">
          <label htmlFor="project_pic">Image URL</label>
          <input type="file" onClick={uploadImage} />
        </div>

        <div className="field">
          <img src={image} id="preview" className="img-responsive img-upload" />
        </div>

        <div className="field">
          <label htmlFor="project-description">Project Description</label>
          <Field
            name="project_desc"
            type="text"
            className="form-control"
            rows="3"
            component="textarea"
            placeholder="Project Description" />
        </div>
        <ul className="actions">
          <li>
            <input type="submit" type="submit" value="Submit Project" />
          </li>
        </ul>
      </form>
    )
  }
}

export default reduxForm({ form: 'project' })(Form);
