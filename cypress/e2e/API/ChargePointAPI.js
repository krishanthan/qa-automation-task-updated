describe("The First Suite", () => {


    it("The First TestCase", () => {

        cy.intercept({
            method: "GET",
            url: "http://localhost:3001/charge-point",

        }, 
        {
            statusCode:200,
            body:[
                {
                    "id": "66bf9a8b-96f5-44c5-a062-971d875f6b05",
                    "serialNumber": "42554654656"
                }]


        }).as('Serialnumber')
        
       

    })
})