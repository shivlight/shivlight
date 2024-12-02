document.addEventListener("DOMContentLoaded", function () {
    // Initialize i18next
    i18next.init({
        lng: "en", // Default language
        resources: {
            en: {
                translation: {
                    brand_name: "SHIV LIGHT",
                    home: "Home",
                    services: "Services",
                    features: "Features",
                    about: "About",
                    contact: "Contact",
                    language: "Language",
                    welcome: "Welcome to SHIV LIGHT",
                    home_description: "We specialize in providing beautiful and elegant lighting solutions for your home and events.",
                    home_desc: "We Shiv Light are a team of experienced professionals passionate about lighting design and decoration.",
                    service_intro: "Explore the wide range of lighting solutions we offer to make your spaces shine bright.",
                    service: "Our Services",
                    service_1_title: "Home Lighting",
                    service_1_desc: "Enhance your home's ambiance with our customized lighting solutions.",
                    service_2_title: "Event Lighting",
                    service_2_desc: "Make your events memorable with our elegant and creative lighting setups.",
                    service_3_title: "Commercial Lighting",
                    service_3_desc: "Brighten your business space with our energy-efficient lighting systems.",
                    features_intro: "Discover what makes us the leading provider of innovative lighting solutions.",
                    feature_1_title: "Innovative Design",
                    feature_1_desc: "Creative and modern designs to match every style and theme.",
                    feature_2_title: "Custom Solutions",
                    feature_2_desc: "Tailor-made lighting solutions to meet your specific needs.",
                    feature_3_title: "Eco-Friendly",
                    feature_3_desc: "Energy-efficient and sustainable lighting options for a greener planet.",
                    about_us_title: "About Us",
                    about_us_intro: "At Shiv Light, we believe that lighting is more than just illumination. It’s an art that brings spaces to life.",
                    about_us_desc: "With over a decade of experience, we have been at the forefront of delivering exceptional lighting solutions for homes, events, and businesses.",
                    about_us_commitment: "Our commitment to quality and innovation sets us apart as industry leaders.",
                    learn_more: "Learn More",
                    contact_us_title: "Connect With Us",
                    contact_us_intro: "Fill the form below, and we’ll be in touch soon.",
                    submit_button: "Submit",
                    quick_links: "Quick Links",
                    follow_us: "Follow Us",
                    address: "Address: 21 Heng Mui Keng Terrace, Icube Building, Singapore 119613",
                    email: "Email"
                }
            },
            hi: {
                translation: {
                    brand_name: "शिव लाइट",
                    home: "होम",
                    services: "सेवाएं",
                    features: "विशेषताएं",
                    about: "के बारे में",
                    contact: "संपर्क करें",
                    language: "भाषा",
                    welcome: "शिव लाइट में आपका स्वागत है",
                    home_description: "हम आपके घर और कार्यक्रमों के लिए सुंदर और सुरुचिपूर्ण प्रकाश समाधान प्रदान करने में विशेषज्ञ हैं।",
                    home_desc: "हम शिव लाइट की टीम अनुभवी पेशेवरों की है जो प्रकाश डिजाइन और सजावट के लिए उत्साही हैं।",
                    service_intro: "हमारे द्वारा दी जाने वाली व्यापक प्रकाश समाधान श्रृंखला का अन्वेषण करें ताकि आपके स्थान चमक उठें।",
                    service: "हमारी सेवाएं",
                    service_1_title: "घर की लाइटिंग",
                    service_1_desc: "हमारे अनुकूलित प्रकाश समाधानों से अपने घर के वातावरण को बेहतर बनाएं।",
                    service_2_title: "इवेंट लाइटिंग",
                    service_2_desc: "हमारी सुरुचिपूर्ण और रचनात्मक प्रकाश व्यवस्थाओं के साथ अपने कार्यक्रमों को यादगार बनाएं।",
                    service_3_title: "वाणिज्यिक लाइटिंग",
                    service_3_desc: "हमारे ऊर्जा-कुशल प्रकाश प्रणालियों से अपने व्यवसायिक स्थान को रोशन करें।",
                    features_intro: "पता लगाएं कि हमें अभिनव प्रकाश समाधान प्रदान करने वाला प्रमुख प्रदाता क्या बनाता है।",
                    feature_1_title: "अभिनव डिज़ाइन",
                    feature_1_desc: "हर शैली और थीम से मेल खाने के लिए रचनात्मक और आधुनिक डिज़ाइन।",
                    feature_2_title: "कस्टम सॉल्यूशन्स",
                    feature_2_desc: "आपकी विशिष्ट आवश्यकताओं को पूरा करने के लिए तैयार प्रकाश समाधान।",
                    feature_3_title: "इको-फ्रेंडली",
                    feature_3_desc: "एक हरित ग्रह के लिए ऊर्जा-कुशल और टिकाऊ प्रकाश विकल्प।",
                    about_us_title: "हमारे बारे में",
                    about_us_intro: "शिव लाइट में, हम मानते हैं कि प्रकाश केवल रोशनी से अधिक है। यह एक कला है जो स्थानों को जीवन देती है।",
                    about_us_desc: "दस से अधिक वर्षों के अनुभव के साथ, हमने घरों, कार्यक्रमों और व्यवसायों के लिए असाधारण प्रकाश समाधानों को प्रदान करने में अग्रणी भूमिका निभाई है।",
                    about_us_commitment: "गुणवत्ता और नवाचार के प्रति हमारी प्रतिबद्धता हमें उद्योग में अग्रणी बनाती है।",
                    learn_more: "और जानें",
                    contact_us_title: "हमसे संपर्क करें",
                    contact_us_intro: "नीचे दिए गए फॉर्म को भरें, और हम जल्द ही आपसे संपर्क करेंगे।",
                    submit_button: "प्रस्तुत करें",
                    quick_links: "त्वरित लिंक",
                    follow_us: "हमें फॉलो करें",
                    address: "पता: 21 हेंग मुई केंग टेरेस, आईक्यूब बिल्डिंग, सिंगापुर 119613",
                    email: "ईमेल"
                }
            },
            gu: {
                translation: {
                    brand_name: "શિવ લાઇટ",
                    home: "હોમ",
                    services: "સેવાઓ",
                    features: "લક્ષણો",
                    about: "વિશે",
                    contact: "સંપર્ક કરો",
                    language: "ભાષા",
                    welcome: "શિવ લાઇટમાં આપનું સ્વાગત છે",
                    home_description: "અમે તમારા ઘરો અને ઘટનાઓ માટે સુંદર અને શોભાદાયક પ્રકાશણના ઉકેલો પ્રદાન કરવામાં નિષ્ણાત છીએ.",
                    home_desc: "અમે શિવ લાઇટ ની ટીમ છીએ, જે પ્રકાશ ડિઝાઇન અને સજાવટ માટે ઉત્સાહી અને અનુભવી વ્યાવસાયિકો છે.",
                    service_intro: "તમારા સ્થાનને ચમકાવવાનું વિશાળ શ્રેણીના પ્રકાશ ઉકેલોનું અન્વેષણ કરો.",
                    service: "અમારી સેવાઓ",
                    service_1_title: "ઘરનું પ્રકાશન",
                    service_1_desc: "અમારા કસ્ટમાઇઝ કરેલા પ્રકાશ ઉકેલો સાથે તમારા ઘરના વાતાવરણને વધારશો.",
                    service_2_title: "ઇવેન્ટ લાઇટિંગ",
                    service_2_desc: "અમારા શોભાદાયક અને સર્જનાત્મક પ્રકાશ વ્યવસ્થાઓ સાથે તમારા ઇવેન્ટને યાદગાર બનાવો.",
                    service_3_title: "કૉમર્શિયલ લાઇટિંગ",
                    service_3_desc: "અમારા ઊર્જા કાર્યક્ષમ પ્રકાશ સિસ્ટમોથી તમારા વ્યાવસાયિક સ્થળને પ્રભાવી બનાવો.",
                    features_intro: "શું અમને પ્રબળ પ્રકાશ ઉકેલો પ્રદાન કરવાનું મુખ્ય પ્રદાન બનાવે છે તે શોધો.",
                    feature_1_title: "અભિનવ ડિઝાઇન",
                    feature_1_desc: "દરેક શૈલી અને થીમ સાથે મેળ ખાતા સર્જનાત્મક અને આધુનિક ડિઝાઇન.",
                    feature_2_title: "કસ્ટમ ઉકેલો",
                    feature_2_desc: "તમારા ખાસ જરૂરિયાતો પૂરી કરવા માટે ટેલર-મેડ પ્રકાશ ઉકેલો.",
                    feature_3_title: "ઇકો-ફ્રેન્ડલી",
                    feature_3_desc: "એક લીલુમણું ગ્રહ માટે ઊર્જા કાર્યક્ષમ અને ટકાઉ પ્રકાશ વિકલ્પો.",
                    about_us_title: "અમારા વિશે",
                    about_us_intro: "શિવ લાઇટમાં, અમે માનીએ છીએ કે પ્રકાશ માત્ર પ્રકાશ છે. તે એક કલા છે જે જગ્યાઓને જીવંત બનાવે છે.",
                    about_us_desc: "દસ વર્ષથી વધુ અનુભવ સાથે, અમે ઘરો, ઘટનાઓ અને વ્યવસાયો માટે વિશિષ્ટ પ્રકાશ ઉકેલો પ્રદાન કરવામાં આગળ છીએ.",
                    about_us_commitment: "ગુણવત્તા અને નવીનતાના પ્રત્યે અમારું પ્રતિબદ્ધતામાં ઉદ્યોગના નેતાઓ તરીકે અમને અલગ પાડે છે.",
                    learn_more: "વધુ શીખો",
                    contact_us_title: "અમારો સંપર્ક કરો",
                    contact_us_intro: "નીચેનો ફોર્મ ભરો, અને અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.",
                    submit_button: "મોકલો",
                    quick_links: "ઝડપી લિંક્સ",
                    follow_us: "અમને ફોલો કરો",
                    address: "સરનામું: 21 હેંગ મૂઇ કેંગ ટેરેસ, આઇક્યુબ બિલ્ડિંગ, સિંગાપુર 119613",
                    email: "ઈમેલ"
                }
            }
        }
    }, function () {
        updateContent();
    });

    // Function to update content
    function updateContent() {
        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            const key = element.getAttribute("data-i18n");
            element.textContent = i18next.t(key);
        });
    }

    // Change language on dropdown click
    document.querySelectorAll(".dropdown-item").forEach(function (item) {
        item.addEventListener("click", function (event) {
            const selectedLang = event.target.getAttribute("data-lang");
            i18next.changeLanguage(selectedLang, updateContent);
        });
    });
});