// student
const student = {
  name: 'dafah fabian syah',
  age: 18,
  school: 'Bintang Nusantara School',
  //   majors: 'teknik komputer dan jaringan', alias
};
function printMurid({ name, age, majors = 'TKJ', school }) {
  console.log(name, age, majors, school);
}
printMurid(student);

// product
const product = {
  type: 'makanan',
  //   price: 2000, alias
  price: 'dua ribu rupiah',
  halal: true,
};

function printProduct({ type, price, halal }) {
  console.log(type, price, halal);
}
printProduct(product);
