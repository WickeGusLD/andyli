import { TimelineItem, PortfolioItem, Accreditation, Skill } from './types';

export const SOCIAL_LINKS = {
  email: "lizhanhong16@gmail.com",
  whatsapp: "https://wa.me/85292736338",
  linkedin: "#0", 
  cv: "https://drive.google.com/file/d/1aAM1ugporsYsnbhbKrCG1IjUugY7PzDg/view?usp=sharing"
};

const SKILLS_EN: Skill[] = [
  { name: "Professional Pedagogy", category: "pedagogy" },
  { name: "Innovative Teaching", category: "pedagogy" },
  { name: "Curriculum Design", category: "pedagogy" },
  { name: "EdTech Innovation", category: "tech" },
  { name: "AR/VR Game Design", category: "tech" },
  { name: "AI Teaching Material Design", category: "tech" },
  { name: "Filming Script Writing", category: "creative" },
  { name: "Storyboard Illustration", category: "creative" },
  { name: "Interactive Event Design", category: "creative" },
];

const SKILLS_ZH: Skill[] = [
  { name: "專業教學法", category: "pedagogy" },
  { name: "創意教學", category: "pedagogy" },
  { name: "課程設計", category: "pedagogy" },
  { name: "教育科技(EdTech)創新", category: "tech" },
  { name: "AR/VR 遊戲設計", category: "tech" },
  { name: "AI 教學工具設計", category: "tech" },
  { name: "創意寫作", category: "creative" },
  { name: "Storyboard繪製", category: "creative" },
  { name: "活動教學設計", category: "creative" },
];

