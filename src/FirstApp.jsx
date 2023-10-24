// propTypes define los tipos de propiedades

import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => {
  //   console.log(props);
  //   if (!title) {
  //     throw new Error("El título no existe");
  //   }
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
};
