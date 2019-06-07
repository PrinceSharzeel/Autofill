var fname = document.getElementById("username").value;
var lname = document.getElementById("password").value;

console.log("source page ran");


var storArray = {
    src_fname: fname,
    src_lname: lname
    };

chrome.storage.local.set({
        'newStorage': storArray
        });

 chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        console.log(response.farewell);
    });