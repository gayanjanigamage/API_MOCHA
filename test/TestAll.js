
process.env.NODE_ENV = 'test';

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
var UserIDStorage = require("./UserIDStorage");



            
      describe('Validate the process', function() {
      
          
        
      
          this.timeout(20000);
          before('Post request to get pi token', function(done) {
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
                              done();
                              
                          }
                          else
                              console.log(error);
                              
                              
                  })
                       
          console.log('--------------------------------------------------------------------------------------------------------');        
               
          })
         
          
      it('Post request to create new deck', function(done) {
      // this.timeout(91000);
          server_2
              .post('/api/decks/')
                          .set("content-type","application/json")
                            .set("X-Authorization",TokenStorage.getAuthToken())
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
              .end(function(error,response,body,){
                      if(!error){
                          
                          chai.expect(response.body.title).to.equal('Research and Development');
                          chai.expect(response.body).to.have.property("id");
                          chai.expect(response.body).to.have.property("userId");
                          chai.expect(response.body).to.have.property("userDeck");
                          chai.expect(response.body).to.have.property("createdAt");
                          chai.expect(response.body).to.have.property("expert");
                          chai.expect(response.body).to.have.property("starred");
                          var ID = response.body.id;
                          UserIDStorage.setUserId(ID);
                         // console.log(UserIDStorage.getUserId());
                         console.log(response.body);
                         done();
                          
                          
                      }
                      else
                          console.log(error);
                          
                          
              })    
             
              console.log('--------------------------------------------------------------------------------------------------------');        
            
      })
      
      it('Get request to get created deck', function(done) {
      
        //this.timeout(92000);
      
        
            var pathname = '/api/decks/';
            var userPathname = UserIDStorage.getUserId()
            url = pathname.concat(userPathname)
        server_3
          .get(url)
         
                      .set("X-Authorization",TokenStorage.getAuthToken())
                      
                         
              .expect(200)
              .end(function(error,response,body){
                      if(!error){
                          
                          chai.expect(response.body.title).to.equal('Research and Development');
                          chai.expect(response.body.id).to.equal(userPathname);
                          chai.expect(response.body).to.have.property("id");
                          chai.expect(response.body).to.have.property("userId");
                          //chai.expect(response.body).to.have.property("userDeck");
                          chai.expect(response.body).to.have.property("createdAt");
                          chai.expect(response.body).to.have.property("expert");
                          chai.expect(response.body).to.have.property("starred");
                          console.log(response.body);
                          done();
                          
                      }
                      else
                          console.log(error);
                         
                          
              })
                
              
              console.log('--------------------------------------------------------------------------------------------------------');        
                  
           
      })

      it('Put request to edit a user deck', function(done) {
        //this.timeout(93000);

        var pathname = '/api/decks/';
        var userPathname = UserIDStorage.getUserId()
        url = pathname.concat(userPathname)

        server_3
            .put(url)
                        .set("content-type","application/json")
                        .set("X-Authorization",TokenStorage.getAuthToken())
                        .send({
                            
                                "title": "Research and Development EDITED",
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
                       
            .expect(200)
            .end(function(error,response,body){
                    if(!error){
                        
                        chai.expect(response.body.title).to.equal('Research and Development EDITED');
                        chai.expect(response.body.id).to.equal(userPathname);
                        chai.expect(response.body).to.have.property("id");
                        chai.expect(response.body).to.have.property("userId");
                       // chai.expect(response.body).to.have.property("userDeck");
                        chai.expect(response.body).to.have.property("createdAt");
                        chai.expect(response.body).to.have.property("expert");
                        chai.expect(response.body).to.have.property("starred");
                        console.log(response.body);
                        done();
                      
                        
                    }
                    else
                        console.log(error);
                        
                        
            })    
            console.log('--------------------------------------------------------------------------------------------------------');        
                   

})


    it('Get request to get edited deck', function(done) {
        //this.timeout(94000);

        var pathname = '/api/decks/';
        var userPathname = UserIDStorage.getUserId()
        url = pathname.concat(userPathname)

        server_2
            .get(url)
                    .set("X-Authorization",TokenStorage.getAuthToken())
                    
                       
            .expect(200)
            .end(function(error,response,body){
                    if(!error){
                        
                        chai.expect(response.body.title).to.equal('Research and Development EDITED');
                        chai.expect(response.body.id).to.equal(userPathname);
                        chai.expect(response.body).to.have.property("id");
                        chai.expect(response.body).to.have.property("userId");
                        chai.expect(response.body).to.have.property("userDeck");
                        chai.expect(response.body).to.have.property("createdAt");
                        chai.expect(response.body).to.have.property("expert");
                        chai.expect(response.body).to.have.property("starred");
                        console.log(response.body);
                        done();
                        
                    }
                    else
                        console.log(error);
                       
                        
            })
              
            
            console.log('--------------------------------------------------------------------------------------------------------');        
                
         
    })
   
    //this.timeout(90000);
    it('Delete request to delete a deck', function(done) {
        //this.timeout(95000);

        var pathname = '/api/decks/';
        var userPathname = UserIDStorage.getUserId()
        url = pathname.concat(userPathname)

        server_3
            .delete(url)
                    .set("X-Authorization",TokenStorage.getAuthToken())
                    
                       
            .expect(204)
            .end(function(error,response,body){
                    if(!error){
                        
                        console.log(response.body);
                        done();
                        
                    }
                    else
                        console.log(error);
                        
                        
            })
              
             console.log('--------------------------------------------------------------------------------------------------------');        
                   
         
    })
   
    //this.timeout(90000);
    it('Get request to get deleted deck', function(done) {
       // this.timeout(96000);

        var pathname = '/api/decks/';
        var userPathname = UserIDStorage.getUserId()
        url = pathname.concat(userPathname)

        server_3
            .get(url)
                    .set("X-Authorization",TokenStorage.getAuthToken())
                    
                       
            .expect(400)
            .end(function(error,response,body){
                    if(!error){
                        
                
                        console.log(response.body);
                        done();
                        
                    }
                    else
                        console.log(error);
                        
                        
            })
              
            
                 
         
    })
   

      });
      
  

