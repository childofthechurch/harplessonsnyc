import { Playfair_Display, Inter } from '@next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Harp Lessons NYC | Private Instruction with Esther Sibiude | Park Slope Brooklyn',
  description: 'Private harp lessons in NYC & Brooklyn for all ages. Learn with Esther Sibiude, classically trained harpist offering lessons in Park Slope and online. First trial lesson available!',
  keywords: 'harp lessons NYC, harp lessons Brooklyn, harp teacher NYC, Park Slope harp, Esther Sibiude harpist, learn harp NYC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/images/favicon/harp6464.png" />

        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GT-T9CD235D');`
        }} />

        {/* Meta Pixel */}
        <script dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '770878310335430');
fbq('track', 'PageView');`
        }} />
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=770878310335430&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Microsoft Clarity */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "ufs8qcupsf");`
        }} />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6WNLK7FNS8" />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6WNLK7FNS8');`
        }} />

        {/* Google Ads Conversion */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16923342394" />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-16923342394');`
        }} />
      </head>
      <body className="font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GT-T9CD235D"
            height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
