import './StudentRow.css'

function StudentRow({ student, index, onScoreChange, onDelete }) {
  const isPassing = student.score >= 40

  return (
    <tr className="student-row">
      {/* Index */}
      <td className="cell-idx">
        {String(index + 1).padStart(2, '0')}
      </td>

      {/* Name */}
      <td className="cell-name">{student.name}</td>

      {/* Score input */}
      <td className="cell-score">
        <input
          className="score-input"
          type="number"
          min="0"
          max="100"
          value={student.score}
          onChange={e => onScoreChange(student.id, e.target.value)}
          aria-label={`Score for ${student.name}`}
        />
      </td>

      {/* Pass / Fail badge */}
      <td className="cell-status">
        <span className={`badge ${isPassing ? 'badge--pass' : 'badge--fail'}`}>
          {isPassing ? 'Pass' : 'Fail'}
        </span>
      </td>

      {/* Delete button */}
      <td className="cell-action">
        <button
          className="delete-btn"
          onClick={() => onDelete(student.id)}
          aria-label={`Remove ${student.name}`}
          title="Remove student"
        >
          ✕
        </button>
      </td>
    </tr>
  )
}

export default StudentRow
