import foodData from './data.json';

// Task 0

function Vegetable(){
    return foodData.filter((data) => data.category === 'Vegetable');
}
console.log("Vegetable")
console.log(Vegetable());

// Task 1 
function allItem() {
    return foodData;
}
console.log("allItem")
console.log(allItem());

// Task 2

function fruitItem(){
    return foodData.filter((data) => data.category === 'Fruit');
}
console.log("Fruit item")
console.log(fruitItem());

// Task 3 

function proteinItem(){
    return foodData.filter((data) => data.category === 'Protein');
}
console.log("Protein item")
console.log(proteinItem())

// Task 4

function nutsItem(){
    return foodData.filter((data) => data.category === 'Nuts');
}
console.log("Nuts item");
console.log(nutsItem());

// Task 5 

function graiItem(){
    return foodData.filter((data) => data.category === 'Grain');
}
console.log("Grain item");
console.log(graiItem());

// Task 6 

function dairyItem(){
    return foodData.filter((data) => data.category === 'Dairy');
}
console.log("Dairy item");
console.log(dairyItem());

// Task 7 

function CalorieItemHigh(calorie){
    return foodData.filter((data) => data.calorie > calorie);
}
console.log("Calorie item");
console.log(CalorieItemHigh());

// Task 8 

function CalorieItemlow(calorie){
    return foodData.filter((data) => data.calorie < calorie);
}
console.log("Calorie item");
console.log(CalorieItemlow());

// Task 9 

function highlow(){
    return foodData.sort((a, b) => a.proteins - b.proteins);
}
console.log("High Low item");
console.log(highlow());

// Task 10 

function Carb(){
    return foodData.sort((a, b) => a.carb - b.carb);
}
console.log("High Low item");
console.log(Carb());