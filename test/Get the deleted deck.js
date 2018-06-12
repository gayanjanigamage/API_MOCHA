var should = require("should");
var request = require("request"); 
var expect = require("chai").expect; 
var util = require("util");
var supertest = require("supertest");
var chai = require("chai");
var server_3 = supertest("http://10.199.253.187:8085");


describe('Validate getting edited deck', function() {

    

    this.timeout(90000);
    it('Get request to get deleted deck', function(done) {
        server_3
            .get('/api/decks/5b1385fc2e02d85d8b54c7d9')
                    .set("X-Authorization","token")
                    
                       
            .expect(400)
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

