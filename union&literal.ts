type combineableType = string | number; //union type
type text = "the result is : "; //literal type

const combine = (
  input1: combineableType,
  input2: combineableType,
  text: text
) => {
  let result: string | number;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = `${input1} ${input2}`;
  }

  console.log(text + result);
};

combine("Handy", "Reza", "the result is : ");
combine(8, 8, "the result is : ");
