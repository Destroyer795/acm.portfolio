export type Person = {
  name: string;
  title: string | null;
  photo: string | null;
  social: string;
  date: Date | string;
};

export const Faculty: Person[] = [
  {
    name: "Bindu K. R.",
    title: "Assistant Professor",
    photo: "/team/bindu-k-r.jpg",
    social: "https://www.amrita.edu/faculty/bindu-k-r/",
    date: "2020 - Present",
  },

  {
    name: "Dr. Aarthi R.",
    title: "Assistant Professor (Sl.Gd.)",
    photo: "/team/dr-aarthi-r.jpg",
    social: "https://www.amrita.edu/faculty/r-aarthi/",
    date: "2020 - Present",
  },
  {
    name: "Dr. Anuragi Arti Narayandas",
    title: "Assistant Professor",
    photo: "/team/dr-arti-anuragi.jpg",
    social: "https://www.amrita.edu/faculty/anuragi-arti-narayandas/",
    date: "2022 - Present",
  },
];

export const CoreTeam: Person[] = [
  {
    name: "Aadithyaa Eeswaran",
    title: "Chairperson",
    photo: "/team/aadhityaa-eeswaran.jpeg",
    social: "https://github.com/aadit-n3rdy",
    date: "2024 - Present",
  },

  {
    name: "M Leela Mahalakshmi",
    title: "Vice Chairperson",
    photo: "/team/leela-mahalakshmi.jpg",
    social: "https://www.linkedin.com/in/leela-m-336334301",
    date: "2025 - Present",
  },

  {
    name: "Sarath Chandra",
    title: "Secretary",
    photo: "/team/sarath-chandra.jpg",
    social: "https://www.linkedin.com/in/sarathcx",
    date: "2024 - Present",
  },

  {
    name: "Sanyam Bhardwaj",
    title: "Treasurer",
    photo: "/team/sanyam-bhardwaj.jpeg",
    social: "https://in.linkedin.com/in/sanyam-bhardwaj-04b2a4264",
    date: "2024 - Present",
  },

  {
    name: "Adithya Menon R",
    title: "Webmaster",
    photo: "/team/adithya-menon-r.jpg",
    social: "https://github.com/adithya-menon-r",
    date: "2025 - Present",
  },

  {
    name: "I Karthik Saiharsh",
    title: "Design and PR Head",
    photo: "/team/karthik-saiharsh.jpeg",
    social: "https://github.com/karthik-saiharsh",
    date: "2025 - Present",
  },

  {
    name: "Midhunan V Prabhaharan",
    title: "Event & Management Head",
    photo: "/team/midhunan-v-prabhaharan.jpg",
    social: "https://github.com/midhunann",
    date: "2025 - Present",
  },

  {
    name: "Vasudev Kishor",
    title: "Media Head",
    photo: "/team/vasudev-kishore.jpg",
    social: "https://in.linkedin.com/in/vasudevkishor",
    date: "2025 - Present",
  },

  {
    name: "Jayadev D",
    title: "Webmaster Co-Head",
    photo: "/team/jayadev-d.jpg",
    social: "https://www.linkedin.com/in/jayadev-d",
    date: "2025 - Present",
  },
];

