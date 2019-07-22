import React, { Component } from "react";
import _ from "lodash";
import InputErrorMessage from "./InputErrorMessage";

import { connect } from "react-redux";
import * as actions from "./store/action";

class FormUpdate extends Component {
  state = {
    id: "",
    title: "",
    description: "",
    imageUrl: "",
    errors: null
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  verifyFormInputs = fromValues => {
    let errors = {};

    if (fromValues.title == "") {
      errors.title = "empty title !";
    }
    if (fromValues.description == "") {
      errors.description = "empty description !";
    }
    if (fromValues.imageUrl == "") {
      errors.imageUrl = "empty imageUrl !";
    }
    if (_.isEmpty(errors)) return null;
    else return errors;
  };

  onCancel = () => {
    this.props.history.push("/blogs/create");
  };

  onFormSubmit = event => {
    event.preventDefault();

    const verificationResult = this.verifyFormInputs(
      _.pick(this.state, ["title", "description", "imageUrl"])
    );
    if (!verificationResult) {
      debugger;
      this.props.onUpdateBlog(
        this.state.id,
        this.state.title,
        this.state.description,
        this.state.imageUrl
      );
      this.props.history.push("/blogs");
    }
    this.setState({ errors: verificationResult });
  };

  componentDidMount() {
    const { currentBlog } = this.props;
    this.setState({ ...currentBlog });
  }

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          title:
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.onInputChange}
          />
          <InputErrorMessage error={errors && errors.title} />
        </label>
        <br />
        <label>
          description:
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.onInputChange}
          />
          <InputErrorMessage error={errors && errors.description} />
        </label>
        <br />
        <label>
          imageUrl:
          <input
            name="imageUrl"
            type="text"
            value={this.state.imageUrl}
            onChange={this.onInputChange}
          />
          <InputErrorMessage error={errors && errors.imageUrl} />
        </label>
        <br />
        <input type="submit" value="update" />
        <button onClick={this.onCancel}>cancel</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateBlog: (id, title, description, imageUrl) => {
      dispatch(actions.update({ id, title, description, imageUrl }));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentBlog: _.cloneDeep(
      state.blogs.list.find(blog => blog.id == ownProps.match.params.id)
    )
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormUpdate);
