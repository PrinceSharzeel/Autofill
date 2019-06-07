function doContent(){
chrome.tabs.executeScript(null, {file: "content_nomsg.js"});
};

function doTarget(){
chrome.tabs.executeScript(null, {file: "content2.js"});
};




//document.getElementById("btnSource").onclick = doContent;
if(document.getElementById("btnTarget")){
document.getElementById("btnTarget").onclick = doTarget;
}

if(document.getElementById("ok_btn")){
    
    
    document.getElementById('ok_btn').addEventListener('click', function () {
        
        
        
         chrome.storage.local.set({
           'url': document.getElementById("url").value
          });
         
         chrome.storage.local.get('url', function (result) {
           alert(result.url);
         });

        
    });
    
}


$( "td" ).click(function() {
    alert($(this).text());
});

if(document.getElementsByTagName('button')[0]){
document.getElementsByTagName('button')[0].addEventListener('click', function () {
    console.log('clicked');
    
    
   
    
    var json_value=JSON.stringify({
                                  "url": "https://study.com/academy/login.html",
                                    "fields": {
                                      "emailAddress": "abcd@gmail.com",
                                      "pwd": "Open"
                                     }
                                });
    
    
     var route_url=JSON.parse(json_value).url;


   

    chrome.storage.local.set({
        'newStorage': JSON.parse(json_value)
    });
   
    chrome.runtime.sendMessage({greeting: "hello",url:route_url}, function(response) {
        console.log(response.farewell);
    });
    
    
});
}


if(document.getElementsByTagName('button')[3]){
document.getElementsByTagName('button')[3].addEventListener('click', function () {
    console.log('clicked');
    
    
    var fname = document.getElementById("username").value;
    var lname = document.getElementById("password").value;
    
    
    document.body.style.backgroundColor = "red";
    var json_value=JSON.stringify({
                                  "url": "https://study.com/academy/login.html",
                                    "fields": [{
                                      "fname": "New",
                                      "lname": "Open",
                                      "value": "Close"
                                   }] 
                               });
    
     var route_url=JSON.parse(json_value).url;
     
    chrome.storage.local.get('url', function (result) {
           
                
                route_url=result.url;
       
                var storArray = {
                    emailAddress: fname,
                    pwd: lname
                };

                chrome.storage.local.set({
                    'newStorage': storArray
                });

                chrome.runtime.sendMessage({greeting: "hello",url:route_url}, function(response) {
                    console.log(response.farewell);
                });
      });
    
});
}
