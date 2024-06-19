class Customer {
  constructor(name = "", cpf = "", phonenumber = "", cep = "", street = "", neighborhood = "", city = "", state = "", housenumber = "") {
    this.name = name;
    this.cpf = cpf;
    this.phonenumber = phonenumber;
    this.cep = cep;
    this.street = street;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.housenumber = housenumber;
  }
}

export default Customer;
