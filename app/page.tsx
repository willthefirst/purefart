import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col m-auto w-96 py-64">
      <h1>I will send you a bag of my fart.</h1>
      <blockquote>No air, just fart.</blockquote>
      <section className="py-8 text-center">
        {/* TODO: Replace this whole thing with an actual online store */}
        <button className="outline-double">Get farted!</button>
      </section>
      <section className="py-8">
        <h2 className="font-bold">Included</h2>
        <ul>
          <li>A small amount of my pure, concentrated fart</li>
          <li>Bespoke name and description</li>
          <li>Provenance</li>

        </ul>
      </section>
      <section className="py-8 text-center">
        {/* TODO: Replace this whole thing with an actual online store */}
        <button className="outline-double">Give me that fart already!</button>
      </section>
      <section>
        <h2 className="font-bold">Upcoming features</h2>
        <ol>
          <li>Tasting chart</li>
          <li>Different kinds of jars</li>
          <li>Special promotions</li>
          <li>Fartketplace (an online marketplace where you can sell your fart!)</li>
        </ol>
      </section>
    </main>
  )
}
