# LeadFlow AI — Repository Documentation Draft

> Draft for the project's public README. Based on the supplied local source archive; **not yet published**. Review before copying and never publish secret `.env` values or captured lead data.

## Overview
LeadFlow AI is a local-first Streamlit application for researching business leads, auditing websites, preparing AI-assisted outreach drafts and exporting structured Excel reports. It **does not send emails automatically**.

## Main workflow
1. Search businesses using a configurable places-data provider.
2. Audit available websites for basic metadata, HTTPS and contact/navigation indicators.
3. Capture site screenshots with Playwright where permitted.
4. Create outreach drafts from audit findings with an AI provider.
5. Export structured results into Excel and resume interrupted runs using checkpoints.

## Technology
Python, Streamlit, Playwright, API connectors, Excel export, environment-based configuration.

## Local setup
```bash
python -m venv .venv
# Activate your environment
pip install -r requirements.txt
playwright install chromium
# Copy .env.example to .env and supply your OWN provider credentials
streamlit run app.py
```

## Privacy and security
- Use `.env.example` in version control; keep real `.env` files private and gitignored.
- Do not publish scraped contact lists, personalized drafts, exports or screenshots containing private data.
- Review applicable anti-spam, privacy and website access policies before using business contact information.
- API requests may cost money depending on the chosen provider and billing plan.

## Known constraints
- Needs provider credentials and browser installation for its complete workflow.
- Screenshot collection depends on target website accessibility.
- Outreach is draft-only: there is no automatic email send.
- No public live deployment has been verified as part of the portfolio review.

## Suggested evidence to add when available
- A real Streamlit dashboard screenshot with keys, clients, emails and personal data redacted.
- A short sanitized export example (dummy/example data only).
- A small architecture illustration showing the five pipeline stages.
- Test command and actual test output recorded after executing in a clean environment.
