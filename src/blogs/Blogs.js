import React, { Component } from "react";
import Blog from "./Blog";
import { connect } from "react-redux";
import * as actions from "./store/action";
import WithLoading from "../HOC/WithLoading";
class Blogs extends Component {
  onClickShowUpdateForm = id => {
    const { history } = this.props;
    history.push(`/blogs/update/${id}`);
  };
  onClickShowUpdateFormAsync = id => {
    const { history } = this.props;
    history.push(`/blogs/update-async/${id}`);
  };

  render() {
    const { blogs, onRemoveBlog, onRemoveBlogAsync } = this.props;
    return (
      <div>
        {blogs.map(blog => {
          return (
            <Blog
              key={blog.id}
              onRemoveBlogAsync={() => onRemoveBlogAsync(blog.id)}
              onClickShowUpdateForm={() => this.onClickShowUpdateForm(blog.id)}
              onClickShowUpdateFormAsync={() =>
                this.onClickShowUpdateFormAsync(blog.id)
              }
              onRemoveBlog={() => onRemoveBlog(blog.id)}
              {...blog}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs.list,
    isLoading: state.blogs.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveBlog: id => {
      dispatch(actions.remove(id));
    },
    onRemoveBlogAsync: id => {
      dispatch(actions.removeAsync(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithLoading(Blogs));
