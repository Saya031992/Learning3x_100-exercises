function getStatus(code) {
    if(code >= 200 && code < 300) return "Success";
    if(code >= 400 && code < 500) return "Client Error";
    if(code >= 500 && code < 600) return "Server Error";
    }
    //only we will get one return 

    getStatus(200); //Success
    getStatus(404); //Client Error
    getStatus(500); //Server Error

    //returns nothing-undefined

    function logTest(name) {
        console.log(`Running ${name}`);
        //no return statements
    }

    logTest("Hi this is log"); //Running Test1    

    //returns array and object
    function aaa() {
        return [1,2,3];
    }
