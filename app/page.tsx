import { business } from "@/config/business";

export default function Home() {
  return (
    <main>
      <h1 className="text-primary">{business.name}</h1>
      {business.menu.map((m) => (
        <section key={m.id}>
          <h2 className="text-accent">{m.name}</h2>
          {m.items.map((i) => (
            <div key={i.id} className="flex justify-between">
              <div>
                <p>
                  {i.name}
                  {i.featured ? (
                    <span className="ms-2  rounded-full bg-amber-100 px-2 text-xs text-amber-800">
                      مميز
                    </span>
                  ) : (
                    ""
                  )}
                </p>
                {i.description && (
                  <p className="text-sm text-gray-500">{i.description}</p>
                )}
              </div>
              <p>
                {i.price} {business.currency}
              </p>
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
