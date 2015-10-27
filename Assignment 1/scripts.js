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
                document.getElementById(this.id).style.color ='green';
                checkRow(this.id, this.textContent);
                checkCol(this.id, this.textContent);
                checkBox(this.id, this.textContent);
                if(filled() == true){
                    alert('Great Success!');
                }
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

//full validation check
//runs through each td to check for empty string or red color
function filled(){
    var td = document.getElementsByTagName("td");
    var counter = 0;
    for(var i = 0; i<td.length; i++){
        if(td[i].textContent != "" && td[i].style.color != 'red'){
            counter += 1;
        }
    }
    if(counter == 90){
        return true;
    }
}

//Row Duplicate Check Function
function checkRow(element1, element2){
    var rowArray = [];
    //get td id
    var num = document.getElementById(element1);
    //split id to get row letter
    var checkRows = num.className.split(' ')[0];
    //put the elements in a row array
    var rows = document.getElementsByClassName(checkRows);
    //add each array to rowArray
    for(var i = 0; i < rows.length; i++){
        rowArray.push(rows[i].textContent);
    }

    var counter= 0;
    //for each rowArray element check against element2
    for(i = 0; i < rowArray.length; i++){
        if(rowArray[i] == element2){
            counter += 1;
        }
    }

    if(counter == 2){
        alert("Duplicate in Row");
        document.getElementById(element1).style.color = 'red';
    }
}

//Column Duplicate Check Function
function checkCol(element1, element2){
    var colArray = [];
    var num = document.getElementById(element1);
    var checkCol = num.className.split(' ')[1];
    var cols = document.getElementsByClassName(checkCol);
    for(var i = 0; i < cols.length; i++){
        colArray.push(cols[i].textContent);
    }

    var counter= 0;
    for(i = 0; i < colArray.length; i++){
        if(colArray[i] == element2){
            counter += 1;
        }
    }

    if(counter == 2){
        alert("Duplicate in Column");
        document.getElementById(element1).style.color = 'red';
    }
}

//Box Duplicate Check Function
function checkBox(element1, element2){
    var boxArray = [];
    var boxNum = document.getElementById(element1);
    var checkBox = boxNum.className.split(' ')[2];
    var boxes = document.getElementsByClassName(checkBox);
    for(var i = 0; i < boxes.length; i++){
        boxArray.push(boxes[i].textContent);
    }

    var counter= 0;
    for(i = 0; i < boxArray.length; i++){
        if(boxArray[i] == element2){
            counter += 1;
        }
    }

    if(counter == 2){
        alert("Duplicate in Box");
        document.getElementById(element1).style.color = 'red';
    }
}

document.getElementById("submit").addEventListener("click",function(){

    var user = {
        firstName:document.getElementById("fName").textContent,
        lastName:document.getElementById("lName").textContent
    };
    document.getElementById("fname").style.display = "none";
    document.getElementById("lname").style.display = "none";
    document.getElementById("submit").style.display = "none";

    document.getElementById("user").textContent = user.firstName + " " + user.lastName
});
