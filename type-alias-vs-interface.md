###Answer to the question No -5 :

Type Alias and Interface in typescript - 

Typescript provides two important ways to define data structure. One is Type alias and another one is Interfaces. These two helps the developer for type safety and also to create more realiable object.

Mainly the main reason behind this is javascript. Mainly we all know javascript is dynamic language. For Safety and more perfect coding we use type alias and Interfaces. we use type alias like this  - 

type user = {
    name: string;
    age: number;
};

so here user became a type so,this type we can use any where. 

on the other hand An interface is created using the interface keyword which is mainly used for describe the structure of object. 

interface Obj = {
    name: string;
    age: number;
};

Ingeneral, interfaces are a good choice for object-orinted designs and objects contracts.But type aliases are more flexible when working with unios and tuples.