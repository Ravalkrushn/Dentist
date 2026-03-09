export const servicesData = [
    {
        id: "teeth-cleaning",
        title: "Teeth Cleaning",
        heroImage: "/image/ABOUT2.png", // Or appropriate image
        description: "Professional teeth cleaning is a preventative dental procedure designed to remove plaque and tartar buildup, leaving your teeth sparkling and healthy.",
        symptoms: [
            { title: "Bleeding Gums", desc: "Your gums bleed when you brush or floss." },
            { title: "Bad Breath", desc: "Persistent bad breath despite brushing." },
            { title: "Visible Tartar", desc: "Yellow or brown deposits along the gumline." }
        ],
        steps: [
            { stepTitle: "Exam", stepDesc: "A physical exam of your mouth." },
            { stepTitle: "Scaling", stepDesc: "Removal of plaque and tartar." },
            { stepTitle: "Polishing", stepDesc: "A gritty paste is used for deep cleaning." },
            { stepTitle: "Flossing", stepDesc: "Expert flossing to remove leftover debris." }
        ],
        benefits: ["Prevents Cavities", "Stops Tooth Loss", "Brightens Your Smile", "Freshens Breath"],
        costInfo: { info: "Typical cost ranges from $100 to $200 before insurance.", isCoveredByInsurance: true },
        faqs: [
            { question: "Does it hurt?", answer: "No, teeth cleaning is virtually painless." },
            { question: "How often should I get it?", answer: "We recommend a professional cleaning every 6 months." }
        ]
    },
    {
        id: "root-canal-treatment",
        title: "Root Canal Treatment",
        heroImage: "/image/ABOUT2.png", // Or appropriate image
        description: "A root canal is a treatment used to repair and save a tooth that is badly decayed or becomes infected.",
        symptoms: [
            { title: "Severe Pain", desc: "Intense toothache when chewing or applying pressure." },
            { title: "Sensitivity", desc: "Prolonged sensitivity to hot or cold temperatures." },
            { title: "Swelling", desc: "Swollen or tender gums near the infected tooth." }
        ],
        steps: [
            { stepTitle: "X-Ray", stepDesc: "To see the shape of the root canals and determine if there are signs of infection." },
            { stepTitle: "Anesthesia", stepDesc: "Local anesthesia is applied to numb the tooth." },
            { stepTitle: "Pulpectomy", stepDesc: "An opening is made and the diseased pulp is removed." },
            { stepTitle: "Filling", stepDesc: "The root canals are filled with a biocompatible material." }
        ],
        benefits: ["Stops the Spread of Infection", "Relieves Pain", "Saves the Natural Tooth"],
        costInfo: { info: "Costs vary depending on the tooth structure, ranging anywhere from $800 to $1,500.", isCoveredByInsurance: true },
        faqs: [
            { question: "Is a root canal painful?", answer: "With modern anesthesia, a root canal feels similar to a routine filling." },
            { question: "How many visits does it take?", answer: "Most root canals can be completed in one to two appointments." }
        ]
    },
    {
        id: "dental-implants",
        title: "Dental Implants",
        heroImage: "/image/ABOUT2.png",
        description: "Dental implants are artificial tooth roots placed into the jaw to hold a replacement tooth or bridge.",
        symptoms: [
            { title: "Missing Teeth", desc: "You have one or more missing teeth." },
            { title: "Loose Dentures", desc: "You are tired of dentures that slip or click." },
            { title: "Bone Loss", desc: "Missing teeth have begun to cause jawbone deterioration." }
        ],
        steps: [
            { stepTitle: "Assessment", stepDesc: "Comprehensive examination and 3D imaging." },
            { stepTitle: "Implant Placement", stepDesc: "The titanium post is surgically placed in the jawbone." },
            { stepTitle: "Healing", stepDesc: "Osseointegration takes a few months to firmly anchor the implant." },
            { stepTitle: "Crown Placement", stepDesc: "A custom-made crown is attached to the implant." }
        ],
        benefits: ["Looks and Feels Complete", "Prevents Bone Loss", "Lasts a Lifetime with Proper Care"],
        costInfo: { info: "A single implant can cost between $3,000 and $4,500 total.", isCoveredByInsurance: false },
        faqs: [
            { question: "Am I a candidate for implants?", answer: "Most adults with healthy gums and adequate bone are good candidates." },
            { question: "How long do they last?", answer: "With excellent oral hygiene, implants can last a lifetime." }
        ]
    },
    {
        id: "orthodontics",
        title: "Orthodontics (Braces)",
        heroImage: "/image/ABOUT2.png",
        description: "Orthodontic treatments align and straighten teeth to improve dental health and cosmetic appearance.",
        symptoms: [
            { title: "Crooked Teeth", desc: "Visibly misaligned or crowded teeth." },
            { title: "Bite Issues", desc: "Overbite, underbite, or crossbite problems." },
            { title: "Jaw Pain", desc: "Discomfort caused by poor jaw alignment." }
        ],
        steps: [
            { stepTitle: "Consultation", stepDesc: "Evaluating your bite and discussing options like braces or clear aligners." },
            { stepTitle: "Placement", stepDesc: "Attaching brackets or fitting your first aligner trays." },
            { stepTitle: "Adjustments", stepDesc: "Periodic visits to tighten wires or receive new aligners." },
            { stepTitle: "Retention", stepDesc: "Wearing a retainer to maintain your new smile." }
        ],
        benefits: ["Straight, Beautiful Smile", "Reduces Risk of Decay", "Improves Bite and Jaw Function"],
        costInfo: { info: "Costs range from $3,000 to $7,000 depending on the complexity and appliance type.", isCoveredByInsurance: true },
        faqs: [
            { question: "How long does treatment take?", answer: "Usually between 12 and 24 months." },
            { question: "Are clear aligners faster than braces?", answer: "In some mild cases, they can be faster, but it depends on your specific needs." }
        ]
    },
    {
        id: "smile-makeover",
        title: "Smile Makeover",
        heroImage: "/image/ABOUT2.png",
        description: "A comprehensive cosmetic and restorative approach to redesigning and improving your smile.",
        symptoms: [
            { title: "Stained Teeth", desc: "Severe discoloration that doesn't respond to whitening." },
            { title: "Chipped/Broken Teeth", desc: "Teeth that are damaged or worn down." },
            { title: "Gaps", desc: "Unwanted spaces between your front teeth." }
        ],
        steps: [
            { stepTitle: "Design", stepDesc: "Digital smile design and consultation." },
            { stepTitle: "Preparation", stepDesc: "Preparing teeth for veneers, crowns, or other restorations." },
            { stepTitle: "Trial Smile", stepDesc: "Placing temporary restorations to test the look and feel." },
            { stepTitle: "Final Delivery", stepDesc: "Bonding the final porcelain restorations." }
        ],
        benefits: ["Dramatic Cosmetic Improvement", "Boosts Self-Confidence", "Customized to Your Face"],
        costInfo: { info: "Highly variable depending on the number of services combined. Can range from $1,500 to over $10,000.", isCoveredByInsurance: false },
        faqs: [
            { question: "Can I preview my new smile?", answer: "Yes, we use digital imaging and wax-ups to show you the expected result before touching your teeth." },
            { question: "Is a smile makeover permanent?", answer: "Porcelain restorations are long-lasting, typically 10-15 years or more with good care." }
        ]
    },
    {
        id: "wisdom-tooth-extraction",
        title: "Wisdom Tooth Extraction",
        heroImage: "/image/ABOUT2.png",
        description: "A surgical procedure to remove one or more wisdom teeth — the four permanent adult teeth located at the back corners of your mouth.",
        symptoms: [
            { title: "Impaction", desc: "Teeth trapped within the jawbone or gums." },
            { title: "Pain/Swelling", desc: "Discomfort or inflammation behind your molars." },
            { title: "Crowding", desc: "Wisdom teeth pushing and misaligning other teeth." }
        ],
        steps: [
            { stepTitle: "Imaging", stepDesc: "X-rays to determine the exact position of the teeth." },
            { stepTitle: "Sedation", stepDesc: "Administering local anesthesia or IV sedation for comfort." },
            { stepTitle: "Extraction", stepDesc: "Removal of the tooth and any necessary bone clearing." },
            { stepTitle: "Recovery", stepDesc: "Suturing the site and providing post-operative care instructions." }
        ],
        benefits: ["Prevents Crowding", "Eliminates Pain", "Reduces Infection Risk"],
        costInfo: { info: "Usually $200-$600 per tooth depending on impaction level.", isCoveredByInsurance: true },
        faqs: [
            { question: "Will I be awake during the procedure?", answer: "We offer conscious sedation so you will be relaxed and unaware of the surgery." },
            { question: "How long is recovery?", answer: "Most patients return to normal activities in 3-4 days." }
        ]
    },
    {
        id: "pediatric-dentistry",
        title: "Pediatric Dentistry",
        heroImage: "/image/ABOUT2.png",
        description: "Specialized dental care for infants, children, and adolescents, focusing on prevention and early intervention.",
        symptoms: [
            { title: "First Tooth", desc: "Time for your child's first dental visit." },
            { title: "Thumb Sucking", desc: "Prolonged habits that may affect jaw development." },
            { title: "Toothaches", desc: "Complaints of pain when eating sweets." }
        ],
        steps: [
            { stepTitle: "Welcome", stepDesc: "A fun, friendly introduction to the dental chair." },
            { stepTitle: "Gentle Exam", stepDesc: "Checking for cavities and developmental milestones." },
            { stepTitle: "Cleaning", stepDesc: "A quick, gentle polishing of the teeth." },
            { stepTitle: "Education", stepDesc: "Teaching proper brushing techniques to parent and child." }
        ],
        benefits: ["Establishes Healthy Habits", "Prevents Early Childhood Caries", "Creates a Positive Dental Outline"],
        costInfo: { info: "Preventative pediatric visits are typically fully covered by most dental insurances.", isCoveredByInsurance: true },
        faqs: [
            { question: "When should I bring my child in?", answer: "By their first birthday or when their first tooth appears." },
            { question: "Are dental x-rays safe for kids?", answer: "Yes, we use ultra-low dose digital x-rays only when strictly necessary." }
        ]
    },
    {
        id: "teeth-whitening",
        title: "Teeth Whitening",
        heroImage: "/image/ABOUT2.png",
        description: "Professional cosmetic treatment to lighten the color of your teeth and remove tough stains and discoloration.",
        symptoms: [
            { title: "Yellowing", desc: "General dullness or yellowing from aging." },
            { title: "Dietary Stains", desc: "Discoloration from coffee, tea, or wine." },
            { title: "Special Occasion", desc: "Wanting a bright smile for a wedding or event." }
        ],
        steps: [
            { stepTitle: "Shade Check", stepDesc: "Determining your current tooth shade." },
            { stepTitle: "Gum Protection", stepDesc: "Applying a protective barrier over your gums." },
            { stepTitle: "Gel Application", stepDesc: "Painting the professional-strength whitening gel onto teeth." },
            { stepTitle: "Activation", stepDesc: "Using a specialized light to accelerate the bleaching process." }
        ],
        benefits: ["Instantly Brighter Smile", "Non-Invasive", "Safe Under Doctor Supervision"],
        costInfo: { info: "In-office treatments usually cost around $400-$600.", isCoveredByInsurance: false },
        faqs: [
            { question: "Will it make my teeth sensitive?", answer: "Mild sensitivity is common but temporary. We use desensitizing protocols to minimize it." },
            { question: "How long do results last?", answer: "Usually 1-3 years depending on dietary habits." }
        ]
    }
];
