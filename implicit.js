console.log("-----------implicit coversion to string ----------------");

result = '3' + 2;
console.log(result);
console.log('"2" is converted to string');
console.log('-------------------------------------------------------');

result = '3' + true;
console.log(result);
console.log('"true" is converted to string');
console.log('-------------------------------------------------------');

result = '3' + undefined;
console.log(result);
console.log('"undefined" is converted to string');
console.log('-------------------------------------------------------');

result = '3' + null;
console.log(result);
console.log('"null" is converted to string');
console.log('-------------------------------------------------------');




console.log("-----------implicit boolean coversion----------------");

result = 4 - true;
console.log('boolen converted to number');
console.log(`result - ${result}`);
console.log('"true" is converted to string');
console.log('-------------------------------------------------------');

result = 4 + true;
console.log('boolen converted to number');
console.log(`result - ${result}`);
console.log('-------------------------------------------------------');

result = 4 + false;
console.log('boolen converted to number');
console.log(`result - ${result}`);

console.log("-----------implicit string coversion to number----------------");

result = '4' - '2';
console.log('string is converted to number');
console.log(`result - ${result}`);
console.log('-------------------------------------------------------');



result = '4' - 2;
console.log('string is converted to number');
console.log(`result - ${result}`);
console.log('-------------------------------------------------------');

result = '4' * 2;
console.log('string is converted to number');
console.log(`result - ${result}`);
console.log('-------------------------------------------------------');

result = '4' / 2;
console.log('string is converted to number');
console.log(`result - ${result}`);
console.log('-------------------------------------------------------');
