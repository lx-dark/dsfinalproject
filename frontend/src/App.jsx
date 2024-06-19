import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserPlus, FaClipboardList, FaEye, FaCalendarPlus } from "react-icons/fa";
import CustomerForm from "./components/CustomerForm.jsx";
import ServiceForm from "./components/ServicesForm.jsx";
import CustomerGrid from "./components/CustomerGrid.jsx";
import ServiceGrid from "./components/ServicesGrid.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../src/styles/Global.css";
import "../src/styles/App.css";
import igtechlogotrans from "../src/img/igtechlogotrans.png"

function App() {
  const [customers, setCustomers] = useState([]);
  const [services, setServices] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);
  const [formType, setFormType] = useState("customer");

  const getCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/customers");
      setCustomers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error("Erro ao buscar clientes");
    }
  };

  const getServices = async () => {
    try {
      const res = await axios.get("http://localhost:8800/services");
      setServices(res.data.sort((a, b) => (a.scheduledate > b.scheduledate ? 1 : -1)));
    } catch (error) {
      toast.error("Erro ao buscar serviços");
    }
  };

  useEffect(() => {
    if (showList) {
      if (formType === "customer") {
        getCustomers();
      } else {
        getServices();
      }
    }
  }, [showList, formType]);

  const toggleForm = (type) => {
    setFormType(type);
    setShowForm((prev) => !prev);
    setShowList(false);
    setOnEdit(null);
  };

  const toggleList = (type) => {
    setFormType(type);
    setShowList((prev) => !prev);
    setShowForm(false);
  };

  return (
    <>
      <div className="container">
        <img src={igtechlogotrans} alt="igtechlogotrans" className='igtechlogotrans'/>
        <div className="button__container">
          <button onClick={() => toggleForm("customer")}>
            {showForm && formType === "customer" ? (
              <>
                <FaEye /> Ocultar
              </>
            ) : (
              <>
                <FaUserPlus /> Cadastrar Cliente
              </>
            )}
          </button>
          <button onClick={() => toggleForm("service")}>
            {showForm && formType === "service" ? (
              <>
                <FaEye /> Ocultar
              </>
            ) : (
              <>
                <FaCalendarPlus /> Agendar Serviço
              </>
            )}
          </button>
          <button onClick={() => toggleList("customer")}>
            {showList && formType === "customer" ? (
              <>
                <FaEye /> Ocultar
              </>
            ) : (
              <>
                <FaClipboardList /> Ver Lista de Clientes
              </>
            )}
          </button>
          <button onClick={() => toggleList("service")}>
            {showList && formType === "service" ? (
              <>
                <FaEye /> Ocultar
              </>
            ) : (
              <>
                <FaClipboardList /> Ver Lista de Serviços
              </>
            )}
          </button>
        </div>
        {showForm && formType === "customer" && (
          <CustomerForm onEdit={onEdit} setOnEdit={setOnEdit} getCustomers={getCustomers} />
        )}
        {showForm && formType === "service" && (
          <ServiceForm onEdit={onEdit} setOnEdit={setOnEdit} getServices={getServices} />
        )}
        {showList && formType === "customer" && (
          <CustomerGrid
            setOnEdit={setOnEdit}
            customers={customers}
            setCustomers={setCustomers}
            setShowForm={setShowForm}
            setShowList={setShowList}
          />
        )}
        {showList && formType === "service" && (
          <ServiceGrid
            setOnEdit={setOnEdit}
            services={services}
            setServices={setServices}
            setShowForm={setShowForm}
            setShowList={setShowList}
          />
        )}
      </div>
      <ToastContainer autoClose={3000} position="bottom-left" />
    </>
  );
}

export default App;
