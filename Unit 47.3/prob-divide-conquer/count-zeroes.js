function countZeroes(arr) {
	const length = arr.length;
  	let left = 0;
	let right = arr.length -1;
	let midVal;
	let midIdx;
  	while (left <= right) {
		midIdx = Math.floor((left+right) / 2);
		midVal = arr[midIdx]
		if (midVal === 0) {
			right = midIdx - 1;
		} else if (midVal === 1) {
			left = midIdx + 1;
		}
  	}	
  	if (midVal === 0) {
		return length - midIdx;
  	} else {
		  return length - midIdx -1;
	  }
}

module.exports = countZeroes