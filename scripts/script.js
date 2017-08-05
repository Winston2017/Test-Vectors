"use strict" ;

var  consoleDisplay = document.querySelector( "#textInput" ),
            runTest = document.querySelector( "#runButton" ) ;

function  displayStatus( event )
{
    consoleDisplay.value = "Turbo Fan is ON" ;
}

runTest.addEventListener( "click", displayStatus ) ;
