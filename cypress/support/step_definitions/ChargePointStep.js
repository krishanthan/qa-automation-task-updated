import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ChargePointObjects from "../PageObjects/ChargePointObjects"

const ChargePoint = new ChargePointObjects();

beforeEach(function () {
    cy.fixture('URL.json').then(function (urls) {
        cy.wrap(urls.baseWebURL).then((value) => {
            cy.wrap(value).as("Weburl")

        })

    })
})

Given("I Navigate to URL", function () {
    cy.get("@Weburl").then(function (WebURL) {

        ChargePoint.NavigateChargePoint(WebURL)

    })

});

Then("The User Land on the Charge Point Installation Form", function () {

    ChargePoint.Textappear().should("have.text", "Charge Point Installation Form")
})

When("The User add the Serial Number {string}", function (SerialNumber) {
    ChargePoint.TypeSerialNumber(SerialNumber).then((Number) => {
        if (Number.val() === SerialNumber) {
            expect(SerialNumber).to.equal(Number.val());
        }

        else {
            expect(SerialNumber).to.not.equal(Number.val())
        }

    })

})

When("The User Click the Add Button", function () {
    ChargePoint.ClickAddButton()
})

Then("The Textbox value should be empty", () => {
    ChargePoint.TextBoxValue().invoke("val").should("be.empty")
})

Then("Serial numbers are present in the list {string}", function (SerialNumber) {
    ChargePoint.CheckSerialNumberinList().then(($list) => {
        expect($list.length).to.be.greaterThan(0)
        $list.each((el, index) => {
            const text = Cypress.$(el).text().trim()
            if (text === SerialNumber) {
                expect(text).to.equal(SerialNumber)
            }

        })


    })
})

When("The User Delete the Serial Number of {string}", function (SerialNumber) {
    ChargePoint.DeleteSerialNumber(SerialNumber).contains(SerialNumber).then(($el) => {
        if ($el.length > 0) {
            cy.wrap($el).next().click().as("DelSerialNum")

        }
    })

})
Then("The Serial Numbers are not appear in list {string}", function (SerialNumbers) {
    ChargePoint.CheckListEmpty().should("not.contain",SerialNumbers)


})



Given("The User lands on the Charge Point Installation Form successfully", function () {
    ChargePoint.Textappear().should("have.text", "Charge Point Installation Form")


})



