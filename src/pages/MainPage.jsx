import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import './MainPage.css'

const penPals = [
  {
    id: 1,
    name: 'Alice Chen',
    time: '10:24 AM',
    preview: 'I hope your finals are going well!',
    unread: true,
  },
  {
    id: 2,
    name: 'Bob Martinez',
    time: 'Yesterday',
    preview: 'The campus library has a new reading room...',
    unread: false,
  },
  {
    id: 3,
    name: 'Carol Johnson',
    time: 'Mon',
    preview: 'Have you tried the new café near the science building?',
    unread: true,
  },
  {
    id: 4,
    name: 'David Lee',
    time: 'Nov 12',
    preview: 'Our study group meets again on Thursday.',
    unread: false,
  },
  {
    id: 5,
    name: 'Emma Wilson',
    time: 'Nov 8',
    preview: 'Thank you for recommending that professor!',
    unread: false,
  },
]

const letters = {
  1: {
    from: 'Alice Chen',
    to: 'You',
    date: 'November 18, 2024',
    subject: 'How are your finals going?',
    body: `Dear Friend,

I hope this letter finds you well and that you're surviving the final stretch of the semester! It feels like just yesterday we were walking into orientation, wide-eyed and a little terrified, and now here we are — almost through another term.

I've been buried under a mountain of notes for my Organic Chemistry exam. The lab reports alone could fill a small novel at this point. Professor Huang has been surprisingly understanding about the workload though, so that's a small mercy.

How are things on your end? I heard through the grapevine that you've been working on a really interesting project for your Computer Science course — something about machine learning and weather patterns? I'd love to hear more about it. Sometimes I wish I had chosen a different major, but then I remember how much I love the smell of reagents in the morning (okay, maybe not).

The autumn leaves on the quad are absolutely gorgeous right now. I keep meaning to sit outside and sketch them before they all fall, but there never seems to be enough time. Maybe we can meet there for a study break next week?

Also — don't forget that the Philosophy Society is hosting a debate on Friday evening. I know you've expressed interest before. It should be quite lively this time; the topic is artificial intelligence and consciousness. Very relevant to your work!

Write back soon. I miss our long chats over terrible dining hall coffee.

Warmly,
Alice`,
  },
  2: {
    from: 'Bob Martinez',
    to: 'You',
    date: 'November 17, 2024',
    subject: 'The new library reading room is incredible',
    body: `Hey there,

Quick note to tell you about this hidden gem I found yesterday. The campus library just opened a brand new reading room on the third floor — it's called the Lantern Room, I think, because of these gorgeous amber pendant lights hanging from the ceiling.

There are big wooden tables, comfortable chairs, and actual live plants in the corners. Best of all, there's a strict no-talking policy, so it's blissfully quiet. I managed to get through two entire chapters of my Economics textbook without a single interruption. Incredible.

You should try to grab a spot early in the morning, though. By noon it fills up completely. I went back at 2pm and had to wait twenty minutes for a seat. Worth every second.

By the way, did you ever end up submitting that scholarship application? The deadline is coming up fast and I don't want you to miss it. You'd be a perfect candidate.

Hope to see you at the intramural volleyball game this Thursday.

Bob`,
  },
  3: {
    from: 'Carol Johnson',
    to: 'You',
    date: 'November 11, 2024',
    subject: 'You HAVE to try the new café',
    body: `Hello!

I have discovered the most wonderful place and I simply cannot keep it to myself any longer. There's a new café called "Margin Notes" that just opened on the corner near the Science & Engineering building. I went there this morning before my 8 AM lecture and I'm a convert.

They have pour-over coffee, fresh croissants, and — this is the best part — the entire decor is books. Like, actual floor-to-ceiling bookshelves filled with old paperbacks. You can take one, read it while you're there, leave it behind or swap it for one from your own collection. It's the most charming thing.

The owner is apparently a retired English professor from our own university. She told me the café is meant to be "a place where ideas can breathe." I nearly teared up.

We MUST go together. Saturday morning? I'll treat you to a latte if you come.

Let me know!

Carol`,
  },
  4: {
    from: 'David Lee',
    to: 'You',
    date: 'November 12, 2024',
    subject: 'Study group — Thursday confirmed',
    body: `Hi,

Just a quick reminder that our study group for Advanced Statistics is confirmed for Thursday at 6 PM. We'll be in Room 204 of Hendricks Hall again — it worked really well last time.

I've prepared a set of practice problems covering hypothesis testing and regression analysis. If you have time, try problems 7 through 12 in Chapter 9 beforehand so we have a common starting point.

Marcus said he might join us this week, which would be great. He absolutely aced the midterm and I think his approach to confidence intervals is something we could all benefit from.

If you can't make it or if you're running late, just shoot me a message. We'll save you a whiteboard section.

See you Thursday,
David`,
  },
  5: {
    from: 'Emma Wilson',
    to: 'You',
    date: 'November 8, 2024',
    subject: 'Professor Tanaka is everything you promised',
    body: `Hi there!

I just had to write immediately after today's lecture. You were completely right about Professor Tanaka — she is absolutely extraordinary. I enrolled in her "History of Scientific Thought" seminar on your recommendation and today she spent the entire class discussing how Newton's laws of motion changed not just physics but the entire philosophy of determinism.

I was sitting there taking notes and I kept thinking, this is why I came to university. This is the kind of thinking I was hoping for.

The seminar is small, only twelve students, and she knows everyone's name already. At the end of class she pulled me aside and said my comment about Leibniz showed "a genuinely curious mind." I floated out of that lecture hall, I'm not going to lie.

So thank you, sincerely. Knowing which professors are worth seeking out is such valuable insider knowledge and you passed it along so generously.

Let's meet up soon so I can properly thank you over coffee (and maybe you can recommend another course for next semester!).

With gratitude,
Emma`,
  },
}

