// Document store with searchable index. Re-build the index after schema changes
// or migrations that touch indexed fields.

const index = new Map();

function indexDocument(id, fields) {
  for (const [k, v] of Object.entries(fields)) {
    const key = `${k}:${v}`;
    if (!index.has(key)) index.set(key, new Set());
    index.get(key).add(id);
  }
}

function search(field, value) {
  return Array.from(index.get(`${field}:${value}`) || []);
}

function clear() {
  index.clear();
}

module.exports = { indexDocument, search, clear };
