function getRandomElementsInArray(arr: [any], count: number): [any] {
	let initialArr: [any] = [...arr];
	let newArr: [any] = [];
	let selectedIndexes: [number] = [];
	let randIndex: number;
	if (initialArr.length < count) {
		count = initialArr.length;
	}
	while (newArr.length != count) {
		randIndex = Math.floor(Math.random() * initialArr.length);
		if (initialArr[randIndex] && !selectedIndexes.includes(randIndex)) {
			newArr.push(initialArr[randIndex]);
			selectedIndexes.push(randIndex);
		}
	}
	return newArr;
}
