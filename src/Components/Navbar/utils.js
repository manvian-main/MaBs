import { desc } from "framer-motion/client";
import {
  ShieldPlus, TrendingUp, MonitorPlay, Cpu, Megaphone, ShoppingCart
  , HeartPulse, Archive, Layers, Eye, ArrowUpRight, Award, Info, Target, Users, MessageCircle, NotebookPen, Newspaper,Rocket,Laptop,DollarSign,Shirt,Home,Table2,Factory,Leaf,Mic2,
  icons,
} from "lucide-react";
export const Menus = [
  // -----What we Do
  {
    name: "What We Do",
    path: "/",
    subMenuHeading: ["Service", "Industries"],
    subMenu: [
      // Service
      {
        name: "Recruitment As a Service",
        
        icon: ShieldPlus,
        category: "Service",
        path: "/service/RAAS",
      },
      {
        name: "Sales as a Service",
        
        icon: TrendingUp,
        category: "Service",
        path: "/service/Sales",
      },
      {
        name: "MultiMedia Solution",
        icon: MonitorPlay,
        category: "Service",
        path: "/service/multimedia",
      },
      {
        name: "Technology solution",
        icon: Cpu,
        category: "Service",
        path: "/service/TechSolution",
      },
      {
        name: "Digital Marketing Solution",
        icon: Megaphone,
        category: "Service",
        path: "/service/DigitalMarketing",
      },
      {
        name: "Business Strategy Consulting",
        icon: Layers,
        category: "Service",
        path: "/service/Business",
      },
      {
        name: "Sustainability-as-a-Service",
        icon: Layers,
        category: "Service",
        path: "/service/SaaS",
      },


      // Industry items
      {
        name: "E-commerce",
        icon: ShoppingCart,
        category: "Industries",
        path: "/service",
      },
      {
        name: "Healthcare",
        icon: HeartPulse,
        category: "Industries",
        path: "/service",
      },
      {
        name: "Startups & Entrepreneurs",
        icon: Rocket,
        category: "Industries",
      },
      {
        name: "Software Industry",
        icon: Laptop,
        category: "Industries",
      },
      {
        name: "FinTech",
        icon: DollarSign,
        category: "Industries",
      },
      {
        name: "Fashion",
        icon: Shirt,
        category: "Industries",
      },
      {
        name: "Real estate",
        icon: Home,
        category: "Industries",
      },
      {
        name: "Food Industry",
        icon: Table2,
        category: "Industries",
      },
      {
        name: "Manfacturing",
        icon: Factory,
        category: "Industries",
      },
      {
        name: "Sustainablity",
        icon: Leaf,
        category: "Industries",
      },
      {
        name: "Media",
        icon: Mic2,
        category: "Industries",
      },
    ],

    gridCols: 3,
  },
  // Who we are
  {
    name: "Who We Are",
    path: "/who",
    subMenu: [
      {
        name: "About us",
        desc: "To deliver innovative and reliable technology services that empower industries across the globe.",
        icon: Info,
        path: "/who",

      },
      {
        name: "Vision",
        desc: "To deliver innovative and reliable technology services that empower industries across the globe.",
        icon: Eye,
        path: "/service",

      },
      {
        name: "Mission",
        desc: "To provide high-quality, customer-centric IT solutions that drive business growth and operational excellence.",
        icon: ArrowUpRight,
        path: "/service",

      },
      {
        name: "Goal",
        desc: "To become a trusted global leader in delivering reliable and innovative technology services.",
        icon: Target,
        path: "/service",

      },
      {
        name: "Value",
        desc: "Integrity, customer-centricity, innovation, collaboration, and excellence.",
        icon: Award,
        path: "/service",

      },

    ],
    gridCols: 1,
  },
  // Others
  {
    name: "Insights",
    path: "/insights",
    subMenu: [
      {
        name: "Our Clients",
        icon: Users,
        desc: "Proud partners to visionary brands - join the list and let's create something great together!",
        path: "/insights/clientslogo", // Unique path for smooth scroll logic
      },
      {
        name: "Testimonials",
        icon: MessageCircle, 
        desc: "Hear directly from those who’ve experienced the impact of our work.",
        path: "/insights/testimonials",
      },
      {
        name: "Blogs",
        icon: NotebookPen,
        desc: "Insights, ideas, and innovations - explore our latest thoughts and stories.",
        path: "/insights/blogs",
      },
      {
        name: "News",
        icon: Newspaper,
        desc: "Stay updated with our latest milestones, media features, and big announcements.",
        path: "/insights/news",
      },
    ],

  },

  {
    name: "Career",
    path: "/careers",
  },
   {
    name: "Product",
    path: "/product",

  },
  {
    name: "Contact",
    path: "/contact",
  },
];
