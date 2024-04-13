import { Nav } from "./components/Nav/Index"

function App() {

  return (
    <>
      <Nav />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '80vh' }}
      >
        <h1
        className="border p-1 px-4 rounded bg-light-subtle"
        >
          Welcome to my Test
        </h1>
      </div>
    </>
  )
}

export default App
