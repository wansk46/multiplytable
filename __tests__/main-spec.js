const main=require('../main');
const checkStartNoIsLargerOrEqualToEndNo=main.checkStartNoIsLargerOrEqualToEndNo;
const checkRangeIn1to1000=main.checkRangeIn1to1000;


it ('Given start number as 2 and end number as 4 when pass to checkStartNoIsLargerOrEqualToEndNo(), then return true.', () => {
	expect(checkStartNoIsLargerOrEqualToEndNo(2, 4)).toBe(true);
});

it ('Given start number as 2 and end number as 4 when pass to checkStartNoIsLargerOrEqualToEndNo(), then return true.', () => {
	expect(checkStartNoIsLargerOrEqualToEndNo(5, 4)).toBe(false);
});

it ('Given start number as 2 and end number as 4 when pass to checkStartNoIsLargerOrEqualToEndNo(), then return true.', () => {
	expect(checkStartNoIsLargerOrEqualToEndNo(4, 4)).toBe(false);
});

it ('Given start number as 2 and end number as 250 when pass to checkRangeIn1to1000(), then return true.', () => {
	expect(checkRangeIn1to1000(2, 250)).toBe(true);
});

it ('Given start number as -1 and end number as 100 when pass to checkRangeIn1to1000(), then return true.', () => {
	expect(checkRangeIn1to1000(-1, 100)).toBe(false);
});
it ('Given start number as 1 and end number as 1001 when pass to checkRangeIn1to1000(), then return true.', () => {
	expect(checkRangeIn1to1000(1, 100)).toBe(true);
});

it ('Given start number as 0 and end number as 999 when pass to checkRangeIn1to1000(), then return true.', () => {
	expect(checkRangeIn1to1000(null, 999)).toBe(false);
});