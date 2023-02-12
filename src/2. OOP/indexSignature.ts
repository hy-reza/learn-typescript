class Courses {
  // C1, C2 ....
  [courseName: string]: string; //index signature property
}

const binarAcademy = new Courses();
binarAcademy.C1 = "FSW";
binarAcademy.C2 = "AND";

console.log(binarAcademy);

// C1: "FSW"
// C2: "AND"
