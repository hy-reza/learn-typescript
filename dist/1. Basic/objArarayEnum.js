"use strict";
var Job;
(function (Job) {
    Job[Job["STUDENT"] = 0] = "STUDENT";
    Job[Job["EMPLOYE"] = 1] = "EMPLOYE";
    Job[Job["TEACHER"] = 2] = "TEACHER";
    Job[Job["ANY"] = 3] = "ANY";
})(Job || (Job = {}));
const user = {
    id: "1293912312",
    name: "Handy Reza Alfanda",
    age: 22,
    hobby: ["gaming", "coding"],
    appearance: ["male", "normal", 60],
    job: Job.STUDENT,
};
console.info(user.job === 1 ? user.name : "not a student");
