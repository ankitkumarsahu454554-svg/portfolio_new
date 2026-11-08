# Guide: Adding Events & Achievements to Flight Log

This guide explains how to add new hackathons, competitions, conferences, certifications, or workshops to your portfolio's **Flight Log** section.

---

## 1. Where Events Live
All event records are configured in [`src/data/events.ts`](../src/data/events.ts).

Each event is an object conforming to the `FlightLogEvent` TypeScript interface:
```typescript
{
  id: 'fl-01',
  slug: 'google-prompt-wars',
  title: 'Prompt Wars: Bengaluru (AI Hackathon) — Finalist',
  organizer: 'Google for Developers',
  date: '2026',
  year: 2026,
  location: 'Bengaluru, India',
  type: 'Competition', // 'Competition' | 'Hackathon' | 'Workshop' | 'Conference' | 'Training' | 'Certification'
  myRole: 'Finalist', // 'Finalist' | 'Winner' | 'Participant' | 'Speaker' | 'Certified' | 'Attendee'
  summary: 'Short overview of the event.',
  whatIDid: [
    'Bullet point 1 detailing what you engineered or built.',
    'Bullet point 2.',
  ],
  outcome: 'Award, ranking, or verified result achieved.',
  tags: ['Tag 1', 'Machine Learning', 'Python'],
  folderPath: '/events/google-prompt-wars/',
  images: [
    {
      src: '/events/google-prompt-wars/cover.jpg',
      alt: 'Event Photo',
      caption: 'Caption describing the photo.',
    },
    {
      src: '/events/google-prompt-wars/certificate.jpg',
      alt: 'Certificate Photo',
      caption: 'Official Certificate.',
    },
  ],
  certificateUrl: '/events/google-prompt-wars/certificate.jpg',
  link: 'https://official-link.com',
  featured: true,
  draft: false, // Set to false when ready to publish!
}
```

---

## 2. Managing Drafts vs. Published Events
- **`draft: true`**: The event will **never** be rendered in the public UI. Use this for unconfirmed milestones or entries where you are waiting on certificates/photos.
- **`draft: false`**: The event is published live on the website.
- **Empty state & filters**: When there are fewer than 4 published events, the search/filter controls are automatically hidden to keep the UI clean, and an intentional "More milestones in progress" card is displayed alongside your achievements.

---

## 3. Where Images Go
Place event images inside the `public/events/<slug>/` folder:
- **`cover.jpg`**: Primary card cover / banner photo.
- **`01.jpg`**, **`02.jpg`**: Optional action shots or hackathon demo photos.
- **`certificate.jpg`**: Your official certificate of participation, merit, or completion.

Supported formats: `.jpg`, `.png`, `.svg`, `.webp`.

> **Note**: If an event has no images (`images: []`), the website will render a clean, branded fallback card with no broken images or empty modal galleries.

