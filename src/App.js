import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import studentsData from "./data/students";

function App() {

  const [students, setStudents] = useState(studentsData);
  const [editStudent, setEditStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  const addStudent = (student) => {
    student.id = Date.now();
    setStudents([...students, student]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((s) =>
        s.id === updatedStudent.id ? updatedStudent : s
      )
    );
    setEditStudent(null);
  };

  const deleteStudent = (id) => {
    if (window.confirm("Delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  if (loading) {
    return (
      <div style={styles.loading}>
        <h1>Loading Students...</h1>
      </div>
    );
  }

  return (
    <div style={styles.page}>

      <div style={styles.container}>

        <h1 style={styles.title}>🎓 Students Management System</h1>

        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>
            {editStudent ? "Edit Student" : "Add New Student"}
          </h2>

          <StudentForm
            addStudent={addStudent}
            updateStudent={updateStudent}
            editStudent={editStudent}
          />
        </div>

        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Students List</h2>

          <StudentTable
            students={students}
            deleteStudent={deleteStudent}
            setEditStudent={setEditStudent}
          />
        </div>

      </div>
    </div>
  );
}

const styles = {

  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg,#667eea,#764ba2)",
    padding: "40px",
    fontFamily: "Arial"
  },

  container: {
    maxWidth: "900px",
    margin: "auto"
  },

  title: {
    textAlign: "center",
    color: "white",
    marginBottom: "30px"
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "30px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
  },

  sectionTitle: {
    marginBottom: "15px",
    color: "#444"
  },

  loading: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    color: "white"
  }

};

export default App;