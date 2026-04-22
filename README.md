# Loan Comparison

A simple React app that helps you compare loan offers from different providers.

## Features

- View multiple loan offers side by side
- See monthly payments and total costs
- Automatically highlights the offer with the lowest interest rate
- Click on any offer to see detailed calculations

## How It Works

1. The app displays loan offers from different providers (First National Bank, City Credit Union, Metro Financial)
2. Each offer shows the provider name, loan amount, interest rate, and term
3. Click on an offer to view:
   - Monthly payment amount
   - Total cost over the loan term
4. The app automatically recommends the offer with the lowest interest rate

## Tech Stack

- React 19
- Vite (build tool)
- Plain CSS (styling)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/       # UI components
│   ├── OfferCard.jsx
│   └── OfferDetails.jsx
├── data/            # Static data
│   └── offers.js
├── utils/           # Helper functions
│   └── calculations.js
├── App.jsx          # Main app component
└── main.jsx         # Entry point
```