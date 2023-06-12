import Hero from "./component/Hero";

function App() {
  return (
    <div>
      <div className="snap-y snap-mandatory h-screen overflow-scroll">
        <div className="snap-start bg-gray-100 w-screen h-screen flex items-center justify-center text-8xl">
          <Hero/>
        </div>
        <div className="snap-start bg-teal-200 w-screen  h-screen flex items-center justify-center text-8xl">
          2
        </div>
        <div className="snap-start bg-cyan-200 w-screen h-screen flex items-center justify-center text-8xl">
          3
        </div>
        <div className="snap-start bg-fuchsia-200 w-screen h-screen flex items-center justify-center text-8xl">
          4
        </div>
      </div>
      <a href="#hero">
        <footer className="sticky bottom-12 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <p>B</p>
          </div>
        </footer>
      </a>
    </div>
  );
}

export default App;
