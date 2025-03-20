///explain this code and make a pull request
(function test() {
  const createPromise = () => {
    let resolver;
    return {
      pr: new Promise(function (res, rej) {
        console.log("pr1 started");
        resolver = res;
      }),
      res: resolver,
    };
  };
  let { pr, res } = createPromise();
  res(
    new Promise((res, rej) => {
      console.log("pr2 started");
      res(pr);
    })
  );
  pr.then((data) => {
    console.log(pr);
  });
})();
///explain this code and make a pull request
