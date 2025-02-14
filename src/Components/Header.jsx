const Header = () => {
    return (
      <header className="mt-6">
        <nav className="mx-auto max-w-screen-lg text-white border border-[#197686] rounded-3xl flex items-center justify-between py-3 px-4 md:py-4 md:px-8 bg-[rgba(5,37,44,0.40)] backdrop-blur-[2px]">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="aspect-square bg-[#052F35] flex py-2 px-3 items-center gap-2 rounded-xl border border-[#0E464F] cursor-pointer">
              <img className="w-6 h-6" src="/Logo (2).svg" alt="logo" />
            </div>
            <img className="w-auto h-6 md:h-8" src="/ticz.svg" alt="logo" />
          </div>
  
          {/* Navigation Links (Hidden on Mobile) */}
          <ul className="hidden md:flex gap-4 items-center text-sm md:text-base cursor-pointer">
            <li>Events</li>
            <li>My Tickets</li>
            <li>About Projects</li>
          </ul>
  
          {/* Button */}
          <button className="bg-white text-[#0A0C11] rounded-xl flex items-center gap-2 py-3 px-4 text-sm md:text-base uppercase cursor-pointer">
            My Tickets 
            <img className="w-4 h-4" src="/arrow.svg" alt="arrow" />
          </button>
        </nav>
      </header>
    );
  };
  
  export default Header;
  