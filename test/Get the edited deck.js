var should = require("should");
var request = require("request"); 
var expect = require("chai").expect; 
var util = require("util");
var supertest = require("supertest");
var chai = require("chai");
var server_2 = supertest("http://10.199.253.187:8090");


describe('Validate getting edited deck', function() {

    

    this.timeout(90000);
    it('Get request to get edited deck', function(done) {
        server_2
            .get('/api/decks/5b1385fc2e02d85d8b54c7d9')
                    .set("X-Authorization","token")
                    
                       
            .expect(200)
            .end(function(error,response,body){
                    if(!error){
                        
                        chai.expect(response.body.title).to.equal('Research and Development');
                        chai.expect(response.body).to.have.property("id");
                        chai.expect(response.body).to.have.property("userId");
                        chai.expect(response.body).to.have.property("userDeck");
                        chai.expect(response.body).to.have.property("createdAt");
                        chai.expect(response.body).to.have.property("expert");
                        chai.expect(response.body).to.have.property("starred");
                        console.log(response.body);
                        
                    }
                    else
                        console.log(error);
                        done();
                        
            })
              
            
            
         
    })
   
});

