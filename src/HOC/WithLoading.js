import React from "react";
export default Component => ({ isLoading, ...props }) => {
  if (isLoading) return <div>Loading...</div>;
  return <Component {...props} />;
};
