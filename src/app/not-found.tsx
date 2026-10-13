import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold">This page is still on the workbench.</h1>
      <p className="mt-4 max-w-xl text-ink/75">
        The page you are looking for is not available yet. The main portfolio sections are ready from the homepage.
      </p>
      <Link href="/" className="button-primary mt-8">
        Return home
      </Link>
    </section>
  );
}
