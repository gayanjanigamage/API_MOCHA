var should = require("should");
var request = require("request"); 
var expect = require("chai").expect; 
var util = require("util");
var supertest = require("supertest");
var chai = require("chai");
var server_3 = supertest("http://10.199.253.187:8085");


describe('Validate delete deck', function() {

    

    this.timeout(90000);
    it('Delete request to delete a deck', function(done) {
        server_3
            .delete('/api/decks/5b137f042e02d85d8b54c7d4')
                    .set("X-Authorization","token")
                    
                       
            .expect(204)
            .end(function(error,response,body){
                    if(!error){
                        
                        console.log(response.body);
                        
                    }
                    else
                        console.log(error);
                        done();
                        
            })
              
            
            
         
    })
   
});

