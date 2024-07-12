// pinger

const pinger = (count, period) => {
  let i = count;
  console.log("Ping");
  const intrval = setInterval(() => {
    if (--i > 0) {
      console.log("Ping");
    } else {
      clearInterval(intrval);
    }
  }, period);

  // setTimeout(() => {
  //   clearInterval(intrval);
  // }, count * period);
};

pinger(5, 1000);
