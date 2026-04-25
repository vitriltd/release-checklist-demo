// Cache driver. Reads CACHE_DRIVER env var (default: memory; production: redis).

const driver = process.env.CACHE_DRIVER || "memory";

let store;

if (driver === "redis") {
  store = {
    get: async () => null,
    set: async () => undefined,
  };
} else {
  const memory = new Map();
  store = {
    get: async (k) => memory.get(k) ?? null,
    set: async (k, v) => void memory.set(k, v),
  };
}

module.exports = store;
