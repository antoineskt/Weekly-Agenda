import './DayButton.css'

export default function DaysButton({ children, onClick, isActive, items }) {
  return (
    <button
      items={items}
      type="button"
      className={`delete-button ${isActive ? 'active' : 'inactive'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
