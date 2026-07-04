const questions = [
  {
    question: "फोन की स्क्रीन पर दो उँगलियों से Zoom करने की क्रिया क्या कहलाती है?",
    options: ["A) Swipe", "B) Pinch Gesture", "C) Scroll", "D) Drag"],
    correct: 1,
    answer: "✅ सही उत्तर: B) Pinch Gesture",
    explanation: "दो उँगलियों को पास या दूर करके स्क्रीन को Zoom In या Zoom Out करने की क्रिया Pinch Gesture कहलाती है।",
    fact: "यह gesture smartphones और touchscreens में बहुत सामान्य है।"
  },
  {
    question: "छींकते समय अधिकतर लोगों की आँखें अपने आप क्यों बंद हो जाती हैं?",
    options: ["A) आदत के कारण", "B) शरीर की प्राकृतिक प्रतिक्रिया", "C) धूल से बचने के लिए", "D) रोशनी के कारण"],
    correct: 1,
    answer: "✅ सही उत्तर: B) शरीर की प्राकृतिक प्रतिक्रिया",
    explanation: "छींक एक reflex action है और इस दौरान पलकें बंद होना शरीर की स्वचालित प्रतिक्रिया का हिस्सा है।",
    fact: "आँखें खुली रखकर छींकना कठिन हो सकता है, लेकिन असंभव नहीं।"
  },
  {
    question: "मोबाइल फोन में Airplane Mode चालू करने पर मुख्य रूप से क्या बंद होता है?",
    options: ["A) स्क्रीन", "B) कैमरा", "C) वायरलेस कनेक्शन", "D) स्पीकर"],
    correct: 2,
    answer: "✅ सही उत्तर: C) वायरलेस कनेक्शन",
    explanation: "Airplane Mode मुख्य रूप से मोबाइल नेटवर्क जैसे wireless radio connections को बंद करता है।",
    fact: "कई फोन में Airplane Mode के बाद Wi-Fi और Bluetooth अलग से चालू किए जा सकते हैं।"
  },
  {
    question: "QR Code में 'QR' का पूरा नाम क्या है?",
    options: ["A) Quick Response", "B) Quality Reader", "C) Quick Record", "D) Query Response"],
    correct: 0,
    answer: "✅ सही उत्तर: A) Quick Response",
    explanation: "QR का पूरा नाम Quick Response है क्योंकि इसे तेजी से scan और read करने के लिए बनाया गया था।",
    fact: "QR Code का विकास 1994 में जापान में किया गया था।"
  },
  {
    question: "मोबाइल में OTP का मुख्य उपयोग क्या है?",
    options: ["A) फोटो एडिट करना", "B) पहचान सत्यापित करना", "C) बैटरी बचाना", "D) इंटरनेट तेज करना"],
    correct: 1,
    answer: "✅ सही उत्तर: B) पहचान सत्यापित करना",
    explanation: "OTP एक अस्थायी password होता है जिसका उपयोग login या transaction verification के लिए किया जाता है।",
    fact: "OTP का पूरा नाम One-Time Password है।"
  },
  {
    question: "फोन में स्क्रीनशॉट लेने पर क्या होता है?",
    options: ["A) वीडियो बनता है", "B) स्क्रीन की तस्वीर सेव होती है", "C) फोन लॉक होता है", "D) इंटरनेट बंद होता है"],
    correct: 1,
    answer: "✅ सही उत्तर: B) स्क्रीन की तस्वीर सेव होती है",
    explanation: "Screenshot उस समय स्क्रीन पर दिखाई दे रही सामग्री की image capture करता है।",
    fact: "अलग-अलग फोन में screenshot लेने के shortcuts अलग हो सकते हैं।"
  },
  {
    question: "इंटरनेट पर किसी लिंक पर क्लिक करने योग्य टेक्स्ट को क्या कहते हैं?",
    options: ["A) Hyperlink", "B) Hashtag", "C) Caption", "D) Folder"],
    correct: 0,
    answer: "✅ सही उत्तर: A) Hyperlink",
    explanation: "Hyperlink ऐसा clickable text या element होता है जो दूसरे page या resource तक ले जाता है।",
    fact: "Web pages को आपस में जोड़ने में hyperlinks की मुख्य भूमिका होती है।"
  },
  {
    question: "सोशल मीडिया में # चिन्ह को क्या कहा जाता है?",
    options: ["A) Star", "B) Hashtag", "C) Slash", "D) Handle"],
    correct: 1,
    answer: "✅ सही उत्तर: B) Hashtag",
    explanation: "# चिन्ह के साथ लिखे keyword को hashtag कहा जाता है, जिससे related content को खोजने में मदद मिलती है।",
    fact: "Hashtags सोशल मीडिया पर topics और trends को group करने में उपयोग होते हैं।"
  },
  {
    question: "फोन की स्क्रीन पर उँगली को तेजी से ऊपर या नीचे चलाने की क्रिया क्या कहलाती है?",
    options: ["A) Swipe", "B) Type", "C) Click", "D) Zoom"],
    correct: 0,
    answer: "✅ सही उत्तर: A) Swipe",
    explanation: "स्क्रीन पर उँगली को एक दिशा में सरकाने की क्रिया Swipe कहलाती है।",
    fact: "Swipe gestures का उपयोग navigation और content browsing में किया जाता है।"
  },
  {
    question: "मोबाइल फोन में GPS का उपयोग मुख्य रूप से किसलिए होता है?",
    options: ["A) आवाज बढ़ाने", "B) स्थान पता करने", "C) फोटो बनाने", "D) बैटरी चार्ज करने"],
    correct: 1,
    answer: "✅ सही उत्तर: B) स्थान पता करने",
    explanation: "GPS satellites की मदद से device की location निर्धारित करने में सहायता करता है।",
    fact: "GPS का पूरा नाम Global Positioning System है।"
  },
  {
    question: "मानव शरीर का कौन-सा अंग खून को पंप करता है?",
    options: ["A) फेफड़ा", "B) हृदय", "C) गुर्दा", "D) यकृत"],
    correct: 1,
    answer: "✅ सही उत्तर: B) हृदय",
    explanation: "हृदय रक्त को पूरे शरीर में पंप करता है जिससे oxygen और nutrients विभिन्न अंगों तक पहुँचते हैं।",
    fact: "एक स्वस्थ वयस्क का हृदय सामान्यतः आराम की अवस्था में लगभग 60 से 100 बार प्रति मिनट धड़क सकता है।"
  },
  {
    question: "मानव शरीर की सबसे बड़ी हड्डी कौन-सी है?",
    options: ["A) फीमर", "B) टिबिया", "C) रेडियस", "D) ह्यूमरस"],
    correct: 0,
    answer: "✅ सही उत्तर: A) फीमर",
    explanation: "फीमर जांघ में स्थित होती है और मानव शरीर की सबसे लंबी तथा मजबूत हड्डी है।",
    fact: "फीमर चलने, दौड़ने और शरीर का वजन संभालने में महत्वपूर्ण भूमिका निभाती है।"
  },
  {
    question: "मानव शरीर का सबसे बड़ा अंग कौन-सा है?",
    options: ["A) हृदय", "B) त्वचा", "C) यकृत", "D) फेफड़ा"],
    correct: 1,
    answer: "✅ सही उत्तर: B) त्वचा",
    explanation: "त्वचा शरीर की बाहरी सुरक्षा परत है और क्षेत्रफल के आधार पर सबसे बड़ा अंग मानी जाती है।",
    fact: "त्वचा शरीर के तापमान को नियंत्रित करने में भी मदद करती है।"
  },
  {
    question: "कौन-सा विटामिन सूर्य के प्रकाश से शरीर में बनने में मदद पाता है?",
    options: ["A) Vitamin A", "B) Vitamin B12", "C) Vitamin C", "D) Vitamin D"],
    correct: 3,
    answer: "✅ सही उत्तर: D) Vitamin D",
    explanation: "सूर्य की UVB किरणों के संपर्क से त्वचा में Vitamin D बनने की प्रक्रिया शुरू होती है।",
    fact: "Vitamin D हड्डियों के स्वास्थ्य और calcium absorption में महत्वपूर्ण है।"
  },
  {
    question: "प्याज काटते समय आँखों में आँसू क्यों आते हैं?",
    options: ["A) गर्मी के कारण", "B) रासायनिक उत्तेजक पदार्थ के कारण", "C) पानी के कारण", "D) रंग के कारण"],
    correct: 1,
    answer: "✅ सही उत्तर: B) रासायनिक उत्तेजक पदार्थ के कारण",
    explanation: "प्याज काटने पर एक volatile chemical irritant बनता है जो आँखों को उत्तेजित करता है और आँसू आने लगते हैं।",
    fact: "ठंडा प्याज काटने से irritant का फैलाव कुछ कम हो सकता है।"
  },
  {
    question: "बर्फ पानी पर क्यों तैरती है?",
    options: ["A) बर्फ गर्म होती है", "B) बर्फ का घनत्व कम होता है", "C) पानी उसे धकेलता है", "D) हवा उसे उठाती है"],
    correct: 1,
    answer: "✅ सही उत्तर: B) बर्फ का घनत्व कम होता है",
    explanation: "जमने पर पानी की संरचना फैलती है, जिससे बर्फ का घनत्व तरल पानी से कम हो जाता है।",
    fact: "इसी गुण के कारण झीलों की सतह जमने पर भी नीचे पानी तरल रह सकता है।"
  },
  {
    question: "आसमान सामान्यतः नीला क्यों दिखाई देता है?",
    options: ["A) समुद्र के कारण", "B) सूर्य नीला है", "C) प्रकाश के प्रकीर्णन के कारण", "D) बादलों के कारण"],
    correct: 2,
    answer: "✅ सही उत्तर: C) प्रकाश के प्रकीर्णन के कारण",
    explanation: "वायुमंडल में छोटी तरंगदैर्ध्य वाला नीला प्रकाश अधिक बिखरता है, इसलिए आसमान नीला दिखाई देता है।",
    fact: "इस प्रभाव को Rayleigh Scattering कहा जाता है।"
  },
  {
    question: "गरम चाय पर फूँक मारने से वह जल्दी ठंडी क्यों होती है?",
    options: ["A) रंग बदलता है", "B) वाष्पीकरण और ऊष्मा स्थानांतरण बढ़ता है", "C) कप ठंडा होता है", "D) चाय भारी होती है"],
    correct: 1,
    answer: "✅ सही उत्तर: B) वाष्पीकरण और ऊष्मा स्थानांतरण बढ़ता है",
    explanation: "फूँक मारने से सतह के पास की गर्म और नम हवा हटती है, जिससे evaporation और convective heat transfer बढ़ सकते हैं।",
    fact: "इसी कारण हवा चलने पर गीली सतह जल्दी सूख सकती है।"
  },
  {
    question: "कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
    options: ["A) RAM", "B) CPU", "C) Monitor", "D) Keyboard"],
    correct: 1,
    answer: "✅ सही उत्तर: B) CPU",
    explanation: "CPU instructions को process करता है और कंप्यूटर के अनेक operations को नियंत्रित करता है।",
    fact: "CPU का पूरा नाम Central Processing Unit है।"
  },
  {
    question: "कंप्यूटर में Ctrl + C का उपयोग किसलिए किया जाता है?",
    options: ["A) Cut", "B) Copy", "C) Close", "D) Create"],
    correct: 1,
    answer: "✅ सही उत्तर: B) Copy",
    explanation: "Ctrl + C सामान्यतः selected text, file या object को copy करने के लिए उपयोग होता है।",
    fact: "Ctrl + V का उपयोग copied content को paste करने के लिए किया जाता है।"
  },
  {
    question: "वेबसाइट के पते को सामान्यतः क्या कहा जाता है?",
    options: ["A) CPU", "B) URL", "C) USB", "D) PDF"],
    correct: 1,
    answer: "✅ सही उत्तर: B) URL",
    explanation: "URL इंटरनेट पर किसी web resource के address को दर्शाता है।",
    fact: "URL का पूरा नाम Uniform Resource Locator है।"
  },
  {
    question: "Bluetooth का उपयोग मुख्य रूप से किसलिए किया जाता है?",
    options: ["A) कम दूरी पर वायरलेस डेटा कनेक्शन", "B) बैटरी चार्ज", "C) स्क्रीन साफ करना", "D) कैमरा Zoom"],
    correct: 0,
    answer: "✅ सही उत्तर: A) कम दूरी पर वायरलेस डेटा कनेक्शन",
    explanation: "Bluetooth devices को कम दूरी पर wireless तरीके से connect और data exchange करने देता है।",
    fact: "Bluetooth का उपयोग earbuds, keyboards, speakers और smartwatches में व्यापक रूप से होता है।"
  },
  {
    question: "भारत का राष्ट्रीय पशु कौन-सा है?",
    options: ["A) हाथी", "B) शेर", "C) बाघ", "D) मोर"],
    correct: 2,
    answer: "✅ सही उत्तर: C) बाघ",
    explanation: "बाघ भारत का राष्ट्रीय पशु है और शक्ति तथा वन्यजीव विरासत का प्रतीक माना जाता है।",
    fact: "भारत में Bengal Tiger प्रमुख tiger populations में से एक है।"
  },
  {
    question: "भारत का राष्ट्रीय जलीय जीव कौन-सा है?",
    options: ["A) ब्लू व्हेल", "B) गंगा डॉल्फिन", "C) शार्क", "D) कछुआ"],
    correct: 1,
    answer: "✅ सही उत्तर: B) गंगा डॉल्फिन",
    explanation: "गंगा नदी डॉल्फिन भारत का राष्ट्रीय जलीय जीव है।",
    fact: "यह freshwater dolphin है और नदी पारिस्थितिकी तंत्र के स्वास्थ्य का महत्वपूर्ण संकेतक मानी जाती है।"
  },
  {
    question: "किस ग्रह को लाल ग्रह कहा जाता है?",
    options: ["A) शुक्र", "B) मंगल", "C) बृहस्पति", "D) बुध"],
    correct: 1,
    answer: "✅ सही उत्तर: B) मंगल",
    explanation: "मंगल की सतह पर iron minerals के oxidation के कारण इसका रंग लाल दिखाई देता है।",
    fact: "मंगल ग्रह पर Olympus Mons नाम का विशाल ज्वालामुखी है।"
  }
];