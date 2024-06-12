# Execution Context <br/>

## When the JavaScript engine executes the JavaScript code, it creates the global execution context. 
    The global execution context has two phases:
            1. Creation
            2. Execution


## When the JavaScript engine executes a script for the first time, it creates the global execution context. 
    During this phase, the JavaScript engine performs the following tasks:

        The Creation Phase: 
                i. Create the global object i.e., window in the web browser or global in Node.js.
                ii. Create the this object and bind it to the global object.
                iii. Set up a memory heap for storing variables and function references.
                iv. Store the function declarations in the memory heap and variables within the global execution context 
                    with the initial values as undefined.

    After the creation phase, the global execution context moves to the execution phase.

                During the execution phase, the JavaScript engine executes the code line by line, assigns the values 
                to variables, and executes the function calls.
                For each function call, the JavaScript engine creates a new function execution context.

                The function execution context is similar to the global execution context. But instead of creating the
                global object, the JavaScript engine creates the arguments object that is a reference to all the parameters 
                of the function:

                To keep track of all the execution contexts, including the global execution context and function execution 
                contexts, the JavaScript engine uses the call stack.

                <hr/>

# Call Stack
    A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions. 
    It has the information on what function is currently being run and what functions are invoked from within that function

        Also, the JavaScript engine uses a call stack to manage execution contexts:

                - The global execution context
                - Function execution contexts

        The call stack works based on the last-in-first-out (LIFO) principle.

            -- When you execute a script, the JavaScript engine creates a global execution context and pushes it on top of the 
            call stack.

            -- Whenever a function is called, the JavaScript engine creates a function execution context for the function,   
            pushes it on top of the call stack, and starts executing the function.

            -- If a function calls another function, the JavaScript engine creates a new function execution context for the function 
            being called and pushes it on top of the call stack.

            -- When the current function completes, the JavaScript engine pops it off the call stack and resumes the 
            execution where it left off.

            -- The script will stop when the call stack is empty.


## Summery : 

            - JavaScript engine uses a call stack to manage execution contexts.
            - The call stack uses the stack data structure that works based on the LIFO (last-in-first-out) principle.
