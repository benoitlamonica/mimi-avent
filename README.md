# 🎄 Calendrier de l'Avent

A beautiful, modern advent calendar built with React, TypeScript, Vite, and Tailwind CSS.

## ✨ Features

- 🎁 24 beautiful gift boxes with romantic French words
- 💝 Smooth animations and transitions
- 📱 Fully responsive design
- 💾 LocalStorage persistence for opened boxes
- 🌈 Beautiful gradient designs
- ⚡ Fast development with Vite
- 🔒 Date-based unlocking in production

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (recommended)
- Yarn or npm

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Run linter
yarn lint
```

## ⚙️ Environment Variables

The app uses environment variables to configure behavior for different environments.

### Available Variables

- `VITE_APP_NAME` - The name of the application (displayed in header)
- `VITE_UNLOCK_ALL_BOXES` - Set to `true` to unlock all boxes (development mode)
- `VITE_START_DATE` - Start date for the advent calendar (format: YYYY-MM-DD)
- `VITE_END_DATE` - End date for the advent calendar (format: YYYY-MM-DD)

### Environment Files

- `.env.development` - Used during development (`yarn dev`)
- `.env.production` - Used for production builds (`yarn build`)
- `.env.example` - Example configuration file
- `.env.local` - Local overrides (gitignored, create manually if needed)

### Development Mode

In development mode, **all boxes are unlocked** by default to allow testing. This is controlled by `VITE_UNLOCK_ALL_BOXES=true` in `.env.development`.

### Production Mode

In production mode, boxes unlock based on the current date:
- Only boxes up to the current day are unlocked
- Respects the `VITE_START_DATE` and `VITE_END_DATE` configuration
- Set `VITE_UNLOCK_ALL_BOXES=false` in `.env.production`

## 🎨 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **ESLint** - Code linting with React, TypeScript, and Tailwind plugins

## 📦 Project Structure

```
src/
├── components/
│   ├── CalendarBox.tsx      # Individual gift box component
│   ├── GiftModal.tsx         # Modal to display gift details
│   └── WelcomeScreen.tsx     # Landing page
├── hooks/
│   └── useGift.ts            # Hook with 24 romantic gifts
├── App.tsx                   # Main application component
├── index.tsx                 # Application entry point
├── index.css                 # Global styles with Tailwind
├── env.d.ts                  # TypeScript environment types
└── vite-env.d.ts             # Vite type declarations
```

## 💝 Customization

To customize the gifts, edit `src/hooks/useGift.ts` with your own romantic words and descriptions.

## 📝 License

Private project

## 🎁 Made with Love

Created for a special someone ❤️
