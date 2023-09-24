function speedCar (){
    // if the speed is below 70 reply with ok
    let speed;
    if (speed<=70){
        return ok;
    }
    // if speed is above 70 reply with points and divide above speed by 5
    else if(speed>70){
        (speed-70)/ 5;
        return demeritPoints=(speed-70)/ 5
    }
    // if demerit points are more than 12 return a message of licence suspended
    else if(demeritPoints=12){
        return licenceSuspended;
    }
}