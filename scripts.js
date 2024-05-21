document.addEventListener('DOMContentLoaded', (event) => {

    function generateStudentId() {
        return Math.floor(1000 + Math.random() * 9000).toString(); // ---Generate a 4-digit ID---
    }

    
    function saveStudentData(student) {
        let students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
    }

    
    function loadStudentData() {
        let students = JSON.parse(localStorage.getItem('students')) || [];
        const studentsList = document.getElementById('studentsList');
        studentsList.innerHTML = '';
        students.forEach(student => {
            let li = document.createElement('li');
            li.textContent = `${student.studentName} (ID: ${student.studentId}, Phone: ${student.phone}, Address: ${student.address})`;
            studentsList.appendChild(li);
        });
    }

    
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const student = {};

        formData.forEach((value, key) => {
            student[key] = value;
        });

        student.studentId = generateStudentId(); 
        saveStudentData(student); 
        loadStudentData(); 

        console.log('Success:', student);
        alert(`Registration successful! Student ID: ${student.studentId}`);
        form.reset();
        document.getElementById('studentId').value = generateStudentId();
    });

    loadStudentData();
    document.getElementById('studentId').value = generateStudentId();
});
