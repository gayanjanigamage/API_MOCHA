
var authToken = '';

var setAuthToken = function(_authToken){
    //console.log("setAuthToken: " + _authToken);
    authToken = _authToken;
}

var getAuthToken = function(){
   //console.log("getAuthToken: " + authToken);
    return authToken;
}

module.exports = {
    setAuthToken: setAuthToken,
    getAuthToken: getAuthToken
    }