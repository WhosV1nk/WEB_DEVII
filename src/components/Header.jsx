import './Header.css'

function Header({ count }) {
  return (
    <header className="header">
      <p className="header__label">Web Dev II · Assignment 3</p>
      <h1 className="header__title">Student<br />Scoreboard</h1>
      <p className="header__sub">
        {count} student{count !== 1 ? 's' : ''} enrolled
      </p>
    </header>
  )
}

export default Header
