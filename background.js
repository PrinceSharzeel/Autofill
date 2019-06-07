// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

 chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      
    if (request.greeting == "hello"){ 
         sendResponse({farewell: sender.tab});
         var newURL = request.url;
        
        chrome.tabs.create({"url":newURL},function(newTab) {
            chrome.tabs.executeScript(newTab.id, {file: "content2.js"});
        });
    }
      
});





