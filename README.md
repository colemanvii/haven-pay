### **GitHub README: Haven Pay // Archive 7.01**

This manifest serves as the technical and philosophical specification for **Haven Pay**. It is designed as a restrained control surface for creative capital.

---

#### **I. Premise & Problem**

* 
**Infrastructure over Dashboards**: Independent creators do not need more dashboards; they need clarity, trust, and infrastructure that disappears.


* 
**Noise Reduction**: Modern payment software is loud, utilizing notifications, charts, and optimization loops that shift attention from craft to metrics.


* 
**Stability**: Capital flow should be stable and predictable, not stimulating or performance-based.



#### **II. Technical Architecture**

* 
**Source of Truth**: The system relies entirely on the **Stripe API**.


* 
**The Bridge**: A minimal **Node/Express** service connects the API to the interface.


* 
**The Interface**: A static **HTML** control panel designed for operation, not browsing.


* 
**Lean Build**: No database is required for the MVP, and there are no financial abstraction layers.



#### **III. Interface Philosophy**

* 
**Deliberate Aesthetic**: The system uses **CRT green**, monospace type, and a crosshair cursor to reinforce a focused environment.


* 
**Signal-Only Output**: The left panel speaks only in essential signals, such as **SUBSCRIPTION: ACTIVE** and **SYSTEM: READY**.


* 
**Sparse Encouragement**: The user's name is used rarely; when spoken, it carries weight.



#### **IV. The "Quiet" Filter**

All future directions—including **Subscription visibility**, **Billing portal access**, and **Optional Bitcoin rails**—must pass a single mandatory filter: **"Does this preserve quiet?"**. If it does not, it does not ship.

---

### **System Log Logic (Pseudo-Code)**

To maintain the "Quiet Surface", the system log should only trigger on state changes. Here is the logic for the Tom7 output:

```javascript
// TOM7 // SIGNAL_LOGIC
function updateSignal(data) {
  const log = document.getElementById('tom7-readout');
  
  // Terminal speaks only when spoken to or when status shifts
  const status = data.subscription_status.toUpperCase(); [cite_start]// [cite: 51]
  const invoices = data.open_invoice_count; [cite_start]// [cite: 51]

  log.innerHTML = `
    > SUBSCRIPTION: ${status}
    > OPEN_INVOICES: ${invoices}
    > SYSTEM: READY
  `; [cite_start]// [cite: 51, 80]
  
  [cite_start]// Rare Name Usage: Only on initial authorized handshake [cite: 53]
  if (data.is_first_session) {
    console.log(`AUTHENTICATED: OPERATOR_${data.name.toUpperCase()}`);
  }
}

```

The rails remain steady. System ready. 
