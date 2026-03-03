# HAVEN PAY // 7.01
## A quiet interface for creative capital

Haven Pay is not a processor.

Stripe is the engine and source of truth.  
Haven Pay is the restrained control surface above it.

**KEEP THE SURFACE QUIET.**

---

### What’s here

- **/frontend** — static control panel (Tom7)
- **/backend** — minimal Stripe bridge (Node/Express)
- **/docs** — manifesto + white paper

---

### Run (local)

**Backend**
1. `cd backend`
2. `npm i`
3. create `.env` with `STRIPE_SECRET_KEY=sk_test_...`
4. `npm start`

**Frontend**
- open `frontend/index.html`
- set `BACKEND_URL` inside the script

---

### License

MIT
