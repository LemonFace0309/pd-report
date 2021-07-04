let value = 0;

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return res.status(200).json({ value });
    case "POST":
      value += 1;
      return res.status(200).json({ value });
    default:
      return;
  }
};
