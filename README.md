# Ram Singh — Portfolio Website!

A responsive portfolio website built with HTML, CSS, and JavaScript to showcase my projects, certifications, and skills to potential employers and collaborators.

🌐 **Live site**: [ramsingh.dev](https://www.ramsingh.dev/)

## About Me

I'm Ram Singh, a freelance web developer and first-year BSc-IT student at Chandrabhan Sharma College of Arts, Science and Commerce, Mumbai (2025–2028). I focus on frontend architecture, responsive layouts, Next.js, and web application development.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tactile Paper-Desk visual system, CSS Grid, Flexbox, CSS Custom Variables
- **Design**: Mobile-first responsive design
- **Fonts**: Inter, Playfair Display, Courier Prime, Caveat
- **Tools**: Git, GitHub, Vercel
- **Integrations**: Spotify Web API, Resend Email API
- **Accessibility**: WCAG 2.1 compliant

## Features

- Tactile paper-desk visual identity with responsive rotation breaks
- Dynamic Next.js App Router case studies and field notes
- Server-side cached Spotify Currently Playing integration
- Project brief submission flow with server validation
- Accessible with proper ARIA labels, semantic landmarks, and skip links
- Technical SEO optimized with Person, WebSite, BreadcrumbList, and Article JSON-LD

## Projects

### AI Multi-Module System
A modular AI system built with Python and LLM APIs, demonstrating clean architecture and scalable design.

### Modern Calculator
Responsive calculator with keyboard support and error handling, built with vanilla JS.  
→ [Live Demo](https://www.ramsingh.dev/projects/modern-calculator/)

### Portfolio Website
This site — built from scratch with a focus on accessibility, SEO, and performance.

## Local Development

```bash
git clone https://github.com/Ramsingh4656/portfolio
cd portfolio
python -m http.server 8000
# Visit http://localhost:8000
```

## Project Structure

```
├── index.html              # Main homepage
├── css/style.css           # Main stylesheet
├── js/script.js            # Main JavaScript
├── assets/images/          # Profile photo and images
├── projects/               # Projects showcase pages
├── about/                  # About page
├── skills/                 # Skills page
├── experience/             # Experience page
├── certificates/           # Certificates page
├── contact/                # Contact page
└── Ram-Singh-Resume.pdf    # Downloadable resume
```

## Contact

- **Email**: ram01singh4656@gmail.com
- **Phone**: +91 93728 83774
- **LinkedIn**: [linkedin.com/in/ram-singh4656](https://linkedin.com/in/ram-singh4656)
- **GitHub**: [github.com/Ramsingh4656](https://github.com/Ramsingh4656)

## Spotify Integration Setup

The homepage features a dynamic, retro desk-styled **Currently Playing** widget that integrates with the official Spotify Web API.

> [!NOTE]
> **Single-Owner Architecture**: This is a single-owner Spotify integration. The portfolio server uses the site owner's existing refresh token to display the currently playing track. The production website does not perform visitor OAuth, does not ask visitors to connect their Spotify accounts, and does not expose authentication tokens to the client.

> [!IMPORTANT]
> **Spotify Development Mode Constraint**: The Spotify Developer application is intended solely for the portfolio owner's personal use under Spotify Developer Development Mode rules. It does not support multi-user authentication, nor does it request or claim extended production user quotas.

### 1. Obtain Spotify Credentials & Refresh Token
1. Log in to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and create an application.
2. Retrieve your **Client ID** (`SPOTIFY_CLIENT_ID`) and **Client Secret** (`SPOTIFY_CLIENT_SECRET`).
3. Set the Redirect URI in Spotify Dashboard settings to `http://localhost:3000/callback` (or `http://127.0.0.1:3000/callback`).
4. Generate an authorization code by opening the following URL in your browser (with your Client ID):
   ```
   https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-currently-playing
   ```
5. Exchange the returned authorization code for a `SPOTIFY_REFRESH_TOKEN` via terminal POST request:
   ```bash
   curl -X POST https://accounts.spotify.com/api/token \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -u "YOUR_CLIENT_ID:YOUR_CLIENT_SECRET" \
     -d grant_type=authorization_code \
     -d code=AUTHORIZATION_CODE \
     -d redirect_uri=http://localhost:3000/callback
   ```

### 2. Configure Local Environment Variables
Create a `.env.local` file in the project root:
```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```
- Never commit `.env.local` to Git.

### 3. Vercel Production Environment Setup
To deploy the Spotify integration to Vercel:
1. Obtain Spotify credentials (`SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`) from the Spotify Developer Dashboard.
2. Obtain the refresh token (`SPOTIFY_REFRESH_TOKEN`) through the standard OAuth process above.
3. Open your project on the [Vercel Dashboard](https://vercel.com).
4. Go to **Settings** → **Environment Variables**.
5. Add the three required server-side variables:
   - `SPOTIFY_CLIENT_ID`
   - `SPOTIFY_CLIENT_SECRET`
   - `SPOTIFY_REFRESH_TOKEN`
6. Select **Production** (and Preview if applicable).
7. Redeploy the project after adding or updating variables.
8. Confirm `.env.local` remains ignored by Git and no secret values are committed.

## Freelance Project Brief & Inquiry System

The website features an interactive project request/brief system at `/contact/` which submits data to `/api/contact/` using client-side validation and server-side verification before dispatching a notification email using the Resend API.

### 1. Environment Variables Configuration

To enable the inquiry form, add the following variables to `.env.local` (local development) and your production environment settings:

```env
# Resend API Key (get from resend.com)
RESEND_API_KEY=re_your_api_key

# Destination email where inquiries will be received (e.g. ram01singh4656@gmail.com)
CONTACT_EMAIL=your_receive_email@example.com

# Verified sender email configured in Resend (defaults to onboarding@resend.dev)
CONTACT_SENDER=onboarding@resend.dev
```

### 2. Local Development Behavior

If `RESEND_API_KEY` is not set locally:
- The backend API route will fail gracefully, outputting a safe configuration error to the server console.
- The web page will show a user-friendly error without exposing API configuration details or breaking the user interface.
- No email is sent, but the application remains fully functional and compiles.

### 3. Production Configuration & Email Provider Setup

- **Provider**: [Resend](https://resend.com/)
- **Sender Verification**: Add and verify your domain in the Resend dashboard. Set `CONTACT_SENDER` to an email address under your verified domain (e.g., `briefs@yourdomain.com`).
- **Reply-To**: The system automatically sets the `Reply-To` header to the visitor's email address so you can reply directly to their inquiry from your mail client.
- **Rate Limiting**: Includes a lightweight, in-memory IP rate limiter limiting each IP to 3 requests per 5 minutes. For multi-instance, globally distributed serverless environments (such as Vercel), a centralized database (like Redis) should be introduced for rate-limiting persistence.


