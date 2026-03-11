import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function StudentTable({ students, deleteStudent, setEditStudent }) {

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase())
  );

  const downloadExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(filteredStudents);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const fileData = new Blob([excelBuffer], {
      type: "application/octet-stream"
    });

    saveAs(fileData, "students.xlsx");
  };

  return (

    <div>

      {/* SEARCH BAR */}

      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      <button onClick={downloadExcel} style={styles.downloadBtn}>
        Download Excel
      </button>

      <table style={styles.table}>

        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Age</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>

        <tbody>

          {filteredStudents.map((s) => (
            <tr key={s.id}>

              <td style={styles.td}>{s.name}</td>
              <td style={styles.td}>{s.email}</td>
              <td style={styles.td}>{s.age}</td>

              <td style={styles.td}>

                <button
                  onClick={() => setEditStudent(s)}
                  style={styles.editBtn}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteStudent(s.id)}
                  style={styles.deleteBtn}
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

const styles = {

  search: {
    padding: "10px",
    width: "250px",
    marginRight: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  downloadBtn: {
    padding: "10px 15px",
    background: "#22c55e",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px"
  },

  th: {
    background: "#667eea",
    color: "white",
    padding: "10px"
  },

  td: {
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid #ddd"
  },

  editBtn: {
    background: "#3b82f6",
    color: "white",
    border: "none",
    padding: "6px 12px",
    marginRight: "5px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  deleteBtn: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  }

};

export default StudentTable;