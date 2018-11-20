const main=require('../main');
const checkStartNoIsLargerOrEqualToEndNo=main.checkStartNoIsLargerOrEqualToEndNo;
const checkRangeIn1to1000=main.checkRangeIn1to1000;
const checkNumIsInterger=main.checkNumIsInterger;
const mutiplyInputs=main.mutiplyInputs;
const createMutiplyTable=main.createMutiplyTable;

it ('start number as 2 and end number as 4 when pass to checkStartNoIsLargerOrEqualToEndNo(), then return true.', () => {
	expect(checkStartNoIsLargerOrEqualToEndNo(2, 4)).toBe(true);
});

it ('start number as 2 and end number as 4 when pass to checkStartNoIsLargerOrEqualToEndNo(), then return true.', () => {
	expect(checkStartNoIsLargerOrEqualToEndNo(5, 4)).toBe(false);
});

it ('start number as 2 and end number as 4 when pass to checkStartNoIsLargerOrEqualToEndNo(), then return true.', () => {
	expect(checkStartNoIsLargerOrEqualToEndNo(4, 4)).toBe(false);
});

it ('start number as 2 and end number as 250 when pass to checkRangeIn1to1000(), then return true.', () => {
	expect(checkRangeIn1to1000(2, 250)).toBe(true);
});

it ('start number as -1 and end number as 100 when pass to checkRangeIn1to1000(), then return false', () => {
	expect(checkRangeIn1to1000(-1, 100)).toBe(false);
});
it ('start number as 1 and end number as 1001 when pass to checkRangeIn1to1000(), then return true.', () => {
	expect(checkRangeIn1to1000(1, 100)).toBe(true);
});

it ('start number as 0 and end number as 999 when pass to checkRangeIn1to1000(), then return false.', () => {
	expect(checkRangeIn1to1000(null, 999)).toBe(false);
});

it ('start number as 0 and end number as 999 when pass to checkRangeIn1to1000(), then return false.', () => {
	expect(checkRangeIn1to1000(null, null)).toBe(false);
});

it ('start number as 0 and end number as 999 when pass to checkRangeIn1to1000(), then return false.', () => {
	expect(checkRangeIn1to1000(null, null)).toBe(false);
});

it ('start number as 2 and end number as 4 when pass to checkNumIsInterger(), then return false.', () => {
	expect(checkNumIsInterger(2, 4)).toBe(true);
});

it ('start number as 2 and end number as "a" when pass to checkNumIsInterger(), then return false.', () => {
	expect(checkNumIsInterger(2, 'a')).toBe(false);
});

it ('start number as 2 and end number as 4 when pass to mutiplyInputs(), then return "2*4=8"', () => {
	expect(mutiplyInputs(2, 4)).toBe("2*4=8");
});

it ('start number as 2 and end number as 4 when pass to mutiplyInputs(), then return "2*4=8"', () => {
	expect(mutiplyInputs(2, 4)).toBe("2*4=8");
});

it ('start number as 2 and end number as 4 when pass to createMutiplyTable().', () => {
	expect(createMutiplyTable(2, 4)).toBe('2*2=4\t\n'+'2*3=6\t3*3=9\t\n'+'2*4=8\t3*4=12\t4*4=16\t\n');
});