import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Service from "./Service";
import "../styles/Global.css";
import "../styles/Form.css";

const ServicesForm = ({ getServices, onEdit, setOnEdit }) => {
  const [service, setService] = useState(new Service());
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:8800/customers");
        console.log("Clientes buscados:", response.data);
        setClients(response.data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        toast.error("Erro ao buscar clientes.");
      }
    };

    fetchClients();
  }, []);

  useEffect(() => {
    if (onEdit) {
      console.log("Editando serviço:", onEdit);
      setService(
        new Service(
          onEdit.customerdata_idcustomer,
          onEdit.description,
          onEdit.scheduledate,
          onEdit.scheduletime,
          onEdit.priority,
          onEdit.servicevalue
        )
      );
    } else {
      setService(new Service());
    }
  }, [onEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prevService) => {
      const updatedService = new Service(
        prevService.customerdata_idcustomer,
        prevService.description,
        prevService.scheduledate,
        prevService.scheduletime,
        prevService.priority,
        prevService.servicevalue
      );
      updatedService[name] = value;
      console.log("Valor atualizado do serviço:", updatedService);
      return updatedService;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /**/
    for (const key in service) {
      if (!service[key]) {
        return toast.warn("Preencha todos os campos!");
      }
    }
    /**/

    console.log("Dados do serviço ao enviar:", service);
    try {
      if (onEdit) {
        await axios.put(`http://localhost:8800/services/${onEdit.idservice}`, {
          customerdata_idcustomer: service.customerdata_idcustomer,
          description: service.description,
          scheduledate: service.scheduledate,
          scheduletime: service.scheduletime,
          priority: service.priority,
          servicevalue: service.servicevalue
        });
        console.log("Serviço atualizado com sucesso!");
        toast.success("Serviço atualizado com sucesso!");
      } else {
        await axios.post("http://localhost:8800/services", {
          customerdata_idcustomer: service.customerdata_idcustomer,
          description: service.description,
          scheduledate: service.scheduledate,
          scheduletime: service.scheduletime,
          priority: service.priority,
          servicevalue: service.servicevalue
        });
        console.log("Serviço agendado com sucesso!");
        toast.success("Serviço agendado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      toast.error(`Erro ao salvar os dados: ${error.response.data}`);
    }

    setService(new Service());
    setOnEdit(null);
    getServices();
  };

  return (
    <form onSubmit={handleSubmit} className="form__container">
      <div className="form__title">
        <h2>agendar serviço</h2>
      </div>
        <div className="form__input">
          <label>Cliente</label>
          <select
            name="customerdata_idcustomer"
            value={service.customerdata_idcustomer}
            onChange={handleChange}
          >
            <option value="">Selecione um cliente</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name} - {client.cpf}
              </option>
            ))}
          </select>
          <label>Descrição do Serviço</label>
          <input
            name="description"
            value={service.description}
            type="text"
            onChange={handleChange}
          />
          <label>Data do Agendamento</label>
          <input
            name="scheduledate"
            value={service.scheduledate}
            type="date"
            onChange={handleChange}
          />
          <label>Horario do Agendamento</label>
          <input
            name="scheduletime"
            value={service.scheduletime}
            type="time"
            onChange={handleChange}
          />
          <label>Prioridade do Serviço</label>
          <select
            name="priority"
            value={service.priority}
            onChange={handleChange}
          >
            <option value="">Selecione a prioridade</option>
            <option value="Alta">Alta</option>
            <option value="Média">Média</option>
            <option value="Baixa">Baixa</option>
          </select>
          <label>Valor do Serviço</label>
          <input
            name="servicevalue"
            value={service.servicevalue}
            type="text"
            onChange={handleChange}
          />
        </div>
      <div className="form__button">
        <button type="submit">agendar</button>
      </div>
    </form>
  );
};

export default ServicesForm;
