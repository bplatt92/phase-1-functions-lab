
function distanceFromHqInBlocks(pickupLocation) {
  const hqStreet = 42;
  return Math.abs(pickupLocation - hqStreet);
}

function distanceFromHqInFeet(pickupLocation) {
  const blockInFeet = 264;
  const blocksAway = distanceFromHqInBlocks(pickupLocation);
  return blocksAway * blockInFeet;
}
function distanceTravelledInFeet(startBlock, endBlock) {
  const blockLengthInFeet = 264; 
  const distanceInBlocks = Math.abs(endBlock - startBlock);
  const distanceInFeet = distanceInBlocks * blockLengthInFeet;
  return distanceInFeet;
}

function calculatesFarePrice(startBlock, endBlock) {
  const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
