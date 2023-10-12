const Navbar = () => {
  return (
    <nav className="w-full h-[80px] z-10 bg-white fixed drop-shadow-lg ">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <h1 className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]">
            News
          </h1>
        </div>

        <div className="hidden md:flex sm:mr-10 md:mr-10"></div>
      </div>
    </nav>
  );
};

export default Navbar;
