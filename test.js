const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

wait(3000).then(() => {
  wait(2000).then(() => {
    wait(1000).then(() => {
      console.log("It took 6 seconds to run all the functions in sequence.");
    });
  });
});
