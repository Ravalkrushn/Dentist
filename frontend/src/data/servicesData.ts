export const servicesData = [
    {
        id: "teeth-cleaning",
        title: "Teeth Cleaning",
        heroImage: "/image/service1.png",
        description: "Professional teeth cleaning is a foundational preventative dental procedure designed to thoroughly remove plaque and stubborn tartar buildup that regular brushing cannot reach. This essential treatment leaves your teeth feeling exceptionally smooth and sparkling while protecting your gums from disease and keeping your breath fresh and healthy.",
        symptoms: [
            { title: "Bleeding Gums", desc: "Your gums bleed when you brush or floss.", iconName: "BleedingGums" },
            { title: "Bad Breath", desc: "Persistent bad breath despite brushing.", iconName: "BadBreath" },
            { title: "Visible Tartar", desc: "Yellow or brown deposits along the gumline.", iconName: "VisibleTartar" }
        ],
        steps: [
            { stepTitle: "Comprehensive Exam", stepDesc: "We perform a thorough examination of your teeth and gums to detect cavities, gum disease, and other oral health issues. This initial assessment ensures your treatment plan is safe and effective.", stepImage: "/image/Phase_1_1.jpg" },
            { stepTitle: "Plaque & Tartar Scaling", stepDesc: "Using specialized dental tools, we carefully remove plaque and hardened tartar from along the gum line and between teeth—areas that regular brushing cannot reach.", stepImage: "/image/Phase_1_2.jpg" },
            { stepTitle: "Professional Polishing", stepDesc: "After scaling, we polish your teeth using a high-powered electric brush and professional polishing paste to remove surface stains and create a smooth, clean finish.", stepImage: "/image/Phase_1_3.jpg" },
            { stepTitle: "Expert Flossing", stepDesc: "Our dental hygienist performs detailed flossing to clean between teeth, remove any remaining debris, and check for potential problem areas.", stepImage: "/image/Phase_1_4.jpg" }
        ],
        benefits: [
            { title: "Prevents Cavities", iconName: "Cavity" },
            { title: "Stops Tooth Loss", iconName: "Tooth" },
            { title: "Brightens Your Smile", iconName: "Smile" },
            { title: "Freshens Breath", iconName: "Breath" }
        ],
        costInfo: { info: "Typical cost ranges from $100 to $200 before insurance.", isCoveredByInsurance: true },
        faqs: [
            { question: "Does professional cleaning hurt?", answer: "No, teeth cleaning is virtually painless. You may feel some mild pressure or vibrations, but most patients find it completely comfortable." },
            { question: "How often should I get it?", answer: "We generally recommend a professional cleaning every 6 months to maintain optimal oral health and catch potential issues early." },
            { question: "Can I eat right after my cleaning?", answer: "Yes, you can eat immediately after a standard cleaning. However, if you received a fluoride treatment, we recommend waiting 30 minutes before eating or drinking." },
            { question: "Is it safe if I have sensitive teeth?", answer: "Absolutely. We use specialized techniques and can apply desensitizing agents to ensure your cleaning is gentle and pain-free even for sensitive teeth." }
        ],
        relatedBlogIds: ["oral-hygiene-tips", "teeth-whitening-safety"]
    },
    {
        id: "root-canal-treatment",
        title: "Root Canal Treatment",
        heroImage: "/image/service2.png",
        description: "A root canal is a sophisticated restorative treatment used by specialists to repair and save a tooth that has become badly decayed or severely infected internally. By removing the diseased pulp and sealing the inner chambers, this procedure eliminates intense pain and prevents the need for an extraction, allowing you to keep your natural smile for a lifetime.",
        symptoms: [
            { title: "Severe Pain", desc: "Intense toothache when chewing or applying pressure.", iconName: "SeverePain" },
            { title: "Sensitivity", desc: "Prolonged sensitivity to hot or cold temperatures.", iconName: "Sensitivity" },
            { title: "Swelling", desc: "Swollen or tender gums near the infected tooth.", iconName: "Activity" }
        ],
        steps: [
            { stepTitle: "Diagnostic X-Ray", stepDesc: "We take detailed digital X-rays to see the exact shape of your root canals and determine the extent of the infection in the surrounding bone.", stepImage: "/image/service2.png" },
            { stepTitle: "Targeted Anesthesia", stepDesc: "To ensure a completely pain-free experience, a local anesthesia is applied to numb the tooth and the surrounding gum area before the procedure begins.", stepImage: "/image/blog2.jpg" },
            { stepTitle: "Gentle Pulpectomy", stepDesc: "A small opening is created in the tooth crown to carefully remove the diseased or dead pulp tissue from the inner chambers and disinfect the area thoroughly.", stepImage: "/image/dentist1.png" },
            { stepTitle: "Sealing & Filling", stepDesc: "The cleaned root canals are filled with a biocompatible material called gutta-percha and sealed to prevent any future bacterial entry or reinfection.", stepImage: "/image/ABOUT2.png" }
        ],
        benefits: [
            { title: "Stops the Spread of Infection", iconName: "ShieldCheck" },
            { title: "Relieves Pain", iconName: "Heart" },
            { title: "Saves the Natural Tooth", iconName: "Smile" }
        ],
        costInfo: { info: "Costs vary depending on the tooth structure, ranging anywhere from $800 to $1,500.", isCoveredByInsurance: true },
        faqs: [
            { question: "Is a root canal painful?", answer: "With modern anesthesia, a root canal feels similar to a routine filling. The procedure actually relieves the pain caused by the tooth infection." },
            { question: "What happens if I don't get a root canal?", answer: "The infection will spread, potentially leading to an abscess, bone loss, and eventually the loss of the tooth itself. It can also cause systemic health issues." },
            { question: "How long does the tooth last after treatment?", answer: "With a proper crown and good oral hygiene, a root-canal-treated tooth can last a lifetime, just like your natural teeth." },
            { question: "Will I need a crown after a root canal?", answer: "Most often, yes. Because the tooth becomes more brittle after the pulp is removed, a crown is necessary to protect it from fracturing." }
        ],
        relatedBlogIds: ["root-canal-signs", "cost-of-missing-teeth"]
    },
    {
        id: "dental-implants",
        title: "Dental Implants",
        heroImage: "/image/service3.png",
        description: "Dental implants represent the modern gold standard for tooth replacement, utilizing medical-grade titanium posts that act as artificial roots placed directly into the jawbone. These permanent foundations securely hold lifelike replacement teeth or bridges that look, feel, and function exactly like your natural teeth, restoring both your structural health and your confidence.",
        symptoms: [
            { title: "Missing Teeth", desc: "You have one or more missing teeth.", iconName: "XCircle" },
            { title: "Loose Dentures", desc: "You are tired of dentures that slip or click.", iconName: "RotateCcw" },
            { title: "Bone Loss", desc: "Missing teeth have begun to cause jawbone deterioration.", iconName: "ShieldAlert" }
        ],
        steps: [
            { stepTitle: "Clinical Assessment", stepDesc: "We conduct a comprehensive oral examination and use advanced 3D imaging to evaluate your jawbone density and plan the perfect implant placement.", stepImage: "/image/service3.png" },
            { stepTitle: "Surgical Placement", stepDesc: "A medical-grade titanium post is surgically placed into the jawbone, acting as a strong, permanent root for your new artificial tooth.", stepImage: "/image/DentalImplants_before.jpg" },
            { stepTitle: "Osseointegration Period", stepDesc: "Over several months, the implant naturally fuses with your jawbone in a process called osseointegration, providing a solid foundation for the final crown.", stepImage: "/image/blog3.jpg" },
            { stepTitle: "Custom Crown Fitting", stepDesc: "Once healing is complete, we attach a custom-designed porcelain crown that matches the color and shape of your natural teeth perfectly.", stepImage: "/image/DentalImplants_after.jpg" }
        ],
        benefits: [
            { title: "Looks and Feels Complete", iconName: "Smile" },
            { title: "Prevents Bone Loss", iconName: "Shield" },
            { title: "Lasts a Lifetime with Proper Care", iconName: "Clock" }
        ],
        costInfo: { info: "A single implant can cost between $3,000 and $4,500 total.", isCoveredByInsurance: false },
        faqs: [
            { question: "What is the success rate of dental implants?", answer: "Dental implants have an incredibly high success rate, typically over 95-98% when performed on healthy patients by experienced professionals." },
            { question: "Does it feel like a real tooth?", answer: "Yes. Because they are anchored into your bone, dental implants function, feel, and look exactly like your natural teeth." },
            { question: "How long is the entire implant process?", answer: "The process can take anywhere from 3 to 9 months, as time is needed for the bone to heal and fuse with the implant before the final crown is placed." },
            { question: "Am I too old for dental implants?", answer: "There is no upper age limit. As long as you have good oral health and sufficient bone density, implants are a great solution for seniors." }
        ],
        relatedBlogIds: ["cost-of-missing-teeth", "best-age-for-braces"]
    },
    {
        id: "orthodontics",
        title: "Orthodontics (Braces)",
        heroImage: "/image/service4.png",
        description: "Orthodontic treatments are advanced procedures designed to align and straighten teeth while correcting complex bite issues to improve both your overall dental health and your cosmetic appearance. Whether using traditional braces or modern clear aligner technology, our goal is to create a perfectly balanced and radiant smile that is easier to maintain and uniquely tailored to your facial features.",
        symptoms: [
            { title: "Crooked Teeth", desc: "Visibly misaligned or crowded teeth.", iconName: "Grid" },
            { title: "Bite Issues", desc: "Overbite, underbite, or crossbite problems.", iconName: "Layers" },
            { title: "Jaw Pain", desc: "Discomfort caused by poor jaw alignment.", iconName: "Frown" }
        ],
        steps: [
            { stepTitle: "In-Depth Consultation", stepDesc: "We analyze your bite, take digital impressions, and discuss the best options for your lifestyle, whether it's traditional braces or clear aligners.", stepImage: "/image/service4.png" },
            { stepTitle: "Precision Placement", stepDesc: "We carefully bond orthodontic brackets to each tooth or provide you with your first set of custom-fitted clear aligner trays to begin the movement.", stepImage: "/image/Invisalign&TeethWhitening_before.png" },
            { stepTitle: "Progress Adjustments", stepDesc: "During regular check-updates, we adjust your wires or provide new aligner sets to continuously guide your teeth into their ideal, healthy positions.", stepImage: "/image/blog4.jpg" },
            { stepTitle: "Retention Phase", stepDesc: "To ensure your new smile stays perfect, we provide custom retainers that prevent your teeth from shifting back to their original positions.", stepImage: "/image/Invisalign&TeethWhitening_after.jpg" }
        ],
        benefits: [
            { title: "Straight, Beautiful Smile", iconName: "Sparkles" },
            { title: "Reduces Risk of Decay", iconName: "Shield" },
            { title: "Improves Bite and Jaw Function", iconName: "Activity" }
        ],
        costInfo: { info: "Costs range from $3,000 to $7,000 depending on the complexity and appliance type.", isCoveredByInsurance: true },
        faqs: [
            { question: "Can adults get braces or aligners?", answer: "Absolutely! More than 25% of all orthodontic patients are adults. It's never too late to achieve the smile you've always wanted." },
            { question: "Will braces affect my speech?", answer: "There might be a very brief adjustment period of a few days, but most patients speak perfectly normally with both braces and clear aligners." },
            { question: "Can I still play sports with braces?", answer: "Yes, you can. We highly recommend wearing a professional mouthguard to protect your appliances and your teeth during contact sports." },
            { question: "How often are the adjustment visits?", answer: "Visits are typically scheduled every 4 to 8 weeks to monitor progress and make necessary adjustments to your treatment plan." }
        ],
        relatedBlogIds: ["best-age-for-braces", "teeth-whitening-safety"]
    },
    {
        id: "smile-makeover",
        title: "Smile Makeover",
        heroImage: "/image/service5.png",
        description: "A smile makeover is a comprehensive and artistic approach to redesigning your smile, combining various cosmetic and restorative techniques such as porcelain veneers, whitening, and bonding. This personalized treatment plan addresses multiple aesthetic concerns simultaneously to create a harmonious, radiant look that dramatically enhances your natural beauty and boosts your self-confidence.",
        symptoms: [
            { title: "Stained Teeth", desc: "Severe discoloration that doesn't respond to whitening.", iconName: "Droplet" },
            { title: "Chipped/Broken Teeth", desc: "Teeth that are damaged or worn down.", iconName: "Hammer" },
            { title: "Gaps", desc: "Unwanted spaces between your front teeth.", iconName: "StretchHorizontal" }
        ],
        steps: [
            { stepTitle: "Smile Aesthetic Design", stepDesc: "Using digital smile design technology, we plan your new look, considering your facial features, lip line, and personal aesthetic goals.", stepImage: "/image/service5.png" },
            { stepTitle: "Preparation Work", stepDesc: "We prepare your teeth by removing a tiny amount of enamel if needed for veneers, ensuring a natural and comfortable fit for all restorations.", stepImage: "/image/VeneersTransformation_before.jpg" },
            { stepTitle: "Trial Smile Phase", stepDesc: "You wear high-quality temporary restorations to 'test drive' your new smile, allowing us to make final adjustments to the look and feel.", stepImage: "/image/blog5.jpg" },
            { stepTitle: "Final Artistic Delivery", stepDesc: "Our master technicians craft your final porcelain restorations, which we then bond securely to create your breathtaking, permanent new smile.", stepImage: "/image/VeneersTransformation_after.jpg" }
        ],
        benefits: [
            { title: "Dramatic Cosmetic Improvement", iconName: "Sparkles" },
            { title: "Boosts Self-Confidence", iconName: "Smile" },
            { title: "Customized to Your Face", iconName: "User" }
        ],
        costInfo: { info: "Highly variable depending on the number of services combined. Can range from $1,500 to over $10,000.", isCoveredByInsurance: false },
        faqs: [
            { question: "Is a smile makeover painful?", answer: "We prioritize your comfort. Most procedures involved are minimally invasive and performed under local anesthesia, ensuring a pain-free experience." },
            { question: "How long does the makeover last?", answer: "With proper oral care and regular check-ups, porcelain veneers and crowns can last 10 to 15 years or even longer." },
            { question: "How many appointments will I need?", answer: "A smile makeover is usually completed in 2 to 3 main visits after the initial design and consultation phase." },
            { question: "Can I finance my smile makeover?", answer: "Yes, we offer flexible payment plans and financing options through partners like CareCredit to make your dream smile affordable." }
        ],
        relatedBlogIds: ["teeth-whitening-safety", "best-age-for-braces"]
    },
    {
        id: "wisdom-tooth-extraction",
        title: "Wisdom Tooth Extraction",
        heroImage: "/image/service6.png",
        description: "Wisdom tooth extraction is a common surgical procedure performed to carefully remove one or more of your third molars — the final permanent teeth to emerge at the back corners of the mouth. Often required when these teeth become impacted or crowded, this procedure prevents future alignment issues, eliminates persistent pain, and protects your surrounding oral health.",
        symptoms: [
            { title: "Impaction", desc: "Teeth trapped within the jawbone or gums.", iconName: "LocateFixed" },
            { title: "Pain/Swelling", desc: "Discomfort or inflammation behind your molars.", iconName: "Flame" },
            { title: "Crowding", desc: "Wisdom teeth pushing and misaligning other teeth.", iconName: "ArrowLeftRight" }
        ],
        steps: [
            { stepTitle: "Positional Imaging", stepDesc: "Advanced X-rays or 3D scans are used to determine the exact position of your wisdom teeth and their proximity to nerves and other teeth.", stepImage: "/image/service6.png" },
            { stepTitle: "Comfort Sedation", stepDesc: "We provide local anesthesia combined with conscious sedation or general anesthesia to ensure you remain completely relaxed and comfortable throughout.", stepImage: "/image/dentist2.png" },
            { stepTitle: "Surgical Extraction", stepDesc: "The surgeon carefully removes the tooth, clearing any small amounts of bone if necessary, while ensuring the surrounding tissue is preserved.", stepImage: "/image/dentist3.png" },
            { stepTitle: "Guided Recovery", stepDesc: "The site is gently sutured if needed, and we provide you with a comprehensive post-operative plan to ensure fast and comfortable healing at home.", stepImage: "/image/p2.png" }
        ],
        benefits: [
            { title: "Prevents Crowding", iconName: "Grid" },
            { title: "Eliminates Pain", iconName: "Zap" },
            { title: "Reduces Infection Risk", iconName: "Shield" }
        ],
        costInfo: { info: "Usually $200-$600 per tooth depending on impaction level.", isCoveredByInsurance: true },
        faqs: [
            { question: "Do all wisdom teeth need to be pulled?", answer: "Not always. If they are healthy, fully erupted, and properly aligned, they may stay. However, we often remove them to prevent future crowding or infection." },
            { question: "What is the best age for extraction?", answer: "Extraction is typically easier and recovery faster if done in the late teens or early twenties, before the roots are fully developed." },
            { question: "What is 'dry socket' and how do I avoid it?", answer: "Dry socket occurs when the blood clot is lost early. You can avoid it by not using straws, not smoking, and following all post-care instructions carefully." },
            { question: "When can I return to work or school?", answer: "Most patients can return to their normal daily activities within 2 to 4 days after the surgery." }
        ],
        relatedBlogIds: ["oral-hygiene-tips", "root-canal-signs"]
    },
    {
        id: "pediatric-dentistry",
        title: "Pediatric Dentistry",
        heroImage: "/image/service7.png",
        description: "Pediatric dentistry provides specialized, gentle dental care for infants, children, and adolescents, with a core focus on preventative education and early intervention during critical growth stages. Our child-friendly approach is designed to create positive associations with dental visits while establishing the healthy habits necessary for your child to maintain a vibrant smile as they grow.",
        symptoms: [
            { title: "First Tooth", desc: "Time for your child's first dental visit.", iconName: "Baby" },
            { title: "Thumb Sucking", desc: "Prolonged habits that may affect jaw development.", iconName: "Hand" },
            { title: "Toothaches", desc: "Complaints of pain when eating sweets.", iconName: "Candy" }
        ],
        steps: [
            { stepTitle: "Friendly Welcome", stepDesc: "We create a fun, welcoming environment to introduce your child to the dental clinic, turning the visit into a positive and engaging experience.", stepImage: "/image/service7.png" },
            { stepTitle: "Gentle Oral Exam", stepDesc: "A careful check of your child's teeth and gums to monitor healthy development and detect any early signs of cavities or misalignment.", stepImage: "/image/p3.png" },
            { stepTitle: "Painless Cleaning", stepDesc: "Our specialized pediatric hygienists perform a quick, gentle cleaning and polishing to keep your child's developing teeth strong and healthy.", stepImage: "/image/dentist4.png" },
            { stepTitle: "Family Education", stepDesc: "We teach both parent and child the best techniques for brushing and flossing at home, setting the foundation for a lifetime of healthy smiles.", stepImage: "/image/p4.png" }
        ],
        benefits: [
            { title: "Establishes Healthy Habits", iconName: "CheckCircle2" },
            { title: "Prevents Early Childhood Caries", iconName: "Shield" },
            { title: "Creates a Positive Dental Feel", iconName: "Smile" }
        ],
        costInfo: { info: "Preventative pediatric visits are typically fully covered by most dental insurances.", isCoveredByInsurance: true },
        faqs: [
            { question: "How do you handle nervous children?", answer: "We use 'Tell-Show-Do' techniques, kid-friendly language, and a gentle approach to build trust and make sure every child feels safe and happy." },
            { question: "When should my child start using toothpaste?", answer: "You can start using a tiny 'smear' of fluoride toothpaste as soon as the first tooth appears, increasing to a pea-sized amount at age 3." },
            { question: "Are baby teeth really that important?", answer: "Yes! They help children chew and speak properly and serve as essential placeholders for permanent teeth. Neglected baby teeth can lead to serious infections." },
            { question: "What should I do if my child knockouts a tooth?", answer: "Keep the tooth moist (in milk if possible) and contact us immediately. Quick action can often save the tooth!" }
        ],
        relatedBlogIds: ["oral-hygiene-tips", "best-age-for-braces"]
    },
    {
        id: "teeth-whitening",
        title: "Teeth Whitening",
        heroImage: "/image/service8.png",
        description: "Teeth whitening is a highly effective professional cosmetic treatment designed to safely lighten the color of your teeth and remove deep-seated stains and years of discoloration. Utilizing advanced, medical-grade formulas that outperform store-bought kits, this non-invasive procedure delivers an instantly brighter, more youthful-looking smile in just a single visit under our expert supervision.",
        symptoms: [
            { title: "Yellowing", desc: "General dullness or yellowing from aging.", iconName: "Sun" },
            { title: "Dietary Stains", desc: "Discoloration from coffee, tea, or wine.", iconName: "Coffee" },
            { title: "Special Occasion", desc: "Wanting a bright smile for a wedding or event.", iconName: "Heart" }
        ],
        steps: [
            { stepTitle: "Initial Shade Check", stepDesc: "We measure your current tooth color against a shade guide and discuss your target brightness to ensure a natural-looking, radiant result.", stepImage: "/image/service8.png" },
            { stepTitle: "Gum & Lip Protection", stepDesc: "A protective barrier is carefully applied to your gums and lips to prevent any irritation from the professional-grade whitening formula.", stepImage: "/image/Invisalign&TeethWhitening_after.jpg" },
            { stepTitle: "Gel Application", stepDesc: "We apply a high-potency professional whitening gel to each tooth, which targets deep-set stains that regular stores-bought products cannot reach.", stepImage: "/image/service1.png" },
            { stepTitle: "LED Activation", stepDesc: "A specialized LED light is used to activate the whitening agent, accelerating the process to deliver a visibly brighter smile in just one visit.", stepImage: "/image/team_member.png" }
        ],
        benefits: [
            { title: "Instantly Brighter Smile", iconName: "Sparkles" },
            { title: "Non-Invasive", iconName: "Zap" },
            { title: "Safe Under Doctor Supervision", iconName: "ShieldCheck" },
            { title: "Long-Lasting Results", iconName: "Clock" }
        ],
        costInfo: { info: "In-office treatments usually cost around $400-$600.", isCoveredByInsurance: false },
        faqs: [
            { question: "How white will my teeth get?", answer: "Results vary, but most patients see a brightness increase of 5 to 10 shades in just one session. We aim for a radiant but natural look." },
            { question: "Will it make my teeth permanently sensitive?", answer: "No. Any sensitivity is temporary and usually fades within 24-48 hours. We use desensitizing gels to minimize any discomfort." },
            { question: "Can whitening fix stains on crowns or veneers?", answer: "Whitening treatments only affect natural tooth enamel. They will not change the color of dental crowns, veneers, or fillings." },
            { question: "How can I maintain my results?", answer: "Avoid staining foods and drinks like coffee or red wine for the first 48 hours, and maintain regular hygiene visits for long-lasting brightness." }
        ],
        relatedBlogIds: ["teeth-whitening-safety", "cost-of-missing-teeth"]
    }
];
