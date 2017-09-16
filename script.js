//
//  Project 01_06_01
//  Author: Isaac Meder
//  Date:   9.14.17
//  Filename: script.js
//

"use strict";
// global variables
var formValidity = true;

function validateRequired() { // checks the inputs for blank field
  var errorDiv = document.getElementById("errorText");
  var usrInput = document.querySelectorAll("#contactinfo input");
  var elementCount = usrInput.length;
  var fieldsetValidity = true;
  var currentElement;

  try {

    for (var i = 0; i < elementCount; i++) {
      currentElement = usrInput[i]

      if (currentElement.value === "") {
        currentElement.style.background = "rgb(241, 76, 76)";
        fieldsetValidity = false;
      } else {
        currentElement.style.background = "white";
      }
    }

    if (fieldsetValidity === false) {
      throw "Please fill in all fields";
    }
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";
  } catch (msg) {
    formValidity = false;
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
  }
}

function validateForm(evt) {
  if (evt.preventDefault) {
    evt.preventDefault();
  } else {
    evt.returnValue = false;
  }
  formValidity = true;

  validateRequired();

  if (formValidity === true) { //form is valid
    document.getElementById("errorText").innerHTML = "";
    document.getElementById("errorText").style.display = "none";
    document.getElementsByTagName("form")[0].submit();
  }
}

function createEventListeners() {
  var form = document.getElementsByTagName("form")[0];
  if (form.addEventListener) {
    form.addEventListener("submit", validateForm, false)
  } else if (form.attachEvent) {
    form.attachEvent("onsubmit", validateForm)
  }
}





if (window.addEventListener) {
  window.addEventListener("load", createEventListeners, false)
} else if (window.attachEvent) {
  window.attachEvent("onload", createEventListeners)
}