const EXPERIENCE_EN: TimelineItem[] = [
  {
    id: "exp-2025-1",
    title: "The Education University of Hong Kong",
    subtitle: "Mentorship Scheme",
    role: "Project Tutor (Supervisor: Prof. Leung Pui Wan)",
    date: "2025 - 2026",
    description: "Conducting research on: Application of AI in Chinese Language Teaching, and Teaching Chinese as a Second Language.",
  },
  {
    id: "exp-2025-2",
    title: "Wong Tai Sin District Office",
    subtitle: "Government Summer Intern",
    role: "Summer Intern (4 weeks)",
    date: "Aug 2025 - Sep 2025",
    description: "Responsible for clerical work in the Admin Team, collaborating with Executive Officers. Managed office administration including personnel arrangements and proposals for community activities.",
  },
  {
    id: "exp-2025-3",
    title: "Hong Kong Examinations and Assessment Authority (HKEAA)",
    subtitle: "Assessment Administration",
    role: "2025 TSA Assessment Assistant (AAA)",
    date: "June 2025",
    description: "Supervised the execution of duties at assigned schools, assisting the Assessment Administration Supervisor and invigilators in fulfilling their responsibilities for the Territory-wide System Assessment.",
  },
  {
    id: "exp-2024-1",
    title: "HKFYG M21 Multimedia Centre",
    subtitle: "STEAM Education",
    role: "Part-time Instructor",
    date: "2024 - 2026",
    description: "Resident STEAM Instructor leading regular courses: VR Painting Experience Class, Generative AI (AIGC) Workshops. Served as a mentor in the YouthTech scheme, leading secondary students in applying technology for community care activities.",
  },
  {
    id: "exp-2024-2",
    title: "Tsz Shan Monastery",
    subtitle: "Internship",
    role: "Part-time Intern (40 weeks)",
    date: "Nov 2024 - Oct 2025",
    description: "Daily monastery administration and management, including large-scale ceremony logistics and crowd control. Managed regular 'Tsz Shan Forest Therapy' activities and led volunteer teams in daily practice services.",
    link: "https://drive.google.com/file/d/18CjZECSNPjp2EHnoxey2aj2ERFCT1vdF/view?usp=sharing",
    linkText: "View Endorsement"
  },
  {
    id: "exp-2024-3",
    title: "Tsz Shan Institute & UC Berkeley",
    subtitle: "Greater Good Science Centre",
    role: "Part-time Intern (40 weeks)",
    date: "Nov 2024 - Oct 2025",
    description: "Responsible for administration and logistics of courses including: 'Science of Happiness' certificate course and 'Cultivating Emotional Balance' certificate course.",
  },
  {
    id: "exp-2022-4",
    title: "The Education University of Hong Kong",
    subtitle: "One City One Book",
    role: "Part-time Student Assistant",
    date: "Sep 2022 - Sep 2024",
    description: "Assisted in annual book selection, reading clubs, and literature promotion events. Projects included '2022 Poems of Yin Jiang', '2023 Ng Hui-bun: Ox', and '2024 Dung Kai-cheung'.",
  },
  {
    id: "exp-2023-1",
    title: "Consumer Council",
    subtitle: "Internship",
    role: "Summer Intern (12 weeks)",
    date: "June 2023",
    description: "Consumer Education Programme (Special Needs & Elderly). Designed teaching presentations and aids for special schools and lectures. Assistant for 'Earth 2038' Sustainable Consumption Education school activities.",
    link: "https://drive.google.com/file/d/1glSfKjXM1zrahPqjEhzNXQKQ7AMbDwHH/view?usp=sharing",
    linkText: "View Endorsement"
  },
  {
    id: "exp-2022-2",
    title: "AESIR Limited (EdTech Start-up)",
    subtitle: "Internship",
    role: "Summer Intern",
    date: "June 2022 - Sep 2022",
    description: "Handled project handover and follow-up, communicating with target clients to coordinate progress. Mainly responsible for VR resource kit design for the Consumer Council (CED) Special Needs Support Project.",
    link: "https://drive.google.com/file/d/19LdyYAKePd61U1zXjTqhCj8tWlCMNgNi/view?usp=sharing",
    linkText: "View Endorsement"
  },
  {
    id: "exp-2022-1",
    title: "HKTA The Yuen Yuen Institute No.2 Secondary School",
    subtitle: "Tutoring",
    role: "Course Instructor / F.5 Writing Tutor",
    date: "Apr 2022 - June 2022",
    description: "Provided elite writing classes for F.5 students (via Zoom) to enhance HKDSE Chinese writing skills. Work included designing teaching materials and marking compositions.",
    link: "https://drive.google.com/file/d/1o8NQxaljAE3KVZKqrSULzsSs_xVXWgBy/view?usp=sharing",
    linkText: "View Endorsement"
  }
];

