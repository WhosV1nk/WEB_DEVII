import { useState } from 'react'
import Header from './components/Header'
import StatsBar from './components/StatsBar'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'
import './App.css'

const INITIAL_STUDENTS = [
  { id: 1, name: 'Ayesha Khan',   score: 87 },
  { id: 2, name: 'Rahul Verma',   score: 34 },
  { id: 3, name: 'Sara Ahmed',    score: 72 },
  { id: 4, name: 'James Liu',     score: 55 },
  { id: 5, name: 'Priya Nair',    score: 39 },
]

let nextId = INITIAL_STUDENTS.length + 1

function App() {
  const [students, setStudents] = useState(INITIAL_STUDENTS)

  function handleScoreChange(id, value) {
    const clamped = Math.min(100, Math.max(0, Number(value)))
    setStudents(prev =>
      prev.map(s => s.id === id ? { ...s, score: clamped } : s)
    )
  }

  function handleAddStudent({ name, score }) {
    setStudents(prev => [...prev, { id: nextId++, name, score }])
  }

  function handleDeleteStudent(id) {
    setStudents(prev => prev.filter(s => s.id !== id))
  }

  const passed  = students.filter(s => s.score >= 40).length
  const failed  = students.length - passed
  const average = students.length
    ? (students.reduce((sum, s) => sum + s.score, 0) / students.length).toFixed(1)
    : '—'

  return (
    <div className="app">
      <Header count={students.length} />

      <StatsBar
        total={students.length}
        passed={passed}
        failed={failed}
        average={average}
      />

      <StudentTable
        students={students}
        onScoreChange={handleScoreChange}
        onDelete={handleDeleteStudent}
      />

      <AddStudentForm onAdd={handleAddStudent} />
    </div>
  )
}

export default App
