const { application } = require("express");
const express = require("express");
const app = express();
const faker = require("faker");


app.use(express.json());
app.use(express.urlencoded({extended: true}));


const createUser = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country(),
    }
})


app.get("/api/users/new", (req, res) => {
    const user = createUser();

    res.json(user);
})

app.get("/api/companies/new", (req, res) => {
    const company = createCompany();

    res.json(company);
})

app.get("/api/user/company", (req, res) => {
    const user = createUser();
    const company = createCompany();

    const responseUserCompany = {
        user: user, 
        company: company
    }
    

    res.json(responseUserCompany);
})



app.listen(8000, () => console.log("Connection Successful"));