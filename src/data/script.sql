DROP TABLE IF EXISTS "logins" CASCADE;
DROP TABLE IF EXISTS "users" CASCADE;
DROP TABLE IF EXISTS "products" CASCADE;
DROP TABLE IF EXISTS "orders" CASCADE;
DROP TABLE IF EXISTS "orderItems" CASCADE;

CREATE TABLE IF NOT EXISTS "users" (
	"id" SERIAL,
	"name" VARCHAR,
	"email" VARCHAR NOT NULL UNIQUE,
	PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "logins" (
	"id" SERIAL,
	"password" VARCHAR NOT NULL,
	"user_id" INTEGER REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "products" (
	"id" SERIAL,
	"name" VARCHAR UNIQUE,
	"price" DECIMAL NOT NULL,
	"user_id" INTEGER REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "orders" (
	"id" SERIAL,
	"user_id" INTEGER REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "order_itens" (
	"id" SERIAL,
	"quantity" INTEGER DEFAULT 0,
	"unit_price" DECIMAL NOT NULL,
	"product_id" INTEGER REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
	"order_id" INTEGER REFERENCES "orders" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("id")
);

INSERT INTO public.users (id, name, email)
	VALUES (DEFAULT, 'Rafael Reis', 'rafareisbr@gmail.com');

INSERT INTO public.logins (id, password, user_id)
	VALUES (DEFAULT, '123qweasd', 1);

INSERT INTO public.products (id, name, price, user_id)
	VALUES (DEFAULT, 'Hyundai HB20x', 35000, 1);

INSERT INTO public.orders (id, user_id)
	VALUES (DEFAULT, 1);

INSERT INTO public.order_itens (id, quantity, unit_price, product_id, order_id)
	VALUES (DEFAULT, 1, 35000, 1, 1);


// LOGIN
SELECT users.*, logins.password
FROM users LEFT JOIN logins ON users.id = logins.user_id;

// GET PRODUCT ITENS
SELECT *
FROM products 
INNER JOIN order_items ON products.id = order_items.product_id;