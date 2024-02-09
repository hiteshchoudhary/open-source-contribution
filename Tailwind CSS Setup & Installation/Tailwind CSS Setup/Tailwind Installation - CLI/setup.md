# Tailwind CSS Installation Using CLI

#### Step 1 : Firstly Install node in your system

#### Step 2 : Run the following Commands 

```
npm install -D tailwindcss

npx tailwindcss init
```

#### Step 3 : Install Tailwind CSS Intellisense Extension

#### Step 4 : Update tailwind.config.js file to include this line 

```
content: ["*.html"]
```

#### Step 5 : Create src/input.css to include 

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Step 6 : Include the src/output.css file to your html

#### Step 7 : Run the following Command 

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

## Customizing Watch Command for Running File 

#### Step 1 : Now go to package.json file in that file go to scripts in scripts add "start" name script

#### Step 2 : Copy Below Command and paste it scripts in package.json

```
"start": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
```

#### Step 3 : Below is the Command is ready to Use

```
npm run start
```

### Here We go now it is ready to go 😎 !!!

:heart: Follow Me For More Projects [GitHub](https://github.com/ChinmayKaitade) | [LinkedIn](https://www.linkedin.com/in/chinmay-sharad-kaitade) | [Email](chinmaykaitade123@gmail.com)