const ACMMembers_Unsorted: Person[] = [
  {
    name: "Joshua Karthik A",
    title: null,
    photo: null,
    social: "",
    date: new Date(2025, 5, 30),
  },
  {
    name: "Yash Bardia",
    title: null,
    photo: "team/mem/yash-bardia.jpg",
    social: "https://github.com/yendelevium",
    date: new Date(2025, 5, 30),
  },
  {
    name: "Narain BK",
    title: null,
    photo: "team/mem/narain.png",
    social: "https://github.com/NarainBK",
    date: new Date(2025, 2, 24),
  },
  {
    name: "Rutav Desai",
    title: null,
    photo: "team/mem/rutav-desai.jpg",
    social: "https://www.linkedin.com/in/rutav-desai/",
    date: new Date(2025, 9, 7),
  },

  {
    name: "Harish G M",
    title: null,
    photo: null,
    social: "https://github.com/GMHarish285",
    date: new Date(2025, 2, 7),
  },
  {
    name: "Karthik Ganesan",
    title: null,
    photo: null,
    social: "",
    date: new Date(2025, 6, 3),
  },
  {
    name: "PG Karthikeyan",
    title: null,
    photo: "team/mem/pg-karthikeyan.jpg",
    social: "https://github.com/cootot",
    date: new Date(2025, 5, 25),
  },
  {
    name: "Vanshika Gupta",
    title: null,
    photo: null,
    social: "",
    date: new Date(2025, 9, 7),
  },
  {
    name: "Anush Rithvic M",
    title: null,
    photo: "team/mem/anush-rithvic.jpg",
    social: "https://github.com/anushrithvic",
    date: new Date(2025, 2, 17),
  },
  {
    name: "Sanjithganesa Pandiyan",
    title: null,
    photo: null,
    social: "",
    date: new Date(2025, 2, 4),
  },
  {
    name: "Chandana Polagangu",
    title: null,
    photo: "team/mem/chandana-polagangu.jpg",
    social: "https://www.linkedin.com/in/chandana-polagangu-3b15b3249/",
    date: new Date(2025, 9, 25),
  },
  {
    name: "Lade Ruchiran",
    title: null,
    photo: null,
    social: "",
    date: new Date(2025, 9, 7),
  },
  {
    name: "Sumithra S",
    title: null,
    photo: "team/mem/sumithra-s.jpg",
    social: "https://github.com/sumi-devs",
    date: new Date(2025, 2, 20),
  },
  {
    name: "Adhikkesh S K",
    title: null,
    photo: "team/mem/adhikkesh-s-k.jpg",
    social: "https://github.com/Adhikkesh",
    date: new Date(2025, 2, 13),
  },
  {
    name: "Nitansh Shankar",
    title: null,
    photo: "team/mem/nitansh.jpg",
    social: "https://github.com/BIJJUDAMA/",
    date: new Date(2025, 2, 4),
  },

  {
    name: "Kavinraj S",
    title: null,
    photo: "team/mem/kavinraj-s.jpg",
    social: "https://github.com/kavinraj-95",
    date: new Date(2025, 6, 14),
  },

  {
    name: "Keerthivasan S V",
    title: null,
    photo: "team/mem/keerthivasan.jpg",
    social: "https://github.com/Keerthivasan-Venkitajalam",
    date: new Date(2025, 2, 16),
  },

  {
    name: "Pranav Kishan T Y",
    title: null,
    photo: "team/mem/pranav-kishan.jpg",
    social: "https://github.com/Destroyer795",
    date: new Date(2025, 5, 25),
  },

  {
    name: "Vishnu Vardhan T",
    title: null,
    photo: "team/mem/vishnu-vardhan.jpg",
    social: "https://github.com/vTg2208",
    date: new Date(2025, 6, 8),
  },

  {
    name: "Preethi Kannan",
    title: null,
    photo: null,
    social: "",
    date: new Date(2025, 2, 20),
  },

  {
    name: "S Sanjeev Srinivas",
    title: null,
    photo: "team/mem/sanjeev-srinivas.jpeg",
    social: "https://github.com/EliteGamer007",
    date: new Date(2025, 5, 30),
  },

  {
    name: "Akshay KS",
    title: null,
    photo: "team/mem/akshay-ks.jpg",
    social: "https://github.com/akshayks13",
    date: new Date(2024, 0, 3),
  },

  {
    name: "Deepak SN",
    title: null,
    photo: null,
    social: "",
    date: new Date(2025, 9, 17),
  },

  {
    name: "Uhashini N",
    title: null,
    photo: "team/mem/uhashini-n.jpg",
    social: "https://www.linkedin.com/in/uhashini-n-3b144a291/",
    date: new Date(2025, 6, 20),
  },
  {
    name: "Kanishka Senthilkumar ",
    title: null,
    photo: "team/mem/kanishka-Senthilkumar.jpg",
    social: "https://www.linkedin.com/in/kanishka-senthilkumar-22b512291",
    date: new Date(2025, 6, 20),
  },
  {
    name: "Dharshni P",
    title: null,
    photo: "/team/mem/dharshni-p.jpg",
    social: "https://linkedin.com/in/p-dharshni",
    date: new Date(2025, 5, 30),
  },
];

export const ACMMembers: Person[] = [...ACMMembers_Unsorted].sort(
  (a, b) => (a.date as Date).getTime() - (b.date as Date).getTime(),
);
