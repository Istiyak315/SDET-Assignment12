///<reference types="Cypress"/>
describe('JsonPlaceholder', () => {
    const baseurl = "https://jsonplaceholder.typicode.com";
    it('Fetch a list of posts', () => {
        cy.request({
            method:"GET",
            url:baseurl+"/posts",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((Response)=> {
            expect(Response.status).to.eq(200);
        })
        
    });

    it('Create a new post', () => {
        cy.request({
            method:"POST",
            url:baseurl+"/posts",
            headers:{
                "Content-Type":"application/json"
            },
            body:{
                "title": "New Post", "body": "This is the body of the new post", "userId": 1 
            }
        }).then((Response)=> {
            expect(Response.status).to.eq(201);
            cy.log(JSON.stringify(Response.body))

        })
    });

    it('Update an existing post', () => {
        cy.request({
            method:"PUT",
            url:baseurl+"/posts/1",
            headers:{
                "Content-Type":"application/json"
            },
            body:{
                "title": "Updated Post", "body": "This is the updated body of the post", "userId": 1 
            }
        }).then((Response)=> {
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body))

        })
    });

    it('Delete an existing post', () => {
        cy.request({
            method:"DELETE",
            url:baseurl+"/posts/1",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((Response)=> {
            expect(Response.status).to.eq(200);

        })
    });



//    
});