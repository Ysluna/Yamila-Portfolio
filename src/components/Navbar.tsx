export default function Navbar() {
  return (
    <nav className="bg-light text-dark p-4 justify-between text-center z-50">
      <div className="m-5 border-t-4 border-b-4 border-dark p-5">
        <h1 className="text-8xl font-bold font-pirata border-t-2 border-b-2 border-dark p-3 ">
          BREAKING NEWS
        </h1>
        <ul className=" flex justify-center gap-6 font-news font-semibold text-2xl border-b-2 border-dark p-2">
          <li>
            <a href="#about" className="hover:text-pink">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-pink">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
