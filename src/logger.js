// Lightweight logger wrapper. Stub for the demo — swap for pino/winston in real use.

function log(level, msg, fields = {}) {
  const entry = { level, msg, time: new Date().toISOString(), ...fields };
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(entry));
}

module.exports = {
  info: (msg, fields) => log("info", msg, fields),
  warn: (msg, fields) => log("warn", msg, fields),
  error: (msg, fields) => log("error", msg, fields),
};
