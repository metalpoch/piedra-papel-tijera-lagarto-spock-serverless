import inputValidate from "../utils/inputValidate.js";
import Sentry from "../logs/sentry.js";

export default function handler(req, res) {
  const transaction = Sentry.startTransaction({
    op: "test",
    name: "Serverless /play endpoint",
  });

  if (req.method !== "GET") {
    Sentry.captureMessage("Se esperaba el método GET");
    res.status(405).json({ error: "Se esperaba el método GET" });
  }
  else {
    try {
      const data = inputValidate(req.query.hand);
      Sentry.captureMessage("serverless /api/play OK");
      res.json(data);
    }
    catch (error) {
      Sentry.captureException(error);
      res.status(400).json({ error: error.message });
    }
    finally {
      transaction.finish();
    }
  }
}
