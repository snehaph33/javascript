var n1=7;
var n2=6;
if(n1==n2){ //true
    if ((n1<0) && (n2<0) ) {
        console.log("numbers are less than 0");
    }
    else{
        console.log("numbers are greater than 0");
    }
    console.log("numbers are equal");
}
else{ //false
    if ((n1<0) && (n2<0) ) {
        console.log("numbers are less than 0");
    }
    else{
        console.log("numbers are greater than 0");
    }
    console.log(`numbers are not equal and numbers are ${n1} and ${n2}`);

}