const EXPERIENCE_ZH: TimelineItem[] = [
  {
    id: "exp-2025-1",
    title: "香港教育大學「師徒計劃」",
    subtitle: "計劃導師：梁佩雲教授",
    role: "計劃導師",
    date: "2025年 - 2026年",
    description: "隨導師開展及進行以下相關研究：人工智能 (AI) 在中國語文教學的應用、中文作為第二語言教學法。",
  },
  {
    id: "exp-2025-2",
    title: "黃大仙民政事務處",
    subtitle: "政府暑期實習生",
    role: "政府暑期實習生（四星期）",
    date: "2025年8月 - 2025年9月",
    description: "負責行政組 (Admin Team) 的文書工作，與各行政主任 (Executive Officer) 合作，管理處內事務，包括人事安排、社區活動提議等。",
  },
  {
    id: "exp-2025-3",
    title: "香港考試及評核局 (HKEAA)",
    subtitle: "評估行政",
    role: "2025 全港性系統評估 (TSA) 評核助理 (AAA)",
    date: "2025年6月",
    description: "於所派駐學校的評估行政主管監督下執行職務，協助評估行政主管及監考員履行其職責。",
  },
  {
    id: "exp-2024-1",
    title: "香港青年協會 M21 媒體空間",
    subtitle: "STEAM 教育",
    role: "兼職課程導師",
    date: "2024年 - 2026年",
    description: "中心常駐 STEAM 導師，帶領以下常規課程：虛擬實境 (VR) 繪畫體驗班、生成式人工智能 (AIGC) 工作坊。於 M21 媒體空間與香港賽馬會 YouthTech 計劃中擔任導師，帶領中學生應用科技舉辦社區關愛活動。",
  },
  {
    id: "exp-2024-2",
    title: "慈山寺",
    subtitle: "實習",
    role: "兼職實習生（四十星期）",
    date: "2024年11月 - 2025年10月",
    description: "日常寺廟行政及管理工作，包括：大型法會行政安排、人流管理、常規「慈森.山林療癒」活動管理、帶領義工團隊進行日常修持服務。",
    link: "https://drive.google.com/file/d/18CjZECSNPjp2EHnoxey2aj2ERFCT1vdF/view?usp=sharing",
    linkText: "查看證明"
  },
  {
    id: "exp-2024-3",
    title: "慈山學院 與 UC Berkeley",
    subtitle: "Greater Good Science Centre",
    role: "兼職實習生（四十星期）",
    date: "2024年11月 - 2025年10月",
    description: "負責以下課程之行政及後勤工作：靜觀及心靈教育證書課程 (Science of Happiness)、培養正向情緒證書課程 (Cultivating Emotional Balance)。",
  },
  {
    id: "exp-2022-4",
    title: "香港教育大學",
    subtitle: "我城我書 (One City One Book)",
    role: "兼職學生助理",
    date: "2022年9月 - 2024年9月",
    description: "就年度選書，協辦讀書會及各文學推廣活動——2022 飲江詩選、2023 吳煦斌《牛》及 2024 董啟章《天工開物·栩栩如真》。",
  },
  {
    id: "exp-2023-1",
    title: "消費者委員會",
    subtitle: "實習",
    role: "暑期實習生（十二星期）",
    date: "2023年6月",
    description: "消費者教育計劃（針對特殊需要人士及年長人士）。設計教學簡報及相關教具，供入校（特校）及講座使用。作為教學助理，協助帶領 Earth 2038 可持續消費教育計劃小學入校活動。",
    link: "https://drive.google.com/file/d/1glSfKjXM1zrahPqjEhzNXQKQ7AMbDwHH/view?usp=sharing",
    linkText: "查看證明"
  },
  {
    id: "exp-2022-2",
    title: "AESIR Limited (EdTech Start-up)",
    subtitle: "實習",
    role: "暑期實習生",
    date: "2022年6月 - 2022年9月",
    description: "擔任項目交接與跟進，與目標客戶溝通並協調計畫進度。期間主要負責與香港消費者委員會——消費者教育部(CED)特殊需要人士支援計劃中 VR 資源教材套設計。",
    link: "https://drive.google.com/file/d/19LdyYAKePd61U1zXjTqhCj8tWlCMNgNi/view?usp=sharing",
    linkText: "查看證明"
  },
  {
    id: "exp-2022-1",
    title: "香港道教聯合會圓玄學院第二中學",
    subtitle: "補習",
    role: "課程導師 / 高中中文課增潤班導師",
    date: "2022年4月 - 2022年6月",
    description: "擔任課後高中中文課增潤班導師（網授）。為該校中五級提供寫作能力拔尖班，以提升同學應對中學文憑考試 (HKDSE) 中文寫作的能力。工作包括設計教材、評改學生作文。",
    link: "https://drive.google.com/file/d/1o8NQxaljAE3KVZKqrSULzsSs_xVXWgBy/view?usp=sharing",
    linkText: "查看證明"
  }
];

