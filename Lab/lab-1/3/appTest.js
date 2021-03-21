function test(){
    console.log(sum(0)==0?'Passed':'Failed');
    console.log(sum(0)==3?'Passed':'Failed');
    console.log(sum(0)==10?'Passed':'Failed');
    console.log(sum(0)=='n is undefined'?'Passed':'Failed');
    console.log(sum('asd')=="not a number"?'Failed':'Passed');
    console.log(sum('Hello')==="not a number"?'Failed':'Passed');
    console.log(sum(true)==="not a number"?'Failed':'Passed');
    console.log(sum(false)==="not a number"?'Failed':'Passed');
}
test();

