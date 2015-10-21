/**
 * Created by inet2005 on 10/20/15.
 */

document.getElementById("reset").addEventListener("click",function(){

    location.reload();
});

var edit = document.getElementsByClassName("edit");

edit.addEventListener("keyup", checkNum());

function checkNum(edit)
{
    if(isNaN(edit.textContent))
    {
        alert('nan');
    }
}