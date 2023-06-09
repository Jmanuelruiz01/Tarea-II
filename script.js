// Obtener referencias a los elementos del DOM
const nameInput = document.getElementById('name-input');
const idInput = document.getElementById('id-input');
const ageInput = document.getElementById('age-input');
const weightInput = document.getElementById('weight-input');
const addButton = document.getElementById('add-button');
const studentsList = document.getElementById('students-list');
const lessThan40 = document.getElementById('less-than-40');
const between40And50 = document.getElementById('between-40-and-50');
const between50And60 = document.getElementById('between-50-and-60');
const greaterThan60 = document.getElementById('greater-than-60');

// Variables para almacenar las estadísticas y los alumnos
let students = [];
let countLessThan40 = 0;
let countBetween40And50 = 0;
let countBetween50And60 = 0;
let countGreaterThan60 = 0;

// Función para actualizar las estadísticas y la lista de alumnos
function updateStatistics() {
  studentsList.innerHTML = '';

  students.forEach(student => {
    const listItem = document.createElement('li');
    const studentInfo = document.createElement('span');
    studentInfo.classList.add('student-info');
    studentInfo.textContent = `[Nombre: ${student.name}, Cédula: ${student.id}, Edad: ${student.age}]`;
    listItem.textContent = `${student.weight} kg `;
    listItem.appendChild(studentInfo);
    studentsList.appendChild(listItem);
  });

  lessThan40.textContent = 'Alumnos de menos de 40kg: ' + countLessThan40;
  between40And50.textContent = 'Alumnos entre 40kg y 50kg: ' + countBetween40And50;
  between50And60.textContent = 'Alumnos de más de 50kg y menos de 60kg: ' + countBetween50And60;
  greaterThan60.textContent = 'Alumnos de más o igual a 60kg: ' + countGreaterThan60;
}

// Función para manejar el evento de agregar un nuevo alumno
function addStudent() {
  const name = nameInput.value.trim();
  const id = idInput.value.trim();
  const age = parseInt(ageInput.value);
  const weight = parseFloat(weightInput.value);

  if (name !== '' && id !== '' && !isNaN(age) && !isNaN(weight)) {
    const student = {
      name: name,
      id: id,
      age: age,
      weight: weight
    };

    students.push(student);

    if (weight < 40) {
      countLessThan40++;
    } else if (weight >= 40 && weight <= 50) {
      countBetween40And50++;
    } else if (weight > 50 && weight < 60) {
      countBetween50And60++;
    } else {
      countGreaterThan60++;
    }

    updateStatistics();
    clearInputs();
  }
}

// Función para borrar el contenido de los campos de entrada
function clearInputs() {
  nameInput.value = '';
  idInput.value = '';
  ageInput.value = '';
  weightInput.value = '';
}

// Asociar la función addStudent al evento click del botón
addButton.addEventListener('click', addStudent);