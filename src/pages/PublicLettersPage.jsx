import { useState } from 'react'
import './PublicLettersPage.css'

const publicLetters = [
  {
    id: 1,
    author: 'Priya Sharma',
    university: 'Westbrook University',
    title: 'On the Art of Doing Nothing',
    date: 'November 17, 2024',
    preview:
      'We live in a culture that celebrates busyness as a virtue. But what if doing nothing — truly nothing — is the most radical act a university student can commit?',
    body: `We live in a culture that celebrates busyness as a virtue. But what if doing nothing — truly nothing — is the most radical act a university student can commit?

I spent last Sunday afternoon lying on the grass near the river, not reading, not listening to a podcast, not planning my week. Just watching clouds. And I felt profoundly guilty about it.

That guilt is worth examining. Why is rest something we have to earn? Why do we apologize for it?

I don't have answers, only the hope that more of us will give ourselves permission to pause.`,
    tags: ['Wellness', 'Reflection'],
  },
  {
    id: 2,
    author: "James O'Brien",
    university: 'Thornfield College',
    title: 'A Letter to First-Year Me',
    date: 'November 14, 2024',
    preview:
      'If I could write a letter to the version of myself walking onto this campus for the first time, here is what I would say: the map is not the territory.',
    body: `If I could write a letter to the version of myself walking onto this campus for the first time, here is what I would say: the map is not the territory.

You have a plan. It is a good plan. And it will not survive contact with reality — and that is perfectly fine.

The best things that happened to me in four years were almost entirely unplanned. The professor I met by sitting in on the wrong lecture. The research opportunity that came from an offhand comment at a club meeting. The friendship formed over a shared panic about a deadline.

Be open. Be wrong. Be surprised.`,
    tags: ['Advice', 'Freshman Year'],
  },
  {
    id: 3,
    author: 'Lena Nowak',
    university: 'Harlow Institute of Technology',
    title: 'The Loneliness Nobody Talks About',
    date: 'November 12, 2024',
    preview:
      'You can be surrounded by thousands of people — in lectures, in the dining hall, at parties — and still feel profoundly alone. Someone needs to say this more often.',
    body: `You can be surrounded by thousands of people — in lectures, in the dining hall, at parties — and still feel profoundly alone. Someone needs to say this more often.

University loneliness is a strange creature. It hides behind Instagram posts and group chats. It shows up most powerfully on Sunday evenings when everyone else seems to have somewhere to be.

I struggled with this deeply in my second year. It wasn't until I started writing — honestly, in a journal, and then in letters like this one — that I began to feel less isolated.

If you're reading this and you recognize yourself: you are not broken, and you are not alone in feeling alone.`,
    tags: ['Mental Health', 'Community'],
  },
  {
    id: 4,
    author: 'Marcus Thompson',
    university: 'Westbrook University',
    title: "Why I Switched Majors Twice (And Don't Regret It)",
    date: 'November 9, 2024',
    preview:
      'I started as a Mechanical Engineer, switched to Economics, and am now finishing a degree in Environmental Studies. Every advisor I had was concerned. I have never been happier.',
    body: `I started as a Mechanical Engineer, switched to Economics, and am now finishing a degree in Environmental Studies. Every advisor I had was concerned. I have never been happier.

We treat changing direction as failure. I want to push back on that.

Each major taught me something the others didn't. Engineering gave me systems thinking. Economics gave me an appreciation for incentives. Environmental Studies gave me a cause.

The things I learned along the way didn't disappear when I changed paths. They layered. They combined into something uniquely mine.

Don't let the sunk cost fallacy trap you in the wrong room.`,
    tags: ['Career', 'Personal Growth'],
  },
  {
    id: 5,
    author: 'Yuki Tanaka',
    university: 'Crestmoor University',
    title: 'A Defense of the Long Walk',
    date: 'November 6, 2024',
    preview:
      'My best ideas have never come to me at a desk. They arrive on foot — specifically, during the long, aimless walks I take around campus when a problem refuses to yield.',
    body: `My best ideas have never come to me at a desk. They arrive on foot — specifically, during the long, aimless walks I take around campus when a problem refuses to yield.

There is something about movement, rhythm, and fresh air that unlocks a different kind of thinking. Neuroscience apparently supports this. Walking increases creative output by up to 81% in some studies. But I didn't need a study to know it — my thesis introduction practically wrote itself on a rainy Tuesday afternoon.

If you are stuck, get up. Go outside. Trust the walk.`,
    tags: ['Productivity', 'Creativity'],
  },
  {
    id: 6,
    author: 'Amara Osei',
    university: 'Thornfield College',
    title: 'What the Library Taught Me About Patience',
    date: 'November 2, 2024',
    preview:
      'I used to rush through books the way I rushed through everything — scanning for the relevant parts, skipping what seemed unnecessary. The library eventually taught me to slow down.',
    body: `I used to rush through books the way I rushed through everything — scanning for the relevant parts, skipping what seemed unnecessary. The library eventually taught me to slow down.

It started with a serendipitous detour: I pulled the wrong book off the shelf and ended up reading for three hours about the history of cartography. It had nothing to do with my coursework. It was one of the best afternoons of my academic life.

Patient, unhurried reading is a skill. Like all skills, it requires practice. Start with one chapter of something you didn't choose. See where it takes you.`,
    tags: ['Reading', 'Reflection'],
  },
]

