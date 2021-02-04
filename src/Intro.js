import LogoList from './logo-list.png';

export function Intro({ nextCallback }) {
  return (
    <div className="w-96 mx-auto rounded-lg p-3 flex gap-3 flex-col">
      <h2 className="text-xl font-bold">Introduction</h2>
      <p className="text-gray-800 leading-6">
        The current fasion of logos is simply the brand name in sans
        serif, stripped of all individuality and flair:
            </p>
      <img
        src={LogoList}
        alt="List of modern logos which are all sans serif"
        className="shadow" />
      <a
        href="https://velvetshark.com/articles/why-do-brands-change-their-logos-and-look-like-everyone-else"
        className="text-center text-sm text-gray-300 hover:underline"
      >
        Image source
            </a>
      <p className="text-gray-800 leading-6">
        How can you make one too? To help, I made a suitable tool, where
        the lack of features itself will ensure you design the ideal
        brand logo to look no different from the others.
            </p>
      <button
        onClick={nextCallback}
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none font-semibold text-white p-2 leading-none rounded-md mt-4"
      >
        Continue to Editor
            </button>
    </div>
  );
}