const EDUCATION_EN: TimelineItem[] = [
  {
    id: "edu-1",
    title: "The Education University of Hong Kong (EdUHK)",
    subtitle: "B.Ed Degree",
    role: "Chinese Language (Major) / ICT (Second Major)",
    date: "September 2021 - Present",
    description: "Training as a professional and accredited teacher in Hong Kong capable of teaching Chinese language at both secondary and primary levels.",
    link: "https://www.apply.eduhk.hk/ug/programmes/bedchi",
    linkText: "Program Details"
  },
  {
    id: "edu-2",
    title: "Tung Wah College",
    subtitle: "B.S. Degree",
    role: "Medical Laboratory Science",
    date: "September 2020 - September 2021",
    description: "Studied medical laboratory science fundamentals before transferring to pursue education passion."
  },
  {
    id: "edu-3",
    title: "STFA Seaward Woo College",
    subtitle: "Secondary Education",
    role: "HKDSE",
    date: "September 2014 - September 2020",
    description: "Completed Hong Kong Diploma of Secondary Education Examination."
  }
];

const EDUCATION_ZH: TimelineItem[] = [
  {
    id: "edu-1",
    title: "香港教育大學 (EdUHK)",
    subtitle: "教育學士學位",
    role: "中國語文（主修）/ 資訊科技（第二主修）",
    date: "2021年9月 - 現在",
    description: "正接受培訓成為香港專業註冊教師，具備任教中小學中文科的資格。",
    link: "https://www.apply.eduhk.hk/ug/programmes/bedchi",
    linkText: "課程詳情"
  },
  {
    id: "edu-2",
    title: "東華學院",
    subtitle: "理學士學位",
    role: "醫療化驗科學",
    date: "2020年9月 - 2021年9月",
    description: "在轉修教育專業前，修讀醫療化驗科學基礎課程。",
  },
  {
    id: "edu-3",
    title: "順德聯誼總會胡兆熾中學",
    subtitle: "中學教育",
    role: "香港中學文憑考試 (HKDSE)",
    date: "2014年9月 - 2020年9月",
    description: "完成香港中學文憑考試。",
  }
];

const AWARDS_EN: Accreditation[] = [
  {
    id: "aw-2025",
    title: "Beijing Language and Culture University - Culture & Language Immersion Course",
    issuer: "Beijing Language and Culture University",
  },
  {
    id: "aw-2024-1",
    title: "Basic Law and National Security Law Test",
    issuer: "Civil Service Bureau",
  },
  {
    id: "aw-2024-2",
    title: "90-hour Values Education Certificate Course",
    issuer: "Hong Kong International Institute of Educational Leadership / Lingnan University",
    link: "https://drive.google.com/file/d/1X4nDkYMm43Eq0dvL73otmPa43WTY0Mr4/view?usp=sharing"
  },
  {
    id: "aw-2023-1",
    title: "Hong Kong International Institute of Educational Leadership Scholarship",
    issuer: "HKIIEL / The Education University of Hong Kong",
    link: "https://drive.google.com/file/d/1ysfNGGk7lqAim4EZuI9UIvL5ZYZBZMdL/view?usp=sharing"
  },
  {
    id: "aw-2023-2",
    title: "East China Normal University Putonghua Immersion Course Certificate",
    issuer: "East China Normal University",
  },
  {
    id: "aw-2022",
    title: "12-hour Mental Health First Aid (MHFA) Standard Course",
    issuer: "The Mental Health Association of Hong Kong",
    link: "https://drive.google.com/file/d/1IMCouKwpklQH_88Lyh3ypI47VeaGE1RF/view?usp=sharing"
  },
  {
    id: "aw-2021",
    title: "The Joseph Lau Luen Hung Charitable Trust Scholarships",
    issuer: "The Joseph Lau Luen Hung Charitable Trust / The Education University of Hong Kong",
    link: "https://drive.google.com/file/d/1oSY34NA8y2InWkIk938wWtaA75xYnrpk/view?usp=sharing"
  }
];

