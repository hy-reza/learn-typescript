enum Job {
  STUDENT,
  EMPLOYE,
  TEACHER,
  ANY,
} // this is enum

const user: {
  name: string;
  age: number;
  hobby: string[];
  appearance: [string, string, number];
  job: Job;
} = {
  // const user = {
  name: "Handy Reza Alfanda", //string
  age: 22, //umber
  hobby: ["gaming", "coding"], //array
  appearance: ["male", "normal", 60], //tupple
  job: Job.STUDENT,
};

console.info(user.job === 1 ? user.name : "not a student");
