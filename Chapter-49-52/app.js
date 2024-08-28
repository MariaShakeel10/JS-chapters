//1
function displayInfo() {
   let email= document.getElementById("email2").value
   let password= document.getElementById("password2").value
   document.getElementById("display-content").innerHTML=`<p>${email}</p><p>${password}</p>`
}
// 2
function reveal() {
    document.getElementById("hide").style.display="flex"
    document.getElementById("click").style.display="none"
}
// 3
document.addEventListener('DOMContentLoaded', function() {
    const studentForm = document.getElementById('student-form');
    const studentTableBody = document.getElementById('student-table').querySelector('tbody');
    const editForm = document.getElementById('edit-form');
    const editIndexInput = document.getElementById('edit-index');
    const editNameInput = document.getElementById('edit-name');
    const editAgeInput = document.getElementById('edit-age');
    const editGradeInput = document.getElementById('edit-grade');
    const saveEditButton = document.getElementById('save-edit');
    const cancelEditButton = document.getElementById('cancel-edit');

    let students = []; // Array to store student data

    // Function to render the student table
    function renderTable() {
        studentTableBody.innerHTML = ''; // Clear existing rows
        students.forEach((student, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.grade}</td>
                <td>
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </td>
            `;
            studentTableBody.appendChild(row);
        });

        // Attach event listeners to edit and delete buttons
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.dataset.index;
                students.splice(index, 1);
                renderTable();
            });
        });

        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.dataset.index;
                const student = students[index];
                editIndexInput.value = index;
                editNameInput.value = student.name;
                editAgeInput.value = student.age;
                editGradeInput.value = student.grade;
                editForm.style.display = 'block';
            });
        });
    }

    // Handle form submission to add a new student
    studentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const grade = document.getElementById('grade').value;
        students.push({ name, age, grade });
        studentForm.reset();
        renderTable();
    });

    // Handle save edit button click
    saveEditButton.addEventListener('click', function() {
        const index = editIndexInput.value;
        students[index] = {
            name: editNameInput.value,
            age: editAgeInput.value,
            grade: editGradeInput.value
        };
        editForm.style.display = 'none';
        renderTable();
    });

    // Handle cancel edit button click
    cancelEditButton.addEventListener('click', function() {
        editForm.style.display = 'none';
    });
});
