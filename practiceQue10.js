//create function take string and return the no. of vowels in string.
function vowelsCount(str){
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let count = 0;
    for(let i=0; i<str.length; i++){
        for(let j=0; j<vowels.length; j++){
            if(str[i]==vowels[j]){
                count++;
            }
        }
    }
    console.log(count);
}
vowelsCount("Vishwajit");

//same que for Arrow Function
let vowelsCountArrow = (str) =>{
    let count = 0;
    for(let char of str){
        if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
            count++;
        }else if(char=='A' || char=='E' || char=='I' || char=='O' || char=='U'){
            count++;
        }
    }
    console.log(count);
}
vowelsCountArrow("Vishwajit")