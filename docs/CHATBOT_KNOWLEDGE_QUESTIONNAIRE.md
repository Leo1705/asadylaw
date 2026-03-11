# Asady Law – Chatbot Knowledge Questionnaire

**Purpose:** Send this list to Soroosh Asady (or use it in a call) to gather answers that will make the website AI chatbot much smarter and more accurate. Add his answers to the chatbot’s knowledge (e.g. system prompt or training doc).

---

## 1. Firm & contact

- [ ] Confirm address, phone, email, and office hours. Any changes?
- [ ] Is there a preferred way to be reached first (phone vs email)?
- [ ] Do you offer video calls (Zoom, Teams, etc.)? If so, how are links sent?
- [ ] Is there a receptionist or assistant name we can mention (“Ask for X”)?
- [ ] Any other locations, languages, or “we also serve…” points?

---

## 2. Services – scope & limits

- [ ] **Buying/selling:** Do you handle only Ontario properties, or other provinces too?
- [ ] **Commercial:** What types of commercial deals do you take (e.g. size, complexity)?
- [ ] **Private mortgages:** Do you work with specific lenders or any private lender?
- [ ] **Notarization:** Exact list of documents you notarize/commission. Anything you don’t do?
- [ ] **Title transfers:** All types (spouse add/remove, family, trust, corporation)? Any you don’t do?
- [ ] Are there services you explicitly don’t offer (e.g. litigation, family law, wills)?

---

## 3. Process – what actually happens

- [ ] **Typical timeline:** From “we’re engaged” to closing for a standard purchase or sale (e.g. “usually 4–6 weeks”).
- [ ] **Steps in order:** Brief list a client can expect (e.g. “We send a retainer letter → you send ID and documents → we review and prepare → we coordinate with lender/other lawyer → signing → closing”).
- [ ] **Virtual process:** How does signing work (platform, in person option, out-of-town clients)?
- [ ] **Documents you need from the client:** Standard checklist for (a) purchase, (b) sale, (c) refinance, (d) notarization.
- [ ] **When is the first meeting/call?** Same day, next day, within a week?

---

## 4. Fees & payment

- [ ] **How are fees structured?** (e.g. flat fee for X, hourly for Y, “quote after we know your situation”)
- [ ] **Typical ranges** (if okay to share): e.g. “Most purchases between $X–$Y,” “Notarization from $Z.”
- [ ] **What’s included in the fee?** (e.g. title search, registration, one signing meeting)
- [ ] **Retainer:** Is one required? Rough amount or “we’ll tell you after we discuss.”
- [ ] **Payment methods:** E-transfer, cheque, credit card?
- [ ] **When is payment due?** Before closing, at closing, in stages?

---

## 5. Common client questions (short answers we can teach the bot)

- [ ] **“Do I need a lawyer to buy/sell in Ontario?”** (one-sentence answer)
- [ ] **“How long does a typical closing take?”**
- [ ] **“Can everything be done remotely?”** (yes/no + one line)
- [ ] **“What if I’m out of province or out of country?”**
- [ ] **“What if my closing date is very soon?”** (e.g. “We can often accommodate; contact us as soon as possible.”)
- [ ] **“Do you work with first-time buyers?”** Any special tips or programs to mention?
- [ ] **“Do you work with real estate agents and mortgage brokers?”** (yes, and how you coordinate)
- [ ] **“What’s the difference between notarization and commissioning?”** (simple one-liner if possible)
- [ ] **“How do I get documents to you?”** (email, portal, in person)

---

## 6. Eligibility & requirements

- [ ] **ID:** What ID do you accept for virtual verification? (e.g. driver’s licence, passport)
- [ ] **Language:** Services in English only, or also Farsi/other? If other, which?
- [ ] **Minimum age or capacity:** Any restrictions (e.g. power of attorney requirements)?
- [ ] **Property types:** Any you don’t handle (e.g. raw land, multi-unit over X units)?

---

## 7. After the consultation / next steps

- [ ] **What happens after someone books a consultation?** (e.g. “We’ll call/email to confirm and send a short intake form.”)
- [ ] **Response time:** How quickly do you aim to respond to new inquiries? (e.g. “Same day during business hours.”)
- [ ] **Intake or onboarding:** Is there a form or checklist they must complete before the first meeting? (Link to onboarding page?)

---

## 8. Tone & positioning

- [ ] **One sentence that describes Asady Law’s main differentiator.** (e.g. “We focus on making closings smooth and stress-free with clear communication and a virtual-first process.”)
- [ ] **Phrases you like** when talking about your firm (e.g. “stress-free,” “transparent,” “virtual-first”).
- [ ] **Phrases to avoid** (e.g. “cheap,” “guaranteed outcome”).

---

## 9. Legal / compliance (for accurate wording only)

- [ ] **Regulatory body:** Law Society of Ontario – okay to say “licensed in Ontario” or “member of the Law Society”?
- [ ] **Disclaimer:** Should the bot always add a short disclaimer (e.g. “This is general information, not legal advice; we’ll give advice specific to you in a consultation”)?

---

## 10. Anything else

- [ ] **Seasonal or temporary changes:** (e.g. “We’re closed the last week of December.”)
- [ ] **Upcoming changes:** New services, new team member, new process.
- [ ] **FAQ you get all the time** that isn’t covered above – and your preferred short answer.

---

## How to use the answers

1. Fill in or have Soroosh fill in (or record answers in a call).
2. Add the answers into:
   - **Chatbot system prompt** in `src/app/api/chat/route.ts` (section “Firm details” and “What Asady Law does”), and/or
   - A **training/knowledge doc** that you keep next to the chatbot logic.
3. Keep this questionnaire and the answers in version control (or a private doc) so you can update the bot when details change.

---

*Document created for the Asady Law website chatbot. Update as needed.*
