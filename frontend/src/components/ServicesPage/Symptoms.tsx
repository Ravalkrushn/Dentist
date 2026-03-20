"use client";
import { useRef } from "react";
import { 
    AlertCircle, 
    Wind, 
    Search, 
    Zap, 
    Thermometer, 
    Activity, 
    XCircle, 
    RotateCcw, 
    ShieldAlert, 
    Grid, 
    Layers, 
    Frown, 
    Droplet, 
    Hammer, 
    StretchHorizontal, 
    LocateFixed, 
    Flame, 
    ArrowLeftRight, 
    Baby, 
    Hand, 
    Candy, 
    Sun, 
    Coffee, 
    Heart 
} from "lucide-react";

const IconMapper = ({ name }: { name?: string }) => {
    switch (name) {
        case "AlertCircle": return <AlertCircle size={24} />;
        case "Wind": return <Wind size={24} />;
        case "Search": return <Search size={24} />;
        case "Zap": return <Zap size={24} />;
        case "Thermometer": return <Thermometer size={24} />;
        case "Activity": return <Activity size={24} />;
        case "XCircle": return <XCircle size={24} />;
        case "RotateCcw": return <RotateCcw size={24} />;
        case "ShieldAlert": return <ShieldAlert size={24} />;
        case "Grid": return <Grid size={24} />;
        case "Layers": return <Layers size={24} />;
        case "Frown": return <Frown size={24} />;
        case "Droplet": return <Droplet size={24} />;
        case "Hammer": return <Hammer size={24} />;
        case "StretchHorizontal": return <StretchHorizontal size={24} />;
        case "LocateFixed": return <LocateFixed size={24} />;
        case "Flame": return <Flame size={24} />;
        case "ArrowLeftRight": return <ArrowLeftRight size={24} />;
        case "Baby": return <Baby size={24} />;
        case "Hand": return <Hand size={24} />;
        case "Candy": return <Candy size={24} />;
        case "Sun": return <Sun size={24} />;
        case "Coffee": return <Coffee size={24} />;
        case "Heart": return <Heart size={24} />;
        default: return <AlertCircle size={24} />;
    }
};

export default function Symptoms({ symptoms }: { symptoms: { title: string; desc: string; iconName?: string }[] }) {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className="w-full bg-[#EADDD7] py-20 px-6 lg:px-28">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-[#3b2a28] text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-[#0097ab] pb-2">
                    Symptoms / When You Need It
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {symptoms.map((item, idx) => (
                    <div
                        key={idx}
                        className="symp-card bg-white p-8 rounded-2xl shadow-md border border-[#0097ab]/10 hover:-translate-y-1 transition-all duration-300 group"
                    >
                        <div className="bg-[#0097ab] text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0097ab]/20 transform group-hover:rotate-6 transition-all duration-300">
                            <IconMapper name={item.iconName} />
                        </div>
                        <h4 className="text-[#3b2a28] font-bold text-xl mb-3">{item.title}</h4>
                        <p className="text-[#5a3a3a] leading-relaxed opacity-80">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
