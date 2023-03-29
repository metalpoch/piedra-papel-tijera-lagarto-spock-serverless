import inputValidate from "../utils/inputValidate.js";
import Sentry from "../logs/sentry.js";

export default function handler(req, res) {
  if (req.method !== "GET")
    res.status(405).json({ error: "Se esperaba el método GET" });
  try {
    const data = inputValidate(req.query.hand);
    res.json(data);
  } catch (error) {
    Sentry.captureException(error);
    res.status(400).json({ error: error.message });
  }
}
