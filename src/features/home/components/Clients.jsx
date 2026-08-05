import { CLIENTS } from "@/data/clients";

function LogoRow({ hidden = false }) {
  return (
    <div className="logos-slide" aria-hidden={hidden || undefined}>
      {CLIENTS.map((c, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <div className="client-logo" key={i}>
          <img src={c.src} alt={c.alt} />
          <span className="client-name">{c.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="clients">
      <div className="container">
        <div className="clients-header">
          <p className="clients-title">Trusted by Forward-Thinking Brands Across Bali</p>
        </div>
      </div>
      <div className="logos-slider">
        <LogoRow />
        <LogoRow hidden />
      </div>
    </section>
  );
}
