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
  { title: "Build Digital Asset", image: "course-digital.png", time: "4.5" },
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

/* ---------- SMALL PARTS ---------- */

function Logo() {
  return (
    <a href="/" className="logo" aria-label="ByteSpace home">
      <img className="logo-light" src="/assets/design/logo-light.png" alt="ByteSpace" />
      <img className="logo-dark" src="/assets/design/logo-dark.png" alt="" />
    </a>
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
  function searchCourses(event) {
    event.preventDefault();
    document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero">
      <Header />
      <div className="hero-content">
        <h1>Get Access to Hundreds<br />Courses Available</h1>
        <p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
        <form className="hero-search" onSubmit={searchCourses} role="search">
          <div className="hero-search-input">
            <Search size={18} aria-hidden="true" />
            <input aria-label="Search courses, topics, or creators" placeholder="Course, topic, creator" />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
      <img className="hero-illustration" src="/assets/design/hero-artwork.png" alt="A student learning on a laptop, with UI/UX courses, learning progress, and happy students" fetchPriority="high" />
      <img className="hero-decoration hero-spring" src="/assets/design/hero-spring.png" alt="" />
      <img className="hero-decoration hero-small-spring" src="/assets/design/hero-small-spring.png" alt="" />
      <img className="hero-decoration hero-cylinder" src="/assets/design/hero-cylinder.png" alt="" />
      <img className="hero-decoration hero-cone" src="/assets/design/hero-cone.png" alt="" />
    </section>
  );
}

function PartnerLogos() {
  return (
    <section className="partners" aria-label="Our learning partners">
      <img src="/assets/design/partners.png" alt="Five Logoipsum learning partners" />
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-image">
        <img src={`/assets/design/${course.image}`} alt={course.title} loading="lazy" />
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
          <img className="course-students" src="/assets/design/course-students.png" alt="26+ enrolled students" loading="lazy" />
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
            <img src="/assets/design/growth-artwork.png" alt="Student learning with a course preview and 55% learning progress" loading="lazy" />
          </div>
        </div>

        <div className="growth-row growth-row-second">
          <div className="growth-image">
            <img src="/assets/design/creator-artwork.png" alt="ByteSpace creator with revenue and happy student statistics" loading="lazy" />
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
      <img className="cta-decoration cta-left-top" src="/assets/design/cta-left-top.png" alt="" loading="lazy" />
      <img className="cta-decoration cta-right-top" src="/assets/design/cta-right-top.png" alt="" loading="lazy" />
      <img className="cta-decoration cta-left-bottom" src="/assets/design/cta-left-bottom.png" alt="" loading="lazy" />
      <img className="cta-decoration cta-right-bottom" src="/assets/design/cta-right-bottom.png" alt="" loading="lazy" />

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

        <a className="cta-button" href="/register.html">Join as Creator</a>
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
            <img className="testimonial-avatar" src={`/assets/design/${["sarah", "james", "alex"][index]}.png`} alt={testimonial.name} loading="lazy" />

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
            <input type="email" aria-label="Email address for newsletter" placeholder="Enter your email" />
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
