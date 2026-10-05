import { CONTACT } from '../data/content'

const Instagram = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const TikTok = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M16.6 2h-3.2v13.2a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .8.1V9.1a6.1 6.1 0 1 0 5.3 6.1V8.6a7.5 7.5 0 0 0 4.4 1.4V6.8A4.4 4.4 0 0 1 16.600 2z" />
  </svg>
)

// `className` = culorile butoanelor (diferă între pagină și footer)
export default function SocialLinks({ className = '' }) {
  const items = [[Instagram, 'Instagram', CONTACT.instagram], [TikTok, 'TikTok', CONTACT.tiktok]]
  return (
    <div className="flex items-center gap-3">
      {items.map(([I, name, href]) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className={`rounded-full border p-2.5 transition ${className}`}>
          <I className="h-5 w-5" aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}
