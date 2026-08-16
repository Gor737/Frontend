import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Nela", age: 23, gender: "female", salary: 4444 },
    { id: 2, name: "Gor", age: 23, gender: "male", salary: 3333 },
    { id: 3, name: "Vahram", age: 10, gender: "male", salary: 21 },
    { id: 4, name: "Siro", age: 37, gender: "female", salary: 713 },
    { id: 5, name: "Kaly", age: 44, gender: "female", salary: 900 },
  ]);

  const removeStd = (id) => {
    const newStudents = students.filter((student) => student.id !== id);
    setStudents(newStudents);
  };
  return (
    <>
      <div className="stdTable" id="title">
        <h1> Students </h1>
      </div>
      <div className="stdTable">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>gender</th>
              <th>salary</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                  <td>{student.salary}</td>
                  <td>
                    <button onClick={() => removeStd(student.id)}>
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
