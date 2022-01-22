import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex justify-between container m-auto items-center h-28">
      <h1>
        <Image src="/rout.svg" width="100%" height="100%" alt="satyaranjan rout logo" />
      </h1>
      <nav className="flex gap-10">
          <a className="text-blue-500 text-lg hover:text-blue-600" href="#">Home</a>
          <a className="text-blue-500 text-lg hover:text-blue-600" href="#">Projects</a>
          <a className="text-blue-500 text-lg hover:text-blue-600" href="#">Blog</a>
          <a className="text-blue-500 text-lg hover:text-blue-600" href="#">Contact</a>
      </nav>
    </header>
  );
};
