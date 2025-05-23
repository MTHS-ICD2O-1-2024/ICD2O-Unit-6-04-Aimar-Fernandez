// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const params = new URLSearchParams(document.location.search)
  const radius = params.get("radius")
  const volume = (radius ** 3 * Math.PI * 4 / 3).toFixed(2)
  document.getElementById("answer").innerHTML = 
    "<p>Input Radius: " + radius + " m<br /><br/>The Volume is: " + volume + " m³</p>"

}
