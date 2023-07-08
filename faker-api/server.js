const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

// ------------------------------------------------------------------------------

const createUser = () => ({
    passsword: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.string.uuid(),

});

// ------------------------------------------------------------------------------

const createCompany = () => ({

    _id: faker.string.uuid(),
    CompanyName: faker.company.name(),

    address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        country: faker.location.country(),
    },

});

// ------------------------------------------------------------------------------

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

// ------------------------------------------------------------------------------

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

// ------------------------------------------------------------------------------

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const response = {
        user: newUser,
        company: newCompany,
    };
    res.json(response);
});

// ------------------------------------------------------------------------------

app.listen(port, () => console.log(`express server running on port ${port}`));