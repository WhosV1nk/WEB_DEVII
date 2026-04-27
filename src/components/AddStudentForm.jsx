import { useState } from 'react'
import './AddStudentForm.css'

function AddStudentForm({ onAdd }) {
  const [name,   setName]   = useState('')
  const [score,  setScore]  = useState('')
  const [errors, setErrors] = useState({})

  function validate() {
    const errs = {}
    if (!name.trim())                           errs.name  = 'Name is required'
    if (score === '' || isNaN(Number(score)))   errs.score = 'Enter a valid number'
    else if (Number(score) < 0 || Number(score) > 100) errs.score = 'Score must be 0 – 100'
    return errs
  }

  function handleSubmit() {
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    onAdd({ name: name.trim(), score: Number(score) })
    setName('')
    setScore('')
    setErrors({})
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <section className="add-form">
      <h2 className="add-form__title">Add Student</h2>

      <div className="add-form__row">
        {/* Name field */}
        <div className="field">
          <label className="field__label" htmlFor="student-name">Full Name</label>
          <input
            id="student-name"
            className={`field__input ${errors.name ? 'field__input--error' : ''}`}
            type="text"
            placeholder="e.g. Ayesha Khan"
            value={name}
            onChange={e => { setName(e.target.value); setErrors(p => ({ ...p, name: '' })) }}
            onKeyDown={handleKeyDown}
          />
          {errors.name && <span className="field__error">{errors.name}</span>}
        </div>

        {/* Score field */}
        <div className="field field--narrow">
          <label className="field__label" htmlFor="student-score">Score (0 – 100)</label>
          <input
            id="student-score"
            className={`field__input ${errors.score ? 'field__input--error' : ''}`}
            type="number"
            min="0"
            max="100"
            placeholder="e.g. 75"
            value={score}
            onChange={e => { setScore(e.target.value); setErrors(p => ({ ...p, score: '' })) }}
            onKeyDown={handleKeyDown}
          />
          {errors.score && <span className="field__error">{errors.score}</span>}
        </div>

        {/* Submit */}
        <button className="add-form__btn" onClick={handleSubmit}>
          Add Student
        </button>
      </div>
    </section>
  )
}

export default AddStudentForm
