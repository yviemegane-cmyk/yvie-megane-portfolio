import { useState, type CSSProperties, type PointerEvent } from "react";
import {
  ArrowDownRight,
  Briefcase,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Send,
  Sun,
} from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import {
  projects,
  sectionIds,
  services,
  skillGroups,
  stats,
  testimonials,
  timeline,
} from "@/data/portfolio";
import portraitImage from "@/assets/portrait-yvie.jpg";

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const [pointerStyle, setPointerStyle] = useState<CSSProperties>(
    { "--pointer-x": "50%", "--pointer-y": "50%" } as CSSProperties,
  );

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    setPointerStyle({ "--pointer-x": `${x}%`, "--pointer-y": `${y}%` } as CSSProperties);
  };

  return (
    <main id="top" className="min-h-screen">
      {/* ============== NAVIGATION ============== */}
      <div className="container pt-6">
        <header className="nav-pill mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-base font-bold tracking-tight text-foreground"
            aria-label="Sieyapdji Megane home"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground shadow-glow"
              aria-hidden
            >
              YM
            </span>
            <span className="hidden sm:inline">Megane</span>
          </a>

          <nav className="hidden items-center gap-1 text-sm text-muted-foreground md:flex">
            {sectionIds.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
              <a href="#contact">
                Hire Me
                <Send className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </header>
      </div>

      {/* ============== HERO ============== */}
      <section
        className="section-shell"
        onPointerMove={handlePointerMove}
        style={pointerStyle}
      >
        <div className="container grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
          <div className="space-y-7">
            <span className="section-kicker">Software Engineer Portfolio</span>

            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              I&apos;m Sieyapdji Megane,
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                A Software Engineer
              </span>
            </h1>

            <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              I design and build scalable, high-performance web applications that turn
              product ideas into smooth, responsive experiences people genuinely enjoy
              using.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="#projects">
                  View Projects
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="soft" size="lg">
                <a href="/yvie-megane-cv.pdf" download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
              <a
                href="https://github.com/sieyapdjimegane"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/sieyapdji-megane"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="mailto:hello@sieyapdjimegane.dev"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>

          {/* Portrait with circular gradient backdrop */}
          <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
            <div
              className="absolute inset-0 mx-auto h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-90 blur-[2px] sm:h-[26rem] sm:w-[26rem]"
              aria-hidden
            />
            <div
              className="absolute -right-4 top-8 h-20 w-20 animate-float rounded-2xl border border-border bg-card p-3 shadow-panel"
              aria-hidden
            >
              <Code2 className="h-full w-full text-primary" />
            </div>
            <div
              className="absolute -left-4 bottom-10 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold shadow-panel"
              aria-hidden
            >
              <span className="h-2 w-2 rounded-full bg-success" />
              Available for work
            </div>
            <img
              src={portraitImage}
              alt="Portrait of Sieyapdji Megane, software engineer"
              width={1024}
              height={1024}
              className="relative z-10 h-[20rem] w-[20rem] rounded-full border-4 border-card object-cover shadow-glow sm:h-[24rem] sm:w-[24rem]"
            />
          </div>
        </div>

        {/* Stats strip */}
        <div className="container pb-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="panel px-5 py-5 text-center">
                <p className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== ABOUT ============== */}
      <section id="about" className="section-shell">
        <div className="container grid gap-12 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" aria-hidden />
            <img
              src={portraitImage}
              alt="Sieyapdji Megane working"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative aspect-square w-full rounded-3xl border border-border object-cover shadow-panel"
            />
          </div>

          <div className="space-y-6">
            <span className="section-kicker">About Me</span>
            <h2 className="section-title">
              I design and develop web products that feel refined, useful, and easy to trust.
            </h2>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              I&apos;m a software engineer with a strong eye for interface quality and a
              practical approach to problem solving. My background blends frontend craft
              with backend structure, which helps me deliver websites that look sharp and
              stay reliable in production.
            </p>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              I enjoy working across the full process — from planning information
              architecture to building performant components and integrating APIs. Based
              in Douala, Cameroon, I work with clients worldwide.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Full Stack Web Development",
                "Responsive & Accessible UI",
                "API Design & Integration",
                "Clean, Maintainable Code",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
                >
                  <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== SKILLS ============== */}
      <section id="skills" className="section-shell">
        <div className="container py-16 md:py-20">
          <div className="mb-10 text-center">
            <span className="section-kicker">Skills</span>
            <h2 className="section-title mx-auto max-w-2xl">
              A balanced stack across interface work, backend logic, and delivery tools.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const GroupIcon = group.icon;
              return (
                <div key={group.title} className="grid-card p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <GroupIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold">{group.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {group.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== PROJECTS ============== */}
      <section id="projects" className="section-shell">
        <div className="container py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-kicker">Projects</span>
              <h2 className="section-title">
                Selected work that combines clean UI with dependable engineering.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
              Each project is built to solve a real workflow, communicate clearly, and
              remain easy to maintain as it grows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="grid-card flex h-full flex-col overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-panel backdrop-blur">
                    Project {index + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-4">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                      >
                        Live Demo
                        <ArrowDownRight className="h-4 w-4 rotate-[-45deg]" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== EXPERIENCE / EDUCATION ============== */}
      <section id="experience" className="section-shell">
        <div className="container py-16 md:py-20">
          <div className="mb-10 text-center">
            <span className="section-kicker">Experience & Education</span>
            <h2 className="section-title mx-auto max-w-2xl">
              A timeline of the work and learning that shapes my craft.
            </h2>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <span
              className="absolute left-4 top-0 hidden h-full w-px bg-border md:block md:left-1/2 md:-translate-x-1/2"
              aria-hidden
            />
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const ItemIcon = item.type === "work" ? Briefcase : GraduationCap;
                const alignRight = index % 2 === 1;
                return (
                  <div
                    key={item.title}
                    className={`relative md:grid md:grid-cols-2 md:gap-8 ${alignRight ? "md:[&>article]:col-start-2" : ""}`}
                  >
                    <span
                      className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2 md:block"
                      aria-hidden
                    />
                    <article className="grid-card p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                          <ItemIcon className="h-5 w-5" />
                        </div>
                        <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold">{item.title}</h3>
                      <p className="text-sm font-medium text-primary">{item.organisation}</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section id="services" className="section-shell">
        <div className="container py-16 md:py-20">
          <div className="mb-10 text-center">
            <span className="section-kicker">Services</span>
            <h2 className="section-title mx-auto max-w-2xl">
              Services tailored to teams that need thoughtful design and dependable development.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <article key={service.title} className="grid-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <ServiceIcon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS ============== */}
      <section className="section-shell">
        <div className="container py-16 md:py-20">
          <div className="mb-10 text-center">
            <span className="section-kicker">Testimonials</span>
            <h2 className="section-title mx-auto max-w-2xl">
              Feedback from teams and clients I have collaborated with.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="grid-card p-6">
                <p className="text-base leading-8 text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CONTACT ============== */}
      <section id="contact" className="section-shell">
        <div className="container grid gap-10 py-16 md:py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <span className="section-kicker">Contact</span>
            <h2 className="section-title">
              Let&apos;s build something clear, modern, and genuinely useful.
            </h2>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              If you need a software engineer for a new build, redesign, or long-term
              product support, feel free to reach out.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@sieyapdjimegane.dev"
                className="panel flex items-center gap-4 px-5 py-4 transition-colors hover:border-primary/40"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">hello@sieyapdjimegane.dev</p>
                </div>
              </a>
              <a
                href="tel:+237600000000"
                className="panel flex items-center gap-4 px-5 py-4 transition-colors hover:border-primary/40"
              >
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+237 671238458</p>
                </div>
              </a>
              <div className="panel flex items-center gap-4 px-5 py-4">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Douala, Cameroon · Remote friendly</p>
                </div>
              </div>
            </div>
          </div>

          <div className="panel p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="border-t border-border">
        <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Sieyapdji Megane. Built with care for modern web experiences.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sieyapdjimegane"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sieyapdji-megane"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
