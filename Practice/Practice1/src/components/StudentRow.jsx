export const StudentRow = ({ id, name, age, gender, onRemove }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>
                <button onClick={() => onRemove(id)} className="btn btn-danger">Remove</button>
            </td>
        </tr>
    )
}