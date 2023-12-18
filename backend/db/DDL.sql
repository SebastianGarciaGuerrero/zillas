CREATE DATABASE zillas;

\c zillas;

CREATE TABLE usuarios (
    id SERIAL NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    nombreusuario VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE Productos (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(30) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10, 3) NOT NULL,
  img VARCHAR(255),
  usuario_id INT REFERENCES Usuarios(id)
);
