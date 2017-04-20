import React, { PureComponent } from 'react';

export default class Project extends PureComponent {

  render() {
    const { _id, index, project_name, project_desc, project_pic, deleteProject } = this.props;
    return(
      <section className="spotlight style1 orient-right image-position-right onload-image-fade-in onload-content-fade-right">
        <div className="content">
          <h3>{project_name}</h3>
          <p>{project_desc}</p>
          <ul className="actions small">
            <li>
              <button className="button special small" onClick={() => deleteProject(_id)}>Remove Project</button>
            </li>
          </ul>
        </div>
        <div className="image">
          <img className="img-rounded" src={project_pic} alt={project_name} />
        </div>
      </section>
    )
  }
}
