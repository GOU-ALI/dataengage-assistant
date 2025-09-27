# DataEngage Assistant

DataEngage Assistant is an AI-powered tool designed for Data Engineering professionals to streamline their LinkedIn presence. It generates two unique, engaging post proposals daily, allowing users to review them and publish their chosen content with ease.

## ✨ Features

-   **AI-Powered Content:** Leverages Google's Gemini API to generate high-quality, relevant posts on Data Engineering topics.
-   **Daily Proposals:** Get two distinct post ideas every day to maintain a consistent online presence.
-   **Structured Content:** Posts are generated with a clear structure: hook, body, and call-to-action.
-   **Automatic Hashtags:** Includes relevant hashtags to maximize reach and visibility.
-   **Simple Workflow:** Generate, review, and share directly to LinkedIn or WhatsApp for approval.
-   **Modern UI:** Clean, responsive, and dark-mode-friendly interface built with React and Tailwind CSS.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/dataengage-assistant.git
    cd dataengage-assistant
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the root of the project and add your Gemini API key:
    ```
    VITE_API_KEY="YOUR_GEMINI_API_KEY"
    ```
    *Replace `"YOUR_GEMINI_API_KEY"` with your actual key.*

### Running the Application

To run the app in development mode, use the following command. This will start a local server, typically at `http://localhost:5173`.

```bash
npm run dev
# or
yarn dev
```

## 📦 Deployment

This application is built as a static site, which is easy to deploy on various platforms. Vercel and Netlify are highly recommended for their simplicity and robust free tiers.

### Deploying with Vercel or Netlify

1.  **Push your code to a Git provider** (GitHub, GitLab, Bitbucket).

2.  **Create an account** on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) and connect your Git account.

3.  **Import your project:** Select the repository you just pushed.

4.  **Configure the project:**
    -   **Build Command:** `npm run build` (this should be detected automatically).
    -   **Output Directory:** `dist` (this should also be detected).
    -   **Environment Variables:** This is the most important step. In your project's settings on Vercel/Netlify, add an environment variable:
        -   **Name:** `VITE_API_KEY`
        -   **Value:** `YOUR_GEMINI_API_KEY`

5.  **Deploy!** Your application will be built and deployed to a public URL. The deployment will automatically re-run whenever you push new changes to your main branch.