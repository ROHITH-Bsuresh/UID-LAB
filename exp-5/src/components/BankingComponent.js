import React, { useState } from 'react';
import './BankingComponent.css'; // Import the CSS file

const BankAccount = () => {
  const [balance, setBalance] = useState(1000); // Initial balance
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [transactions, setTransactions] = useState([]); // Transaction history

  const handleDeposit = () => {
    const parsedAmount = parseFloat(amount);
    if (isValidAmount(parsedAmount)) {
      setBalance(balance + parsedAmount);
      setTransactions([...transactions, { type: 'Deposit', amount: parsedAmount, date: new Date() }]);
      setError('');
      setAmount('');
    }
  };

  const handleWithdraw = () => {
    const parsedAmount = parseFloat(amount);
    if (isValidAmount(parsedAmount)) {
      if (balance >= parsedAmount) {
        setBalance(balance - parsedAmount);
        setTransactions([...transactions, { type: 'Withdraw', amount: parsedAmount, date: new Date() }]);
        setError('');
        setAmount('');
      } else {
        setError('Insufficient funds');
      }
    }
  };

  const isValidAmount = (amount) => {
    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid amount');
      return false;
    }
    return true;
  };

  return (
    <div className="bank-account">
      <h1 className="header">Welcome to Your Bank Account</h1>
      <p className="balance">Current Balance: ₹{balance.toFixed(2)}</p>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="input-amount"
      />
      <div className="button-group">
        <button onClick={handleDeposit} className="deposit-btn">Deposit</button>
        <button onClick={handleWithdraw} className="withdraw-btn">Withdraw</button>
      </div>
      {error && <p className="error-message">{error}</p>}

      {/* Transaction History Section */}
      <div className="transaction-history">
        <h2>Transaction History</h2>
        {transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <ul>
            {transactions.map((txn, index) => (
              <li key={index} className={`transaction ${txn.type.toLowerCase()}`}>
                <span>{txn.type}</span>
                <span>₹{txn.amount.toFixed(2)}</span>
                <span>{txn.date.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BankAccount;
