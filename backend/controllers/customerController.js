import { db } from "../database/db.js";

export const getCustomers = (_, res) => {
  const q = "SELECT * FROM customerdata";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Erro ao buscar clientes:", err);
      return res.status(500).json({ error: "Erro ao buscar clientes." });
    }
    return res.status(200).json(data);
  });
};

export const addCustomer = (req, res) => {
  const { name, cpf, phonenumber, cep, street, neighborhood, city, state, housenumber } = req.body;

  if (!name || !cpf || !phonenumber || !cep || !street || !neighborhood || !city || !state || !housenumber) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const q = "INSERT INTO customerdata (`name`, `cpf`, `phonenumber`, `cep`, `street`, `neighborhood`, `city`, `state`, `housenumber`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [name, cpf, phonenumber, cep, street, neighborhood, city, state, housenumber];

  db.query(q, values, (err) => {
    if (err) {
      console.error("Erro ao adicionar cliente:", err);
      return res.status(500).json({ error: "Erro ao cadastrar cliente." });
    }

    return res.status(200).json("Cliente cadastrado com sucesso.");
  });
};

export const updateCustomer = (req, res) => {
  const q = "UPDATE customerdata SET `name` = ?, `cpf` = ?, `phonenumber` = ?, `cep` = ?, `street` = ?, `neighborhood` = ?, `city` = ?, `state` = ?, `housenumber` = ? WHERE `id` = ?";

  const values = [
    req.body.name,
    req.body.cpf,
    req.body.phonenumber,
    req.body.cep,
    req.body.street,
    req.body.neighborhood,
    req.body.city,
    req.body.state,
    req.body.housenumber
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) {
      console.error("Erro ao atualizar cliente:", err);
      return res.status(500).json({ error: "Erro ao atualizar cliente." });
    }
    return res.status(200).json("Cliente atualizado com sucesso.");
  });
};

export const deleteCustomer = (req, res) => {
  const customerId = req.params.id;
  const q = "DELETE FROM customerdata WHERE `id` = ?";

  db.query(q, [customerId], (err) => {
    if (err) {
      console.error("Erro ao deletar cliente:", err);
      return res.status(500).json({ error: "Erro ao deletar cliente." });
    }

    return res.status(200).json("Cliente deletado com sucesso.");
  });
};
