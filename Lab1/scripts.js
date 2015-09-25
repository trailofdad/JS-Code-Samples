/**
 * Created by inet2005 on 9/22/15.
 */
"use strict";



function switchDiv(currentElement)
{


}

function swap()
{
    if(document.getElementById("ap1").style.zIndex<=document.getElementById("ap2").style.zIndex)
    {
        document.getElementById("ap1").style.zIndex = 1;
        document.getElementById("ap2").style.zIndex = 0;
    }
    else
    {
        document.getElementById("ap2").style.zIndex = 1;
        document.getElementById("ap1").style.zIndex = 0;
    }
}//end function