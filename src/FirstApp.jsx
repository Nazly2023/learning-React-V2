const getResult = () => {
  return 4 + 4;
};

export const FirstApp = ({ title, subtitle }) => {
  //   console.log(props);
  if (!title) {
    throw new Error("El título no existe");
  }
  return (
    <>
      <h1>{title}</h1>
      <p>Ingeniera Agrícola</p>
    </>
  );
};
