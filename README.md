# 📁 Sermon Archive PWA

A modern, highly-responsive Progressive Web App (PWA) designed to stream and download categorized audio sermons directly from a Firebase Storage bucket. This app is tailor-made for the Broome People's Church community and fully optimized for seamless desktop and mobile use (Android & iOS).

## ✨ Features

* **📂 Dynamic Folder Navigation:** Automatically mirrors the sub-folder hierarchy of your connected Firebase Storage bucket.
* **🎵 Dynamic Inline Media Players:** Selecting **"▶ Harem"** instantly expands a compact HTML5 audio player directly inside that specific sermon's card layout. Tapping play on a different card automatically closes the previous track, keeping the screen tidy.
* **📥 Perfect Instant Downloads:** Uses an advanced JavaScript Fetch Blob engine. Clicking **"📥 Daonlot"** queries raw data streams in the background, circumventing browser blocks to force an instant operating system "Save As" file prompt without launching a new browser tab.
* **🔗 Integrated Native Sharing:** Includes a sticky bottom utility footer featuring an intuitive sharing engine. It opens mobile device native operating system sharing sheets or copies the secure platform domain straight to a computer's clipboard with live confirmation styling.
* **📱 Localized App Interface:** Built with intuitive Bislama interface labeling to ensure highly accessible utility across diverse user demographics.
* **⚡ Native PWA Installation:** Fully standalone eligible. Detects ambient environments to serve Android/PC browser install banner hooks or tailored on-screen guidance instructions for Apple Safari iOS home screen inclusion.

---

## 🛠️ Tech Stack

* **Frontend Framework:** Responsive [Tailwind CSS](https://tailwindcss.com/) grid structures
* **Backend Storage Engine:** [Firebase Web SDK v10](https://firebase.google.com/docs/web/setup) (Cloud Storage)
* **PWA Infrastructure:** Web App Manifest (`manifest.json`) & Service Worker (`sw.js`)
* **Hosting Pipeline:** [GitHub Pages](https://pages.github.com/) (Secure HTTPS production deployment)

---

## 🚀 Local Desktop Development Workflow

To run and test this software architecture locally on your computer:

1. Clone or download this repository.
2. Ensure your matching Firebase configuration properties are set inside the entry `<script type="module">` tag within `index.html`.
3. Launch a local web server instance from a terminal or terminal application window pointing inside your project directory root:
   ```bash
   python -m http.server 8000
