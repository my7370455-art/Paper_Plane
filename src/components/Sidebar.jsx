import './Sidebar.css'

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

const avatarColors = [
  '#8b6f47', '#2c5f8a', '#6a8a2c', '#8a2c6a', '#2c7a6a',
]

function Sidebar({ penPals, selectedId, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">📬 Inbox</h2>
        <span className="sidebar-count">{penPals.length}</span>
      </div>
      <ul className="penpal-list">
        {penPals.map((pal, idx) => (
          <li
            key={pal.id}
            className={`penpal-item${selectedId === pal.id ? ' selected' : ''}`}
            onClick={() => onSelect(pal.id)}
          >
            <div
              className="penpal-avatar"
              style={{ backgroundColor: avatarColors[idx % avatarColors.length] }}
            >
              {getInitials(pal.name)}
            </div>
            <div className="penpal-info">
              <div className="penpal-row">
                <span className="penpal-name">{pal.name}</span>
                <span className="penpal-time">{pal.time}</span>
              </div>
              <p className="penpal-preview">{pal.preview}</p>
            </div>
            {pal.unread && <span className="penpal-unread-dot" />}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
