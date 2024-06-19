import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "../styles/Global.css";
import "../styles/Grid.css";

const ServicesGrid = ({ services, setServices, setOnEdit, setShowForm, setShowList }) => {
    const handleEdit = (service) => {
        setOnEdit(service);
        setShowForm(true);
        setShowList(false);
    };

    const handleDelete = async (idservice) => {
        try {
            await axios.delete(`http://localhost:8800/services/${idservice}`);
            const updatedServices = services.filter(service => service.id !== idservice);
            setServices(updatedServices);
            toast.success("Serviço deletado com sucesso!");
        } catch (error) {
            toast.error("Erro ao deletar serviço.");
        }
    };

    return (
        <div className="table__container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th>Horario</th>
                        <th>Prioridade</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => (
                        <tr key={service.idservice}>
                            <td>{service.customerdata_idcustomer}</td>
                            <td>{service.description}</td>
                            <td>{service.scheduledate}</td>
                            <td>{service.scheduletime}</td>
                            <td>{service.priority}</td>
                            <td>{service.servicevalue}</td>
                            <td className="action-icons">
                                <FaEdit onClick={() => handleEdit(service)} />
                                <FaTrash onClick={() => handleDelete(service.idservice)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ServicesGrid;
