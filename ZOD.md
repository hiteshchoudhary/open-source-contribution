
## 1. Middleware
Middleware is software that acts as a bridge between different applications or systems, facilitating communication and data management. In web development, middleware often intercepts incoming HTTP requests and provides additional functionality before passing them on to the main application.

### Example:
In an Express.js application, middleware functions are used to perform tasks such as authentication, logging, or error handling. Here's a simple example of how middleware works in Express:
```
const express = require('express');
const app = express();

// Middleware function to log incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware function
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Middleware function for error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


```
In this example:

The first middleware function logs the timestamp, HTTP method, and URL of every incoming request.
The route handler responds with "Hello, world!" when the root URL is accessed.
The second middleware function is an error handler that logs any errors and sends a generic error message with a 500 status code.
Middleware allows developers to modularize and organize code more efficiently by separating concerns and adding reusable functionality to their applications.

## 2. Zod Authintication
Zod is a TypeScript-first schema declaration and validation library. I'm using the term "schema" to broadly refer to any data type, from a simple string to a complex nested object.

Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.

#### Some other great aspects:

- Zero dependencie
- Works in Node.js and all modern browsers
- Tiny: 8kb minified + zipped
- Immutable: methods (e.g. .optional()) return a new instance
- Concise, chainable interface
- Functional approach: parse, don't validate
- Works with plain JavaScript too! You don't need to use TypeScript.



#### Basic usage
Creating a simple string schema
```
import { z } from "zod";

// creating a schema for strings
const mySchema = z.string();

// parsing
mySchema.parse("tuna"); // => "tuna"
mySchema.parse(12); // => throws ZodError

// "safe" parsing (doesn't throw error if validation fails)
mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
mySchema.safeParse(12); // => { success: false; error: ZodError }
Creating an object schema
```
```
import { z } from "zod";

const User = z.object({
  username: z.string(),
});
User.parse({ username: "Ludwig" });

// extract the inferred type
type User = z.infer<typeof User>;
// { username: string }
```
## Primitives
```
import { z } from "zod";

// primitive values
z.string();
z.number();
z.bigint();
z.boolean();
z.date();
z.symbol();

// empty types
z.undefined();
z.null();
z.void(); // accepts undefined

// catch-all types
// allows any value
z.any();
z.unknown();

// never type
// allows no values
z.never();
```
## Coercion for primitives
Zod now provides a more convenient way to coerce primitive values.
```
const schema = z.coerce.string();
schema.parse("tuna"); // => "tuna"
schema.parse(12); // => "12"
```
During the parsing step, the input is passed through the String() function, which is a JavaScript built-in for coercing data into strings.

The returned schema is a normal ZodString instance so you can use all string methods.

z.coerce.string().email().min(5);
How coercion works

All primitive types support coercion. Zod coerces all inputs using the built-in constructors: String(input), Number(input), new Date(input), etc.
```
z.coerce.string(); // String(input)
z.coerce.number(); // Number(input)
z.coerce.boolean(); // Boolean(input)
z.coerce.bigint(); // BigInt(input)
z.coerce.date(); // new Date(input)
```
Note that some behavior may not be what you expect.
```
schema.parse(true); // => "true"
schema.parse(undefined); // => "undefined"
schema.parse(null); // => "null"
For more control over coercion logic, consider using z.preprocess or z.pipe().
```
## Boolean coercion

Zod's approach to coercion is very simple! It passes the value into the Boolean(value) function, that's it. Any truthy value will resolve to true, any falsy value will resolve to false.
```
z.coerce.boolean().parse("tuna"); // => true
z.coerce.boolean().parse("true"); // => true
z.coerce.boolean().parse("false"); // => true
z.coerce.boolean().parse(1); // => true
z.coerce.boolean().parse([]); // => true

z.coerce.boolean().parse(0); // => false
z.coerce.boolean().parse(undefined); // => false
z.coerce.boolean().parse(null); // => false
```
## Literals
Literal schemas represent a literal type, like "hello world" or 5.
```
const tuna = z.literal("tuna");
const twelve = z.literal(12);
const twobig = z.literal(2n); // bigint literal
const tru = z.literal(true);

const terrificSymbol = Symbol("terrific");
const terrific = z.literal(terrificSymbol);
```
// retrieve literal value
tuna.value; // "tuna"
Currently there is no support for Date literals in Zod. If you have a use case for this feature, please file an issue.

 ## Strings
Zod includes a handful of string-specific validations.
```
// validations
z.string().max(5);
z.string().min(5);
z.string().length(5);
z.string().email();
z.string().url();
z.string().emoji();
z.string().uuid();
z.string().cuid();
z.string().cuid2();
z.string().ulid();
z.string().regex(regex);
z.string().includes(string);
z.string().startsWith(string);
z.string().endsWith(string);
z.string().datetime(); // ISO 8601; default is without UTC offset, see below for options
z.string().ip(); // defaults to IPv4 and IPv6, see below for options

// transformations
z.string().trim(); // trim whitespace
z.string().toLowerCase(); // toLowerCase
z.string().toUpperCase(); // toUpperCase
```

You can customize some common error messages when creating a string schema.
```
const name = z.string({
  required_error: "Name is required",
  invalid_type_error: "Name must be a string",
});
When using validation methods, you can pass in an additional argument to provide a custom error message.
```
```
z.string().min(5, { message: "Must be 5 or more characters long" });
z.string().max(5, { message: "Must be 5 or fewer characters long" });
z.string().length(5, { message: "Must be exactly 5 characters long" });
z.string().email({ message: "Invalid email address" });
z.string().url({ message: "Invalid url" });
z.string().emoji({ message: "Contains non-emoji characters" });
z.string().uuid({ message: "Invalid UUID" });
```
z.string().includes("tuna", { message: "Must include tuna" });
z.string().startsWith("https://", { message: "Must provide secure URL" });
z.string().endsWith(".com", { message: "Only .com domains allowed" });
z.string().datetime({ message: "Invalid datetime string! Must be UTC." });
z.string().ip({ message: "Invalid IP address" });
