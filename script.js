//დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (a,b) და დააბრუნებს შესაბამისს ტექსტს 
//თუ ტიცხვები ტოლია : a  და b ტოლია
//თუ a მეტია b ze : a  მეტია b -ზე
//თუ a ნაკლებია  b ze : a  ნაკლებია  b -ზე

let test = function  (a,b) {  
if (a==b) {return "a  და b ტოლია"}

else if (a>b) {
    return "a  მეტია b -ზე"
}

else {return "a  ნაკლებია  b -ზე"}

}
console.log(test (20,9))

//დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ true თუ მათი ჯამი მეტია 100 ზე , false , თუ არ არის მეტი 100 ზე

function bool (a,b) {  
  if (a+b>100) {return true}
  
  else {return false}
  
  }
  console.log(bool(20,90))
  
  //an

  function numbers(a,b){
    return a+b>100;
  }
  console.log(numbers(30,30));
  console.log(numbers(80,40));
 //დაწერეთ ფუნქცია, რომელიც დაითვლის და დააბრუნებს კალათბურთის თამაშისას აღებულ ქულას ( ქულების ჯამს). ფუნქციას აქვს სამი პარამეტრი
  //პირველი პარამეტრი - 1 ქულიანების რაოდენობა
  //მეორე პარამეტრი -  2 ქულიანების რაოდენობა
  //მესამე - 3 ქულიანების რაოდენობა 

  function score (points1, points2, points3){
    return points1+points2*2+points3*3
  }
  let totalscore =score(5,8,5);
  console.log(totalscore);

  //დაწერეთ ფუნქცია ორი პარამეტრით start და end , ფუნქციას გადაეცემა ორი რიცხვი, უნდა შექმნათ  start დან end-ჩათვლით  რიცხვების მასივი(მაგალითად თუ start არის 3 და end არის 6 მასივის ელემენტები უნდა იყოს [3,4,5,6] ) ( arr.push()- მასივში ელემენტის დამატება)
function param (start, end){
  let arr = []
  for (let i=start; i<=end; i++){
    arr.push(i)}
    return arr;n
}
console.log(param(3,9))

let person = {
  firstname:"Marita",
  lastname:"KH", 
  age:30,
}

function pers(age){
  if (age<18){
    console.log (person.firstname, "is not adult")
  }else{
    console.log(person.firstname, "is adult")
  }
}
pers(person.age) //პირდაპირ ვიძახებთ ფუნქციას, აღარაა საჭირო კონსოლ ლოგი

let phones = ["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"]
for (i=0; i<phones.length; i++){
console.log(phones[i])
}

//Გამოაცხადეთ ცვლადი num სასურველი მნიშვნელობით ( მაგ. 23), დაბეჭდეთ რიცხვები 1 დან num ის ჩათვლით ( გამოიყენეთ while ციკლი).

let num =23; 
let i=1
while (i<=num){
  console.log(i)
  i++
}

//Გამოიყენეთ სასურველი ციკლი და დაბეჭდეთ ლუწი რიცხვები 2-დან 13 - ის ჩათვლით , გამოიყენეთ სასურველი ციკლი ( for, while)
//for(let i=2; i<=13; i+=2){
    {console.log(i)}
//} 
