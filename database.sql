-- These two lines make it so that every single SQL query in
-- this file can be ran all at once to "reset" the database:
DROP TRIGGER IF EXISTS "on_things_update" ON "things";
DROP TABLE IF EXISTS "things";

-- Table Schema Template:
CREATE TABLE "us" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(500) NOT NULL,
  "is_Hungry?" BOOLEAN,
  "inserted_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Seed Data Template:
INSERT INTO "us"
  ("name", "is_Hungry?")
  VALUES
  ('Mustafe', true),
  ('Mahad', true),
  ('Lexi', true),
  ('Heather', false);
  
