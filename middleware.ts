import { tr } from 'date-fns/locale'
import { NextRequest, NextResponse } from 'next/server'

const externalLinks = [
  "https://www.amazon.com/dp/B07D18L9K6?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG,
  "https://www.amazon.com/dp/B0CKSW74GX?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG,
  "https://www.amazon.com/dp/B0CRYJBKQQ?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG,
  "https://www.amazon.com/dp/B0CZ77ZWJC?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG,
  "https://www.amazon.com/dp/B0DCK4P5NJ?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG,
  "https://www.amazon.com/dp/B0DPZFXCHW?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG,
  
]

const externalLinks1 = [
  "https://www.amazon.com/dp/B0DGXFXP45?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_2,
  "https://www.amazon.com/dp/B0834428DQ?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_2,
  "https://www.amazon.com/dp/B00J0H6NNM?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_2,
  "https://www.amazon.com/dp/B07QGV6D8P?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_2,
  "https://www.amazon.com/dp/B0CW1FSSFK?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_2,
  "https://www.amazon.com/dp/B07ZN44383?tag=" + process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG_2,
  
]
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = '3d_printers'

  // Если зашли на /redirect
  if (url.pathname === '/amazon') {
    const response = NextResponse.redirect(new URL('/', request.url))
    response.cookies.set(cookieName, 'true', {
      path: '/',
      maxAge: 60,
      httpOnly: true,
    })
    return response
  }
if (url.pathname === '/amazon2') {
    const response = NextResponse.redirect(new URL('/filaments', request.url))
    response.cookies.set(cookieName, 'true', {
      path: '/filaments',
      maxAge: 60,
      httpOnly: true,})
    return response
  }
  // Если зашли на / и есть кука
  if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName)

    if (redirectFlag?.value === 'true') {
      const randomUrl = externalLinks[Math.floor(Math.random() * externalLinks.length)]

      const response = NextResponse.redirect(randomUrl)

      // удаляем cookie
      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      })

      return response
    }
  }

  if (url.pathname === '/filaments') {
    const redirectFlag = request.cookies.get(cookieName)

    if (redirectFlag?.value === 'true') {
      const randomUrl = externalLinks1[Math.floor(Math.random() * externalLinks1.length)]

      const response = NextResponse.redirect(randomUrl)

      // удаляем cookie
      response.cookies.set(cookieName, '', {
        path: '/filaments',
        maxAge: 0,
      })

      return response
    }
  }
  return NextResponse.next()
}

// применяем middleware только к / и /redirect
export const config = {
  matcher: ['/', '/filaments','/amazon', '/amazon2'], // добавляем /amazon2
}
