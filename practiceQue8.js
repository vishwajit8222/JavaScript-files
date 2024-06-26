//given items array with prices of items.
//all items have an 10% OFF on them.calculate final price.
let items = [250,645,300,900,50];

for(let i = 0; i<items.length; i++){
    console.log("original price of item :",items[i]);
    let val = items[i]/10;//10% off
    let finalitems = items[i]-val;
    console.log("10% off price of item",finalitems);
}