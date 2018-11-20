const main=require('../main');
const checkStartNoIsLargerOrEqualToEndNo=main.checkStartNoIsLargerOrEqualToEndNo;
//const checkRangeIn1to1000=require('../main');


it ('Given start number as 2 and end number as 4 when pass to checkStartNoIsLargerOrEqualToEndNo(), then return true.', () => {
	expect(checkStartNoIsLargerOrEqualToEndNo(2, 4)).toBe(true);
});


//it ('Given start number as 2 and end number as 4 when pass to checkRangeIn1to1000(), then return true.', () => {
//	expect(checkRangeIn1to1000(2, 4)).toBe(true);
//});