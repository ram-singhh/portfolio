# Ram Singh — Portfolio Website!

A responsive portfolio website built with HTML, CSS, and JavaScript to showcase my projects, certifications, and skills to potential employers and collaborators.

🌐 **Live site**: [ramsingh.me](https://ramsingh.me/)

## About Me

I'm Ram Singh, a first-year BSc-IT student at Chandrabhan Sharma College of Arts, Science and Commerce, Mumbai (2025–2028). I focus on frontend development, cloud computing, and AI/ML fundamentals, and I'm actively seeking internship opportunities.

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Design**: Mobile-first responsive design
- **Fonts**: Inter, JetBrains Mono
- **Tools**: Git, GitHub Pages
- **Form Integration**: Google Forms API
- **Accessibility**: WCAG 2.1 compliant

## Features

- Responsive design for mobile, tablet, and desktop
- Dark theme with violet accents
- Smooth animations and hover effects
- Contact form integrated with Google Forms
- Accessible with proper ARIA labels and skip links
- SEO optimised with structured data and meta tags

## Projects

### AI Multi-Module System
A modular AI system built with Python and LLM APIs, demonstrating clean architecture and scalable design.

### Modern Calculator
Responsive calculator with keyboard support and error handling, built with vanilla JS.  
→ [Live Demo](https://ramsingh.me/projects/mordencalulator/)

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

### 1. Create a Spotify Developer Application
- Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and log in.
- Click **Create App**.
- Name the application and add a description.
- Set the **Redirect URI** to `http://localhost:3000/callback` (or any redirect link you prefer).
- Save the application settings.

### 2. Retrieve Credentials
- Under your Spotify App settings, locate and copy the **Client ID**.
- Click **Show client secret** and copy the **Client Secret**.

### 3. Request Authorization Code
Construct the authorization URL by replacing `YOUR_CLIENT_ID` and `YOUR_REDIRECT_URI` (must match exactly what you input in step 1, URL-encoded) below:

```
https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-currently-playing
```

- Navigate to this URL in your web browser.
- Authorize your application.
- You will be redirected to a URL like `http://localhost:3000/callback?code=AUTHORIZATION_CODE`.
- Copy the `AUTHORIZATION_CODE` parameter from the URL query string.

### 4. Exchange Code for Refresh Token
Exchage the authorization code for a token package by running the following command in your terminal (replace placeholders accordingly):

```bash
curl -X POST https://accounts.spotify.com/api/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -u "YOUR_CLIENT_ID:YOUR_CLIENT_SECRET" \
  -d grant_type=authorization_code \
  -d code=AUTHORIZATION_CODE \
  -d redirect_uri=http://localhost:3000/callback
```

- The JSON response will contain a `refresh_token`. Copy this token.

### 5. Configure Local Environment Variables
Create a file named `.env.local` in the project root and add the following keys with your retrieved credentials:

```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

### 6. Configure Production Environment Variables
When deploying to Vercel (or any other hosting provider), navigate to your Project Settings -> **Environment Variables** and add:
- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REFRESH_TOKEN`
Do not prefix these variables with `NEXT_PUBLIC_` to keep them securely server-side.

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


