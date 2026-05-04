# spark-trial

A simple Discord bot written in TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org) v22+
- [pnpm](https://pnpm.io)
- An application created on the [Discord Developer Portal](https://discord.com/developers/applications)

## Setup

**1. Clone the repository and install dependencies:**

```bash
git clone <repo-url>
cd spark-trial
pnpm install
```

**2. Configure environment variables:**

Create a `.env` file at the project root:

```env
DISCORD_TOKEN=your_token_here
```

The token can be obtained on the [Discord Developer Portal](https://discord.com/developers/applications) under **Bot -> Token**.

**3. Enable Privileged Intents on the portal:**

Under **Bot → Privileged Gateway Intents**, enable:
- `SERVER MEMBERS INTENT`
- `MESSAGE CONTENT INTENT`

## Running

**Development** (hot-reload via tsx):

```bash
pnpm dev
```

**Production build:**

```bash
pnpm build
```

**Build in watch mode:**

```bash
pnpm build:watch
```

**Run the generated build:**

```bash
pnpm run start
```

**Type-check without compiling:**

```bash
pnpm typecheck
```

