function calculateTax(income, expenses){
    
    if(income<0 || expenses<0 || income<expenses){
        return "invalid input"
  }
        let diff = income - expenses;
        let tax = diff*0.2;
        return tax;

 
}

function sendNotification(email) {
    let array = email.split("@");

    if(array!=email.split("@")){
        return "Invalid Email";
    }
    let first = array[0];
    let last = array[1];
    return first+"send you an email from"+last;
    
}  

function checkDigitsInName(name) {
    if(typeof name!='string'){
        return "Invalid Input";
    }
   
    for (let i=0;i<=name.length;i++){
       if(!isNaN(name[i])&& name[i]!==" "){
            return true;
        }
        
    }
    return false;
    
}

function calculateFinalScore(obj) {
    if(typeof obj != "object"){
        return  "Invalid Input";
    }
    let finalScore = obj.testScore + obj.schoolGrade;
   if(obj.isFFamily==true){
    finalScore =finalScore +20;
    if(finalScore>=80){
        return true;
       }
       return false;
   }
   else{
    return false;
   }
   
   
}

function  waitingTime(waitingTimes  , serialNumber) {
    let value =  serialNumber / waitingTime.length;
    let x= Math.round(value);

    
    let waiting = serialNumber-1;
    let remain = waiting - waitingTime.length;
    let time = remain*x;
    return time;


    
}
