export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-8 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <div className="flex items-center justify-center gap-6">
        <a href="/" className="hover:text-zinc-900 dark:hover:text-white">
          Home
        </a>
        <a href="/about" className="hover:text-zinc-900 dark:hover:text-white">
          About
        </a>
        <a
          href="https://github.com/iam-joey/release-github-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-white"
        >
          GitHub
        </a>
      </div>
      <p className="mt-4">&copy; {new Date().getFullYear()} semantic-release-demo</p>
    </footer>
  );
}
