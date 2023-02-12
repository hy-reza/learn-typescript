const speed: number | null | undefined = 0;

const ride = {
  speed: speed ?? 30, //by using nullish operator 0 (zero number value) is not a fallsy anymore
};

console.log(ride);
