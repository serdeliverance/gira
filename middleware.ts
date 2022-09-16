import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$")

export function middleware(req: NextRequest) {
    
    if ( req.nextUrl.pathname.startsWith('/api/entries/') ) {
        const id = req.nextUrl.pathname.replace('/api/entries/', '')
        if (!checkMongoIDRegExp.test(id)) {
            const url = req.nextUrl.clone()
            url.pathname = '/api/bad-request'
            
            return NextResponse.rewrite(url)
        }
        
    }
    
  return NextResponse.next()
}

export const config = {
  matcher: '/api/entries/:path',
}