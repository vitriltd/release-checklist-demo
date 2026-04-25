// Supplier invoice webhook handler.
// Verifies signatures using process.env.INVOICE_WEBHOOK_SECRET.

const crypto = require("crypto");

function verifySignature(rawBody, signatureHeader) {
  const secret = process.env.INVOICE_WEBHOOK_SECRET;
  if (!secret) throw new Error("INVOICE_WEBHOOK_SECRET not configured");
  const expected = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(signatureHeader || "")
  );
}

module.exports = { verifySignature };
