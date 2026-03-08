import Treatment_Description from "@/components/ServicesPage/Treatment_Description";
import Symptoms from "@/components/ServicesPage/Symptoms";
import Procedure_Steps from "@/components/ServicesPage/Procedure_Steps";
import Benefits from "@/components/ServicesPage/Benefits";
import Cost_Info from "@/components/ServicesPage/Cost_Info";
import Service_FAQ from "@/components/ServicesPage/Service_FAQ";
import Service_CTA from "@/components/ServicesPage/Service_CTA";
import MainNavbar from "@/components/Navbar/MainNavbar";
import Footer from "@/components/Footer/Footer";

export default function TeethCleaningPage() {
    return (
        <main>
            <MainNavbar />
            <Treatment_Description
                title="Teeth Cleaning"
                description="Professional teeth cleaning is a preventative dental procedure designed to remove plaque and tartar buildup."
            />
            <Symptoms symptoms={[{ title: "Bleeding Gums", desc: "Your gums bleed when you brush" }, { title: "Bad Breath", desc: "Persistent bad breath" }]} />
            <Procedure_Steps steps={[{ stepTitle: "Exam", stepDesc: "A physical exam of your mouth" }, { stepTitle: "Scaling", stepDesc: "Removal of plaque" }]} />
            <Benefits benefits={["Prevents Cavities", "Stops Tooth Loss", "Brightens Your Smile"]} />
            <Cost_Info costDetails={{ info: "Typical cost ranges from $100 to $200 before insurance.", isCoveredByInsurance: true }} />
            <Service_FAQ faqs={[{ question: "Does it hurt?", answer: "No, teeth cleaning is virtually painless." }]} />
            <Service_CTA />
            <Footer />
        </main>
    );
}
