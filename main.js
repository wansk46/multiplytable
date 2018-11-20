function checkStartNoIsLargerOrEqualToEndNo(startNumber,endNumber){
	if (startNumber>=endNumber)
	{
		return false;
	}
	return true;
}

function checkRangeIn1to1000(startNumber,endNumber){
	if (startNumber === null || endNumber === null) {
		return false;
	} else if (!(startNumber >= 1 && startNumber <= 1000)) {
		return false;
	} else if (!(endNumber >= 1 && endNumber <= 1000)) {
		return false;
	} 
	return true;
}

module.exports ={checkStartNoIsLargerOrEqualToEndNo, checkRangeIn1to1000
};