const AWARDS_ZH: Accreditation[] = [
  {
    id: "aw-2025",
    title: "北京語言大學文化及語言沉浸課程",
    issuer: "北京語言大學",
  },
  {
    id: "aw-2024-1",
    title: "基本法及香港國安法測試",
    issuer: "公務員事務局",
  },
  {
    id: "aw-2024-2",
    title: "九十小時專業價值觀教育課程",
    issuer: "香港國際教賢學院、嶺南大學",
    link: "https://drive.google.com/file/d/1X4nDkYMm43Eq0dvL73otmPa43WTY0Mr4/view?usp=sharing"
  },
  {
    id: "aw-2023-1",
    title: "香港國際教賢學院獎學金",
    issuer: "香港國際教賢學院、香港教育大學",
    link: "https://drive.google.com/file/d/1ysfNGGk7lqAim4EZuI9UIvL5ZYZBZMdL/view?usp=sharing"
  },
  {
    id: "aw-2023-2",
    title: "華東師範大學普通話沉浸課程合格證書",
    issuer: "華東師範大學",
  },
  {
    id: "aw-2022",
    title: "十二小時精神健康急救標準課程",
    issuer: "香港心理衞生會",
    link: "https://drive.google.com/file/d/1IMCouKwpklQH_88Lyh3ypI47VeaGE1RF/view?usp=sharing"
  },
  {
    id: "aw-2021",
    title: "劉鑾雄慈善基金獎學金",
    issuer: "劉鑾雄慈善基金、香港教育大學",
    link: "https://drive.google.com/file/d/1oSY34NA8y2InWkIk938wWtaA75xYnrpk/view?usp=sharing"
  }
];

const PORTFOLIO_EN: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Slash Nomad",
    category: "Social Innovation",
    image: "https://picsum.photos/id/1015/600/400",
    tags: ["Social Innovation", "Pitching", "Design Thinking"],
    description: "\"Slash Nomad\" was organized by TWGHs, a year-long social innovation training and incubation programme. Upon completion, I underwent training that instilled a strong motivation to explore social issues. I learned to collaborate with like-minded individuals, pitch ideas, and use design thinking toolkits to identify pain points and solutions.",
    link: "https://drive.google.com/file/d/1QwgqoKBCQiIJtYXv3CXlAaVFfnwyZSqz/view?usp=sharing",
    linkText: "View Certification"
  },
  {
    id: "port-2",
    title: "Global Hong Kong Ambassador",
    category: "Cultural Exchange",
    image: "https://picsum.photos/id/1041/600/400",
    tags: ["Cultural Exchange", "Event Management"],
    description: "A student-initiated cultural exchange programme supported by EdUHK. As an ambassador, I participated in an intensive 3-day-2-night learning camp and designed cultural events including a Dragon Dance experience and a visit to the Tai Hang Fire Dragon Heritage Centre.",
    link: "https://drive.google.com/file/d/1ptJSKjiSPjhYf2zNi2STIXijCo42BdTR/view?usp=sharing",
    linkText: "View Certification"
  },
  {
    id: "port-3",
    title: "Sustainability Leadership Programme",
    category: "Leadership",
    image: "https://picsum.photos/id/1036/600/400",
    tags: ["Sustainability", "Leadership", "Environment"],
    description: "As a student leader of the Jockey Club Sustainability Leadership Programme at EdUHK, I promoted environmental awareness and sustainability among peers, organizing initiatives to encourage environmentally friendly behaviors.",
    link: "https://drive.google.com/file/d/1V70UozRXIutmt9p-13Mc6h9N6PhGfsBw/view?usp=sharing",
    linkText: "View Certification"
  },
  {
    id: "port-4",
    title: "EdTech Challenge 2022",
    category: "EdTech",
    image: "https://picsum.photos/id/119/600/400",
    tags: ["EdTech", "Innovation", "Facilitator"],
    description: "Facilitated the EdTech challenge for secondary school students. Inspired innovative ideas by creating a collaborative environment, providing resources, and fostering a culture of creativity and risk-taking.",
  },
  {
    id: "port-5",
    title: "Workplace Experience Buddy",
    category: "Mentorship",
    image: "https://picsum.photos/id/180/600/400",
    tags: ["Education", "Workplace", "Counselling"],
    description: "Acted as a buddy for F.3-F.4 students experiencing the workplace for the first time. Shared previous internship experiences and provided consultation and advice.",
  },
  {
    id: "port-7",
    title: "YWCA Volunteering Team",
    category: "Volunteering",
    image: "https://picsum.photos/id/1059/600/400",
    tags: ["Volunteering", "Education", "Support"],
    description: "Organised a volunteer group called \"Enlivening\" to provide Academic & Emotional support for secondary 6 students taking the HKDSE.",
    link: "https://drive.google.com/file/d/1UfX4uZ4RWmY-sRsEXBv-IQKtYckrqbeT/view?usp=sharing",
    linkText: "View Certification"
  }
];

