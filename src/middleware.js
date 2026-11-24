import { NextResponse } from 'next/server';

// Cheap bot filter: reject vulnerability scanners and junk probes with a tiny
// response before any page is rendered (every SSR render costs Amplify compute).

// Paths this Next.js site never serves but scanners hammer constantly.
const BLOCKED_PATH =
  /^\/(wp-|wordpress|xmlrpc|cgi-bin|phpmyadmin|pma|admin\.php|vendor\/|\.git|\.env|\.aws|\.ssh|\.vscode|\.DS_Store|config\.|backup|server-status)|\.(php\d?|asp|aspx|jsp|cgi|sql|bak|old|ini|log|yml|yaml)$/i;

// Known scanner / abusive crawler user agents.
const BLOCKED_UA =
  /(sqlmap|nikto|nmap|masscan|zgrab|nuclei|wpscan|acunetix|netsparker|dirbuster|gobuster|ffuf|feroxbuster|httpx|censysinspect|bytespider|petalbot|mj12bot|dotbot|blexbot|serpstatbot|dataforseobot)/i;

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const ua = request.headers.get('user-agent') || '';

  if (BLOCKED_PATH.test(pathname)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  if (!ua.trim() || BLOCKED_UA.test(ua)) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  // Skip static assets so they stay on the CDN without invoking middleware.
  matcher: ['/((?!_next/static|_next/image|assets/|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico|woff2?|css|js)$).*)'],
};
