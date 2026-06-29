# 📁 Sermon Archive PWA

A modern, highly-responsive Progressive Web App (PWA) designed to stream and download categorized audio sermons straight from a Firebase Storage bucket. Optimized for seamless desktop and mobile use (Android & iOS).

## ✨ Features

* **📂 Dynamic Folders:** Automatically mirrors the directory structure (Categories) of your Firebase Storage bucket.
* **🎵 Persistent Audio Player:** A sticky, global media player at the bottom of the screen that plays continuously while browsing different categories.
* **⚡ Fluid Navigation:** Seamless, zero-layout-shift transitions when navigating between folders.
* **📱 Native PWA Installation:** * **Android/PC:** Includes a tailored in-app banner installation prompt.
    * **iOS/Safari:** Detects Apple environments and displays elegant on-screen guidance for adding the app to the home screen.
* **🎨 Clean UI:** Built with HTML5, responsive Tailwind CSS, and lightweight JavaScript modules.

---

## 🛠️ Tech Stack

* **Frontend UI:** [Tailwind CSS](https://tailwindcss.com/) via CDN
* **Backend Storage:** [Firebase Web SDK v10](https://firebase.google.com/docs/web/setup) (Cloud Storage)
* **PWA Shell:** Web App Manifest (`manifest.json`) & Service Worker (`sw.js`)
* **Hosting Platform:** [GitHub Pages](https://pages.github.com/) (Free, secure HTTPS)

---

## 🚀 Getting Started Locally

To run and test the repository on your local computer:

1. Clone or download this repository to your local machine.
2. Ensure your Firebase configuration values are correctly applied inside the `<script type="module">` block in `index.html`.
3. Open a terminal or PowerShell window inside the project directory and spin up a local web server:
   ```bash
   python -m http.server 8000
