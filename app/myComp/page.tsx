export default function MyComp() {
  return (
    <main style={{ padding: "20px" , fontSize:"2rem" ,lineHeight:"5rem"}}>
      <h1>Next.js Routing Demo</h1>

      <p>
        This page is rendered because Next.js treats <code>page.tsx</code> files
        as routes.
      </p>

      <p>
        Folder name defines the URL path automatically.
      </p>

      <p>
        Example: <code>app/mycomp/page.tsx</code> → <code>/mycomp</code>
      </p>
    </main>
  )
}
