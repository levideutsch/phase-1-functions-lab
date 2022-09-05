function distanceFromHqInBlocks(currentLocation){
   if (currentLocation >= 42) {
    return currentLocation - 42 //Test one = 1 block //Test two = 8 blocks
} else {
  return 42 - currentLocation //Test three = 8 blocks
 }
}

   function distanceFromHqInFeet(currentLocation)  {
    return distanceFromHqInBlocks(currentLocation)*264 //Test = 1 block * 264 feet
} 

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
   return (destination - start)*264 //Test one = (one block)1320 feet //Test two = (5 blocks)2640 feet
} else {
   return (start - destination)*264 //Test three = (6 blocks)1584 feet
}
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination)
    if (feet < 400) {
    return 0
    
} else if (feet > 400 && feet < 2000) {
    return (feet - 400) * 0.02
} else if (feet > 2000 && feet < 2500) {
    return 25 
} else if (feet > 2500) {
    return "cannot travel that far"
}

}


   




