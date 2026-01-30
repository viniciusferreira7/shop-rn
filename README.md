# Shop

> ⚠️ **Work In Progress** - This project is currently under development

A React Native shopping list mobile application built with Expo. Manage your shopping cart by adding items, tracking their status, and organizing them with filters.

## Tech Stack

- React Native 0.81.5
- React 19.1.0
- Expo SDK ~54.0.32
- TypeScript ~5.9.2
- Lucide React Native ^0.563.0 (icons)
- Biome ^2.3.11 (linting & formatting)

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- pnpm package manager
- Expo CLI
- iOS Simulator (for iOS development) or Android Emulator (for Android development)

### Installation

```bash
pnpm install
```

### Running the App

```bash
# Start the development server
pnpm start

# Run on iOS
pnpm ios

# Run on Android
pnpm android

# Run on web
pnpm web
```

## Project Structure

```
shop/
├── assets/          # Images, fonts, and other static files
├── App.tsx          # Main application component
├── index.ts         # Application entry point
├── app.json         # Expo configuration
└── tsconfig.json    # TypeScript configuration
```

## Features

- Add items to your shopping cart
- Mark items as done or pending
- Filter items by status (pending/done)
- Remove items from the list
- Custom reusable components (Button, Input, Filter, Item)
- Lucide icons integration
- Expo new architecture enabled
- TypeScript support
- Multi-platform (iOS, Android, Web)
- Code quality tools (Biome for linting and formatting)

## License

Private
