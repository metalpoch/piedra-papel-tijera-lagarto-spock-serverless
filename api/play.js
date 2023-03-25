import inputValidate from "../utils/inputValidate.js";
import Sentry from "../logs/sentry.js";

export default function handler(req, res) {
  if (req.method !== "GET") {
    Sentry.captureMessage("Se espetaba el método GET");
    res.status(405).json({ error: "Se espetaba el método GET" });
  } else {
    try {
      const data = inputValidate(req.query.hand);
      Sentry.captureMessage("serverless /api/play OK");
      res.json(data);
    } catch (error) {
      Sentry.captureException(error);
      res.status(400).json({ error: error.message });
    }
  }
}
