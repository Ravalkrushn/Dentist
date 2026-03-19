import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";
import MainNavbar from "@/components/Navbar/MainNavbar";
import Footer from "@/components/Footer/Footer";
import Service_Hero from "@/components/ServicesPage/Service_Hero";
import Treatment_Description from "@/components/ServicesPage/Treatment_Description";
import Symptoms from "@/components/ServicesPage/Symptoms";
import Procedure_Steps from "@/components/ServicesPage/Procedure_Steps";
import Benefits from "@/components/ServicesPage/Benefits";
import Cost_Info from "@/components/ServicesPage/Cost_Info";
import Service_FAQ from "@/components/ServicesPage/Service_FAQ";
import Service_CTA from "@/components/ServicesPage/Service_CTA";
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = servicesData.find((s) => s.id === resolvedParams.id);
    return {
        title: service ? `${service.title} | Services` : "Service Not Found",
        description: service ? service.description : "Dental Service Details"
    }
}

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        id: service.id,
    }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const service = servicesData.find((s) => s.id === resolvedParams.id);

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-[#EADDD7]">
            <MainNavbar />
            <Service_Hero title={service.title} image={service.heroImage} />
            <div className="relative z-10 bg-[#EADDD7]">
                <Treatment_Description
                    title={service.title}
                    description={service.description}
                    image={service.heroImage}
                />
                <Symptoms symptoms={service.symptoms} />
                <Procedure_Steps steps={service.steps} />
                <Benefits benefits={service.benefits} />
                <Cost_Info costDetails={service.costInfo} />
                <Service_FAQ faqs={service.faqs} />
                <Service_CTA />
                <Footer />
            </div>
        </main>
    );
}
