import ScrollToHash from "../components/ScrollToHash";

export const metadata = {
  title: "Info - Wedding",
};

export default function InfoPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Info</h1>
      <p className="mb-6 text-gray-600">
        Här hittar du all praktisk information om dagen. Använd menyn högst upp
        för att hoppa direkt till en sektion.
      </p>

      <ScrollToHash />

      <section id="schedule" className="py-12 border-b">
        <h2 className="text-2xl font-semibold mb-3">Schema</h2>
        <p>Här kommer tid och plats för olika delar av dagen.</p>
      </section>

      <section id="vigsel" className="py-12 border-b">
        <h2 className="text-2xl font-semibold mb-3">Vigsel</h2>
        <p>Information om kyrka/vigsel och tider.</p>
      </section>

      <section id="dinner" className="py-12 border-b">
        <h2 className="text-2xl font-semibold mb-3">Middag</h2>
        <p>Praktisk information om middagen.</p>
      </section>

      <section id="tal" className="py-12 border-b">
        <h2 className="text-2xl font-semibold mb-3">Tal</h2>
        <p>Info om tal och hur man anmäler sig som talare.</p>
      </section>

      <section id="presents" className="py-12 border-b">
        <h2 className="text-2xl font-semibold mb-3">Gåvor</h2>
        <p>Information om gåvor och önskelista.</p>
      </section>

      <section id="location" className="py-12 border-b">
        <h2 className="text-2xl font-semibold mb-3">Kartor</h2>
        <p>Kartor till kyrka, festlokal och parkering.</p>
      </section>

      <section id="hotel" className="py-12 border-b">
        <h2 className="text-2xl font-semibold mb-3">Boende</h2>
        <p>Tips på hotell och boende nära evenemangen.</p>
      </section>

      <section id="contact" className="py-12">
        <h2 className="text-2xl font-semibold mb-3">Kontakt</h2>
        <p>Kontaktinfo vid frågor.</p>
      </section>
    </main>
  );
}
