class Service {
  constructor(customerdata_idcustomer = "", description = "", scheduledate = "", scheduletime = "", priority = "", servicevalue = "") {
    this.customerdata_idcustomer = customerdata_idcustomer;
    this.description = description;
    this.scheduledate = scheduledate;
    this.scheduletime = scheduletime;
    this.priority = priority;
    this.servicevalue = servicevalue;
  }
}

export default Service;
