require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// Find or create Stripe customer
async function getCustomer(email) {
  const customers = await stripe.customers.list({ email, limit: 1 });
  if (customers.data.length) return customers.data[0];
  return stripe.customers.create({ email });
}

app.get("/api/summary", async (req, res) => {
  const email = req.query.email || "colecalfee@gmail.com";

  try {
    const customer = await getCustomer(email);

    const subs = await stripe.subscriptions.list({
      customer: customer.id,
      status: "all",
      limit: 1,
    });

    const invoices = await stripe.invoices.list({
      customer: customer.id,
      limit: 10,
    });

    const openInvoices = invoices.data.filter(inv => inv.status === "open");
    const paidInvoice = invoices.data.find(inv => inv.status === "paid");

    const next = openInvoices[0] || null;

    res.json({
      name: customer.name || "OPERATOR",
      customer_id: customer.id,
      subscription_status: subs.data[0]?.status || "none",
      current_period_end: subs.data[0]?.current_period_end || null,
      open_invoice_count: openInvoices.length,
      next_invoice: next ? {
        amount: (next.amount_remaining ?? next.amount_due) / 100,
        due: next.due_date || null,
        url: next.hosted_invoice_url || null,
      } : null,
      last_payment: paidInvoice ? {
        amount: paidInvoice.amount_paid / 100,
        date: paidInvoice.status_transitions?.paid_at || null,
        id: paidInvoice.id,
      } : null,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`HAVEN_BACKEND: ONLINE_PORT_${PORT}`));
