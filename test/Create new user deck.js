var should = require("should");
var request = require("request"); 
var expect = require("chai").expect; 
var util = require("util");
var supertest = require("supertest");
var chai = require("chai");
var server_2 = supertest("http://10.199.253.187:8090");

describe('Create new user deck', function() {
   
            it('Post request to create new deck', function(done) {
                server_2
                    .post('/api/decks/')
                                .set("content-type","application/json")
                                //.set("X-Authorization",token)
                                .send({
                                    "title": "Research and Development",
                                    "book": {},
                                    "purchaseInfo": {
                                        "price": 0
                                    },
                                    "notificationSettings": {
                                        "areNotificationsEnabled": false
                                    },
                                    "epochTime": {
                                        "createdAt": 1525108089681,
                                        "updatedAt": 1525108089681
                                    },
                                    "userId": "caftraining",
                                    "createdAt": "2018-04-30T17:08:09.681Z",
                                    "updatedAt": "2018-04-30T17:08:09.682Z",
                                    "archived": false,
                                    "cardPreview": false,
                                    "noOfCards": 0,
                                    "progress": 0,
                                    "downloads": 0,
                                    "starred": false,
                                    "examReminder": {},
                                    "expert": false
                            })
                               
                    .expect(201)
                    .end(function(error,response,body,id){
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