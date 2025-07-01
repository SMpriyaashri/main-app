import React, { useState } from 'react';

const AmountForm = () => {
  const [form, setForm] = useState({ amount: '', purpose: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Amount: $${form.amount}\nPurpose: ${form.purpose}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <label>
        Amount:
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: 4 }}>$</span>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            style={{ flex: 1 }}
          />
        </div>
      </label>
      <label>
        Loan Amount:
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: 4 }}>$</span>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            style={{ flex: 1 }}
          />
        </div>
      </label>
      <label>
        Purpose:
        <input
          type="text"
          name="purpose"
          value={form.purpose}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AmountForm; 