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
  { name: "AR/VR Design", category: "tech" },
  { name: "Filming Script Writing", category: "creative" },
  { name: "Storyboard Illustration", category: "creative" },
  { name: "Interactive Event Design", category: "creative" },
];

const SKILLS_ZH: Skill[] = [
  { name: "專業教學法", category: "pedagogy" },
  { name: "創新教學", category: "pedagogy" },
  { name: "課程設計", category: "pedagogy" },
  { name: "教育科技創新", category: "tech" },
  { name: "AR/VR 設計", category: "tech" },
  { name: "影片腳本撰寫", category: "creative" },
  { name: "分鏡圖繪製", category: "creative" },
  { name: "互動活動設計", category: "creative" },
];

const EXPERIENCE_EN: TimelineItem[] = [
  {
    id: "exp-1",
    title: "Hong Kong Taoist Association The Yuen Yuen Institute No.2 Secondary School",
    subtitle: "Tutoring",
    role: "F.5 Writing Supplementary Class Tutor",
    date: "April 2022 - June 2022",
    description: "Assisted in preparing F.5 senior students for DSE Chinese Language Paper 2. Conducted after-class lessons, designed teaching materials (PowerPoint, notes, worksheets), and managed homework assessment.",
    link: "https://drive.google.com/file/d/1o8NQxaljAE3KVZKqrSULzsSs_xVXWgBy/view?usp=sharing",
    linkText: "View Endorsement"
  },
  {
    id: "exp-2",
    title: "AESIR LIMITED",
    subtitle: "Internship",
    role: "Digital Marketing & Seasonal Programmer",
    date: "June 2022 - August 2022",
    description: "Collaborated with Consumer Council on VR/AR videos for mentally challenged individuals. Designed scripts and storyboards for consumer education. Assisted in funding proposals for ESR and ICT awards pitching.",
    link: "https://drive.google.com/file/d/19LdyYAKePd61U1zXjTqhCj8tWlCMNgNi/view?usp=sharing",
    linkText: "View Endorsement"
  },
  {
    id: "exp-3",
    title: "Consumer Council",
    subtitle: "Internship",
    role: "Consumer Education Division Intern",
    date: "June 2023 - August 2023",
    description: "Explored education for Primary, Secondary, Elderly, and SEN groups. Participated in signature programs like 'Earth 2038', CSSA, SCA, and VR role-play experiences for SEN students.",
    link: "https://drive.google.com/file/d/1glSfKjXM1zrahPqjEhzNXQKQ7AMbDwHH/view?usp=sharing",
    linkText: "View Endorsement"
  },
  {
    id: "exp-4",
    title: "EdUHK LCS & RCCLLC",
    subtitle: "Student Helper",
    role: "Student Ambassador & Event Helper",
    date: "September 2022 - Present",
    description: "Supporting various departmental events and student activities as an ambassador.",
    link: "https://drive.google.com/file/d/18CjZECSNPjp2EHnoxey2aj2ERFCT1vdF/view?usp=sharing",
    linkText: "View Endorsement"
  },
  {
    id: "exp-5",
    title: "Tsz Shan Monastery",
    subtitle: "Internship",
    role: "Secretary's Office Intern",
    date: "November 2024 - Present",
    description: "Assisting with administrative duties and secretarial tasks within the monastery.",
    link: "https://drive.google.com/file/d/18CjZECSNPjp2EHnoxey2aj2ERFCT1vdF/view?usp=sharing",
    linkText: "View Endorsement"
  }
];