function MainPage() {
  const [selectedId, setSelectedId] = useState(1)
  const [showCompose, setShowCompose] = useState(false)
  const [composeData, setComposeData] = useState({ to: '', subject: '', body: '' })
  const [composeSent, setComposeSent] = useState(false)

  const letter = letters[selectedId]

  function handleReply() {
    setComposeData({ to: letter.from, subject: `Re: ${letter.subject}`, body: '' })
    setComposeSent(false)
    setShowCompose(true)
  }

  function handleSend(e) {
    e.preventDefault()
    setComposeSent(true)
    setTimeout(() => setShowCompose(false), 1500)
  }

  return (
    <div className="main-page">
      <Sidebar penPals={penPals} selectedId={selectedId} onSelect={setSelectedId} />

      <main className="letter-area">
        {letter && (
          <div className="letter-paper">
            <div className="letter-stamp">✈</div>
            <div className="letter-meta">
              <div className="letter-meta-row">
                <span className="meta-label">From:</span>
                <span className="meta-value">{letter.from}</span>
              </div>
              <div className="letter-meta-row">
                <span className="meta-label">To:</span>
                <span className="meta-value">{letter.to}</span>
              </div>
              <div className="letter-meta-row">
                <span className="meta-label">Date:</span>
                <span className="meta-value">{letter.date}</span>
              </div>
              <div className="letter-meta-row">
                <span className="meta-label">Subject:</span>
                <span className="meta-value subject">{letter.subject}</span>
              </div>
            </div>
            <div className="letter-divider" />
            <div className="letter-body">
              {letter.body.split('\n').map((line, i) => (
                <p key={i} className={line === '' ? 'letter-spacer' : 'letter-line'}>
                  {line}
                </p>
              ))}
            </div>
            <div className="letter-actions">
              <button className="reply-btn" onClick={handleReply}>
                ↩ Reply
              </button>
            </div>
          </div>
        )}
      </main>

      {showCompose && (
        <div className="compose-overlay">
          <div className="compose-modal">
            <div className="compose-header">
              <h3>✏️ New Letter</h3>
              <button className="compose-close" onClick={() => setShowCompose(false)}>✕</button>
            </div>
            {composeSent ? (
              <div className="compose-sent">
                <span className="sent-icon">✈</span>
                <p>Letter sent!</p>
              </div>
            ) : (
              <form className="compose-form" onSubmit={handleSend}>
                <div className="compose-field">
                  <label>To:</label>
                  <input
                    type="text"
                    value={composeData.to}
                    onChange={(e) => setComposeData({ ...composeData, to: e.target.value })}
                    placeholder="Recipient name or email"
                    required
                  />
                </div>
                <div className="compose-field">
                  <label>Subject:</label>
                  <input
                    type="text"
                    value={composeData.subject}
                    onChange={(e) => setComposeData({ ...composeData, subject: e.target.value })}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="compose-field compose-body-field">
                  <label>Message:</label>
                  <textarea
                    value={composeData.body}
                    onChange={(e) => setComposeData({ ...composeData, body: e.target.value })}
                    placeholder="Write your letter here..."
                    rows={10}
                    required
                  />
                </div>
                <div className="compose-footer">
                  <button type="button" className="compose-discard" onClick={() => setShowCompose(false)}>
                    Discard
                  </button>
                  <button type="submit" className="compose-send">
                    Send Letter ✈
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

export default MainPage
