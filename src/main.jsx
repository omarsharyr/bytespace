import React from "react";
import { createRoot } from "react-dom/client";
import {
  Search,
  ShoppingBag,
  PencilRuler,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
  BarChart3,
  Check,
  Layers,
  Sun,
  Zap,
  Command,
  Aperture,
} from "lucide-react";
import "./style.css";

/* ---------- DATA ---------- */

const categoryRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
];

const courses = [
  { title: "Learn Figma from Basic", image: "course-figma.png", time: "4.5" },
  { title: "Build Digital Asset", image: "course-data.png", time: "4.5" },
  { title: "the Power of Big Data", image: "course-data.png", time: "4.5" },
  {
    title: "Balancing Productivity an...",
    image: "course-office.png",
    time: "4.5",
  },
  {
    title: "Mastering Money Manage...",
    image: "course-finance.png",
    time: "4.5",
  },
  {
    title: "From Idea to Startup Succ...",
    image: "course-team.png",
    time: "4.5",
  },
];

const learningPaths = [
  [PencilRuler, "Design"],
  [Code2, "Development"],
  [Laptop, "IT & Software"],
  [Building2, "Business"],
  [Megaphone, "Marketing"],
  [Camera, "Photography"],
];

const partnerIcons = [Layers, Sun, Zap, Command, Aperture];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    text: "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\"",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    text: "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    text: "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\"",
  },
];

const footerColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

/* ---------- 3D SHAPES (SVG) ----------
   Positions are in Figma (1440px) coordinates and stay anchored
   to the centre of the section, so they line up at any width. */

const PALETTE = {
  lime: { base: "#c9ff00", light: "#f0ff85", dark: "#87bd00" },
  white: { base: "#f5f6fb", light: "#ffffff", dark: "#c3cbe3" },
};

const at = (x, y) => ({
  left: `calc(50% - 720px + ${x}px)`,
  top: `${y}px`,
});

