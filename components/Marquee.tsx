const ITEMS = [
  'AI Automation',
  'Telegram Bots',
  'Market Intelligence',
  'Data Pipelines',
  'Custom Agents',
  'Finance Tools',
  'Real-time Forecasting',
]

const SEP = '◆'

function MarqueeList() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span
          key={i}
          style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--fg2)',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
          </span>
          <span
            style={{
              fontSize: '0.4rem',
              color: 'var(--accent)',
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            {SEP}
          </span>
        </span>
      ))}
    </>
  )
}

export default function Marquee() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '1.1rem 0',
        overflow: 'hidden',
      }}
      aria-label="Services offered"
    >
      <div className="marquee-inner" aria-hidden="true">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            paddingRight: '1.25rem',
          }}
        >
          <MarqueeList />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            paddingRight: '1.25rem',
          }}
        >
          <MarqueeList />
        </div>
      </div>
    </div>
  )
}
