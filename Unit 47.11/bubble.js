function bubbleSort(arr) {
	for (let i=0; i<arr.length; i++){
		let switching = false;
		for (let j=0; j<arr.length-1;j++){
			if (arr[j] > arr[j+1]){
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]]
				switching = true;
			}
		}
		if (!switching) {
			break;
		}
	}

	return arr;
}

module.exports = bubbleSort;