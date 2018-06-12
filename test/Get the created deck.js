var should = require("should");
var request = require("request"); 
var expect = require("chai").expect; 
var util = require("util");
var supertest = require("supertest");
var chai = require("chai");
var server_3 = supertest("http://10.199.253.187:8085");
var server_1 = supertest("http://int-piapi-internal.stg-openclass.com");
var TokenStorage = require("./TokenStorage");


describe('Validate getting created deck', function() {

   
    this.timeout(90000);
    it('Get request to get created deck', function(done) {

        

        server_3
            .get('/api/decks/5b164fd22e02d85d8b54ec0f')
                    .set("X-Authorization",TokenStorage.getAuthToken())
                    //.set("X-Authorization","eyJraWQiOiJrMTA2OTQ4MTkwIiwiYWxnIjoiUlM1MTIifQ.eyJoY2MiOiJVUyIsInN1YiI6ImZmZmZmZmZmNWEwNjBhMWFlNGIwYjhlNThlMjQ5NjRhIiwidHlwZSI6ImF0IiwiZXhwIjoxNTI4MTk1OTc3LCJpYXQiOjE1MjgxODUxNzcsInNlc3NpZCI6ImNkOGEyYTFkLTdlYWItNDAwNi1hMGY3LTM2ZWZkNmMzNjhlZSJ9.XdCmfrUHuQNyaChWatTuMkUCd8Rt5gFiPliXc2Df_45U_I2o7ArequBQ7_R9kpDVpFXayG-KI17GJf3rT_txWNNtNfw0jcnchFoRL7OVl8fm1GJ4Ni4UBLtAB8jsSStTr_KN2zqNEqGmJyLdLlBwbq0-3mI4pRrPP93lefLAqWk")
                    
                    
                       
            .expect(200)
            .end(function(error,response,body){
                    if(!error){
                        
                        chai.expect(response.body.title).to.equal('Research and Development');
                        chai.expect(response.body).to.have.property("id");
                        chai.expect(response.body).to.have.property("userId");
                        //chai.expect(response.body).to.have.property("userDeck");
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

