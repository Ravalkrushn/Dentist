export type BlogDetailedHighlight = {
    title: string;
    description: string;
    iconName: "Sparkles" | "Heart" | "Smile" | "AlertCircle" | "Thermometer" | "ShieldCheck" | "Lightbulb" | "Clock";
};

export type Blog = {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
    author: string;
    detailedData: {
        intro: string;
        quickTips: string[];
        mainHighlights: BlogDetailedHighlight[];
        detailedSteps?: { title: string; point: string }[];
        conclusion: string;
    };
};

export const blogData: Blog[] = [
    {
        id: "oral-hygiene-tips",
        title: "How to Maintain Oral Hygiene",
        excerpt: "Maintaining good oral hygiene is essential for a healthy smile and overall well-being. Learn the best practices for brushing, flossing, and more.",
        image: "/image/ABOUT.png",
        date: "March 13, 2026",
        readTime: "8 min read",
        category: "Preventive Care",
        author: "Dr. Relaxation",
        detailedData: {
            intro: "A healthy smile is a window to your overall health. Oral hygiene isn't just about white teeth; it's about the foundation of your well-being. At Relaxation Dental, we believe that education is the first step toward a lifetime of healthy smiles.",
            quickTips: [
                "Brush twice daily for two minutes.",
                "Floss every single night before bed.",
                "Replace your toothbrush every 3 months.",
                "Drink plenty of water to wash away acids."
            ],
            mainHighlights: [
                { title: "Proper Technique", description: "Hold your brush at a 45-degree angle. Use short, gentle strokes.", iconName: "Sparkles" },
                { title: "Gum Health", description: "Healthy gums don't bleed. Flossing prevents gingivitis and periodontitis.", iconName: "Heart" },
                { title: "Tongue Cleaning", description: "Don't forget the tongue! It's where 80% of bad breath bacteria live.", iconName: "Smile" }
            ],
            detailedSteps: [
                { title: "Step 1: The Angle", point: "Place your toothbrush at a 45-degree angle to the gums." },
                { title: "Step 2: Gentle Motion", point: "Move the brush in small, circular motions rather than scrubbing." },
                { title: "Step 3: Inside Surfaces", point: "Tilt the brush vertically to clean the inside of your front teeth." },
                { title: "Step 4: Flossing Hook", point: "Curve the floss into a C-shape around each tooth to reach under the gumline." }
            ],
            conclusion: "By following these simple but critical steps, you can avoid costly and painful dental procedures in the future. Remember, prevention is always better than cure!"
        }
    },
    {
        id: "root-canal-signs",
        title: "Signs You Need a Root Canal",
        excerpt: "Persistent tooth pain or sensitivity? It might be a sign you need a root canal. Discover the common symptoms and when to see a dentist.",
        image: "/image/ABOUT2.png",
        date: "March 10, 2026",
        readTime: "7 min read",
        category: "Restorative",
        author: "Clinical Team",
        detailedData: {
            intro: "The words 'root canal' often cause anxiety, but they shouldn't. A root canal is actually a tooth-saving procedure that removes infection and stops pain. Understanding the early warning signs is crucial for saving your natural tooth.",
            quickTips: [
                "Don't ignore persistent dull aches.",
                "Watch for unexplained swelling in the gums.",
                "Notice if a tooth changes color.",
                "See a dentist immediately for sharp pain."
            ],
            mainHighlights: [
                { title: "Severe Pain", description: "A deep, throbbing ache that keeps you awake at night is a classic sign.", iconName: "AlertCircle" },
                { title: "Thermal Sensitivity", description: "Pain that lingers after hot or cold food is gone signals nerve damage.", iconName: "Thermometer" },
                { title: "Gum Abscess", description: "Small, pimple-like bumps on your gums indicate an active infection.", iconName: "ShieldCheck" }
            ],
            detailedSteps: [
                { title: "Phase 1: Diagnosis", point: "We use digital X-rays to see the extent of the infection." },
                { title: "Phase 2: Cleaning", point: "The infected pulp is gently removed using precision tools." },
                { title: "Phase 3: Sealing", point: "The infected pulp is gently removed using precision tools." },
                { title: "Phase 4: Crown", point: "A custom crown is placed to restore the tooth's strength and look." }
            ],
            conclusion: "With modern technology and sedation options at Relaxation Dental, a root canal is no more uncomfortable than a standard filling. If you have pain, don't wait."
        }
    },
    {
        id: "best-age-for-braces",
        title: "Best Age for Braces",
        excerpt: "Wondering when is the best time for orthodontic treatment? Orthodontic care can benefit patients of all ages, but early evaluation is key.",
        image: "/image/team_member.jpg",
        date: "March 5, 2026",
        readTime: "10 min read",
        category: "Orthodontics",
        author: "Ortho Specialist",
        detailedData: {
            intro: "Orthodontics has evolved. While we often think of braces for teenagers, patients from age 7 to 70 are now enjoying the benefits of a straighter smile. The 'best' age depends entirely on the orthodontic issues present.",
            quickTips: [
                "Age 7 is the recommended age for first evaluation.",
                "Adults now make up 25% of orthodontic patients.",
                "Invisalign is a great option for active lifestyles.",
                "Modern braces are smaller and more comfortable."
            ],
            mainHighlights: [
                { title: "Growth Guidance", description: "Early intervention (Phase 1) can guide jaw growth in children.", iconName: "Lightbulb" },
                { title: "Self-Confidence", description: "A straighter smile boosts social and professional confidence.", iconName: "Smile" },
                { title: "Functional Health", description: "Straight teeth are easier to clean and prevent uneven wear.", iconName: "ShieldCheck" }
            ],
            detailedSteps: [
                { title: "Step 1: Consultation", point: "Comprehensive 3D scans and photos are taken for analysis." },
                { title: "Step 2: Custom Plan", point: "We design a roadmap specifically for your bite and alignment." },
                { title: "Step 3: Fitting", point: "Braces or aligners are placed with minute precision." },
                { title: "Step 4: Maintenance", point: "Regular check-ups ensure your progress stays on track." }
            ],
            conclusion: "Whether it's for a growing child or an adult looking to finally have the smile they've dreamed of, the best time to start is now."
        }
    },
    {
        id: "teeth-whitening-safety",
        title: "Teeth Whitening: Is It Safe?",
        excerpt: "Professional teeth whitening is a popular way to brighten your smile. We explore the safety and effectiveness of various whitening methods.",
        image: "/image/Invisalign&TeethWhitening_after.jpg",
        date: "March 1, 2026",
        readTime: "6 min read",
        category: "Cosmetic",
        author: "Cosmetic Team",
        detailedData: {
            intro: "A bright smile is one of the first things people notice. But is whitening safe for your enamel? At Relaxation Dental, we prioritize the health of your teeth while achieving beautiful, luminous results.",
            quickTips: [
                "Professional whitening is always safer than OTC kits.",
                "Avoid dark foods like coffee for 48 hours after.",
                "Whitening doesn't work on crowns or veneers.",
                "Use desensitizing paste if you have sensitive teeth."
            ],
            mainHighlights: [
                { title: "Safe Formulas", description: "Our professional gels are pH-balanced to protect your enamel.", iconName: "ShieldCheck" },
                { title: "Instant Results", description: "In-office whitening can brighten your teeth up to 8 shades in one visit.", iconName: "Sparkles" },
                { title: "Long-Lasting", description: "With proper care, results can last for a year or more.", iconName: "Clock" }
            ],
            detailedSteps: [
                { title: "Preparation", point: "We clean your teeth to remove any plaque or debris." },
                { title: "Barrier Placement", point: "Your gums and lips are protected from the whitening gel." },
                { title: "Gel Activation", point: "The professional gel is applied and activated for deep stains." },
                { title: "Final Rinse", point: "A fluoride treatment is often applied to reduce sensitivity." }
            ],
            conclusion: "When managed by dental professionals, teeth whitening is a safe, effective, and transformative way to enhance your appearance."
        }
    }
];
