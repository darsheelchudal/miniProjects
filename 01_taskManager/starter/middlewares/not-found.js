const notFound = async (req, res) => {
  await res.status(404).send("Route doesnt't exist");
};

export default notFound;
