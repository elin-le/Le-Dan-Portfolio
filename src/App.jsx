import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  User,
  Layers,
  Server,
  Palette,
  Database,
  GraduationCap,
  Volleyball,
  Music,
  Tv,
  Waves,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

/* ───────── EDIT YOUR INFO HERE ───────── */

const PHOTO = "/avatar.JPG";
const LINKEDIN = "https://linkedin.com/in/dan-le-41452b350";
const EMAIL = "elin.le.dev@gmail.com";
const PHONE = "0839003848";
// GitHub is intentionally hidden for now.

/* ───────── DATA ───────── */

const skills = [
  {
    icon: Server,
    title: "Backend",
    items: ["Java", "Spring Boot", "JPA", "RESTful API", "JWT Auth"],
  },
  {
    icon: Palette,
    title: "Frontend",
    items: ["TypeScript", "ReactJS", "Tailwind CSS", "Zustand"],
  },
  {
    icon: Database,
    title: "Database & Tools",
    items: ["MySQL", "PostgreSQL", "Redis", "Git / GitHub", "Docker"],
  },
];

const jobs = [
  {
    when: "07/2026 – 10/2026",
    name: "Digital Green Eligibility Checker",
    org: "NAB Innovation Centre Vietnam",
    highlight: true,
    role: "Technical Lead · Backend Software Engineer",
    points: [
      "Coordinated development progress, reviewed pull requests, and helped teammates resolve technical blockers.",
      "Translated requirements into User Journeys, system workflows, and database designs with stakeholders and mentors.",
      "Established the repository, base code, coding conventions, and development practices to keep the team consistent.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "REST API"],
  },
  {
    when: "03/2026 – 06/2026",
    name: "Minh Hoang Seafood Store",
    org: "Freelance",
    role: "Software Engineer · Full-stack",
    points: [
      "Built a full-stack ordering and management system covering product browsing, consultation, order processing, and order tracking.",
      "Designed RBAC authentication/authorization with JWT and developed RESTful APIs using Java Spring Boot.",
      "Built an Admin Dashboard and integrated the backend with a React frontend, including state management and image storage.",
    ],
    stack: ["Spring Boot", "MySQL", "React", "Zustand", "Cloudinary"],
  },
  {
    when: "05/2026 – 06/2026",
    name: "Habit Checker",
    org: "NAB Innovation Centre Vietnam",
    highlight: true,
    role: "Team Lead · Frontend Software Engineer",
    points: [
      "Led a development team: coordinated tasks, supported teammates, and organized meetings, documentation, and workspace.",
      "Developed the application with React, TypeScript, and Tailwind CSS, contributing to core features and UI implementation.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "GitHub"],
  },
];

const projects = [
  {
    tag: "Self-learning",
    name: "Giang Handmade Crochet Store",
    desc: "A full-stack e-commerce app for selling handmade crochet products, with product management, Google OAuth2 sign-in, and image storage on Cloudinary.",
    stack: ["Spring Boot", "JPA", "MySQL", "React", "Zustand", "OAuth2"],
  },
  {
    tag: "Graduation thesis",
    name: "Social Cooking Web App",
    desc: "A microservices-based social cooking platform with recipe sharing, user interactions, and a weekly recipe ranking system.",
    stack: ["Gateway", "Eureka", "Kafka", "Redis", "Elasticsearch", "Docker"],
  },
];

const interests = [
  {
    icon: Volleyball,
    title: "Sports",
    desc: "Volleyball - Badminton",
  },
  {
    icon: Music,
    title: "Music",
    desc: "Listening - Singing",
  },
  {
    icon: Tv,
    title: "Anime",
    desc: "Fantastic - Different worlds -Horror - Mystery",
  },
  {
    icon: Waves,
    title: "Outdoors",
    desc: "Mental Walking - Sea - Open skies",
  },
];

/* ───────── SHARED ───────── */

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, y = 28, className = "" }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

function Chip({ children, dark, onCard }) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-sm transition-colors duration-300 ${
        dark
          ? "border-white/25 text-white/85 hover:bg-white hover:text-navy"
          : onCard
            ? "border-burgundy/25 text-burgundy group-hover:border-white/40 group-hover:text-white hover:bg-white! hover:text-navy! hover:border-white!"
            : "border-burgundy/25 text-burgundy hover:bg-burgundy hover:text-white"
      }`}
    >
      {children}
    </span>
  );
}

/* ───────── NAVIGATION ───────── */

function Nav() {
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  const links = [
    ["Experience", "work"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Beyond Code", "beyond"],
    ["Contact", "contact"],
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease,
        delay: 1.4,
      }}
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2"
    >
      <nav className="relative flex items-center justify-between overflow-hidden rounded-full border border-burgundy/15 bg-paper/80 px-5 py-2.5 shadow-lg shadow-burgundy/5 backdrop-blur-xl">
        <a
          href="#top"
          className="text-lg font-bold italic text-burgundy"
        >
          Lê Đan
        </a>

        <ul className="hidden gap-5 text-[14px] md:flex">
          {links.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="relative text-navy/80 transition-colors hover:text-burgundy after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-burgundy after:transition-transform after:duration-500 hover:after:scale-x-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full bg-burgundy px-4 py-1.5 text-sm text-white transition-colors hover:bg-navy"
        >
          Hire me
        </a>

        <motion.span
          style={{ scaleX: w }}
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-burgundy"
        />
      </nav>
    </motion.header>
  );
}

/* ───────── HERO ───────── */

function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBig = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );

  const yPhoto = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 80]
  );

  const line = (txt, d) => (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.3,
          ease,
          delay: d,
        }}
      >
        {txt}
      </motion.span>
    </span>
  );

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen overflow-hidden px-6 pb-16 pt-32 md:px-14"
    >
      <motion.div
        style={{ y: yBig }}
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-[34rem] w-[34rem] rounded-full bg-blush blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            className="mb-5 flex items-center gap-2 text-lg italic text-burgundy"
          >
            <MapPin size={18} />
            Ho Chi Minh City · Open to work
          </motion.p>

          <h1 className="text-[clamp(4.5rem,15vw,12rem)] font-black leading-[0.88] tracking-tight text-navy">
            {line("Lê", 0.4)}

            <span className="block italic text-burgundy">
              {line("Đan", 0.6)}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease,
              delay: 1.1,
            }}
            className="mt-8 max-w-xl text-xl leading-relaxed text-navy/80"
          >
            Software Engineer building backends with Java Spring Boot
            and interfaces with React. I turn business requirements into
            working systems that are clean and easy to maintain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease,
              delay: 1.3,
            }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3.5 text-white transition-all duration-500 hover:bg-navy hover:shadow-xl hover:shadow-navy/20"
            >
              Professional experience
              <ArrowUpRight
                size={18}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy/25 px-7 py-3.5 text-navy transition-colors duration-500 hover:border-burgundy hover:text-burgundy"
            >
              <Mail size={18} />
              Email me
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ y: yPhoto }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <motion.div
            aria-hidden
            initial={{ opacity: 0, x: -10, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 1.4,
              ease,
              delay: 1.0,
            }}
            className="absolute inset-0 -translate-x-6 translate-y-6 rounded-t-full bg-blush"
          />

          <motion.div
            aria-hidden
            initial={{ opacity: 0, x: 10, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 1.4,
              ease,
              delay: 1.2,
            }}
            className="absolute inset-0 translate-x-5 -translate-y-5 rounded-t-full border border-burgundy/40"
          />

          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{
              duration: 1.6,
              ease,
              delay: 0.5,
            }}
            className="group relative aspect-[3/4] overflow-hidden rounded-t-full bg-gradient-to-b from-burgundy to-navy"
          >
            {PHOTO ? (
              <img
                src={PHOTO}
                alt="Lê Đan"
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-white/70">
                <User size={72} strokeWidth={1} />

                <span className="px-8 text-center text-sm italic">
                  Your photo goes here
                  <br />
                  (set PHOTO in App.jsx)
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────── ABOUT ───────── */

function About() {
  const facts = [
    ["2", "lead roles"],
    ["5+", "projects built"],
    ["1", "microservices thesis"],
  ];

  const traits = [
    [
      "Careful work",
      "I write clean, maintainable code and review it as if it were my own.",
    ],
    [
      "Curious mind",
      "I keep asking until requirements become clear workflows and database designs.",
    ],
    [
      "Fast learner",
      "I teach myself new technologies and put them straight into real projects.",
    ],
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-28 md:px-14"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="text-2xl leading-[1.7] text-navy md:text-[1.7rem]">
              I'm{" "}
              <span className="italic text-burgundy">
                Lê Yến Đan
              </span>
              , also known as Lê Đan or Elin Le. I build backends
              with Java and Spring Boot, and the React frontends that
              sit on top of them.
            </p>

            <p className="mt-5 text-lg leading-[1.85] text-navy/75">
              My experience comes from professional, freelance, and
              academic projects. I take ownership of my tasks and
              contribute to the team, including leading development
              and reviewing code when needed.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 flex items-start gap-4 rounded-3xl border border-burgundy/15 bg-blush/50 p-6">
              <GraduationCap
                size={32}
                strokeWidth={1.3}
                className="mt-1 shrink-0 text-burgundy"
              />

              <div>
                <p className="text-xl font-bold text-navy">
                  Saigon Technology University (STU)
                </p>

                <p className="mt-1 text-navy/75">
                  Information Technology · GPA 3.25 / 4.0
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-burgundy/20 pt-8">
              {facts.map(([number, label]) => (
                <div key={label}>
                  <div className="text-5xl font-black italic text-burgundy">
                    {number}
                  </div>

                  <div className="mt-1 text-navy/70">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div>
          {traits.map(([title, desc], i) => (
            <Reveal
              key={title}
              delay={i * 0.12}
            >
              <div
                className={`group relative border-t border-burgundy/20 py-9 md:py-12 ${
                  i === traits.length - 1
                    ? "border-b"
                    : ""
                }`}
              >
                <span
                  aria-hidden
                  className="absolute -top-px left-0 h-[2px] w-full origin-left scale-x-0 bg-burgundy transition-transform duration-700 ease-out group-hover:scale-x-100"
                />

                <h3 className="text-5xl font-bold italic leading-none text-navy transition-all duration-700 ease-out group-hover:translate-x-4 group-hover:text-burgundy md:text-7xl">
                  {title}
                </h3>

                <p className="mt-5 max-w-md text-lg leading-relaxed text-navy/70 transition-transform duration-700 ease-out group-hover:translate-x-4">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── SKILLS ───────── */

function Skills() {
  return (
    <section
      id="skills"
      className="bg-blush/60 px-6 py-28 md:px-14"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="mb-14 max-w-2xl text-5xl font-bold text-navy md:text-6xl">
            The tools I use every day
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal
              key={skill.title}
              delay={i * 0.12}
            >
              <div className="group h-full rounded-[2rem] rounded-tr-[5rem] border border-burgundy/10 bg-paper p-8 transition-all duration-700 hover:-translate-y-2 hover:bg-navy hover:text-white">
                <skill.icon
                  size={34}
                  strokeWidth={1.3}
                  className="mb-6 text-burgundy transition-colors duration-700 group-hover:text-white"
                />

                <h3 className="mb-5 text-2xl font-bold italic">
                  {skill.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Chip
                      onCard
                      key={item}
                    >
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── EXPERIENCE ───────── */

function Work() {
  const nab = jobs.filter((job) => job.highlight);
  const others = jobs.filter((job) => !job.highlight);

  const [open, setOpen] = useState(-1);

  return (
    <section
      id="work"
      className="bg-navy px-6 py-28 text-white md:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-12 text-5xl font-bold md:text-6xl">
            Professional{" "}
            <span className="italic text-blush">
              experience
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-paper p-8 pl-10 text-navy shadow-2xl shadow-black/30 md:p-12 md:pl-14">
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-3 bg-burgundy"
            />

            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="italic text-burgundy">
                  Featured · 2 projects
                </p>

                <h3 className="mt-2 text-3xl font-black leading-tight text-burgundy md:text-5xl">
                  NAB Innovation Centre Vietnam
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                <Chip>Technical Lead</Chip>
                <Chip>Team Lead</Chip>
              </div>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {nab.map((job) => (
                <div
                  key={job.name}
                  className="border-t border-burgundy/20 pt-6"
                >
                  <p className="italic text-burgundy">
                    {job.when} · HCMC
                  </p>

                  <h4 className="mt-1 text-2xl font-bold">
                    {job.name}
                  </h4>

                  <p className="mt-1 italic text-navy/70">
                    {job.role}
                  </p>

                  <ul className="mt-5 space-y-3 text-[17px] leading-relaxed text-navy/85">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((item) => (
                      <Chip key={item}>
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="mb-6 mt-20 text-2xl italic text-white/70">
            Other experience
          </h3>
        </Reveal>

        <div className="space-y-4">
          {others.map((job, i) => {
            const on = open === i;

            return (
              <Reveal
                key={job.name}
                delay={i * 0.08}
              >
                <button
                  onClick={() =>
                    setOpen(on ? -1 : i)
                  }
                  aria-expanded={on}
                  className={`w-full rounded-3xl border p-6 text-left transition-colors duration-500 md:p-8 ${
                    on
                      ? "border-white/30 bg-white/[0.07]"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-sm italic text-white/60">
                        {job.when} · HCMC
                      </p>

                      <h3 className="mt-1 text-2xl font-bold md:text-3xl">
                        {job.name}
                      </h3>

                      <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-semibold text-white">
                          {job.org}
                        </span>

                        <span className="italic text-white/75">
                          {job.role}
                        </span>
                      </p>
                    </div>

                    <motion.span
                      animate={{
                        rotate: on ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease,
                      }}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/30"
                    >
                      <ArrowUpRight size={18} />
                    </motion.span>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: on ? "auto" : 0,
                      opacity: on ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.7,
                      ease,
                    }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-5 space-y-3 text-lg leading-relaxed text-white/85">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blush" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.stack.map((item) => (
                        <Chip
                          dark
                          key={item}
                        >
                          {item}
                        </Chip>
                      ))}
                    </div>
                  </motion.div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────── PROJECTS ───────── */

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-28 md:px-14"
    >
      <Reveal>
        <h2 className="mb-14 text-5xl font-bold text-navy md:text-6xl">
          Personal{" "}
          <span className="italic text-burgundy">
            projects
          </span>
        </h2>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 0.15}
          >
            <article
              className={`group relative h-full overflow-hidden rounded-[2.5rem] p-10 transition-transform duration-700 hover:-translate-y-2 ${
                i
                  ? "bg-navy text-white"
                  : "bg-burgundy text-white"
              }`}
            >
              <Layers
                aria-hidden
                size={220}
                strokeWidth={0.6}
                className="absolute -bottom-10 -right-10 text-white/10 transition-transform duration-1000 group-hover:rotate-12 group-hover:scale-110"
              />

              <span className="rounded-full bg-white/15 px-3 py-1 text-sm italic">
                {project.tag}
              </span>

              <h3 className="mt-6 text-3xl font-bold md:text-4xl">
                {project.name}
              </h3>

              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/85">
                {project.desc}
              </p>

              <div className="relative mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Chip
                    dark
                    key={item}
                  >
                    {item}
                  </Chip>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ───────── BEYOND CODE ───────── */

