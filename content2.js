console.log("target content2 ran");


var storedLegal = chrome.storage.local.get('newStorage', function (items) {
    console.log(items); 
     var a=items.newStorage;
    
    for(var i in a){
        document.getElementById(i).value = items.newStorage[i]; 
     }
  });