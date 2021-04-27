import {Shape} from "./Shape";
 class Circle extends Shape {   
    display(){   
       console.log("Shape is : "+this.name) ; 
    }   
 }  
 var obj = new Circle("Circle");   
 obj.display()  