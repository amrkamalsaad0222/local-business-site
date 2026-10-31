import { business } from "@/config/business";

export default function Home() {
  return (
    <main>
      <h1>{business.name}</h1>
      {business.menu.map((m) => (
        <section key={m.id}>
          <h2>{m.name}</h2>
          {m.items.map((i) => (
            <div key={i.id} className="flex justify-between">
              <p>{i.name}</p>
              <p>
                {i.price}
                <span className="ms-1">{business.currency}</span>
              </p>
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
