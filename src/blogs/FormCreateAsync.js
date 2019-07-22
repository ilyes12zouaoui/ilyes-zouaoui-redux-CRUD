import React, { Component } from "react";
import _ from "lodash";
import InputErrorMessage from "./InputErrorMessage";
import { generateUniqueId } from "../utilities/utilities";

import { connect } from "react-redux";
import * as actions from "./store/action";
class FormCreate extends Component {
  state = {
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

  onFormSubmit = event => {
    event.preventDefault();

    const verificationResult = this.verifyFormInputs(
      _.pick(this.state, ["title", "description", "imageUrl"])
    );

    if (!verificationResult) {
      this.props.onCreateBlog(
        generateUniqueId(),
        this.state.title,
        this.state.description,
        this.state.imageUrl
      );

      this.props.history.push("/blogs");
    }
    this.setState({ errors: verificationResult });
  };

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
        <input type="submit" value="create async" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateBlog: (id, title, description, imageUrl) => {
      dispatch(actions.createAsync({ id, title, description, imageUrl }));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FormCreate);
