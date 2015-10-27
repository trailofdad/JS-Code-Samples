/**
 * Created by inet2005 on 10/20/15.
 */

"use strict";

document.getElementById("reset").addEventListener("click",function(){

    location.reload();
});

window.addEventListener("load", function() {
    var edit = document.getElementsByClassName("edit");
    for (var i = 0; i < edit.length; i++) {
        edit[i].addEventListener('keyup', function () {
            if(numCheck(this.textContent) != false){
                //add id to change the td border to green
            }
            else{
                alert("Please enter a valid number");
                this.textContent = "";
            }
        })
    }
});

//number validation function
function numCheck(element){
    var numReg = /^[1-9]$/;
    if(element != "") {
        if (numReg.exec(element) == null) {
            return false;
        }
    }
}
