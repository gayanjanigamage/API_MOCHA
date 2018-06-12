
var userID = '';

var setUserId = function(_userID){
    //console.log("setUserId: " + _userID);
    userID = _userID;
}

var getUserId = function(){
    //console.log("getUserId: " + userID);
    return userID;
}

module.exports = {
    setUserId: setUserId,
    getUserId: getUserId
    }