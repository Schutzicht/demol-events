import React from 'react';

const clients = [
    "Impuls Zeeland", "PZEM", "Pure Blue", "ADRZ", "Wielemaker", "Delta",
    "Luijten-VVZ", "Enduris", "Gemeente Kapelle", "DNWG", "DOCK",
    "Zeeland Connect", "Provincie Zeeland", "Indaver", "PolyStyreneLoop"
];

// Duplicate list for seamless loop
const allClients = [...clients, ...clients, ...clients];

export default function Clients() {
    return (
        <section id="clients" className="py-16 bg-white/5 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">Zij gingen je voor</p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {allClients.map((client, index) => (
                        <div key={index} className="mx-8 md:mx-12">
                            <span className="text-2xl md:text-4xl font-heading font-black text-white/20 uppercase hover:text-dme-teal transition-colors cursor-default">
                                {client}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
