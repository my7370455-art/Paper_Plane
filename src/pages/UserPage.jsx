import { useState } from 'react'
import './UserPage.css'

const defaultProfile = {
  displayName: 'Jordan Blake',
  email: 'j.blake@westbrook.edu',
  university: 'Westbrook University',
  bio: 'Third-year student studying Comparative Literature and Philosophy. Avid reader, amateur cartographer, and dedicated pen pal. I believe the best conversations happen on paper.',
}

function getInitials(name) {
  return name.split(' ').map((n) => n[0]).join('').toUpperCase()
}

function Toggle({ checked, onChange, label }) {
  return (
    <label className="toggle-label">
      <span>{label}</span>
      <div className="toggle-track" onClick={() => onChange(!checked)}>
        <div className={`toggle-thumb${checked ? ' on' : ''}`} />
      </div>
    </label>
  )
}

function UserPage() {
  const [profile, setProfile] = useState(defaultProfile)
  const [saved, setSaved] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [darkTheme, setDarkTheme] = useState(false)
  const [emailDigest, setEmailDigest] = useState(false)

  function handleChange(field, value) {
    setProfile((prev) => ({ ...prev, [field]: value }))
    setSaved(false)
  }

  function handleSave(e) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="user-page">
      <div className="user-container">

        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              {getInitials(profile.displayName)}
            </div>
            <div className="profile-avatar-info">
              <h2 className="profile-display-name">{profile.displayName}</h2>
              <p className="profile-university">{profile.university}</p>
              <p className="profile-email-display">{profile.email}</p>
            </div>
          </div>
        </div>

        <div className="user-columns">
          {/* Edit Profile Form */}
          <section className="user-section">
            <h3 className="section-title">✏️ Edit Profile</h3>
            <form className="profile-form" onSubmit={handleSave}>
              <div className="form-group">
                <label className="form-label">Display Name</label>
                <input
                  className="form-input"
                  type="text"
                  value={profile.displayName}
                  onChange={(e) => handleChange('displayName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  className="form-input"
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">University</label>
                <input
                  className="form-input"
                  type="text"
                  value={profile.university}
                  onChange={(e) => handleChange('university', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Bio</label>
                <textarea
                  className="form-input form-textarea"
                  rows={4}
                  value={profile.bio}
                  onChange={(e) => handleChange('bio', e.target.value)}
                />
              </div>
              <div className="form-actions">
                <button type="submit" className={`save-btn${saved ? ' saved' : ''}`}>
                  {saved ? '✓ Profile Saved!' : '💾 Save Profile'}
                </button>
              </div>
            </form>
          </section>

          {/* Settings Section */}
          <section className="user-section">
            <h3 className="section-title">⚙️ Settings</h3>

            <div className="settings-group">
              <h4 className="settings-group-title">Notifications</h4>
              <Toggle
                label="New letter notifications"
                checked={notifications}
                onChange={setNotifications}
              />
              <Toggle
                label="Weekly email digest"
                checked={emailDigest}
                onChange={setEmailDigest}
              />
            </div>

            <div className="settings-group">
              <h4 className="settings-group-title">Appearance</h4>
              <Toggle
                label="Dark theme"
                checked={darkTheme}
                onChange={setDarkTheme}
              />
            </div>

            <div className="settings-group">
              <h4 className="settings-group-title">Privacy</h4>
              <div className="privacy-info">
                <p>Your letters are private by default. Only public letters are visible to other students.</p>
              </div>
            </div>

            <div className="settings-group">
              <h4 className="settings-group-title">Account</h4>
              <div className="account-stats">
                <div className="stat-item">
                  <span className="stat-number">47</span>
                  <span className="stat-label">Letters Sent</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">53</span>
                  <span className="stat-label">Letters Received</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Pen Pals</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default UserPage
