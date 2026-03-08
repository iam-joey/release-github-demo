export default function Payments() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center dark:bg-zinc-900">
      <section className="flex flex-col items-center gap-6 py-24">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Payments
        </h1>
        <p className="max-w-xl text-lg text-zinc-500 dark:text-zinc-400">
          Securely manage your payments and billing information.
        </p>
        <button className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
          Add Payment Method
        </button>
      </section>
    </main>
  );
}
