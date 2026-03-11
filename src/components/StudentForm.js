import React, { useState, useEffect } from "react";

function StudentForm({ addStudent, updateStudent, editStudent }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: ""
  });

  useEffect(() => {
    if (editStudent) {
      setStudent(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.name || !student.email || !student.age) {
      alert("All fields are required");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;

    if (!emailPattern.test(student.email)) {
      alert("Please enter a valid email");
      return;
    }

    if (editStudent) {
      updateStudent(student);
    } else {
      addStudent(student);
    }

    setStudent({
      name: "",
      email: "",
      age: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="email"
        name="email"
        placeholder="Student Email"
        value={student.email}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={student.age}
        onChange={handleChange}
        style={styles.input}
      />

      <button type="submit" style={styles.button}>
        {editStudent ? "Update Student" : "Add Student"}
      </button>

    </form>
  );
}

const styles = {

  form: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    flex: "1"
  },

  button: {
    padding: "10px 20px",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }

};

export default StudentForm;