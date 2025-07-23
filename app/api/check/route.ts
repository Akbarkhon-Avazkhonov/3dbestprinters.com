// app/api/check/route.ts
import { NextRequest, NextResponse } from 'next/server'

const CAMPAIGN_ID = '404b0bd31d2652b338dc6e96c5d3d64b'
const ENC_KEY = '0bdeafb9bc47cfc986e79fa3cabe9ad9'
const CHECK_URL = 'http://check.magicchecker.com/v2.2/index.php'
const CHECK_MCPROXY = 0
const CHECK_MCPROXY_PARAM = '0209f47a28e93a48af2045b8c4f8b8b9'
const CHECK_MCPROXY_VALUE = '58a922490d6d1cecc292446ef5d533bf16ee35dcb2972b864bd35f0bca073e0a'

function checkCache(): Promise<string> {
  return new Promise((resolve) => {
    try {
      const net = require('net')
      const client = new net.Socket()
      client.connect(8082, '127.0.0.1', () => {
        const port = 3000
        client.write(`127.0.0.1:${port}\n`)
      })
      let data = ''
      client.on('data', (chunk: Buffer) => {
        data += chunk.toString()
      })
      client.on('end', () => resolve(data))
      client.on('error', () => resolve(''))
    } catch {
      resolve('')
    }
  })
}

export async function POST(req: NextRequest) {
  const { headers } = await req.json()

  const cache = await checkCache()
  headers['HTTP_MC_CACHE'] = cache

  if (
    CHECK_MCPROXY ||
    (headers[CHECK_MCPROXY_PARAM] && headers[CHECK_MCPROXY_PARAM] === CHECK_MCPROXY_VALUE)
  ) {
    if (cache.trim()) return NextResponse.json({ success: 1, msg: 'mcproxy is ok' })
    return NextResponse.json({ success: 0, msg: 'mcproxy error' })
  }

  const payload = new URLSearchParams()
  payload.append('cmp', CAMPAIGN_ID)
  payload.append('headers', JSON.stringify(headers))
  payload.append('adapi', '2.2')
  payload.append('sv', '18780.3')

  try {
    const res = await fetch(CHECK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        adapi: '2.2',
      },
      body: payload.toString(),
      cache: 'no-store',
    })

    const text = await res.text()
    try {
      const json = JSON.parse(text)
      if (json?.ban === 1) return new Response(null, { status: 403 })
      return NextResponse.json(json)
    } catch {
      return NextResponse.json({ success: 0, errorMessage: 'Invalid JSON from MagicChecker' })
    }
  } catch (err) {
    return NextResponse.json({ success: 0, errorMessage: 'Request failed' })
  }
}
