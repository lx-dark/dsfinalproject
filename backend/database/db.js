import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password123",
    database: "appigtech"
});

db.connect((err) => {
    if (err) {
      console.error("Erro ao conectar ao banco de dados:", err);
      return;
    }
    console.log("Conexão bem-sucedida ao banco de dados.");
  });