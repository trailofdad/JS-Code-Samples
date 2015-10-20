/**
 * Created by inet2005 on 10/20/15.
 */

document.getElementById("reset").addEventListener("click",function(){

    location.reload();
});

var edit = document.getElementsByClassName("edit");

for (var i = 0; i < edit.length; i++ ) {
    edit[i].addEventListener("keyup", function(){
       if(isNaN(parseInt(edit[i].textContent)) == true)
       {
           alert('hey');
       }
    });
}


