import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center text-cyan-800 mb-6">
        Country List
      </h1>
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <Link
            href="/countries/pakistan"
            className="block px-4 py-2 bg-purple-200 border border-black rounded-lg hover:bg-cyan-300 transition"
          >
            Pakistan
          </Link>
        </li>
        <li>
          <Link
            href="/countries/india"
            className="block px-4 py-2 bg-yellow-200 border border-black rounded-lg hover:bg-cyan-400 transition"
          >
            India
          </Link>
        </li>
        <li>
          <Link
            href="/countries/bangladesh"
            className="block px-4 py-2 bg-blue-300 border border-black rounded-lg hover:bg-cyan-500 transition"
          >
            Bangladesh
          </Link>
        </li>
        <li>
          <Link
            href="/countries/srilanka"
            className="block px-4 py-2 bg-gray-300 border border-black rounded-lg hover:bg-cyan-600 transition"
          >
            Srilanka
          </Link>
        </li>
        <li>
          <Link
            href="/countries/indonesia"
            className="block px-4 py-2 bg-green-300 border border-black rounded-lg hover:bg-cyan-800 transition"
          >
            Indonesia
          </Link>
        </li>
        <li>
          <Link
            href="/countries/china"
            className="block px-4 py-2 bg-cyan-400 border border-black rounded-lg hover:bg-cyan-800 transition"
          >
            China
          </Link>
        </li>
      </ul>
    </div>
  );
  }