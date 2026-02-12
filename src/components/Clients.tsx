import React from 'react';

const clients = [
    { name: "Impuls Zeeland", logo: "/clients/client_1.jpg" },
    { name: "PolyStyreneLoop", logo: "/clients/client_2.jpg" },
    { name: "Pure Blue", logo: "/clients/client_4.jpg" },
    { name: "ADRZ", logo: "/clients/client_5.png" },
    { name: "Wielemaker", logo: "/clients/client_6.png" },
    { name: "Delta", logo: "/clients/client_7.png" },
    { name: "Luijten-VVZ", logo: "/clients/client_8.png" },
    { name: "Enduris", logo: "/clients/client_9.jpg" },
    { name: "Gemeente Kapelle", logo: "/clients/client_10.jpg" },
    { name: "Dockwize", logo: "/clients/client_11.jpg" },
    { name: "Zeeland Connect", logo: "/clients/client_12.jpg" },
    { name: "Provincie Zeeland", logo: "/clients/client_13.jpg" },
    { name: "Indaver", logo: "/clients/client_14.jpg" },
    { name: "Delta Ride for the Roses", logo: "/clients/client_15.jpg" },
    { name: "Waterschap Scheldestromen", logo: "/clients/client_16.jpg" },
    { name: "AMZ", logo: "/clients/client_17.png" },
    { name: "Gors", logo: "/clients/client_18.png" },
    { name: "Periscaldes", logo: "/clients/client_19.jpg" },
    { name: "Roompot", logo: "/clients/client_20.jpg" },
    { name: "Iwaarden", logo: "/clients/client_21.png" },
    { name: "Gemeente Goes", logo: "/clients/client_22.png" },
    { name: "Saman", logo: "/clients/client_23.png" },
    { name: "Zeeland Refinery", logo: "/clients/client_24.png" },
    { name: "WijkzorgXperience", logo: "/clients/client_25.png" },
    { name: "Delta Climate Center", logo: "/clients/client_26.jpg" },
    { name: "Sagro", logo: "/clients/client_27.png" },
    { name: "Vam Watertechniek", logo: "/clients/client_28.png" },
    { name: "Gemeente Sluis", logo: "/clients/client_29.jpg" }
];

// Duplicate list for seamless loop
const allClients = [...clients, ...clients];

export default function Clients() {
    return (
        <section id="clients" className="py-16 bg-white overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-4 mb-12 text-center">
                <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">Zij gingen je voor</p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap items-center">
                    {allClients.map((client, index) => (
                        <div key={index} className="mx-8 md:mx-12 shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-12 md:h-16 w-auto object-contain max-w-[150px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
