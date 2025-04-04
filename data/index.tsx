export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack!",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop!",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Weather App",
    des: "Weather app provides real-time weather updates, including temperature and humidity for different locations using React.js.",
    img: "/weatherr.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://weather-one-sand.vercel.app/",
  },
  {
    id: 2,
    title: "Calculator App",
    des: "A user-friendly calculator app for performing basic arithmetic operations with a simple and intuitive interface using React.js.",
    img: "/calci.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://calci-chi-three.vercel.app/",
  },
  {
    id: 3,
    title: "My Landing Page",
    des: "My personal landing page with a sleek design, featuring light/dark mode, animated text, and a navbar for easy navigation through milestones and projects built using React.js.",
    img: "/landing pg.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://anu-blush.vercel.app/",
  },
  {
    id: 4,
    title: "To Do List",
    des: "Simple and efficient to-do list app for organizing tasks, setting priorities and tracking progress using React.js.",
    img: "/todo.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://to-do-umber-phi.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Anupama was an absolute pleasure. Her professionalism, promptness and dedication to delivering exceptional results were evident throughout our project. Anupama's enthusiasm for every facet of development truly stands out.",
    name: "Aditya Singh",
    title: "Blockchain Full-Stack Engineer",
  },
  {
    quote:
      "Working with Anupama was an outstanding experience. Her attention to detail and commitment to excellence greatly enhanced the quality of our project. Anupama's proactive communication and positive attitude made collaboration seamless and enjoyable.",
    name: "Prof. Minu Singh",
    title: "Professor, University of Mumbai",
  },
  {
    quote:
      "It was a delight to collaborate with Anupama. Her creativity and problem-solving skills were instrumental in overcoming challenges during our project. Anupama's passion for her work is contagious, inspiring everyone around her to strive for greatness.",
    name: "Karishma Lalwani",
    title: "Software Engineer, Bank of America",
  },
  {
    quote:
      "I had a fantastic experience working alongside Anupama. Her ability to stay organized and focused under pressure ensured that we met our deadlines without compromising quality. Anupama's collaborative spirit and willingness to share knowledge enriched our teamwork.",
    name: "Indu Mehta",
    title: "Senior Software Engineer, Apple ",
  },
  {
    quote:
      "Collaborating with Anupama was truly rewarding. Her strong work ethic and enthusiasm for development were evident in every task she undertook. Anupama's ability to bring innovative ideas to the table consistently pushed our project to new heights.",
    name: "Aditi Bhattacharya",
    title: "Machine Learning Engineer, Snap Inc.",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer, WhiteHat Jr.",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Assistant Professor, University of Mumbai",
    desc: "Taught Blockchain & DLT, Data Structures, DBMS, Software Project Dev. Mentored 100+ final-year students in their projects.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web Developer Freelance, Dacade ",
    desc: "Contributed to several projects by improving code, smart contracts and doucumentation.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Developer Intern, AERB (BARC)",
    desc: "Performed simulations on FEAST Software by ISRO.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];