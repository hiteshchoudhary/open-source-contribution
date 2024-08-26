const sayHello = name => {
    const greeting = name ? `Hello, ${name}!` : "Hello there!";
    console.log(greeting);
    return greeting;
};

sayHello("john");
sayHello();