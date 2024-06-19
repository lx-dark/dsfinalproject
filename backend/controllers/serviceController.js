import { db } from "../database/db.js";

export const getServices = (_, res) => {
  const q = "SELECT * FROM servicedata";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addService = (req, res) => {
  const q = "INSERT INTO servicedata (`customerdata_idcustomer`, `description`, `scheduledate`, `scheduletime`, `priority`, `servicevalue`) VALUES (?, ?, ?, ?, ?, ?)";

  const values = [
    req.body.customerdata_idcustomer,
    req.body.description,
    req.body.scheduledate,
    req.body.scheduletime,
    req.body.priority,
    req.body.servicevalue
  ];

  db.query(q, values, (err) => {
    if (err) {
      console.error("Erro ao criar serviço:", err);
      return res.status(500).json({ error: "Erro ao criar serviço." });
    }

    return res.status(200).json({ message: "Serviço criado com sucesso." });
  });
};

export const updateService = (req, res) => {
  const q =
    "UPDATE servicedata SET `customerdata_idcustomer` = ?, `description` = ?, `scheduledate` = ?, `scheduletime` = ?, `priority` = ?, `servicevalue` = ? WHERE `idservice` = ?";

  const values = [
    req.body.customerdata_idcustomer,
    req.body.description,
    req.body.scheduledate,
    req.body.scheduletime,
    req.body.priority,
    req.body.servicevalue
  ];

  db.query(q, [...values, req.params.idservice], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Serviço atualizado com sucesso.");
  });
};

export const deleteService = (req, res) => {
  const q = "DELETE FROM servicedata WHERE `idservice` = ?";

  db.query(q, [req.params.idservice], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Serviço deletado com sucesso.");
  });
};
