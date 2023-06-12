import Hero from "./component/Hero";

function App() {
  return (
    <div className="bg-[rgb(36,36,36)] ">
      <div className="snap-y snap-mandatory h-screen overflow-scroll bg-[rgb(36,36,36)] ">
        <div className="snap-start  w-screen h-screen flex items-center justify-center text-8xl ">
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
