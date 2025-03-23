class chargepoint {


    locators = {

        ChargePointFormText: ".title",
        SerialNumberTextBox: "input[name='input-serial-number']",
        SerialNumberAddbtn: ".addButton",
        SerialNumberList: "ul[class=list] li div",
        DeleteButton: ".list-button",
        SerialNumberVal: "ul[class=list]"
        



    }

    NavigateChargePoint(URL) {
        cy.visit(URL)
    }

    Textappear() {
        return cy.get(this.locators.ChargePointFormText)
    }

    TypeSerialNumber(SerialNumber) {
     if (cy.get(this.locators.SerialNumberTextBox).should("be.visible")) 
            {
           return cy.get(this.locators.SerialNumberTextBox).type(SerialNumber)
        }
        else {
            throw new Error('The TextBox element is not present');
        }
    }


    ClickAddButton() {
        if (cy.get(this.locators.SerialNumberAddbtn).should("be.visible")) {
            cy.get(this.locators.SerialNumberAddbtn).click()
        }
        else {
            throw new Error('The Add button element is not present');
        }


    }

    TextBoxValue()
    {
       return cy.get(this.locators.SerialNumberTextBox)

    }

    CheckSerialNumberinList(SerialNumber) {

       return cy.get(this.locators.SerialNumberList)
       

    }

    DeleteSerialNumber(SerialNumber) {
       return cy.get(this.locators.SerialNumberList)
        
    }

    CheckListEmpty(SerialNumber) {
        return cy.get(this.locators.SerialNumberVal)
        
        
   
    }


}

export default chargepoint