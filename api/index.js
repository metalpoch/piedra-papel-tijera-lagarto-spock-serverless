import RULES from "../mock/rules.js"

export default function handler(_, res) {
  res.setHeader("Content-Type", "text/plain");
  res.send(RULES);
}
