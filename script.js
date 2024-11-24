class Product{
    constructor(age, name){
    this.age = age;
    this.name = name;
}
}

const Product1= new Product(12,"Shampoo");
const Product2= new Product(9,"soap");

document.getElementById("demo").innerHTML=Product1.age +" "+ Product2.name;

