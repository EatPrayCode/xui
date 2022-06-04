
const defaultFn = fn => async (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ status: 200 });
  }
  else if (req.method === "POST") {
    res.status(200).json({ status: 200 });
  }
  else if (req.method === "OPTIONS") {
    res.status(200).json([]);
  }
  else {
    res.status(404).json({ status: 404 });
  }
}

const handler = (data, context) => {
  const d = new Date();
  res.end(d.toString());
}

module.exports = defaultFn(handler);