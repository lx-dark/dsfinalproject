import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Customer from "./Customer";
import "../styles/Global.css";
import "../styles/Form.css";

const CustomerForm = ({ getCustomers, onEdit, setOnEdit }) => {
  const [customer, setCustomer] = useState(new Customer());
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      setCustomer(new Customer(
        onEdit.name,
        onEdit.cpf,
        onEdit.phonenumber,
        onEdit.cep,
        onEdit.street,
        onEdit.neighborhood,
        onEdit.city,
        onEdit.state,
        onEdit.housenumber
      ));
    } else {
      setCustomer(new Customer());
    }
  }, [onEdit]);

  const fetchAddress = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, bairro, localidade, uf } = response.data;
      setCustomer((prevCustomer) => ({
        ...prevCustomer,
        street: logradouro,
        neighborhood: bairro,
        city: localidade,
        state: uf
      }));
    } catch (error) {
      toast.error("Erro ao buscar endereço pelo CEP.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({ ...prevCustomer, [name]: value }));

    if (name === "cep" && value.length === 8) {
      fetchAddress(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const key in customer) {
      if (!customer[key]) {
        return toast.warn("Preencha todos os campos!");
      }
    }

    try {
      if (onEdit) {
        await axios.put(`http://localhost:8800/customers/${onEdit.id}`, customer);
        toast.success("Cliente atualizado com sucesso!");
      } else {
        await axios.post("http://localhost:8800/customers", customer);
        toast.success("Cliente adicionado com sucesso!");
      }
      setCustomer(new Customer());
      setOnEdit(null);
      getCustomers();
    } catch (error) {
      toast.error("Erro ao salvar os dados.");
    }
  };

  return (
    <form ref={ref} onSubmit={handleSubmit} className="form__container">
      <div className="form__title">
        <h2>Cadastrar cliente</h2>
      </div>
      <div className="form__input">
        <label>Nome</label>
        <input name="name" value={customer.name} type="text" onChange={handleChange} />
        <label>CPF</label>
        <input name="cpf" value={customer.cpf} type="text" onChange={handleChange} placeholder="Digite somente os numeros" />
        <label>Telefone</label>
        <input name="phonenumber" value={customer.phonenumber} type="text" onChange={handleChange} placeholder="Digite somente os numeros" />
        <label>CEP</label>
        <input name="cep" value={customer.cep} type="text" onChange={handleChange} placeholder="Digite somente os numeros" />
        <label>Rua</label>
        <input name="street" value={customer.street} type="text" onChange={handleChange} />
        <label>Bairro</label>
        <input name="neighborhood" value={customer.neighborhood} type="text" onChange={handleChange} />
        <label>Cidade</label>
        <input name="city" value={customer.city} type="text" onChange={handleChange} />
        <label>Estado</label>
        <input name="state" value={customer.state} type="text" onChange={handleChange} />
        <label>Nº da casa</label>
        <input name="housenumber" value={customer.housenumber} type="text" onChange={handleChange} />
      </div>
      <div className="form__button">
        <button type="submit">cadastrar</button>
      </div>
    </form>
  );
};

export default CustomerForm;
