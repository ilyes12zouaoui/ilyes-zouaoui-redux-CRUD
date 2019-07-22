import React, { Component } from "react";

import { withRouter } from "react-router-dom";

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      title,
      description,
      imageUrl,
      onRemoveBlog,
      onRemoveBlogAsync,
      onClickShowUpdateForm,
      onClickShowUpdateFormAsync
    } = this.props;
    return (
      <div className="card">
        <div className="card-img-container">
          <img className="card-img" src={imageUrl} />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={onClickShowUpdateForm}>update</button>
        <button onClick={onClickShowUpdateFormAsync}>update async</button>
        <button onClick={onRemoveBlog}>delete</button>
        <button onClick={onRemoveBlogAsync}>delete async</button>
      </div>
    );
  }
}

export default Blog;
