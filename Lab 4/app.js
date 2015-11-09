angular.module('labFour', [])
    .controller('studentController', function($scope){

        $scope.students = [];

        $scope.createStudent = function(){
            $scope.student = $scope.newID + " " + $scope.newFname + " " + $scope.newLname;
            $scope.students.push($scope.student);
        };

    });


//, text: $scope.newFname, text: $scope.newLname}


//var students = [];
//
//function student(first_name, last_name, student_id) {
//    this.fName = first_name;
//    this.lName = last_name;
//    this.sId = student_id;
//    this.report = function(){
//        return this.fName + " " + this.lName + " " + this.sId;
//    };
//}
//
//document.getElementById("myButton").addEventListener("click",function(){
//    //alert("got here");
//    var fName = document.getElementById("fName").value;
//    var lName = document.getElementById("lName").value;
//    var sId = document.getElementById("sId").value;
//
//    //alert(fName);
//    //alert(lName);
//
//    var studentOne = new student(fName,lName,sId);
//
//    function check(){
//        for(var j = 0; j < students.length; j++)
//        {
//            if(students[j].sId == sId)
//            {
//                alert("This student ID has already been used!")
//                return false;
//                break;
//            }
//        }
//        return true;
//    }
//
//    var bool = check();
//
//    if (bool == true)
//    {
//        students.push(studentOne);
//        var li = document.createElement("li"); //create list item
//        var node = document.createTextNode(students[students.length - 1].report());
//        li.appendChild(node);
//        document.getElementById("list").appendChild(li);
//
//    }
//
//});// end click function
//
//document.getElementById("trigger").addEventListener("mouseover",function(){
//    var json = document.getElementById("json");
//    json.style.display = "block";
//    json.innerHTML = JSON.stringify(students);
//});
//
//document.getElementById("json").addEventListener("click",function(){
//    var json = document.getElementById("json");
//    json.style.display = "none";
//});
