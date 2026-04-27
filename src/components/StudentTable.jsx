import StudentRow from './StudentRow'
import './StudentTable.css'

function StudentTable({ students, onScoreChange, onDelete }) {
  return (
    <div className="table-wrap">
      <table className="student-table">
        <thead>
          <tr>
            <th className="col-idx">#</th>
            <th>Student</th>
            <th>Score</th>
            <th>Status</th>
            <th className="col-action"></th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td className="table-empty" colSpan={5}>
                No students yet — add one below ↓
              </td>
            </tr>
          ) : (
            students.map((student, index) => (
              <StudentRow
                key={student.id}
                student={student}
                index={index}
                onScoreChange={onScoreChange}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable
