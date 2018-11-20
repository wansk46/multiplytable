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

function checkNumIsInterger(startNumber,endNumber){
	return Number.isInteger(startNumber)&&Number.isInteger(endNumber);
}

function mutiplyInputs(startNumber,endNumber){
	return startNumber + '*' + endNumber + '=' + startNumber*endNumber;
}

function createMutiplyTable(startNumber,endNumber){
	var string='';
	if(checkStartNoIsLargerOrEqualToEndNo(startNumber,endNumber)
		&&checkRangeIn1to1000(startNumber,endNumber)
		&&checkNumIsInterger(startNumber,endNumber)){
		for (var i=startNumber; i<=endNumber; i++) {
            for (var j=startNumber; j<=i; j++) {
            	string+= mutiplyInputs(j,i)+"\t";    
            }
            string+="\n";
        }	
	return string;
	}
	else {return null;}
}

module.exports ={checkStartNoIsLargerOrEqualToEndNo, checkRangeIn1to1000,checkNumIsInterger,mutiplyInputs,createMutiplyTable
};

