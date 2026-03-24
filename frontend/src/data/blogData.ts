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
        detailedSteps?: { title: string; point: string; image?: string }[];
        conclusion: string;
    };
};

export const blogData: Blog[] = [
    {
        id: "oral-hygiene-tips",
        title: "How to Maintain Oral Hygiene",
        excerpt: "Maintaining good oral hygiene is essential for a healthy smile and overall well-being. Learn the best practices for brushing, flossing, and more.",
        image: "/image/blog1.jpg",
        date: "March 13, 2026",
        readTime: "8 min read",
        category: "Preventive Care",
        author: "Dr. Relaxation",
        detailedData: {
            intro: "A healthy smile is far more than just a cosmetic asset; it is a vital window into your overall systemic health. Many people view oral hygiene as a simple chore—a quick brush in the morning and perhaps a rushed scrub at night. However, the reality is that your mouth is a complex ecosystem that requires dedicated care and attention to remain in balance. When we talk about oral hygiene, we aren't just discussing the whiteness of your teeth; we are addressing the foundation of your well-being. Chronic inflammation in the gums has been linked to various systemic issues, including heart disease, diabetes, and even respiratory conditions. At Dento, we believe that true dental health starts with patient education. Understanding the 'why' behind the 'how' empowers you to take control of your health. Think of your daily oral care routine not as a task, but as a form of preventive medicine—a daily investment that pays dividends in longevity, comfort, and confidence. In this comprehensive guide, we will dive deep into the biological necessity of proper brushing, the overlooked power of interdental cleaning, and how modern dental science has simplified the path to a lifetime of vibrant, healthy smiles.",
            quickTips: [],
            mainHighlights: [],
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
        image: "/image/blog2.jpg",
        date: "March 10, 2026",
        readTime: "7 min read",
        category: "Restorative",
        author: "Clinical Team",
        detailedData: {
            intro: "For decades, the phrase 'root canal' has incorrectly served as a symbol of dental discomfort. However, in the modern era of high-tech dentistry, this perception is entirely outdated. A root canal is not an ordeal to be feared; it is a sophisticated, tooth-saving procedure designed to eliminate infection and, most importantly, provide immediate relief from agonizing pain. At its core, the procedure involves treating the 'pulp'—the living tissue inside your tooth that contains nerves and blood vessels. When this tissue becomes infected due to deep decay or trauma, it can lead to intense pressure and a persistent dull ache that signals a serious problem. Ignoring these signs doesn't just prolong the discomfort; it risks the permanent loss of the tooth and allows infection to spread into the jawbone. At Dento, we use gentle, precision-guided techniques to ensure that our patients feel completely at ease throughout the process. We believe that understanding the biology of your tooth and why root canal therapy is necessary can transform an anxious experience into a moment of restorative healing. By the time you finish this article, you will understand how to listen to what your teeth are telling you and why saving your natural smile is always the best long-term option for your health.",
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
                { title: "Phase 1: Diagnosis & Imaging", point: "Our process begins with high-resolution digital X-rays and a clinical examination to map the exact internal structure of the tooth. We identify the precise source of the infection, ensuring that we only treat the necessary areas while preserving as much of your natural tooth structure as possible for long-term health.", image: "/image/service1.jpg" },
                { title: "Phase 2: Precision Cleaning", point: "Under local anesthesia, the infected pulp is gently and thoroughly removed using specialized endodontic instruments. This eliminates the source of the pain and the bacteria causing the inflammation. Our team ensures the canals are completely sterilized, a critical step in preventing the infection from returning.", image: "/image/service2.jpg" },
                { title: "Phase 3: Biocompatible Sealing", point: "Once the canals are meticulously cleaned and reshaped, they are filled with a biocompatible material called gutta-percha. This rubber-like material seals the inner chambers of the tooth against future bacterial invasion, effectively 'mummifying' the empty space and providing internal support to the roots.", image: "/image/service3.jpg" },
                { title: "Phase 4: Restorative Crown", point: "To complete the transformation, a custom-crafted porcelain crown is placed over the treated tooth. This restores its full strength, protects the brittle interior, and matches the shade and shape of your surrounding teeth perfectly—ensuring your smile looks as good as it feels.", image: "/image/service4.jpg" }
            ],
            conclusion: "With modern technology and sedation options at Dento, a root canal is no more uncomfortable than a standard filling. If you have pain, don't wait."
        }
    },
    {
        id: "best-age-for-braces",
        title: "Best Age for Braces",
        excerpt: "Wondering when is the best time for orthodontic treatment? Orthodontic care can benefit patients of all ages, but early evaluation is key.",
        image: "/image/blog3.jpg",
        date: "March 5, 2026",
        readTime: "10 min read",
        category: "Orthodontics",
        author: "Ortho Specialist",
        detailedData: {
            intro: "The landscape of orthodontics has shifted dramatically over the past several years. While we often picture teenagers with metal brackets when we think of braces, the reality is that healthy smiles have no age limit. From children as young as seven years old to active adults in their seventies, more people than ever are using orthodontic technology to achieve the smile they’ve always wanted. But the question remains: is there truly a 'best' age to start? The answer is nuanced, as it depends entirely on the unique physiological development of the individual’s jaw and the specific alignment issues at play. Early intervention, often referred to as 'Phase 1 treatment,' can guide jaw growth and create space for permanent teeth to emerge correctly, potentially preventing the need for more invasive surgery later in life. Conversely, adult orthodontics has seen a massive surge in popularity thanks to discreet options like Invisalign and clear ceramic braces, proving that you are never too old to invest in your confidence and functional health. At Dento, we take a holistic approach to orthodontics, looking beyond just 'straight teeth' to ensure proper bite function and long-term oral health. In this exploration, we will guide you through the different stages of orthodontic eligibility and help you determine the optimal time to begin your own journey toward a beautifully aligned smile.",
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
        image: "/image/blog4.jpg",
        date: "March 1, 2026",
        readTime: "6 min read",
        category: "Cosmetic",
        author: "Cosmetic Team",
        detailedData: {
            intro: "A bright, luminous smile is one of the most powerful tools in a person's social and professional toolkit. It is often the first thing people notice, signaling health, vitality, and even friendliness. However, with the overwhelming abundance of over-the-counter whitening kits, charcoal toothpastes, and questionable DIY 'hacks' floating around social media, a critical question has emerged: is teeth whitening actually safe for your enamel? At Dento, we believe that aesthetic enhancement should never come at the cost of structural integrity. Enamel is the hardest substance in the human body, but it is not invulnerable. Incorrect application of aggressive bleaching agents can lead to prolonged sensitivity, gum irritation, and even permanent damage to the tooth’s surface. This is why professional supervision is not just a luxury; it is a necessity for safe, predictable results. In our practice, we use pH-balanced formulas that are specifically engineered to penetrate the tooth's pores and dissolve deep-seated stains without disrupting the mineral balance of the tooth. Our goal is to provide a whitening experience that is comfortable, long-lasting, and biologically responsible. In this detailed guide, we will strip away the myths surrounding teeth whitening and explain the science of how we achieve those radiant results while keeping your smile strong and healthy.",
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
    },
    {
        id: "cost-of-missing-teeth",
        title: "The True Cost of Missing Teeth",
        excerpt: "When a tooth is lost, it's easy to think of it as just a cosmetic issue. But there's a hidden cost that goes beyond the gap in your smile.",
        image: "/image/blog5.jpg",
        date: "February 25, 2026",
        readTime: "9 min read",
        category: "Restorative",
        author: "Dr. Relaxation",
        detailedData: {
            intro: "When a tooth is lost, it's easy to think of it as just a cosmetic issue. But there's a hidden cost that goes beyond the gap in your smile. A missing tooth initiates a cascade of biological changes that can affect your facial structure, your nutrition, and the health of your remaining teeth. Many patients don't realize that your teeth and jawbone have a symbiotic relationship—they need each other to stay healthy. When that relationship is severed, the consequences begin almost immediately, often starting with the invisible process of bone resorption. Over time, what started as a small gap can lead to shifting teeth, bite problems, and a prematurely aged appearance. At Dento, we emphasize the importance of early replacement to halt these changes before they become more complex and costly to treat. Understanding the full impact of tooth loss is the first step in choosing a solution that restores not just your smile, but your long-term health and confidence. In this article, we'll explore why tooth replacement is about far more than just aesthetics and how modern solutions like implants can protect your future well-being.",
            quickTips: [
                "Implants are the only solution that prevents bone loss.",
                "Bridges can prevent surrounding teeth from shifting.",
                "Replace missing teeth early to save on future costs.",
                "Consult with our team to find your best fit."
            ],
            mainHighlights: [
                { title: "Bone Preservation", description: "Implants stimulate the jawbone just like natural roots.", iconName: "ShieldCheck" },
                { title: "Adjacent Support", description: "Filling gaps prevents other teeth from drifting out of place.", iconName: "Heart" },
                { title: "Nutritional Vitality", description: "A full set of teeth allows for a diet rich in essential nutrients.", iconName: "Sparkles" }
            ],
            detailedSteps: [
                { title: "Bone Loss", point: "The jawbone depends on tooth roots for stimulation. Without them, it begins to shrink over time, leading to a sunken facial appearance." },
                { title: "Shifting Teeth", point: "The surrounding teeth may drift into the open space, causing bite problems and misalignment." },
                { title: "Chewing Difficulties", point: "Missing teeth make it harder to chew certain foods, leading to nutritional issues." }
            ],
            conclusion: "Don't let a missing tooth compromise your health and confidence. Modern restorative dentistry offers solutions that look, feel, and function just like your natural teeth."
        }
    }
];
