class Mobile
{
    constructor(name,storage,color)
    {
        this.name=name;
        this.storage=storage;
        this.color=color;
    }
    display()
    {
        console.log(`Model name is: ${this.name}, Storage capacity: ${this.storage}, Color is: ${this.color}`);
        
    }
}
const mobile = new Mobile('Samsung','8GB','Black');
mobile.display();

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

class Computer
{
    
    constructor(model,storage,color)
    {
        
        this.model=model;
        this.storage=storage;
        this.color=color;
        console.log("parent constructor");
    }
    display()
    {
       
        console.log(`Model name is: ${this.model}, Storage capacity: ${this.storage}, Color is: ${this.color}`);
        
    }
}
class Configuration extends Computer
{
 constructor(capacity,model,storage,color)
 {
    super(model,storage,color);
    this.capacity=capacity;
    console.log("child constructor");
    console.log(super.name);
    
    
 }
 display()
 {
    console.log("Hard Disk storage: "+this.capacity);
    super.display();
    console.log(super.model);
    
 }
}
const configuration = new Configuration('250GB','HP','16GB','Black');
configuration.display();

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");

class A
{
    constructor()
    {
        console.log("Parent class");
    }
    display()
    {
        console.log("Parent class");
        
    }
}
class B extends A
{
    constructor()
    {
        super();
        console.log("child class");
        
    }
}
const obj = new B();
obj.display();