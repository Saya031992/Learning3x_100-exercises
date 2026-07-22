let testScore=85;
switch(true){
    case(testScore>=95):
     console.log("Outstanding--Top performer");
     break;
    case(testScore>=85):
     console.log("Excellent--above expectation");
     break;
    case(testScore>=70):
     console.log("Good--Meet expectation");
     break;
    case(testScore>=50):
     console.log("Needs improvement");
     break;
    default:
        console.log("Unsatisfactory--Requires training");
}