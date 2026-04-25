-- Adds the invoices table linked to suppliers.
CREATE TABLE invoices (
  id UUID PRIMARY KEY,
  supplier_id UUID NOT NULL REFERENCES supplier(id),
  amount_cents BIGINT NOT NULL,
  currency CHAR(3) NOT NULL,
  received_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX invoices_supplier_idx ON invoices(supplier_id);
