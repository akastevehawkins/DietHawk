# DietHawk Issue Backlog

## V2-001: Agentic memory and capability expansion

Status: Backlog
Priority: High

Summary:
Add a true v2 agent layer so DietHawk can remember user context, learn from prior choices, and make more personalized recommendations over time instead of acting like a stateless daily tracker.

Initial scope:
- Persist durable user memory for food preferences, restaurant choices, routine slips, successful substitutions, and preferred coaching tone.
- Save restaurant audit history so repeated places can surface known safe orders faster.
- Track useful daily context such as fasting consistency, hydration streaks, movement patterns, and meal timing drift.
- Use saved memory to change recommendations based on current schedule, prior behavior, and repeated patterns.
- Add explicit controls to review, edit, export, and clear memory.

Suggested implementation direction:
- Start local-first with IndexedDB for richer structured memory than localStorage.
- Add a memory model with categories such as profile, habits, restaurants, favorite orders, and coaching preferences.
- Add a small decision layer that reads memory before rendering advice or restaurant guidance.
- Reserve cloud sync and multi-device state for a later phase.

Acceptance notes for v2:
- The app should remember useful context across sessions without requiring re-entry.
- Restaurant audits should get smarter for repeated places.
- Personalization must be explainable and user-editable.
- Memory should be easy to delete completely.