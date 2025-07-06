console.log("LMAO")

// adding feature of count-down
for (let i = 60; i >= 0; i--) {
    setTimeout(() => {
        console.log(60-i);
    }, i*1000);
}