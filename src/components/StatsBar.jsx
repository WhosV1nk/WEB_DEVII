import './StatsBar.css'

function StatCard({ value, label, modifier }) {
  return (
    <div className={`stat-card stat-card--${modifier}`}>
      <span className="stat-card__value">{value}</span>
      <span className="stat-card__label">{label}</span>
    </div>
  )
}

function StatsBar({ total, passed, failed, average }) {
  return (
    <div className="stats-bar">
      <StatCard value={total}   label="Total"   modifier="total"  />
      <StatCard value={passed}  label="Passed"  modifier="pass"   />
      <StatCard value={failed}  label="Failed"  modifier="fail"   />
      <StatCard value={average} label="Average" modifier="avg"    />
    </div>
  )
}

export default StatsBar
