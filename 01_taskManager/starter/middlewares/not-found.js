const notFound = (req, res) => {
  res.status(404).send("Route doesnt't exist");
};

export default notFound;
