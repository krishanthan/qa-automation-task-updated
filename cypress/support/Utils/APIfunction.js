class APIfunction {


    GetRequest(endpoint) {
        return cy.request({
            method: "GET",
            url: endpoint

        })
    }

    PostRequest(endpoint, body = {}) {
        return cy.request({
            method: "POST",
            url: endpoint,
            body

        })
    }

    DeleteRequest(endpoint,) {
        return cy.request({
            method: "DELETE",
            url: endpoint,
            

        });


    }

}

export default APIfunction