const PORTFOLIO_ZH: PortfolioItem[] = [
  {
    id: "port-1",
    title: "斜槓遊牧 (Slash Nomad)",
    category: "社會創新",
    image: "https://picsum.photos/id/1015/600/400",
    tags: ["社會創新", "提案", "設計思維"],
    description: "「斜槓遊牧」是由東華三院主辦的為期一年的社會創新培訓及孵化計劃。完成後，我接受了培訓，激發了探索社會議題的強烈動機。我學會了與志同道合的人合作、構思提案，並運用設計思維工具來識別痛點和解決方案。",
    link: "https://drive.google.com/file/d/1QwgqoKBCQiIJtYXv3CXlAaVFfnwyZSqz/view?usp=sharing",
    linkText: "查看證書"
  },
  {
    id: "port-2",
    title: "Global Hong Kong Ambassador",
    category: "文化交流",
    image: "https://picsum.photos/id/1041/600/400",
    tags: ["文化交流", "活動管理"],
    description: "由香港教育大學支持的學生自發文化交流計劃。作為大使，我參與了為期三天兩夜的強化學習營，並設計了包括舞龍體驗和參觀大坑火龍文化館的文化活動。",
    link: "https://drive.google.com/file/d/1ptJSKjiSPjhYf2zNi2STIXijCo42BdTR/view?usp=sharing",
    linkText: "查看證書"
  },
  {
    id: "port-3",
    title: "可持續發展領袖計劃",
    category: "領導力",
    image: "https://picsum.photos/id/1036/600/400",
    tags: ["可持續發展", "領導力", "環境"],
    description: "作為香港教育大學賽馬會可持續發展領袖計劃的學生領袖，我在同學間推廣環保意識和可持續發展，並組織倡議活動以鼓勵環保行為。",
    link: "https://drive.google.com/file/d/1V70UozRXIutmt9p-13Mc6h9N6PhGfsBw/view?usp=sharing",
    linkText: "查看證書"
  },
  {
    id: "port-4",
    title: "教育科技挑戰賽 2022",
    category: "教育科技",
    image: "https://picsum.photos/id/119/600/400",
    tags: ["教育科技", "創新", "協調員"],
    description: "為中學生舉辦教育科技挑戰賽。通過創造協作環境、提供資源以及培養創造力和冒險文化，激發創新意念。",
  },
  {
    id: "port-5",
    title: "職場體驗夥伴",
    category: "導師計劃",
    image: "https://picsum.photos/id/180/600/400",
    tags: ["教育", "職場", "輔導"],
    description: "擔任首次體驗職場的中三至中四學生的夥伴。分享以往的實習經驗，並提供諮詢和建議。",
  },
  {
    id: "port-7",
    title: "YWCA 義工隊",
    category: "義工服務",
    image: "https://picsum.photos/id/1059/600/400",
    tags: ["義工", "教育", "支援"],
    description: "組織了一個名為「Enlivening」的義工小組，為參加文憑試的中六學生提供學術和情感支援。",
    link: "https://drive.google.com/file/d/1UfX4uZ4RWmY-sRsEXBv-IQKtYckrqbeT/view?usp=sharing",
    linkText: "查看證書"
  }
];

