import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import APIfunction from "../Utils/APIfunction";
import { beforeEach } from "mocha";
import chargepoint from "../PageObjects/ChargePointObjects";


const API = new APIfunction()

beforeEach(function () {
    cy.fixture('URL.json').then(function (urls) {
        cy.wrap(urls.baseAPIURL).then((value) => {
            cy.wrap(value).as("APIURL")

        })


    })
})

//#region Given
Given("I navigate the API Path {string}", function (endpoint) {
    cy.get("@APIURL").then((URL) => {
        API.GetRequest(URL + endpoint).as("GetRes")
    })

})

Given("I recieved the GET Status code as {int}", function (StatusCode) {
    cy.get("@GetRes").then((GetRes) => {
        expect(GetRes.status).to.eq(StatusCode)

    })
})



//#endregion


//#region When

When("I send a POST request to {string} with ID and SerialNumbers as following", (endpoint, datatable) => {
    let chargePointData = datatable.hashes();
    cy.get("@APIURL").then((URL) => {
        chargePointData.forEach((TableValue) => {
            API.PostRequest(URL + endpoint, {
                "id": TableValue.id,
                "serialNumber": TableValue.serialNumber
            }).as("PostRes")
        })

    })


})

When("I send a invalid POST request to {string} with ID and SerialNumbers as following", (endpoint, datatable) => {

    let chargePointData = datatable.hashes();
    cy.get("@APIURL").then((URL) => {
        chargePointData.forEach((TableValue) => {
            API.PostRequest(URL + endpoint, {
                "id": TableValue.iddsa,
                "serialNumber": TableValue.serialNumberdsadsad
            }).as("InvalidPostRes")
        })

    })


})

When("I Send DELETE request to {string} to specific id {string}", function (endpoint, id) {
    cy.get("@APIURL").then((URL) => {
        API.DeleteRequest(URL + endpoint + id).as("DeleteRes")
    })
})


//#endregion



//#region Then
Then("its not contains any following data", function () {
    cy.get("@GetRes").then((GetRes) => {
        expect(GetRes.body).to.be.empty;

    })
})

Then("the POST response status should be {int}", function (StatusCode) {
    cy.get("@PostRes").then((PostRes) => {
        expect(PostRes.status).to.eq(201)

    })

})

Then("The POST response should contain id {string} and SerialNumber {string} as following", function (id, serialnumber) {
    cy.get("@PostRes").then((PostRes) => {
            if(PostRes.body.id === id && PostRes.body.serialNumber === serialnumber) {
            expect(PostRes.body.id).to.equal(id);
            expect(PostRes.body.serialNumber).to.equal(serialnumber);

        }


    })

})

Then("The GET response should contain id {string} and SerialNumber {string} as following", (id, serialnumber) => {

    cy.get("@GetRes").then((GetRes) => {
        GetRes.body.forEach((SelectProp) => {
            if (SelectProp.id === id && SelectProp.serialNumber === serialnumber) {
                expect(SelectProp.id).to.equal(id);
                expect(SelectProp.serialNumber).to.equal(serialnumber);

            }

        })
    })

})



Then("the invalid POST response status should be {int}", (StatusCode) => {
    cy.get("@InvalidPostRes").then((invalidPostResponse) => {
        expect(invalidPostResponse.status).eq(StatusCode)

    })

})

Then("The Invalid response not contain the following details", () => {

    cy.get("@InvalidPostRes").then((invalidPostResponse) => {
        expect(invalidPostResponse.body).to.have.property("serialNumberdsadsad", "PVR-039-2910-invalid")
    })
})


Then("The DELETE response status should be {int}", function (int) {
    cy.get("@DeleteRes").then((DeleteRes) => {
        expect(DeleteRes.status).eq(204);

    })

})

Then("The response not contain the following details", () => {
    cy.get("@GetRes").then((GetRes) => {
        GetRes.body.forEach((SelectProp) => {
            expect(SelectProp).to.be.an('object').that.is.empty;

        })
    })


})


//#endregion












