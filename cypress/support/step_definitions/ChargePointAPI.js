import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import APIfunction from "../Utils/APIfunction";
import { beforeEach } from "mocha";


let PostResponse;
let GetResponse;
let data;

const API = new APIfunction()

beforeEach(function () {
    cy.fixture('URL.json').then(function (urls) {
        cy.wrap(urls.baseAPIURL).then((value) => {
            cy.wrap(value).as("APIURL")
        
        })


    })
})

Given("The API is working {string}", function (endpoint) {
    cy.get("@APIURL").then((URL)=>{
        cy.log(URL)
        API.GetRequest(URL+endpoint).its('status').should('eq', 200);

    })


})


When("I send a POST request to {string} with SerialNumbers", (endpoint) => {
    cy.get("@APIURL").then((URL)=>{
    API.PostRequest(URL+endpoint, {
        "id": "66bf9a8b-96f5-44c5-a062-971d875f6b05",
        "serialNumber": "Faf Du plessis"
    }).as("PostResponse").then((APIResponse) => {
        PostResponse = APIResponse
    })
})

})

Then("the response status should be {int}", (statusCode) => {

    expect(PostResponse.status).to.equal(statusCode)

})

Then("The response should contain SerialNumber", () => {
    expect(PostResponse.body).to.have.property("id", "66bf9a8b-96f5-44c5-a062-971d875f6b05")
    expect(PostResponse.body).to.have.property("serialNumber", "Faf Du plessis")

})


When("I send a invalid POST request to {string} with SerialNumbers", (endpoint) => {
   
    cy.get("@APIURL").then((URL)=>{
    API.PostRequest(URL+endpoint, {
        "iddsadadsad": "66bf9a8b-96f5-44c5-a062-971d875f6b05",
        "serialNumber": "Aiden Markam"
    }).as("PostResponse").then((APIResponse) => {
        PostResponse = APIResponse
    })

})

})

Then("the invalid response status should be {int}", (statusCode) => {

    expect(PostResponse.status).to.equal(statusCode)

})

Then("The response not contain the following details", () => {
    expect(PostResponse.body).not.to.have.property("iddsadadsad", "66bf9a8b-96f5-44c5-a062-971d875f6b05")
    expect(PostResponse.body).not.to.have.property("serialNumber", "Aiden Markam")

})

Given("I send a GET request to {string}", (endpoint) => {
    cy.get("@APIURL").then((URL)=>{
    API.GetRequest(URL+endpoint).as("GetAPIResponse").then((GetAPIResponse) => {
        GetResponse = GetAPIResponse
    })

})

})

Then("the get response status should be {int}", (statusCode) => {
    cy.log(GetResponse.status).then(() => {

        expect(GetResponse.status).to.equal(statusCode)

    })


})

Then("The Get response of {string} contains the following details", (endpoint) => {
    cy.get("@APIURL").then((URL)=>{
    API.GetRequest(URL+endpoint).as("APIResponse").then((APIResponse) => {
        expect(GetResponse.body).to.have.property("id", "66bf9a8b-96f5-44c5-a062-971d875f6b05")
        expect(GetResponse.body).to.have.property("serialNumber", "Faf Du plessis")

    })
})
})

