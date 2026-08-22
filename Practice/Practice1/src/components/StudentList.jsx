import { StudentRow } from "./StudentRow"

// TypeScript

export const StudentList = ({ title, students, onRemove }) => {
    return (
        <div>
            <h3>Student List {title}</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>gender</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        students.map(student =>
                            <StudentRow
                                key={student.id}
                                onRemove={onRemove}
                                {...student}
                            />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}