import {
  mobile,
  backend,
  creator,
  web,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  web1,
  web2,
  web3,
  web4,
  mobile1,
  mobile2,
  mobile3,
  mobile4,
  backend1,
  backend2,
  backend3,
  backend4,
  ui1,
  ui2,
  ui3,
} from "../assets";

export const navLinks = [
  {
    id: "SERVICES",
    title: "SERVICES",
  },
  {
    id: "CAREER",
    title: "CAREER",
  },
  {
    id: "CONTACT US",
    title: "CONTACT US",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile App ",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },

];

const technologies = [
  {
    name: "t1",
    icon: web1,
  },
  {
    name: "t2",
    icon: web2,
  },
  {
    name: "t3",
    icon: web3,
  },
  {
    name: "t4",
    icon: web4,
  },
  {
    name: "t5",
    icon: mobile1,
  },
  {
    name: "t6",
    icon: mobile2,
  },

  {
    name: "t8",
    icon: mobile4,
  },
  {
    name: "t9",
    icon: backend1,
  },
  {
    name: "t10",
    icon: backend2,
  },
  {
    name: "t11",
    icon: backend3,
  },
  {
    name: "t12",
    icon: backend4,
  },
  {
    name: "t13",
    icon: ui1,
  },
  {
    name: "t14",
    icon: ui2,
  },
  {
    name: "t15",
    icon: ui3,
  },
];

const experiences = [
  {
    title: "Web Development",
    icon: starbucks,
    iconBg: "linear-gradient(131deg, #143058 0%, #1A6590 100%)",
    image: web1,
    image1: web2,
    image2: web3,
    image3: web4,
    points: [
      "As mobile devices continue to dominate the digital landscape,.",
      "but a necessity. A well-designed mobile app can help you connect.",
      "your customers, enhance their user experience, and drive business growth.",
      "we offer top-notch mobile app development services.",
    ],
  },
  {
    title: "Mobile App Development",
    icon: tesla,
    image: mobile1,
    image1: mobile2,
    image2: mobile3,
    image3: mobile4,
    iconBg: "linear-gradient(131deg, #143058 0%, #1A6590 100%)",
    points: [
      "In today's digital world, a strong online presence is essential for businesses to succeed. ",
      "Your website serves as the virtual face of your business, representing your brand.",
      " products, and services to the online audience.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Development",
    icon: shopify,
    image: backend1,
    image1: backend2,
    image2: backend3,
    image3: backend4,
    iconBg: "linear-gradient(131deg, #143058 0%, #1A6590 100%)",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: " UI/UX Designing Development",
    icon: meta,
    image: ui1,
    image1: ui2,
    image2: ui3,
    image3: backend1,
    iconBg: "linear-gradient(131deg, #143058 0%, #1A6590 100%)",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
