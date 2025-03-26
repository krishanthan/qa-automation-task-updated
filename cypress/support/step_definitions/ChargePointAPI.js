import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import APIfunction from "../Utility/APIfunction";
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

When("I Send DELETE request to {string} to specific Serial Number {string}", (endpoint,SerialNumber) => {
    cy.get("@GetRes").then((GetRes) => {
        const ID = GetRes.body.find((item) => item.serialNumber === SerialNumber).id
        cy.wrap(ID).then(() => {
           cy.get("@APIURL").then((URL)=>{
            API.DeleteRequest(URL+ endpoint+ ID).as("DelResponseByID")


           })

        })



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
        expect(StatusCode).to.eq(PostRes.status)

    })

})

Then("The POST response should contain id {string} and SerialNumber {string} as following", function (id, serialnumber) {
    cy.get("@PostRes").then((PostRes) => {
        if (PostRes.body.id === id && PostRes.body.serialNumber === serialnumber) {
            expect(id).to.equal(PostRes.body.id);
            expect(serialnumber).to.equal(PostRes.body.serialNumber);

        }


    })

})

Then("The GET response should contain id {string} and SerialNumber {string} as following", (id, serialnumber) => {

    cy.get("@GetRes").then((GetRes) => {
        GetRes.body.forEach((SelectProp) => {
            if (SelectProp.id === id && SelectProp.serialNumber === serialnumber) {
                expect(id).to.equal(SelectProp.id);
                expect(serialnumber).to.equal(SelectProp.serialNumber);

            }

        })
    })

})



Then("the invalid POST response status should be {int}", (StatusCode) => {
    cy.get("@InvalidPostRes").then((invalidPostResponse) => {
        expect(StatusCode).eq(invalidPostResponse.status)

    })

})



Then("The DELETE response status should be {int}", function (StatusCode) {
    cy.get("@DeleteRes").then((DeleteRes) => {
        expect(StatusCode).eq(DeleteRes.status);

    })

})

Then("I Recieved DELETE response status should be {int}", function (StatusCode) {
    cy.get("@DelResponseByID").then((DeleteResID) => {
        expect(StatusCode).eq(DeleteResID.status);

    })

})



Then("The response not contain the following details", () => {
    cy.get("@GetRes").then((GetRes) => {
        GetRes.body.forEach((SelectProp) => {
            expect(SelectProp).to.be.an('object').that.is.empty;

        })
    })


})

Then("The GET response should contains SerialNumber {string}", (SerialNumber) => {

    cy.get("@GetRes").then((GetRes) => {
        GetRes.body.forEach((SelectProp) => {
            if (SelectProp.serialNumber === SerialNumber) {
                expect(SerialNumber).to.equal(SelectProp.serialNumber);

            }

        })
    })



})


//#endregion












