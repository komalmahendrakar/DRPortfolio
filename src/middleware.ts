import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isUnderMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  if (!isUnderMaintenance) {
    return NextResponse.next();
  }

  // Allow access to specific paths
  const allowedPaths = ['/maintenance', '/_next', '/public'];
  const isAllowed = allowedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  if (isAllowed) {
    return NextResponse.next();
  }

  // Redirect all other requests to maintenance
  return NextResponse.rewrite(new URL('/maintenance', request.url), {
    status: 503,
  });
}

export const config = {
  matcher: ['/((?!_next|static|favicon).*)'],
};
