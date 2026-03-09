import MainNavbar from "@/components/Navbar/MainNavbar";
import Footer from "@/components/Footer/Footer";
import { servicesData } from "@/data/servicesData";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Relaxation Dental – Salida, CO",
    description: "Explore our comprehensive range of dental services including teeth cleaning, root canals, implants, and orthodontics.",
};

export default function ServicesPage() {
    return (
        <main className="bg-[#E2DED9] min-h-screen">
            <MainNavbar />

            {/* Header Section */}
            <section className="w-full pt-32 pb-16 px-6 lg:px-12 bg-[#0097ab] text-center">
                <div className="max-w-[1400px] mx-auto">
                    <h1 className="text-white text-5xl md:text-6xl font-[Playfair_Display] mb-6 inline-block border-b-4 border-white pb-2 leading-tight">
                        Our Services
                    </h1>
                    <p className="text-white/90 font-[Lato] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Comprehensive dental care tailored to your specific needs. From routine cleanings to complete smile makeovers, we ensure a comfortable and professional experience.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="w-full py-24 px-6 lg:px-12">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                    {servicesData.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="group block bg-white rounded-[2rem] shadow-lg border border-[#eaddd7] overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="w-full h-64 overflow-hidden relative">
                                <img
                                    src={service.heroImage}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <span className="text-white font-serif tracking-widest uppercase text-sm border-b border-white">
                                        View Details
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-[Playfair_Display] text-[#3b2a28] mb-3 group-hover:text-[#0097ab] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[#5a3a3a] font-[Lato] text-base leading-relaxed line-clamp-3">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
