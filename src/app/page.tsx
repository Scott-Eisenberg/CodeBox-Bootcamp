export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        🚀 Welcome to My First Next.js + Tailwind Page!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        <strong style={{ fontSize:"20px" }}>Scott Eisenberg</strong>
      </p>
      <a
        href=" https://www.linkedin.com/in/scott-eisenberg2/"
        target="_blank"
        rel="noreferrer"
        className="px-8 py-4 rounded-lg font-semibold bg-purple-400 text-black shadow-[0_0_20px_#a855f7] hover:shadow-[0_0_40px_#a855f7] transition duration-300 cursor-pointer"
      >
        Hire Me!
      </a>
    </main>
  );
}
