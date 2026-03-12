const data = {
  en: {
    header: {
      hi: "Hi! 👋",
      title: "I’m Almila. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
      currentRole: {
        part1: "Currently",
        part2: "Freelancing",
        part3: "for",
        part4: "UX, UI, & Web Design", 
        part5:"Project.",
      },
      invite: "Invite me to join your team ->",
      email: "pratamalila@gmail.com",
    },
    skills: [
      { name: "JAVASCRIPT", icon: "/images/logos/logo1.png"},
      { name: "REACT", icon: "/images/logos/logo2.png" },
      { name: "REDUX", icon: "/images/logos/logo3.png" },
      { name: "NODE", icon: "/images/logos/logo4.png" },
      { name: "VS CODE", icon: "/images/logos/logo5.png" },
      { name: "FIGMA", icon: "/images/logos/logo6.png" },
    ],
    profile: {
      title: "Profile",
      firstName: "Almila",
      basicInfo: {
        title: "Basic Information",
        items: [
          { label: "Birthday", value: "24.03.1996" },
          { label: "City", value: "Ankara" },
          { label: "Education", value: "Hacettepe Univ. Biology Bachelor's, 2016" },
          { label: "Preferred Role", value: "Frontend, UI" },
        ],
      },
      aboutMe: {
        title: "About me",
        content: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum quo utatum nisi mollitia.",
          "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        ],
      },
    },
    projects: {
      title: "Projects",
      list: [
        {
          title: "Random Jokes",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          tags: ["react", "vercel", "axios", "router"],
          github: "View on Github",
          app: "Go to app",
          img: "/images/randomJokes.png",
        },
        {
          title: "Are you bored?",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
          tags: ["react", "redux", "axios", "router", "vercel"],
          github: "View on Github",
          app: "Go to app",
          img: "/images/areYouBored.png",
        },
      ],
    },
    footer: {
      title: "Let’s work together on your next product.",
      links: [
        { name: "Github", url: "#" },
        { name: "Personal Blog", url: "#" },
        { name: "Linkedin", url: "#" },
        { name: "Email", url: "mailto:pratamalila@gmail.com" },
      ],
    },
  },
  tr: {
    header: {
      hi: "Selam! 👋",
      title: "Ben Almila. Full-stack yazılımcıyım. Sağlam ve ölçeklenebilir frontend projeleri geliştiriyorum. Tanışalım!",
      currentRole: {
        part1: "Şu an",
        part2: "UX, UI ve Web Tasarım projeleri",
        part3: "için",
        part4: "Freelance", 
        part5: "çalışıyorum.",
      },
      invite: "Beni ekibinize davet edin ->",
      email: "pratamalila@gmail.com",
    },
    skills: [
      { name: "JAVASCRIPT", icon: "/images/logos/logo1.png"},
      { name: "REACT", icon: "/images/logos/logo2.png" },
      { name: "REDUX", icon: "/images/logos/logo3.png" },
      { name: "NODE", icon: "/images/logos/logo4.png" },
      { name: "VS CODE", icon: "/images/logos/logo5.png" },
      { name: "FIGMA", icon: "/images/logos/logo6.png" },
    ],
    profile: {
      title: "Profil",
      basicInfo: {
        title: "Temel Bilgiler",
        items: [
          { label: "Doğum Tarihi", value: "24.03.1996" },
          { label: "İkamet Şehri", value: "Ankara" },
          { label: "Eğitim Durumu", value: "Hacettepe Üni. Biyoloji Lisans, 2016" },
          { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
        ],
      },
      aboutMe: {
        title: "Hakkımda",
        content: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum quo utatum nisi mollitia.",
          "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        ],
      },
    },
    projects: {
      title: "Projeler",
      list: [
        {
          title: "Rastgele Şakalar",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          tags: ["react", "vercel", "axios", "router"],
          github: "Github'da Görüntüle",
          app: "Uygulamaya Git",
          img: "/images/randomJokes.png",
        },
        {
          title: "Sıkıldın mı?",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
          tags: ["react", "redux", "axios", "router", "vercel"],
          github: "Github'da Görüntüle",
          app: "Uygulamaya Git",
          img: "/images/areYouBored.png",
        },
      ],
    },
    footer: {
      title: "Bir sonraki projenizde birlikte çalışalım.",
      links: [
        { name: "Github", url: "#" },
        { name: "Kişisel Blog", url: "#" },
        { name: "Linkedin", url: "#" },
        { name: "E-posta", url: "mailto:pratamalila@gmail.com" },
      ],
    },
  },
};

export default data;