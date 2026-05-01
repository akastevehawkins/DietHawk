# DietHawk

Mobile-first static GitHub Pages app for Steve Hawkins' daily keto, fasting, movement, alcohol tracking, and cholesterol-aware meal routine.

## Included

- Default dark-mode visual design tuned for iPhone use
- Sticky command menu with real page URLs: `index.html`, `schedule.html`, `meals.html`, `restaurant.html`, and `memory.html`
- Live local clock and browser timezone display so the schedule is visibly time-zone aware
- 16:8 fasting clock with live phase countdown
- Scheduled task queue with `Done`, `Snooze 30m`, and `Snooze 60m`, capped at two snoozes per task
- Dedicated sit/stand timer tied to the existing desk-reset schedule
- Dedicated movement timer with quick anywhere exercise prompts and one-tap minute counting
- Cholesterol-aware meal guidance layered on top of keto so low-carb junk does not get a free pass
- Restaurant audit that can use a restaurant name, direct menu URL, or pasted menu text to flag keto-friendly and cholesterol-aware options against the current eating window
- Menu screenshot OCR: take or upload a photo, run browser-side OCR, and feed the extracted text into the restaurant audit automatically
- IndexedDB-backed memory that persists repeated restaurant audits, meal logs, favorite safe orders, and disliked foods across days
- Memory export and clear actions from the UI
- Keto meal choices for breakfast, lunch, dinner, and snacks with one-tap logging
- Alcohol logging with calories, carbs, standard drinks, and warning states
- Water, movement, and step tracking stored in `localStorage`
- PWA metadata, iPhone install guidance, and offline cache for home-screen use

## GitHub Pages deploy

1. Create or use a GitHub repository and push the contents of this folder.
2. In the repository settings, enable GitHub Pages from the branch root.
3. Wait for the Pages build to finish, then open the published URL on iPhone.
4. In Safari, use `Share -> Add to Home Screen` to install it like an app.

## Notes

- The app is static and works without a build step.
- The extra HTML routes load the shared app shell from `index.html`, so the app keeps one behavior model without duplicating logic across pages.
- Task alerts and the modal reminder system work while the app is open.
- Browser notifications depend on platform support and permission.
- Fully reliable background notifications on iPhone would require a push-capable backend or a native wrapper; GitHub Pages alone cannot do that.
- Because Steve uses lisinopril-HCTZ and also needs to keep high cholesterol in check, the copy keeps hydration, dizziness, alcohol caution, and cleaner-fat meal guidance visible.

## Real iPhone background reminders

Smallest reliable path:

1. Keep this exact HTML/CSS/JS app.
2. Wrap it with Capacitor.
3. Add `@capacitor/local-notifications` and schedule the same task times on-device.
4. Ship through Xcode/TestFlight or the App Store.

Why this is the smallest path:

- No backend is required.
- The current UI and logic can stay almost entirely intact.
- Local notifications on iPhone are more reliable than trying to fake background reminders from a static GitHub Pages site.

Pure web alternative:

1. Keep GitHub Pages for the front end.
2. Add a tiny serverless backend such as Supabase Edge Functions or Cloudflare Workers.
3. Store Web Push subscriptions with VAPID keys.
4. Run a scheduled job that sends reminder pushes for the installed PWA.

Tradeoff:

- This keeps it as a web app, but it adds backend complexity and is still more fragile than a Capacitor wrapper on iPhone.

## Local preview

Serve the folder over `localhost` or HTTPS for accurate behavior. The secondary page routes fetch the shared shell from `index.html`, so direct `file://` preview is no longer enough.