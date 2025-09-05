export default function Navbar() {
  return (
    <nav className="bg-light text-dark p-4 justify-between text-center top-0 w-full z-50">
      <h1 className="text-8xl font-bold font-pirata ">BREAKING NEWS</h1>
      <ul className=" flex justify-center gap-6 font-playfair font-semibold">
        <li>
          <a href="#about" className="hover:text-blue-400">
            About Me
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
