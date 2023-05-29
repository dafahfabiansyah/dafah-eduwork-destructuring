const student = {
  name: 'dafah fabian syah',
  age: 18,
  school: 'Bintang Nusantara School',
  //   majors: 'teknik komputer dan jaringan',
};
function printMurid({ name, age, majors = 'TKJ', school }) {
  console.log(name, age, majors, school);
}
printMurid(student);
