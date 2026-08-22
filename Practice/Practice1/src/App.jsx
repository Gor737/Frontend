import { useState } from "react"
import { StudentList } from "./components/StudentList"

const byFemales = stud => stud.gender === "female"

export function App() {

    const [students, setStudents] = useState([
        { id: 101, name: "Jonathan", age: 22, gender: "male" },
        { id: 102, name: "Aisha", age: 21, gender: "female" },
        { id: 103, name: "Marco", age: 23, gender: "male" },
        { id: 104, name: "Lina", age: 20, gender: "female" },
        { id: 105, name: "Priya", age: 22, gender: "female" },
        { id: 106, name: "Ethan", age: 24, gender: "male" }
    ])

    // const [s, setState1] = useState(1);
    // setState1(function (a) {return a + 1});
    // setState1(function (a) {return a + 1});
    function useState(v) {
        let oldVal = v;
        function f(val) {
            if (typeof val === "function") {
                oldVal = val(oldVal);
            } else {
                oldVal = val;
            }
        }
        return [v, f];
    }

    // }
    // const handleRemove = (id) => {
    //     // immutability
    //     setStudents(students.filter(student => student.id !== id))
    // }

    return (
        <>

            <div className="container">
                {/* 
                    <StudentList name="Tiko"  />
                    StudentList({name:"Tiko"})

                */}
                <StudentList
                    title={"All The Students"}
                    students={students}
                    onRemove={handleRemove}
                />
                <StudentList
                    title={"Female Students"}
                    students={students.filter(byFemales)}
                    onRemove={handleRemove}
                />
            </div>
        </>
    )
}