const EXPERIENCE_ZH: TimelineItem[] = [
  {
    id: "exp-1",
    title: "香港道教聯合會圓玄學院第二中學",
    subtitle: "補習導師",
    role: "中五寫作補底班導師",
    date: "2022年4月 - 2022年6月",
    description: "協助中五學生準備文憑試中文科卷二。負責課後輔導，設計教學材料（PowerPoint、筆記、工作紙），並管理作業評估。",
    link: "https://drive.google.com/file/d/1o8NQxaljAE3KVZKqrSULzsSs_xVXWgBy/view?usp=sharing",
    linkText: "查看證明"
  },
  {
    id: "exp-2",
    title: "AESIR LIMITED",
    subtitle: "實習",
    role: "數碼營銷及程式設計實習生",
    date: "2022年6月 - 2022年8月",
    description: "與消費者委員會合作製作針對智障人士的 VR/AR 影片。設計消費者教育的腳本和分鏡圖。協助撰寫 ESR 和 ICT 獎項的資助提案。",
    link: "https://drive.google.com/file/d/19LdyYAKePd61U1zXjTqhCj8tWlCMNgNi/view?usp=sharing",
    linkText: "查看證明"
  },
  {
    id: "exp-3",
    title: "消費者委員會",
    subtitle: "實習",
    role: "消費者教育部實習生",
    date: "2023年6月 - 2023年8月",
    description: "探索針對小學、中學、長者及特殊教育需要群體的教育工作。參與「地球 2038」、CSSA、SCA 等重點項目，並協助 SEN 學生的 VR 角色扮演體驗。",
    link: "https://drive.google.com/file/d/1glSfKjXM1zrahPqjEhzNXQKQ7AMbDwHH/view?usp=sharing",
    linkText: "查看證明"
  },
  {
    id: "exp-4",
    title: "香港教育大學 LCS & RCCLLC",
    subtitle: "學生助手",
    role: "學生大使及活動助手",
    date: "2022年9月 - 現在",
    description: "擔任大使，支援各種部門活動和學生活動。",
    link: "https://drive.google.com/file/d/18CjZECSNPjp2EHnoxey2aj2ERFCT1vdF/view?usp=sharing",
    linkText: "查看證明"
  },
  {
    id: "exp-5",
    title: "慈山寺",
    subtitle: "實習",
    role: "秘書處實習生",
    date: "2024年11月 - 現在",
    description: "協助寺內的行政職務及秘書工作。",
    link: "https://drive.google.com/file/d/18CjZECSNPjp2EHnoxey2aj2ERFCT1vdF/view?usp=sharing",
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
    id: "aw-1",
    title: "The Joseph Lau Luen Hung Charitable Trust Scholarships",
    issuer: "The Education University of Hong Kong",
    link: "https://drive.google.com/file/d/1oSY34NA8y2InWkIk938wWtaA75xYnrpk/view?usp=sharing"
  },
  {
    id: "aw-2",
    title: "Hong Kong International Institute of Educational Leadership Scholarship",
    issuer: "The Education University of Hong Kong",
    link: "https://drive.google.com/file/d/1ysfNGGk7lqAim4EZuI9UIvL5ZYZBZMdL/view?usp=sharing"
  },
  {
    id: "aw-3",
    title: "Values Education Programme (90-hours)",
    issuer: "Hong Kong International Institute of Educational Leadership",
    link: "https://drive.google.com/file/d/1X4nDkYMm43Eq0dvL73otmPa43WTY0Mr4/view?usp=sharing"
  },
  {
    id: "aw-4",
    title: "Mental Health First Aid (MHFA) Standard Course",
    issuer: "The Mental Health Association of Hong Kong",
    link: "https://drive.google.com/file/d/1IMCouKwpklQH_88Lyh3ypI47VeaGE1RF/view?usp=sharing"
  }
];

const AWARDS_ZH: Accreditation[] = [
  {
    id: "aw-1",
    title: "劉鑾雄慈善基金獎學金",
    issuer: "香港教育大學",
    link: "https://drive.google.com/file/d/1oSY34NA8y2InWkIk938wWtaA75xYnrpk/view?usp=sharing"
  },
  {
    id: "aw-2",
    title: "香港國際教育領導學院獎學金",
    issuer: "香港教育大學",
    link: "https://drive.google.com/file/d/1ysfNGGk7lqAim4EZuI9UIvL5ZYZBZMdL/view?usp=sharing"
  },
  {
    id: "aw-3",
    title: "價值觀教育課程（90小時）",
    issuer: "香港國際教育領導學院",
    link: "https://drive.google.com/file/d/1X4nDkYMm43Eq0dvL73otmPa43WTY0Mr4/view?usp=sharing"
  },
  {
    id: "aw-4",
    title: "精神健康急救 (MHFA) 標準課程",
    issuer: "香港心理衞生會",
    link: "https://drive.google.com/file/d/1IMCouKwpklQH_88Lyh3ypI47VeaGE1RF/view?usp=sharing"
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
    id: "port-6",
    title: "One City One Book HK",
    category: "Community Reading",
    image: "https://picsum.photos/id/1073/600/400",
    tags: ["Reading", "Literature", "Promotion"],
    description: "One City One Book is a community reading programme. As a student ambassador, I promoted the programme by speaking at reading clubs, reaching out to schools, facilitating online streaming, and photographing events.",
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
    id: "port-6",
    title: "香港一城一書",
    category: "社區閱讀",
    image: "https://picsum.photos/id/1073/600/400",
    tags: ["閱讀", "文學", "推廣"],
    description: "「一城一書」是一個社區閱讀計劃。作為學生大使，我通過在讀書會演講、接觸學校、協助網上直播和拍攝活動來推廣該計劃。",
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
      langLabel: 'IELTS Academic',
      langDesc: 'Listening: 8.5 | Reading: 8.0 | Writing: 6.5 | Speaking: 6.5',
      langSub: 'British Council'
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
      langLabel: 'IELTS 學術模式',
      langDesc: '聆聽：8.5 | 閱讀：8.0 | 寫作：6.5 | 會話：6.5',
      langSub: '英國文化協會'
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