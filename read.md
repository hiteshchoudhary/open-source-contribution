#I am learning how to do 'Pull Request'

#here is a javascript code that i made

```javascript
console.log("number guess game");
await wait(500);

let userChoice = confirm(
  `Pick Custom or from Preset (ok for custom and cancel for preset)`,
);

if (userChoice) {
  let minn = Number(prompt(`Enter min Value`));
  let maxn = Number(prompt(`Enter max Value`));
  let resultn = Math.floor(Math.random() * (maxn - minn + 1)) + minn;

  console.log(`Picking A Number......`);

  await wait(2000);

  console.log(`Number Picked`);

  await wait(1000);

  let chance = 0;
  let maxChance = 3;

  while (chance < maxChance) {
    let userGuess = prompt(`Guess the number (${chance + 1}/3)`);
    let Guess = Number(userGuess);

    console.log(`Checking....`);

    await wait(1000);

    if (Guess === resultn) {
      alert(`You won`);
      console.log(`You won`);
      break;
    } else {
      chance++;
      if (chance < maxChance) {
        alert(`Guess Again`);
      }
    }
  }

  if (chance === maxChance) {
    console.log(`You Lost the Number Was ${resultn}`);
  }
} else {
  let comREs = prompt(`Pick one:\n1. 1 to 10\n2. 1 to 50\n3. 1 to 100`);
  if (comREs === "1") {
    let comR1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    console.log(`Picking A Number......`);

    await wait(2000);

    console.log(`Number Picked`);

    await wait(1000);

    let chance1 = 0;
    let maxChance1 = 3;

    while (chance1 < maxChance1) {
      let userGuess = prompt(`Guess the number (${chance1 + 1}/3)`);
      let Guess = Number(userGuess);

      console.log(`Checking....`);

      await wait(2000);

      if (Guess === comR1) {
        alert(`You won`);
        console.log(`You won`);
        break;
      } else {
        chance++;
        if (chance1 < maxChance1) {
          alert(`Guess Again`);
        }
      }
    }

    if (chance1 === maxChance1) {
      console.log(`You Lost the Number Was ${comR1}`);
    }
  } else if (comREs === "2") {
    let comR2 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    console.log(`Picking A Number......`);

    await wait(2000);

    console.log(`Number Picked`);

    await wait(1000);

    let chance2 = 0;
    let maxChance2 = 6;

    while (chance2 < maxChance2) {
      let userGuess = prompt(`Guess the number (${chance2 + 1}/6)`);
      let Guess = Number(userGuess);

      console.log(`Checking....`);

      await wait(2000);

      if (Math.abs(comR2 - Guess) <= 10) {
        alert(`You are very close`);
      }
      if (Math.abs(comR2 - Guess) <= 20 && Math.abs(comR2 - Guess) > 10) {
        alert(`You are close`);
      }

      if (Guess === comR2) {
        alert(`You won`);
        console.log(`You won`);
        break;
      } else {
        chance2++;
        if (chance2 < maxChance2) {
          alert(`Guess Again`);
        }
      }
    }

    if (chance2 === maxChance2) {
      console.log(`You Lost the Number Was ${comR2}`);
    }
  } else if (comREs === "3") {
    let comR3 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    console.log(`Picking A Number......`);

    await wait(2000);

    console.log(`Number Picked`);

    await wait(1000);

    let chance3 = 0;
    let maxChance3 = 9;

    while (chance3 < maxChance3) {
      let userGuess = prompt(`Guess the number (${chance3 + 1}/9)`);
      let Guess = Number(userGuess);

      console.log(`Checking....`);

      await wait(2000);

      if (Math.abs(comR3 - Guess) <= 10) {
        alert(`You are very close`);
      }
      if (Math.abs(comR3 - Guess) <= 20 && Math.abs(comR3 - Guess) > 10) {
        alert(`You are close`);
      }
      if (Math.abs(comR3 - Guess) <= 60 && Math.abs(comR3 - Guess) > 70) {
        alert(`Gone to far`);
      }

      if (Guess === comR3) {
        alert(`You won`);
        console.log(`You won`);
        break;
      } else {
        chance3++;
        if (chance3 < maxChance3) {
          alert(`Guess Again`);
        }
      }
    }

    if (chance3 === maxChance3) {
      console.log(`You Lost the Number Was ${comR3}`);
    }
  } else {
    console.log(`Invalid option Nmmber`);
  }
}
```
