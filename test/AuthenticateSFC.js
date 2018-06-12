var should = require("should");
var request = require("request"); 
var expect = require("chai").expect; 
var util = require("util");
var supertest = require("supertest");
var chai = require("chai");
var server_1 = supertest("http://int-piapi-internal.stg-openclass.com");
var server_2 = supertest("http://10.199.253.187:8090");
var server_3 = supertest("http://10.199.253.187:8085");
var TokenStorage = require("./TokenStorage");

describe('Validate the process', function() {

    var token = {};

    this.timeout(90000);
    it('Post request to get pi token', function(done) {
        server_1
            .post('/tokens?useJwt=true')
                        .set("content-type","application/json")
                        .send({
                        "userName":"sfc_system",
                        "password":"J6rfS39Js2xv49zZ"
                    })
                       
            .expect(201)
            .end(function(error,response,body){
                    if(!error){
                        console.log(response.body);
                        chai.expect(response.body.status).to.equal('success');
                        chai.expect(response.body).to.have.property("data");
                        var token = response.body.data;
                        TokenStorage.setAuthToken(token);
                        //console.log(TokenStorage.getAuthToken());
                        
                    }
                    else
                        console.log(error);
                        done();
                        
            })
                 
            
         
    })
});  