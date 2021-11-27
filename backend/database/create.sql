create database app;
\c app
create schema pfweb;

create table pfweb.item (
	id serial primary key,
	category text,
	description text,
	price numeric,
	width integer,
	height integer,
	length integer,
	weight integer
);

insert into pfweb.item (category, description, price, width, height, length, weight) values ('Instrumentos Musicais', 'Guitarra', 1000, 100, 50, 15, 3);
insert into pfweb.item (category, description, price, width, height, length, weight) values ('Instrumentos Musicais', 'Amplificador', 5000, 50, 50, 50, 22);
insert into pfweb.item (category, description, price, width, height, length, weight) values ('Acessórios', 'Cabo', 30, 10, 10, 10, 1);

create table pfweb.order (
	id serial,
	code text,
	cpf text,
	issue_date timestamp,
	freight numeric,
	serial integer,
	primary key (id)
);

create table pfweb.order_item (
	id_order integer,
	id_item integer,
	price numeric,
	quantity integer,
	primary key (id_order, id_item)
);

create table pfweb.stock_entry (
	id serial primary key,
	id_item integer,
	operation text,
	quantity integer,
	date timestamp default now()
);

insert into pfweb.stock_entry (id_item, operation, quantity) values (1, 'in', 10);
insert into pfweb.stock_entry (id_item, operation, quantity) values (2, 'in', 10);
insert into pfweb.stock_entry (id_item, operation, quantity) values (3, 'in', 10);