const birthDate = new Date(2003, 11, 29);
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();

const currentYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

if (today < currentYearBirthday) {
    age--;
}

document.getElementById('age').textContent = age;
