<h1>
    Blog 1: How does TypeScript help in improving code quality and project maintainability?
</h1>

<p>
    Typescript is a powerful programming language which extends Javascript with more developer friendly features. Which offers the developers to improve code maintainability and scalability. Let's talk about some core features of Typescripts that help in improving code quality and project maintainability.
</p>
<br>

<h3>Type Safety</h3>
<p>
    Typescript ensures predictable types. It catches type related errors during compilation. So if there is any type related errors, it will catch it before the code occurs error in the production. It reduces extra pain of tasting.
    <br>
    <br>
    For example:

    const name: string = "Jubayer Hossain"
    const age: number = "22" // "22" is not assignable to number
</p>
<br>

<h3>Object Oriented Programming</h3>

<p>
JS supports OOP but loosely, with fewer tools for enforcement. It usually called syntactic sugar. On the other hand, TS enhances OOP with real type enforcement, interfaces, access control, and abstraction, making it ideal for large, maintainable applications. Which are not available in Vanilla Javascript.
</p>
<br>

<h3>Better Blueprint Support</h3>
<p>
    Typescript provides better blueprint of the code by using type alias, interface and abstract classes. It helps developers to code more efficiently. 
    <br>
    <br>
    For Example:

    interface VehicleInterface{
        name: string;
        year: number;
        model: string;
    }

    class Vehicle implements VehicleInterface{
        name: string;
        year: number;
        model: string;

        // Vehicle class must follow the convention of VehicleInterface
        
        constructor(name: string, year: number, model: string){
            this.name = name;
            this.year = year;
            this.model = model;
        }
    }
</p>
<br>

<h3>Early Bug Detection</h3>
<p>
Are a bug lover? Do you love to make mistake and play with bugs? Here comes Typescript to destroy your happy life. Now you cant do mistakes and get out of it. Typescript will catch your mistakes before it reach to production. It catches most of the errors in compile time. But if you are eager to play with bugs, you can still find some way to make mistakes.
</p>
<br>

<h3>
    Autocomplete & IntelliSense
</h3>

<p>
TypeScript provides rich editor features like code completion, parameter hints, and documentation in VS Code and other editors. Wich helps developer to develop faster and make less mistake. It makes life easy for developers
</p>

<br>
<br>
<br>
<br>


<h1>
    Blog 2: Provide an example of using union and intersection types in TypeScript.
</h1>

<h3>Union Types</h3>

<p>
    Union Type allows to have a value with one of the several provided types. It can be any type from provided types. In terms of Objects, it ensures all the common properties in the union type and rest are optional.
    <br>
    <br>
    For Example:

    type Mobile = {
        brand: string;
        model: string;
        price: number;
        isSmartphone?: boolean;
    }

    type Laptop = {
        brand: string;
        model: string;
        price: number;
        isGaming?: boolean;
    }

    type Electronics = Mobile | Laptop

    const electronics : Electronics = {
        brand: "Apple",
        model: "iPhone 14",
        price: 999,
        isSmartphone: true, // Here isSmartphone property is optional
    }
</p>

<br>
<br>

<h3>Intersection Types</h3>
<p>
    Intersection Type ensures to have a value with all of the several provided types. It must be cover all the types from provided types. In terms of Objects, it ensures all the common and different properties in the Intersection type.
    <br>
    <br>
    For Example:

    type Mobile = {
        brand: string;
        model: string;
        price: number;
        isSmartphone?: boolean;
    }

    type Laptop = {
        brand: string;
        model: string;
        price: number;
        isGaming?: boolean;
    }

    type Electronics = Mobile & Laptop

    const electronics : Electronics = {
        brand: "Apple",
        model: "iPhone 14",
        price: 999,
        isSmartphone: true,
        isGaming?: true;

        // Here isSmartphone and isGaming properties are not common in Mobile & Laptop Types. But Intersection forces to have these properties in Electronics Type.
    }
</p>