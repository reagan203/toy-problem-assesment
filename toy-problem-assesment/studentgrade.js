function studentGrade (){
    //calculate grade
    let grade;
    // if marks are between 100-78 give a return message of grade A
    if (100 >= 'marks' > 79){
       grade= 'A';
    }
    // if marks are between 79-61 give a return message of grade B
    else if (79>='marks'>60){
        grade='B';
    }
    // if marks are between 60-50 give a return message of grade C
    else if (59>='marks'>49){
        grade= 'C';
    }
    // if marks are between 49-39 give a return message of grade D
    else if (49>='marks'>40){
        grade='D';
    }
    // if marks are between 40-0 give a return message of grade E
    else  if(40>='marks'>0){
        grade='E';
    }

}