function Spring({ tone = "lime", w, h, stroke, rotate = 0, x, y }) {
  const c = PALETTE[tone];
  const s = stroke / 2 + 2;
  const d = `M ${s} ${h * 0.14} L ${w - s} ${h * 0.34} L ${s} ${h * 0.57} L ${
    w - s
  } ${h * 0.82}`;
  const common = {
    d,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  return (
    <svg
      className="shape"
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      style={at(x, y)}
    >
      <g transform={`rotate(${rotate} ${w / 2} ${h / 2})`}>
        <path {...common} stroke={c.dark} strokeWidth={stroke} transform="translate(0 6)" />
        <path {...common} stroke={c.base} strokeWidth={stroke} />
        <path
          {...common}
          stroke={c.light}
          strokeWidth={stroke * 0.32}
          opacity="0.85"
          transform={`translate(0 ${-stroke * 0.2})`}
        />
      </g>
    </svg>
  );
}

function Ring({ tone = "white", w, h, rotate = -28, x, y }) {
  const c = PALETTE[tone];
  const rx = w * 0.32;
  const ry = h * 0.27;
  const sw = w * 0.27;
  const e = { cx: w / 2, cy: h / 2, rx, ry, fill: "none" };
  return (
    <svg
      className="shape"
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      style={at(x, y)}
    >
      <g transform={`rotate(${rotate} ${w / 2} ${h / 2})`}>
        <ellipse {...e} stroke={c.dark} strokeWidth={sw} transform="translate(0 7)" />
        <ellipse {...e} stroke={c.base} strokeWidth={sw} />
        <ellipse
          {...e}
          stroke={c.light}
          strokeWidth={sw * 0.3}
          opacity="0.9"
          transform={`translate(0 ${-sw * 0.2})`}
        />
      </g>
    </svg>
  );
}

function Cone({ tone = "white", w, h, rotate = 0, x, y }) {
  const c = PALETTE[tone];
  return (
    <svg
      className="shape"
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      style={at(x, y)}
    >
      <g transform={`rotate(${rotate} ${w / 2} ${h / 2})`}>
        <polygon
          points={`${w * 0.62},2 ${w - 3},${h * 0.9} 3,${h * 0.7}`}
          fill={c.base}
          stroke={c.base}
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <polygon
          points={`${w * 0.62},2 ${w - 3},${h * 0.9} ${w * 0.5},${h * 0.8}`}
          fill={c.dark}
          opacity="0.55"
        />
        <polygon
          points={`${w * 0.62},2 ${w * 0.5},${h * 0.8} 3,${h * 0.7}`}
          fill={c.light}
        />
      </g>
    </svg>
  );
}

function Cylinder({ tone = "lime", w, h, rotate = -25, x, y }) {
  const c = PALETTE[tone];
  return (
    <svg
      className="shape"
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      style={at(x, y)}
    >
      <defs>
        <linearGradient id={`cyl-${tone}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor={c.light} />
          <stop offset="0.45" stopColor={c.base} />
          <stop offset="1" stopColor={c.dark} />
        </linearGradient>
      </defs>
      <g transform={`rotate(${rotate} ${w / 2} ${h / 2})`}>
        <rect
          x={w * 0.1}
          y={h * 0.12}
          width={w * 0.8}
          height={h * 0.78}
          rx={w * 0.32}
          fill={`url(#cyl-${tone})`}
        />
        <ellipse
          cx={w / 2}
          cy={h * 0.17}
          rx={w * 0.4}
          ry={h * 0.085}
          fill={c.light}
          opacity="0.85"
        />
      </g>
    </svg>
  );
}

/* ---------- SMALL PARTS ---------- */

function Logo() {
  return (
    <a href="#" className="logo">
      <span className="logo-symbol">
        <span />
      </span>
      <strong>ByteSpace</strong>
    </a>
  );
}

function Avatars({ count = 4, label, size = "sm" }) {
  return (
    <div className={`avatars avatars-${size}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={`av av-${(i % 7) + 1}`} />
      ))}
      <b>{label}</b>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <Logo />

      <nav className="main-nav">
        <a href="#" className="active">
          Home
        </a>
        <a href="#courses">Courses</a>
        <a href="#creators">Creators</a>
      </nav>

      <div className="header-actions">
        <a href="/login.html">Sign In</a>
        <a href="/register.html">Join Us</a>
        <ShoppingBag size={18} strokeWidth={1.8} />
      </div>
    </header>
  );
}

/* ---------- SECTIONS ---------- */

function Hero() {
  return (
    <section className="hero">
      <Header />

      <div className="hero-circle" />

      <Spring tone="lime" w={230} h={267} stroke={58} x={-35} y={286} />
      <Cylinder tone="lime" w={190} h={310} rotate={-25} x={1262} y={246} />
      <Spring tone="white" w={114} h={121} stroke={28} x={216} y={507} />
      <Ring tone="white" w={237} h={217} x={68} y={742} />
      <Cone tone="white" w={124} h={136} rotate={8} x={1132} y={486} />
      <Spring tone="white" w={189} h={248} stroke={52} x={1197} y={711} />

      <div className="hero-content">
        <h1>
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p>
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="hero-search">
          <div className="hero-search-input">
            <Search size={18} />
            <input placeholder="Course, topic, creator" />
          </div>

          <button>Search</button>
        </div>
      </div>

      <div className="hero-art">
        <img
          src="/assets/hero-person.png"
          alt="Student learning with ByteSpace"
        />
      </div>

      <div className="float-card card-topic">
        <strong>UI/UX Design</strong>
        <span>200 Courses &nbsp;•&nbsp; 1000+ Students</span>
      </div>

      <div className="float-card card-progress">
        <span>Learning Progress</span>
        <strong>55%</strong>
        <div className="progress-bar">
          <i />
        </div>
      </div>

      <div className="float-card card-students">
        <strong>Happy Students</strong>
        <span>
          <b>4.5</b> (240) <em>★</em>
        </span>
        <Avatars count={7} label="2K+" size="lg" />
      </div>
    </section>
  );
}

function PartnerLogos() {
  return (
    <section className="partners">
      {partnerIcons.map((Icon, index) => (
        <div className="partner" key={index}>
          <span className="partner-icon">
            <Icon size={20} strokeWidth={2} />
          </span>
          <strong>Logoipsum</strong>
        </div>
      ))}
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-image">
        <img src={`/assets/${course.image}`} alt={course.title} />

        <div className="course-image-tags">
          <span>17 Lessons</span>
          <span>2 hours 16 mins</span>
          <span>59 Comments</span>
        </div>
      </div>

      <div className="course-info">
        <div className="course-title-row">
          <h3>{course.title}</h3>
          <span>
            {course.time} <em>★</em>
          </span>
        </div>

        <p>
          by <strong>purepearl studio</strong>
        </p>

        <div className="course-meta">
          <span className="level">
            <BarChart3 size={13} /> Beginner
          </span>
          <Avatars count={4} label="26+" />
        </div>

        <div className="course-price">
          <strong>$25</strong>
          <small>/lifetime</small>
        </div>
      </div>
    </article>
  );
}

function Courses() {
  return (
    <section className="courses-section" id="courses">
      <div className="section-heading">
        <h2>
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        <p>
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>

      <div className="category-list">
        {categoryRows.map((row, rowIndex) => (
          <div className="category-row" key={rowIndex}>
            {row.map((category) =>
              category === "+ More" ? (
                <a href="#" className="category-more" key={category}>
                  {category}
                </a>
              ) : (
                <button
                  key={category}
                  className={category === "Featured" ? "active" : ""}
                >
                  {category}
                </button>
              )
            )}
          </div>
        ))}
      </div>

      <div className="course-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
}

function LearningPaths() {
  return (
    <section className="learning-section">
      <div className="section-heading">
        <h2>Explore Diverse Learning Paths at Bytespace</h2>

        <p>
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>

      <div className="learning-grid">
        {learningPaths.map(([Icon, title]) => (
          <article key={title}>
            <div className="path-icon">
              <Icon size={26} strokeWidth={1.8} />
            </div>

            <span>{title}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function GrowthFeatures() {
  return (
    <section className="growth-section" id="creators">
      <div className="growth-inner">
        <div className="growth-row">
          <div className="growth-copy">
            <h2>
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p>
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="stats">
              <div>
                <strong>12K</strong>
                <span>Students</span>
              </div>

              <div>
                <strong>70+</strong>
                <span>Courses</span>
              </div>

              <div>
                <strong>16</strong>
                <span>Creators</span>
              </div>
            </div>
          </div>

          <div className="growth-image growth-image-right">
            <img src="/assets/growth-person.png" alt="Student learning" />
          </div>
        </div>

        <div className="growth-row growth-row-second">
          <div className="growth-image">
            <img src="/assets/creator-person.png" alt="ByteSpace creator" />
          </div>

          <div className="growth-copy creator-copy">
            <h2>
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>

            <p>
              <strong>ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>

            <ul>
              <li>
                <Check size={13} strokeWidth={3} /> Share Your Expertise
              </li>
              <li>
                <Check size={13} strokeWidth={3} /> Monetize Your Passion
              </li>
              <li>
                <Check size={13} strokeWidth={3} /> Flexibility and Autonomy
              </li>
              <li>
                <Check size={13} strokeWidth={3} /> Build a Community
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreatorCTA() {
  return (
    <section className="creator-cta">
      <Spring tone="lime" w={200} h={170} stroke={46} x={-30} y={3} />
      <Spring tone="white" w={114} h={121} stroke={28} x={211} y={35} />
      <Cone tone="lime" w={124} h={137} rotate={8} x={1106} y={22} />
      <Cylinder tone="white" w={190} h={300} rotate={-22} x={1262} y={41} />
      <Cone tone="white" w={120} h={152} rotate={-12} x={-8} y={242} />
      <Ring tone="lime" w={237} h={217} rotate={-15} x={70} y={359} />
      <Spring tone="lime" w={189} h={190} stroke={46} x={1180} y={328} />

      <div className="cta-content">
        <h2>
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        <p>
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button>Join as Creator</button>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="community-section">
      <div className="community-top">
        <h2>
          Discover What Our
          <br />
          Community Is Saying
        </h2>

        <p>
          At ByteSpace, our vibrant community of learners and creators is at the
          heart of what we do. Hear directly from those who have experienced the
          transformative journey of learning and creating on our platform.
          Explore testimonials that reflect the diverse perspectives of
          enthusiastic learners and accomplished creators.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <article key={testimonial.name}>
            <div className={`testimonial-avatar avatar-${index + 1}`}>
              {testimonial.name.charAt(0)}
            </div>

            <h3>{testimonial.name}</h3>
            <span>{testimonial.role}</span>

            <p>{testimonial.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Logo />

          <p>
            Stay Up to date with our latest features and releases by joining our
            newsletter.
          </p>

          <div className="footer-newsletter">
            <input placeholder="Enter your email" />
            <button>Search</button>
          </div>

          <small>
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </small>
        </div>

        {footerColumns.map((column, index) => (
          <div className="footer-column" key={index}>
            {column.map((item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© 2023 ByteSpace. All rights reserved.</span>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <Courses />
      <LearningPaths />
      <GrowthFeatures />
      <CreatorCTA />
      <Community />
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);