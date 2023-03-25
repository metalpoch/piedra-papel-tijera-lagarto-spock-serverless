import * as Sentry from "@sentry/node";
import "@sentry/tracing";

const dsn = process.env.SENTRY_DNS;

Sentry.init({
  dsn,
  tracesSampleRate: 1.0,
});

export default Sentry;
