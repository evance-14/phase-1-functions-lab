// Code your solution in this file!
let distance;
function distanceFromHqInBlocks(location, hq = 42){
    distance =  Math.abs(hq - location);
    return distance;
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));
function distanceFromHqInFeet(location){
    let distanceInFeet=  distanceFromHqInBlocks(location) * 264;
    return distanceInFeet;
}
console.log(distanceFromHqInFeet(34));
function distanceTravelledInFeet(start, destination){
    distance = Math.abs(start - destination) * 264;
    return distance;
}
console.log(distanceTravelledInFeet(43, 48));
function calculatesFarePrice(start, destination){
    distance = distanceTravelledInFeet(start, destination)
    let fare;
    if(distance >= 2500){
        fare = "cannot travel that far";
    }else if(distance > 2000){
        fare = 25;
    }else if(distance >= 400 ){
        fare = (((distance - 400)*2)/100);
    }else{
        fare = 0
    };
    return fare;
}
console.log(calculatesFarePrice(34, 32));

