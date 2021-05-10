DROP TABLE IF EXISTS accounts CASCADE;
CREATE TABLE accounts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  currency VARCHAR(255) NOT NULL,
  balance_cents INTEGER DEFAULT 0
); 