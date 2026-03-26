# ⚡️ FIXNOW.DEV
### Pressure-Driven Issue Tracking for High-Value Features

FixNow.dev is a high-impact platform designed to address the "stagnation gap" in open-source and corporate software projects. By combining **Gemini 1.5 Flash AI** assessments with **Live SVG Countdown Timers**, it creates public awareness for critical, ignored issues.

![Architecture Diagram](https://raw.githubusercontent.com/AMDphreak/fixnow-dev/main/public/og.png)

## 🚀 Key Features

- **AI-Rated Technical Value**: Automatically scores issues from 0-100 based on technical complexity and community demand.
- **Dynamic Image Proxy**: Real-time SVG countdown badges for embedding in GitHub/GitLab READMEs or Discord. `/api/timer/[id]`
- **Resolution Verification**: AI-powered auditing of issue closures to see if it was actually fixed or just dismissed.
- **Vibrant UI**: Built with SolidStart and Tailwind v4 for a premium, low-latency experience.

## 🛠 Tech Stack

- **Framework**: [SolidStart (Vinxi)](https://start.solidjs.com)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **AI Engine**: [Google Gemini 1.5 Flash](https://aistudio.google.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: [Netlify](https://netlify.com/)

## 📦 Installation & Setup

1. **Clone & Install Dependencies**
   ```bash
   corepack enable
   pnpm install
   ```

2. **Configure Environment**
   Create a `.env` file in the root:
   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=YOUR_API_KEY
   GITHUB_TOKEN=YOUR_GH_TOKEN (optional, for metadata expansion)
   ```

3. **Development Mode**
   ```bash
   pnpm dev
   ```

4. **Production Build**
   ```bash
   pnpm build
   ```

---

## 📖 Documentation

The full documentation is built into the application at [`/docs`](https://fixnow-dev-test.netlify.app/docs).

- **Architecture Overview**: How the AI evaluation pipeline works.
- **API Registry**: Documentation for the dynamic countdown service.
- **Integration Guide**: How to embed FixNow timers in your repository.

---

## 🤝 Contribution

Contributions are welcome! Please check our existing issues or register a new high-value feature request to track.

*Made with 🛸 by AMDphreak*
