# Membangun Website ICHEC 2023

Oleh: [Raihan Allaam](https://alamehan.github.io/) \| Minggu, 01 Oktober 2023

## 📋 Catatan

- Agar tidak terjadi error yang tidak diinginkan, gunakan <mark>versi teknologi</mark> yang sama.
- Terlebih dahulu instalasi ➀ [Visual Studio Code](https://code.visualstudio.com/) (beserta Extensionnya), ➁ [Node.js V18.16.0 (LTS)](https://nodejs.org/en), ➂ [Git](https://git-scm.com/).
- VS Code Extension: [Draculla Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula), [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme), [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph), [Prettier Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css), [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek), [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), [Markdown Preview Github Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles), [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag), [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag), [Highlight Line](https://marketplace.visualstudio.com/items?itemName=cliffordfajardo.highlight-line-vscode), [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight), [Image Preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview), [Comment Divider](https://marketplace.visualstudio.com/items?itemName=stackbreak.comment-divider), [Comment Anchor](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors), [Kill Comments](https://marketplace.visualstudio.com/items?itemName=arashmidos.kill-comments), [Oneline](https://marketplace.visualstudio.com/items?itemName=juncaixinchi.vscode-ext-online), [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), [ES7 + React/Redux/React-Native Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## 🤖 Teknologi

| Nama                                        | Versi                          | Npm                                                                        |
|---------------------------------------------|--------------------------------|----------------------------------------------------------------------------|
| Vite (with React + TypeScript + SWC)        | 4.4.5                          | ```npm create vite@4.4.5```                                                |
| Less (CSS Preprocessor)                     | 4.2.0                          | ```npm install -g less@4.2.0```                                            |
| Tailwind CSS <br> PostCSS <br> Autoprefixer | 3.3.3 <br> 8.4.29 <br> 10.4.15 | ```npm install -D tailwindcss@3.3.3 postcss@8.4.29 autoprefixer@10.4.15``` |
| Prettier (Code Formatter)                   | 3.0.3                          | ```npm install -D prettier@3.0.3```                                        |
| Prettier Plugin Tailwind CSS                | 0.5.4                          | ```npm install -D prettier-plugin-tailwindcss@0.5.4```                     |
| React Router                                | 6.15.0                         | ```npm install react-router-dom@6.15.0```                                  |
| Ant Design                                  | 5.9.0                          | ```npm install antd@5.9.0```                                               |

## 💻 Step-by-step

### A. Instalasi

1. Buat folder **My Projects** lalu buka CMD (Command Prompt) di folder tersebut
2. Gunakan perintah dibawah ini secara berurutan:<br>

   ```
   npm create vite@4.4.5
   ```

   Beri nama proyek **ichec-2024**, lalu pilih teknologi **React with TypeScript + SWC**.

   ```
   cd ichec-2024
   code .
   ```

   Tutup CMD. Secara otomatis VS Code akan terbuka untuk workspace **ichec-2024**. Tekan **CTRL+SHIFT+P** di keyboard, lalu ketik **Terminal: Select Default Profile**, lalu pilih **Git Bash**. Selanjutnya buka menu (di atas) Terminal → New Terminal → Lalu pilih **ichec-2024**.<br>

   ```
   npm install
   npm install less@4.2.0
   npm install -D tailwindcss@3.3.3 postcss@8.4.29 autoprefixer@10.4.15
   npx tailwindcss init -p
   npm install -D prettier@3.0.3 prettier-plugin-tailwindcss@0.5.4
   npm install react-router-dom@6.15.0
   npm install antd@5.9.0
   clear
   ```

   Agar setiap perubahan pada source code kedepannya dapat dilacak, gunakan perintah dibawah ini.

   ```
   git init
   git add README.md
   git commit -m "First Commit"
   [OPTIONAL] git config --global user.name "--Paste username disini--"
   [OPTIONAL] git config --global user.email "--Paste email disini--"
   [OPTIONAL] git remote add origin ---Paste remote link disini---
   [OPTIONAL] git push -u origin master
   clear
   ```

   Terdapat masalah saat konfigurasi Git? Simak video berikut ini: [Tutorial oleh Raihan Allaam](https://www.youtube.com/watch?v=iw-AL6YHAn0&t)

### B. Konfigurasi

| Aksi  | File               | Keterangan                                                                                             |
|-------|--------------------|--------------------------------------------------------------------------------------------------------|
| Modif | vite.config.ts     | Di export tambahkan ```base: './'```, agar pada saat di build tidak **white blank page**.              |
| Modif | tailwind.config.js | Atur ```content```, ```mode```, ```theme```. Design system & customization disini.                     |
| Buat  | .prettierrc.json   | Atur perilaku code formatter disini, pelajari di [Prettier Docs](https://prettier.io/docs/en/options). |
| Buat  | .prettierignore    | Atur file atau folder yang dibaikan code formatter, misalnya ```node_modules``` dan ```dist```.        |

Buka menu Settings → Ketik **Editor: Default Formatter** → Pilih **Prettier: Code Formatter**. Selanjutnya, ketik lagi **Editor: Format On Save** → Lalu centang (Aktifkan). Atau jika tidak ingin di format saat save file, gunakan code formatter secara manual dengan tekan **CTRL+SHIFT+P** di keyboard, lalu ketik **Format Document With Prettier**.

### C. Struktur

| Aksi | Folder | Keterangan |
|---|---|---|
| Buat | src/assets/images | Simpan seluruh assets design di folder ini. |
| Buat | src/assets/images/index.tsx | Gunakan sebagai **container** (wadah) assets design. |
| Buat | src/assets/sounds | Simpan seluruh assets sound di folder ini. |
| Buat | src/assets/sounds/index.tsx | Gunakan sebagai **container** (wadah) assets sound. |
| Buat | src/assets/styles | Simpan seluruh general design system disini. |
| Buat | src/assets/styles/color.less<br>src/assets/styles/type.less<br>src/assets/styles/effect.less<br>src/assets/styles/button.less<br>src/assets/styles/animation.less | General design system |
| Buat | src/assets/styles/main.less | - Gunakan sebagai **container** general design system via ```@import```.<br>- Gunakan sebagai general CSS styling & CSS reset.<br>- Import Tailwind CSS ```@tailwind base;```, ```@tailwind components```, ```@tailwind utilities``` disini.<br>- Import Google Fonts ```url(...)``` disini. |
| Buat | src/assets/styles/general.tsx | Gunakan sebagai **container** untuk style-style Tailwind CSS yang berulang. |
| Buat | src/assets/themes | Simpan seluruh kustomisasi library disini. |
| Buat | src/assets/themes/index.ts | Gunakan untuk kustomisasi tema general Ant Design. |
| Buat | src/components | - Gunakan sebagai **container** untuk seluruh page.<br>- Buat folder untuk setiap page yang akan dibuat. |
| Buat | src/components/home<br>src/components/about<br>src/components/... | Isi setiap folder minimal dengan file ```index.tsx``` dan ```style.less```. **Anda coding disini!**. |
| Buat | src/layouts | Gunakan untuk menyimpan seluruh layout utama website. |
| Buat | src/layouts/index.tsx | Buat Navbar, Content (Wadah), dan Footer disini. **Anda coding disini!**. |
| Buat | src/layouts/navbar<br>src/layouts/footer | Isi setiap folder minimal dengan file ```index.tsx``` dan ```style.less```. **Anda coding disini!**. |
| Modif | src/main.tsx | Hapus:<br>```import "./index.css";```<br><br>Tambah:<br>```import { ConfigProvider } from "antd";```<br>```import { theme } from "./assets/themes";```<br>```import { BrowserRouter as RouterProvider } from "react-router-dom";```<br>```import "./assets/styles/main.less";```<br><br>Ubah:<br>```<React.StrictMode><App /></React.StrictMode>```<br><br>Menjadi:<br>```<React.StrictMode><ConfigProvider theme={theme}><RouterProvider><App /></RouterProvider></ConfigProvider></React.StrictMode>``` |
| Modif | src/App.tsx | Hapus: semua isinya<br><br>Tambah:<br>```import { useEffect } from "react";```<br>```import { Routes, Route, useLocation } from "react-router-dom";```<br>```import Layout from "./layout";```<br>```import HomePage from "./components/home";```<br>```import AboutPage from "./components/about";```<br>```import OtherPage from ...```<br><br>Atur App() kurang lebih seperti ini:<br>```<Layout><Routes><Route path="*" element={<HomePage />} /><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /></Routes></Layout>```<br><br>Jangan lupa juga tambahkan code untuk **Scroll to top between pages** |
| Hapus | src/index.css<br>src/App.css | Tidak lagi digunakan, hapus saja. |
| Tambah | public/ | Simpan favicon website disini. |
| Modif | index.html | Atur favicon dan judul website disini. |

Sebagai catatan, di setiap component pages yang dibuat pastikan telah import
```
import { ... } from "../../assets/images/index.tsx";
import { ... } from "../../assets/sounds/index.tsx";
import css from "../../assets/styles/general";
import "./index.less";
import ... (Import juga semua library yang digunakan oleh page)
```
Dan langkah terakhir, jalankan perintah berikut di Terminal → New Terminal → Lalu pilih **ichec-2024**.

```
npm run dev                Untuk menjalankan proyek di browser
npm run dev -- --host      Untuk expose, biar bisa dibuka di semua device yang terhubung pada wifi nya sama
                           Catatan: Pakai Network yang terakhir
npm run build              Untuk build proyek, siap di upload ke layanan hosting
```

## 💎 Bonus

### A. Shorcut VS Code

| Shorcut                        | Deskripsi                                                             |
|--------------------------------|-----------------------------------------------------------------------|
| CTRL + SHIFT + P               | Menampilkan **command pallete** dimana Anda dapat mencari sebuah aksi.|
| ALT + Panah Bawah/Atas         | Memindahkan baris kode yang dipilih ke bawah/atas.                    |
| SHIFT + ALT + Panah Bawah/Atas | Duplikat baris kode yang dipilih ke bawah/atas.                       |
| CTRL + Space                   | Menampilkan **suggestions** di baris kode yang aktif saat ini.        |
| CTRL + H                       | Untuk menimpa sebuah text tertentu. Mendukung **Regular Expression**. |
| CTRL + L                       | Memilih satu baris blok teks.                                         |

### B. Alat berguna

| Tools | Deskripsi |
|---|---|
| [Tables Generator](https://www.tablesgenerator.com/) | Untuk membuat tabel di Markdown ```.md``` lebih mudah. |
| [GetEmoji](https://getemoji.com/) | Copy dan paste Emoji dengan mudah. |
| [TinyPNG](https://tinypng.com/) | Mengurangi ukuran file ```.png``` Anda tanpa mengurangi kualitas. |
| [Trimmy](https://app.trimmy.io/) | Menghapus space kosong dari sekeliling gambar ```.png``` secara otomatis. |
| [Artlist](https://artlist.io/) | - Dapatkan aset berkualitas tinggi. Sound effect, dll.<br>- Downloader: [StepToDown](https://steptodown.com/artlist-downloader/) |
| [CloudConvert](https://cloudconvert.com/aac-to-wav) | Ubah format file ```.acc``` ke ```.wav```. |

Butuh lebih banyak alat berguna lainnya? Kunjungi [NiceList](https://alamehan.github.io/projects/nice-list-web/)

### C. Chat GPT

Manfaatkan Chat GPT / GPT-4 untuk membantu Anda sepanjang coding, building, debuging, gunakan prompts berikut:
1. Perhatikan potongan kode berikut **[copy paste code disini]**, lakukan analisa/jelaskan baris per baris/temukan masalah/dst.
2. Bagaimana cara membuat **[sesuatu]** yang responsive menggunakan React, TypeScript, dan Tailwind CSS? Buat dari awal, tanpa library.
   - Revisi: **[tulis catatan revisi dalam poin-poin]**.
   - Masih terdapat masalah **[tulis masalah disini]**.
   - Tolong highlight hanya pada bagian yang berubahnya saja, tidak perlu menuliskan seluruh code.

**Catatan:** Buat prompts pertama sederhana saja tetapi tujuannya mendetail, lalu kembangkan, tambahkan fitur dsb. Jika meminta GPT-4 membuatkan code yang lengkap dalam 1 perintah prompts, hasilnya akan "dipaksakan". Kelebihan buat code dari awal menggunakan GPT-4 adalah kita bisa belajar baris per baris meminta GPT-4 menjelaskannya. Juga punya kebebasan memodifikasi sesuai revisi, beda halnya dengan library yang biasanya susah dimodifikasi.