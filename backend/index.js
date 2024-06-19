import express from "express";
import servicesRoutes from "./routes/servicesRoutes.js";
import customersRoutes from "./routes/customersRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/services", servicesRoutes);
app.use("/customers", customersRoutes);
app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800");
});
