export async function GET() {
    const res = await fetch('http://127.0.0.1:8000/api/books', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }