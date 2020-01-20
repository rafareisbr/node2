DROP TABLE IF EXISTS "products" CASCADE;
DROP TABLE IF EXISTS "users" CASCADE;

CREATE TABLE IF NOT EXISTS "products" (
	"id" SERIAL,
	"name" VARCHAR(255),
	"userId" INTEGER REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" SERIAL,
	"name" VARCHAR(255),
	PRIMARY KEY("id")
);

INSERT INTO public.users (id, name) VALUES (DEFAULT, 'Rafael Reis');
INSERT INTO public.products (id, name, userId) VALUES (DEFAULT, 'Hillux', 1);