const avatarColors = [
  '#8b6f47', '#2c5f8a', '#6a8a2c', '#8a2c6a', '#2c7a6a', '#7a5c2c',
]

function getInitials(name) {
  return name.split(' ').map((n) => n[0]).join('').toUpperCase()
}

function PublicLettersPage() {
  const [selectedLetter, setSelectedLetter] = useState(null)
  const [showWrite, setShowWrite] = useState(false)
  const [writeData, setWriteData] = useState({ title: '', body: '' })
  const [writeSent, setWriteSent] = useState(false)

  function handleOpenWrite() {
    setShowWrite(true)
    setWriteSent(false)
  }

  function handleWrite(e) {
    e.preventDefault()
    setWriteSent(true)
    setTimeout(() => {
      setShowWrite(false)
      setWriteSent(false)
      setWriteData({ title: '', body: '' })
    }, 2000)
  }

  return (
    <div className="public-page">
      <div className="public-header">
        <div>
          <h1 className="public-title">🌐 Public Letters</h1>
          <p className="public-subtitle">Letters from the university community — open for all to read.</p>
        </div>
        <button className="write-public-btn" onClick={handleOpenWrite}>
          ✏️ Write Public Letter
        </button>
      </div>

      <div className="letters-grid">
        {publicLetters.map((letter, idx) => (
          <div key={letter.id} className="letter-card">
            <div className="card-author-row">
              <div
                className="card-avatar"
                style={{ backgroundColor: avatarColors[idx % avatarColors.length] }}
              >
                {getInitials(letter.author)}
              </div>
              <div className="card-author-info">
                <span className="card-author-name">{letter.author}</span>
                <span className="card-university">{letter.university}</span>
              </div>
              <span className="card-date">{letter.date}</span>
            </div>
            <h3 className="card-title">{letter.title}</h3>
            <p className="card-preview">{letter.preview}</p>
            <div className="card-footer">
              <div className="card-tags">
                {letter.tags.map((tag) => (
                  <span key={tag} className="card-tag">{tag}</span>
                ))}
              </div>
              <button
                className="read-more-btn"
                onClick={() => setSelectedLetter(selectedLetter?.id === letter.id ? null : letter)}
              >
                {selectedLetter?.id === letter.id ? 'Close ↑' : 'Read More ↓'}
              </button>
            </div>
            {selectedLetter?.id === letter.id && (
              <div className="card-full-body">
                {letter.body.split('\n').map((line, i) => (
                  <p key={i} className={line === '' ? 'body-spacer' : 'body-line'}>
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {showWrite && (
        <div className="compose-overlay">
          <div className="compose-modal">
            <div className="compose-header">
              <h3>✏️ Write a Public Letter</h3>
              <button className="compose-close" onClick={() => setShowWrite(false)}>✕</button>
            </div>
            {writeSent ? (
              <div className="compose-sent">
                <span className="sent-icon">🌐</span>
                <p>Your letter has been published!</p>
              </div>
            ) : (
              <form className="compose-form" onSubmit={handleWrite}>
                <div className="compose-field">
                  <label>Title:</label>
                  <input
                    type="text"
                    value={writeData.title}
                    onChange={(e) => setWriteData({ ...writeData, title: e.target.value })}
                    placeholder="Give your letter a title"
                    required
                  />
                </div>
                <div className="compose-field compose-body-field">
                  <label>Your Letter:</label>
                  <textarea
                    value={writeData.body}
                    onChange={(e) => setWriteData({ ...writeData, body: e.target.value })}
                    placeholder="Share your thoughts with the university community..."
                    rows={12}
                    required
                  />
                </div>
                <div className="compose-footer">
                  <button type="button" className="compose-discard" onClick={() => setShowWrite(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="compose-send">
                    Publish Letter 🌐
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PublicLettersPage
