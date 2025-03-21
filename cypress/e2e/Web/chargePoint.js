import ChargePointObjects from "../../support/PageObjects/ChargePointObjects"

describe("First TestSuite",()=>{

    const chargepoint = new ChargePointObjects()

    it("First TestCase",()=>{
        chargepoint.NavigateChargePoint()
        cy.intercept({
            method: "GET",
            url: "http://localhost:3001/charge-point",

        }, 
        {
            statusCode:200,
            body:[
                {
                    "id": "66bf9a8b-96f5-44c5-a062-971d875f6b05",
                    "serialNumber": "6565656"
                },
                {
                    "id": "640fbb79-9641-47eb-b4e9-746a3cea0813",
                    "serialNumber": "223232"
                }]


        }).as("Serialnumber")
        cy.wait("@Serialnumber").then(({request,response})=>{
            cy.get("ul[class=list] li div").should("have.length",response.body.length)
        })

        // chargepoint.Textappear()
        // chargepoint.TypeSerialNumber("12345")
      //  chargepoint.ClickAddButton();
        // chargepoint.CheckSerialNumberinList("12345")
        // chargepoint.DeleteSerialNumber("12345")
        // chargepoint.CheckListEmpty()
        

    })
})