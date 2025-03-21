class chargepoint {


    locators = {

        ChargePointFormText: ".title",
        SerialNumberTextBox: "input[name='input-serial-number']",
        SerialNumberAddbtn: ".addButton",
        SerialNumberList: "ul[class=list] li div",
        DeleteButton: ".list-button",
        SerialNumberVal: "li div"



    }

    NavigateChargePoint() {
        cy.visit("http://localhost:3000/")
    }

    Textappear() {
        cy.get(this.locators.ChargePointFormText).should("have.text", "Charge Point Installation Form")
    }

    TypeSerialNumber(SerialNumber) {
        if (cy.get(this.locators.SerialNumberTextBox).should("be.visible")) {
            cy.get(this.locators.SerialNumberTextBox).type(SerialNumber).then((Number) => {

                if (Number.val() === SerialNumber) {
                    expect(SerialNumber).to.equal(Number.val());

                }

                else {
                    cy.log("The Value is incorrect in textbox")
                }

            })
        }

        else {
            throw new Error('The TextBox element is not present');
        }
    }


    ClickAddButton() {
        if (cy.get(this.locators.SerialNumberAddbtn).should("be.visible")) {
            cy.get(this.locators.SerialNumberAddbtn).click()
            cy.get(this.locators.SerialNumberTextBox).invoke("val").should("be.empty")
        }
        else {
            throw new Error('The Add button element is not present');
        }


    }

    CheckSerialNumberinList(SerialNumber) {

        cy.get(this.locators.SerialNumberList).each(($el, index, $list) => {


            if ($el.text() === SerialNumber) {

                cy.log("The Serial Number is present in List")
            }

        })



    }

    DeleteSerialNumber(SerialNumber) {
        cy.get(this.locators.SerialNumberList).each(($el, index, $list) => {

            if ($el.text() === SerialNumber) {
                cy.wrap($el).next().click();
                cy.wait(1000)

            }

        })
    }

    CheckListEmpty(SerialNumber) {
        cy.get(this.locators.SerialNumberList).each(($el, index, $list) => {

                if($el.text()!=SerialNumber)
                {
                    expect(true).to.be.true;
                }

        })

    }


}

export default chargepoint