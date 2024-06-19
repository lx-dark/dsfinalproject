import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "../styles/Global.css";
import "../styles/Grid.css";

const CustomerGrid = ({ customers, setCustomers, setOnEdit, setShowForm, setShowList }) => {
  const handleEdit = (customer) => {
    setOnEdit(customer);
    setShowForm(true);
    setShowList(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/customers/${id}`);
      const updatedCustomers = customers.filter(customer => customer.id !== id);
      setCustomers(updatedCustomers);
      toast.success("Cliente deletado com sucesso!");
    } catch (error) {
      toast.error("Erro ao deletar o cliente.");
    }
  };

  return (
    <div className="table__container">
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>CEP</th>
            <th>Rua</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Número</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.cpf}</td>
              <td>{customer.phonenumber}</td>
              <td>{customer.cep}</td>
              <td>{customer.street}</td>
              <td>{customer.neighborhood}</td>
              <td>{customer.city}</td>
              <td>{customer.state}</td>
              <td>{customer.housenumber}</td>
              <td className="action-icons">
                <FaEdit onClick={() => handleEdit(customer)} />
                <FaTrash onClick={() => handleDelete(customer.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerGrid;
