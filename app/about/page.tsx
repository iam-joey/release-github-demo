export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center dark:bg-zinc-900">
      <section className="flex flex-col items-center gap-6 py-24">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          About This Demo
        </h1>
        <p className="max-w-xl text-lg text-zinc-500 dark:text-zinc-400">
          This project demonstrates how conventional commits drive automated
          versioning using semantic-release and GitHub Actions. No manual
          releases — just commit messages that do the work for you.
        </p>
        <a
          href="/"
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Back to Home
        </a>
      </section>
    </main>
  );
}
breaking change comment
