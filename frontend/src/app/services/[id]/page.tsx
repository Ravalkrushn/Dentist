import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";
import MainNavbar from "@/components/Navbar/MainNavbar";
import Footer from "@/components/Footer/Footer";
import Service_Hero from "@/components/ServicesPage/Service_Hero";
import Treatment_Description from "@/components/ServicesPage/Treatment_Description";
import Symptoms from "@/components/ServicesPage/Symptoms";
import Procedure_Steps from "@/components/ServicesPage/Procedure_Steps";
import Benefits_FAQ from "@/components/ServicesPage/Benefits_FAQ";
import Cost_Info from "@/components/ServicesPage/Cost_Info";
import OtherServices from "@/components/ServicesPage/OtherServices";
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
                <Benefits_FAQ benefits={service.benefits} faqs={service.faqs} />
                <Cost_Info costDetails={service.costInfo} />
                <OtherServices currentId={service.id} />
                <Service_CTA />
                <Footer />
            </div>
        </main>
    );
}