export const DATA = {
  en: {
    nav: {
      intro: 'Intro',
      about: 'About',
      exp: 'Exp. & Edu.',
      works: 'Personal Exp.',
      contact: 'Contact',
    },
    hero: {
      greeting: 'GREETINGS!',
      iAm: 'I am',
      name: 'ZHANHONG LI Andy',
      role1: 'a Full-time',
      role1Highlight: 'BEd Student',
      role2: 'passionate about teaching',
      role2Highlight: 'Chinese language',
      role3: 'A',
      role3Highlight: '/Slasher/',
      role3Suffix: 'of enthusiasts',
      role4: 'in',
      role4Highlight: 'EdTech',
      role4Suffix: 'Innovation.',
      viewPortfolio: 'View Portfolio',
      contactMe: 'Contact Me'
    },
    about: {
      title: 'My Education Philosophy',
      // New philosophy structure
      phil1: {
        highlight: 'Teaching',
        rest: ' starts with the Student',
        content: '"When students are distracted in class, perhaps the fault lies not with them, but calls for a reflection on the teacher\'s techniques." As a teacher, if one can unleash the charm of instruction and make learning vivid and interesting, students will naturally feel the enthusiasm. When students\' eyes are fixed on the teacher, that is the glory of being an educator, bearing the responsibility of imparting knowledge.'
      },
      phil2: {
        highlight: 'Nurturing',
        rest: ' fulfills Life Aspirations',
        content: 'Education should not stop at "Teaching". Teaching happens in the classroom, but many so-called "teachers" believe that once students understand the knowledge and achieve target scores, their duty is done. This is a common ailment in Hong Kong; the tutoring culture chases only grades. "Nurturing" means moral cultivation, the unfinished responsibility outside the classroom. Understanding individual needs, seeing their struggles—are we willing to help? I believe "Education is a grand mission, but also a gentle, long-lasting stream." We are passersby in their lives, but the bond remains as they walk the path themselves.'
      },
      cv: 'Download CV',
      expertise: 'Areas of Expertise',
      catPedagogy: 'Education',
      catTech: 'Technology',
      catCreative: 'Creative',
    },
    timeline: {
      workTitle: 'Work Experience',
      eduTitle: 'Education',
      awardsTitle: 'Accreditations & Awards',
      viewDetails: 'View Details',
      learnMore: 'Learn More',
      viewCertificate: 'View Certificate',
      langTitle: 'Language Proficiency',
      languages: [
        {
          subtitle: 'English',
          name: 'IELTS Academic',
          score: '7.5',
          description: 'Listening: 8.5 | Reading: 8.0 | Writing: 6.5 | Speaking: 6.5',
          issuer: 'British Council'
        },
        {
          subtitle: 'Putonghua',
          name: 'Putonghua Proficiency Test (PSC)',
          score: 'Grade 2-B',
          issuer: 'State Language Commission'
        }
      ]
    },
    portfolio: {
      subtitle: 'Portfolio',
      title: 'Personal Experience',
      description: 'A collection of activities, initiatives, and projects where I have actively participated and made an impact.',
      elatTitle: 'Experiential Learning and Achievements Transcript (ELAT)',
      elatDesc: 'A comprehensive portfolio of my entire learning journey in EdUHK.',
      viewFull: 'View Full Record',
      viewProject: 'View Project / Certificate'
    },
    contact: {
      subtitle: 'Get in Touch',
      heading1: 'I',
      headingText1: ' hope you have learned more about me.',
      heading2: 'If',
      headingText2: ' you have questions,',
      heading3: 'Please',
      headingText3: ' feel free to reach out.',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      backToTop: 'Back to Top',
      rights: '© ' + new Date().getFullYear() + ' ZHANHONG LI (Andy). All rights reserved.'
    },
    skills: SKILLS_EN,
    experience: EXPERIENCE_EN,
    education: EDUCATION_EN,
    awards: AWARDS_EN,
    portfolioItems: PORTFOLIO_EN
  },
  zh: {
    nav: {
      intro: '簡介',
      about: '理念',
      exp: '經歷與學歷',
      works: '個人經歷',
      contact: '聯絡',
    },
    hero: {
      greeting: '你好！',
      iAm: '我是',
      name: '李展鴻 Andy',
      role1: '全職',
      role1Highlight: '教育學士學生',
      role2: '熱衷於任教',
      role2Highlight: '中國語文',
      role3: '也是一名',
      role3Highlight: '／斜槓族／',
      role3Suffix: '',
      role4: '致力於',
      role4Highlight: '教育科技',
      role4Suffix: '創新。',
      viewPortfolio: '查看作品集',
      contactMe: '聯絡我'
    },
    about: {
      title: '教育理念',
      // New philosophy structure
      phil1: {
        highlight: '教',
        rest: '以學生出發',
        content: '「當學生在課堂上漫不經心、也許錯的不在學生身上，應反思老師的教學技巧」。作為老師，如能夠發揮講授的魅力、教學有趣生動，同學們自然會感受到老師的教學熱誠，而當學生的目光注視在老師的身上，那是一種作教師的光榮，承擔著教授學生知識的責任。'
      },
      phil2: {
        highlight: '育',
        rest: '以人生達志',
        content: '教育不應止步於「教」。「教」是發生在課室中的，許多所謂「教師」以為令同學明白了知識，在課堂上令學生考試達到了目標分數便是盡了教責，這是香港普遍常見的通病，補習文化只追求成績，精讀班、雞精班、奮進班等等綱目，逼得學生無從退路，唯有不停前行，才能留在原地。「育」是「施德育人」的意思，是課室外未了的責任，了解到學生的個別需要，看見學生為此而痛苦掙扎，你我會否願意付出所有扶他一把？ 我相信「教育既是宏大的使命，也是細水愛長流」，茫茫人生路，你我為過客，過後，師生情延，仍伴左右，餘下的路便要讓學生們自己走下去。'
      },
      cv: '下載履歷',
      expertise: '專業領域',
      catPedagogy: '教育',
      catTech: '科技',
      catCreative: '創意',
    },
    timeline: {
      workTitle: '工作經驗',
      eduTitle: '學歷',
      awardsTitle: '認證與獎項',
      viewDetails: '查看詳情',
      learnMore: '了解更多',
      viewCertificate: '查看證書',
      langTitle: '語言能力',
      languages: [
        {
          subtitle: '英文',
          name: 'IELTS 學術模式',
          score: '7.5',
          description: '聆聽：8.5 | 閱讀：8.0 | 寫作：6.5 | 會話：6.5',
          issuer: '英國文化協會'
        },
        {
          subtitle: '普通話',
          name: '國家語委普通話水平測試（PSC）',
          score: '二級乙等',
          issuer: '國家語言文字工作委員會'
        }
      ]
    },
    portfolio: {
      subtitle: '作品集',
      title: '個人經歷',
      description: '彙集了我積極參與並發揮影響力的各項活動、倡議和計劃。',
      elatTitle: '體驗學習及成就成績單 (ELAT)',
      elatDesc: '我在香港教育大學整個學習旅程的綜合檔案。',
      viewFull: '查看完整記錄',
      viewProject: '查看計劃 / 證書'
    },
    contact: {
      subtitle: '保持聯絡',
      heading1: '我',
      headingText1: ' 希望您對我有更深的了解。',
      heading2: '如果',
      headingText2: ' 您有任何疑問，',
      heading3: '請',
      headingText3: ' 隨時與我聯絡。',
      emailLabel: '電郵',
      whatsappLabel: 'WhatsApp',
      backToTop: '回到頂部',
      rights: '© ' + new Date().getFullYear() + ' 李展鴻 (Andy). 版權所有。'
    },
    skills: SKILLS_ZH,
    experience: EXPERIENCE_ZH,
    education: EDUCATION_ZH,
    awards: AWARDS_ZH,
    portfolioItems: PORTFOLIO_ZH
  }
};