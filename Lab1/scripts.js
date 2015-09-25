/**
 * Created by inet2005 on 9/22/15.
 */
"use strict";


function swap()
{
    if(document.getElementById("ap1").style.zIndex<=document.getElementById("ap2").style.zIndex)
    {
        document.getElementById("ap1").style.zIndex = 1;
        document.getElementById("ap1").style.opacity = 100;
        document.getElementById("ap2").style.zIndex = 0;
        document.getElementById("ap2").style.opacity = 50;

    }
    else
    {
        document.getElementById("ap2").style.zIndex = 1;
        document.getElementById("ap1").style.zIndex = 0;
        document.getElementById("ap2").style.opacity = 100;
        document.getElementById("ap1").style.opacity = 50;
    }

    if (document.getElementById("ap2").style.zIndex == 1)
    {
        document.getElementById("ap2").style.opacity = "1";
        document.getElementById("ap1").style.opacity = "0.5";
    }
    else
    {
        document.getElementById("ap1").style.opacity = "1";
        document.getElementById("ap2").style.opacity = "0.5";
    }
}//end function

function expandMenu(currentElement)
{
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");

    var h1 = document.getElementById("h1");
    var h2 = document.getElementById("h2");
    var h3 = document.getElementById("h3");
    var h4 = document.getElementById("h4");

    h1.style.backgroundColor = 'transparent';
    h2.style.backgroundColor = 'transparent';
    h3.style.backgroundColor = 'transparent';
    h4.style.backgroundColor = 'transparent';

    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';

    if (currentElement == 'divOne')
    {
        p1.style.display = 'block';
        h1.style.backgroundColor = 'pink';
    }
    else if(currentElement == 'divTwo')
    {
        p2.style.display = 'block';
        h2.style.backgroundColor = 'pink';
    }
    else if(currentElement == 'divThree')
    {
        p3.style.display = 'block';
        h3.style.backgroundColor = 'pink';
    }
    else if(currentElement == 'divFour')
    {
        p4.style.display = 'block';
        h4.style.backgroundColor = 'pink';
    }
}//end function