function BeyondCode() {
  return (
    <section
      id="beyond"
      className="bg-blush/60 px-6 py-28 md:px-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="mb-4 italic text-burgundy">
              Beyond the code
            </p>

            <h2 className="text-5xl font-bold leading-tight text-navy md:text-6xl">
              A little more{" "}
              <span className="italic text-burgundy">
                about me
              </span>
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-navy/70">
              When I'm away from my laptop, I enjoy staying active,
              listening to music, watching anime, and taking quiet
              walks — especially around the river, the sea, or under
              an open sky.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {interests.map((interest, i) => {
              const Icon = interest.icon;

              return (
                <Reveal
                  key={interest.title}
                  delay={i * 0.1}
                >
                  <div className="group h-full rounded-[2rem] border border-burgundy/10 bg-paper p-7 transition-all duration-700 hover:-translate-y-2 hover:bg-navy hover:text-white">
                    <Icon
                      size={34}
                      strokeWidth={1.3}
                      className="mb-8 text-burgundy transition-colors duration-700 group-hover:text-blush"
                    />

                    <h3 className="text-2xl font-bold italic text-navy transition-colors duration-700 group-hover:text-white">
                      {interest.title}
                    </h3>

                    <p className="mt-3 text-navy/65 transition-colors duration-700 group-hover:text-white/70">
                      {interest.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── CONTACT ───────── */

function Contact() {
  const items = [
    [Mail, EMAIL, `mailto:${EMAIL}`],
    [Phone, PHONE, `tel:${PHONE}`],
    [FaLinkedinIn, "LinkedIn", LINKEDIN],
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-wine px-6 py-32 text-white md:px-14"
    >
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="text-5xl font-bold leading-tight md:text-7xl">
            Let's build something{" "}
            <span className="italic text-blush">
              worth using
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-10 inline-block break-all border-b border-white/40 pb-1 text-2xl italic transition-colors duration-500 hover:border-white hover:text-blush md:text-4xl"
          >
            {EMAIL}
          </a>
        </Reveal>

        <Reveal
          delay={0.3}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {items.map(([Icon, label, href]) => (
            <a
              key={label}
              href={href}
              target={
                href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:text-wine"
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </Reveal>

        <p className="mt-20 text-sm text-white/50">
          © 2026 Lê Yến Đan (Elin Le)
        </p>
      </div>
    </section>
  );
}

/* ───────── APP ───────── */

export default function App() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Projects />
        <BeyondCode />
        <Contact />
      </main>
    </>
  );
}