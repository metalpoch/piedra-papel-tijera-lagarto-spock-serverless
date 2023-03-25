import * as Sentry from "@sentry/node";
import "@sentry/tracing";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

export default Sentry;
