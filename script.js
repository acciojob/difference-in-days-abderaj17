var dateDiffInDays = function (date1, date2) {
  //   write your code here
		const d1 = new Date(date1);
		const d2 = new Date(date2);

	const timeDiff = d2.getTime() - d1.getTime();

	const dayDiff = timeDiff / (1000 * 60 * 60 * 24);

	return dayDiff;
};

// Do not change the code below.
// const dateOne = prompt("Enter Start Date.");
// const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
