DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	user_name TEXT,
	password TEXT,
	nric TEXT,
	nationality TEXT,
	phone_contact TEXT,
	email_contact TEXT
);

DROP TABLE IF EXISTS claims;

CREATE TABLE IF NOT EXISTS claims (
	id SERIAL PRIMARY KEY,
	category TEXT,
	amount INTEGER,
	user_name TEXT,
	valid boolean DEFAULT NULL
);

DROP TABLE IF EXISTS policies;

CREATE TABLE IF NOT EXISTS policies (
	id SERIAL PRIMARY KEY,
	type TEXT,
	amount INTEGER,
	user_name TEXT
);

