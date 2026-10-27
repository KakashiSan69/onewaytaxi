import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CarFront,
  CheckCircle2,
  Clock3,
  Compass,
  Facebook,
  Headphones,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  Route,
  ShieldCheck,
  Star,
  Twitter,
  Users,
  Wallet,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PHONE_DISPLAY = "9070399070";
const PHONE_TEL = "9070399070";
const WHATSAPP_NUMBER = "919070399070";
const EMAIL = "onewaytaxinagpur@gmail.com";
const ADDRESS = "Dr. Babasaheb Ambedkar International Airport, MRO Air India, MIHAN, Nagpur, Maharashtra 440005";

const navItems: [string, string][] = [
  ["Why Choose Us", "#about"],
  ["Our Fleet", "#fleet"],
  ["What We Offer", "#services"],
  ["Routes", "#routes"],
  ["Customer Stories", "#reviews"],
];

const heroSlides = [
  { image: "/images/generated/neon-hero-city.jpg", tag: "Your Journey, Elevated", title: "Premium Taxi Travel Across Maharashtra", copy: "Reliable pickups, polished vehicles and professional drivers for every important journey." },
  { image: "/images/generated/neon-hero-airport.jpg", tag: "Arrive Without The Stress", title: "Airport & Terminal Transfers, Done Right", copy: "From terminal to destination, enjoy punctual service, smooth coordination and complete peace of mind." },
  { image: "/images/generated/neon-hero-highway.jpg", tag: "Popular Destinations With Confidence", title: "One-Way And Intercity & Outstation", copy: "Travel farther in comfort with transparent fares and a vehicle matched to your route." },
];

const stats = [
  { value: "4930+", label: "Happy Customers" },
  { value: "34+", label: "Expert Drivers" },
  { value: "6+", label: "Vehicle Types", icon: CarFront },
  { value: "24/7", label: "Always Available" },
];

const fleet: { name: string; tag: string; copy: string; image: string }[] = [
  { name: "Maruti Ertiga", tag: "7 Seater", copy: "A spacious 7-seater built for relaxed family travel, airport runs and weekend plans.", image: "/images/generated/neon-ertiga.jpg" },
  { name: "Toyota Etios", tag: "Sedan", copy: "A dependable sedan with comfortable seating for city transfers and intercity routes.", image: "/images/generated/neon-etios.jpg" },
  { name: "Honda City", tag: "Premium", copy: "A polished premium sedan for executive travel, airport transfers and special occasions.", image: "/images/generated/neon-honda-city.jpg" },
  { name: "Swift Dzire", tag: "Budget", copy: "An efficient everyday sedan for practical city travel and value-conscious journeys.", image: "/images/generated/neon-swift-dzire.jpg" },
  { name: "Innova Crysta", tag: "Luxury", copy: "A refined SUV with generous space for family travel, luggage and long-distance comfort.", image: "/images/generated/neon-innova-crysta.jpg" },
  { name: "Tempo Traveller", tag: "Group", copy: "A comfortable group vehicle for tours, events, corporate outings and family travel.", image: "/images/generated/neon-tempo-traveller.jpg" },
  { name: "12 Seater Tempo Traveller", tag: "12 Seater", copy: "Extra room for medium-sized groups who want a smooth, coordinated travel experience.", image: "/images/generated/neon-tempo-12-seater.jpg" },
];

const aboutCards: { icon: LucideIcon; title: string; copy: string }[] = [
  { icon: ShieldCheck, title: "Safe & Verified", copy: "100% police-verified drivers with background checks." },
  { icon: Clock3, title: "Always On Time", copy: "We respect your schedule and guarantee punctual service." },
  { icon: Wallet, title: "Clear From The Start", copy: "No hidden charges. Fair and upfront pricing always." },
  { icon: Headphones, title: "Here When You Need Us", copy: "Our team is available around the clock to assist you." },
];

const services: { icon: LucideIcon; title: string; copy: string }[] = [
  { icon: Plane, title: "Airport & Terminal Transfers", copy: "Punctual airport pickups and drop-offs with flight-aware coordination, courteous chauffeurs and comfortable vehicles." },
  { icon: Compass, title: "Intercity & Outstation", copy: "Travel confidently to Mumbai, Pune, Wardha, Amravati and destinations across Maharashtra with a dependable route plan." },
  { icon: MapPin, title: "City Rides, On Demand", copy: "Move around Nagpur with a local chauffeur, flexible stops and a ride planned around your schedule." },
  { icon: Briefcase, title: "Corporate Travel Solutions", copy: "Discreet, punctual transportation for meetings, conferences, airport schedules and business events." },
  { icon: Route, title: "Hotel & Railway Transfers", copy: "Seamless door-to-door transfers connecting hotels, railway stations, the airport and key destinations." },
  { icon: Users, title: "Group & Event Transport", copy: "Coordinated group travel for families, celebrations, tours and events with the right vehicle for your party." },
];

const whyChoose: { icon: LucideIcon; title: string; copy: string }[] = [
  { icon: ShieldCheck, title: "Peace Of Mind", copy: "Verified drivers and dependable cars for a relaxed journey." },
  { icon: BadgeCheck, title: "People You Can Trust", copy: "Polite, experienced chauffeurs who put your comfort first." },
  { icon: Star, title: "Comfort Every Time", copy: "Fresh, clean and air-conditioned vehicles for every ride." },
  { icon: Wallet, title: "Clear From The Start", copy: "Straightforward fares with no surprises at the end." },
  { icon: Clock3, title: "Punctual By Promise", copy: "Your time matters, so we aim to be there when we say we will." },
  { icon: Headphones, title: "Here When You Need Us", copy: "Friendly support whenever your journey needs a helping hand." },
  { icon: MapPin, title: "Know The Way", copy: "Local knowledge that helps every ride feel easier and more direct." },
  { icon: HeartHandshake, title: "Chosen By Passengers", copy: "A growing community of travelers chooses us for comfortable, dependable rides." },
];

const routes = [
  "Nagpur Airport ↔ City Centre",
  "Nagpur ↔ Wardha",
  "Nagpur ↔ Amravati",
  "Nagpur ↔ Pune",
  "Nagpur ↔ Mumbai",
  "Nagpur ↔ Gondia",
  "Nagpur ↔ Chandrapur",
  "Nagpur ↔ Outstation",
];

const testimonials = [
  { text: "The airport pickup was perfectly timed and the vehicle was spotless. Professional service from start to finish.", name: "Neha Kulkarni", place: "Nagpur Airport", image: "/images/generated/avatar-neha.jpg" },
  { text: "Clear communication, a comfortable car and a calm driver made our Pune journey completely stress-free.", name: "Vikram Mehta", place: "Pune Route", image: "/images/generated/avatar-vikram.jpg" },
  { text: "The booking was simple, the fare was clear and the ride arrived exactly when promised. Highly recommended.", name: "Riya Deshmukh", place: "MIHAN, Nagpur", image: "/images/generated/avatar-riya.jpg" },
];

function AnimatedStatValue({ value }: { value: string }) {
  const match = value.match(/^(\d+)(\+)?$/);
  const isNumeric = Boolean(match);
  const suffix = match?.[2] ?? "";
  const target = Number(match?.[1] ?? 0);
  const [count, setCount] = useState(isNumeric ? 0 : value);
  const [started, setStarted] = useState(!isNumeric);
  const statRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isNumeric || !statRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.45 });
    observer.observe(statRef.current);
    return () => observer.disconnect();
  }, [isNumeric]);

  useEffect(() => {
    if (!isNumeric || !started) return;
    const duration = 1500;
    let frame = 0;
    let startTime: number | null = null;
    const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);
    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(target * easeOut(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isNumeric, started, value]);

  return <strong ref={statRef}>{isNumeric ? `${count}${suffix}` : value}</strong>;
}

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 5500);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(timer);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const openWhatsApp = (message: string) => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  const bookMessage = (vehicle = "a vehicle") => openWhatsApp(`Hello One Way Taxi Nagpur, I would like to book ${vehicle}. Please share availability and quotation.`);
  const slide = heroSlides[activeSlide];

  return (
    <div className="site-shell">
      <div className="topbar"><Star size={13} fill="currentColor" /><span>NAGPUR&apos;S MOST RELIABLE RIDE PARTNER BOOK NOW AT <strong>{PHONE_DISPLAY}</strong></span><Star size={13} fill="currentColor" /></div>

      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="One Way Taxi Nagpur home"><img src="/images/one-way-taxi-logo.png" alt="One Way Taxi Nagpur" className="brand-logo" /></a>
          <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="nav-book-mobile button button--gold" href={`tel:${PHONE_TEL}`} onClick={closeMenu}><Phone size={15} /> {PHONE_DISPLAY}</a>
          </nav>
          <div className="nav-actions"><a className="nav-phone" href={`tel:${PHONE_TEL}`}><Phone size={15} /> {PHONE_DISPLAY}</a><button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
        </div>
      </header>

      <main id="home">
        <section className="hero hero-carousel" style={{ backgroundImage: `url(${slide.image})` }}>
          <div className="hero-overlay" />
          <button className="carousel-control carousel-control--prev" onClick={() => setActiveSlide((activeSlide + heroSlides.length - 1) % heroSlides.length)} aria-label="Previous slide">‹</button>
          <div className="container hero-inner"><div className="hero-content">
            <span className="hero-badge">{slide.tag}</span>
            <h1>{activeSlide === 0 ? "Book a Taxi/Cab in Nagpur, Mumbai & Pune" : slide.title}</h1>
            <p className="hero-subtitle">{slide.copy}</p>
            <div className="hero-actions"><a className="button button--gold" href={`tel:${PHONE_TEL}`}><Phone size={17} /> Call Now</a><a className="button button--ghost" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a></div>
          </div></div>
          <button className="carousel-control carousel-control--next" onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)} aria-label="Next slide">›</button>
          <div className="carousel-dots">{heroSlides.map((item, index) => <button key={item.title} className={index === activeSlide ? "active" : ""} onClick={() => setActiveSlide(index)} aria-label={`Go to slide ${index + 1}`} />)}</div>
        </section>

        <section className="stats"><div className="container stats-grid">{stats.map(({ value, label, icon: Icon }) => <div className="stat" key={label}>{Icon && <Icon size={31} className="stat-icon" />}<AnimatedStatValue value={value} /><span>{label}</span></div>)}</div></section>

        <section id="fleet" className="section fleet-section"><div className="container"><div className="section-head"><p className="kicker">Our Fleet</p><h2 className="section-title">The Right Vehicle For <em>Every Plan</em></h2><p className="section-lede">Choose a professionally maintained vehicle that matches your route, group and travel style.</p></div><div className="fleet-grid">{fleet.map((vehicle) => <article className="fleet-card" key={`${vehicle.name}-${vehicle.tag}`}><div className="fleet-image-wrap"><img src={vehicle.image} alt={vehicle.name} loading="lazy" /><span className="fleet-tag">{vehicle.tag}</span></div><div className="fleet-content"><h3>{vehicle.name}</h3><p>{vehicle.copy}</p><a className="fleet-book" href={`tel:${PHONE_TEL}`}>Book Now <ArrowRight size={15} /></a></div></article>)}</div></div></section>

        <section id="about" className="section about-section"><div className="container about-layout"><div className="about-copy"><p className="kicker">The Standard You Can Expect</p><h2 className="section-title">Move With <em>Confidence</em></h2><p>At <strong>One Way Taxi Nagpur</strong>, every ride is shaped around your comfort. From the first pickup to the final drop, we make Maharashtra travel feel simple, safe and beautifully unhurried.</p><p>Our local drivers know Nagpur, the airport and the best routes so you can spend less time navigating and more time enjoying your journey.</p><a className="button button--green" href={`tel:${PHONE_TEL}`}><Phone size={16} /> Call Us Now</a></div><div className="about-cards">{aboutCards.map(({ icon: Icon, title, copy }) => <div className="about-card" key={title}><div className="ic"><Icon size={22} /></div><h5>{title}</h5><p>{copy}</p></div>)}</div></div></section>

        <section id="services" className="section services-section"><div className="container"><div className="section-head"><p className="kicker">Your Journey Starts Here</p><h2 className="section-title">Travel Services <em>That Work</em></h2><p className="section-lede">From the first enquiry to the final drop, expect clear communication and thoughtful service.</p></div><div className="services-grid">{services.map(({ icon: Icon, title, copy }) => <article className="service-card" key={title}><div className="service-ic"><Icon size={26} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

        <section className="section why-section"><div className="container"><div className="section-head"><p className="kicker">Why Choose One Way Taxi</p><h2 className="section-title">A Better Standard Of <em>Travel</em></h2><p className="section-lede">Professional details, dependable vehicles and a smoother experience from pickup to drop-off.</p></div><div className="why-grid">{whyChoose.map(({ icon: Icon, title, copy }) => <div className="why-card" key={title}><div className="ic"><Icon size={22} /></div><h5>{title}</h5><p>{copy}</p></div>)}</div></div></section>

        <section id="routes" className="section routes-section"><div className="container"><div className="section-head"><p className="kicker">Popular Destinations</p><h2 className="section-title">Your Route, <em>Our Responsibility</em></h2><p className="section-lede">Comfortable, dependable rides from Nagpur to the destinations that matter to you.</p></div><div className="routes-grid">{routes.map((route) => <a className="route-pill" key={route} href={`tel:${PHONE_TEL}`}><MapPin size={18} />{route}</a>)}</div></div></section>

        <section id="reviews" className="section testi-section"><div className="container"><div className="section-head"><p className="kicker">Traveler Notes</p><h2 className="section-title">Loved By <em>Passengers</em></h2></div><div className="testi-grid">{testimonials.map((testimonial) => <article className="testi-card" key={testimonial.name}><span className="testi-quote">&ldquo;</span><div className="testi-stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}</div><p>{testimonial.text}</p><div className="testi-person"><span className="testi-avatar"><img src={testimonial.image} alt={`${testimonial.name} testimonial`} loading="lazy" /></span><div><strong>{testimonial.name}</strong><span>{testimonial.place}</span></div></div></article>)}</div>
        </div></section>

        <section className="cta-section"><div className="container cta-inner"><h2>Ready For A More Comfortable Journey?</h2><p>Share your route and we will help you choose the right vehicle and service.</p><div className="cta-actions"><a className="button button--gold" href={`tel:${PHONE_TEL}`}><Phone size={17} /> Call Now</a><a className="button button--wa" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp Us</a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><a className="brand" href="#home" aria-label="One Way Taxi Nagpur home"><img src="/images/one-way-taxi-logo.png" alt="One Way Taxi Nagpur" className="brand-logo" /></a><p>Comfortable taxi rides, thoughtful local service and dependable travel across Nagpur and Maharashtra available 24/7.</p><div className="footer-social"><a href="#home" aria-label="Facebook"><Facebook size={18} /></a><a href="#home" aria-label="Instagram"><Instagram size={18} /></a><a href="#home" aria-label="Twitter"><Twitter size={18} /></a><button className="footer-social-btn" onClick={() => bookMessage()} aria-label="WhatsApp"><MessageCircle size={18} /></button></div></div><div className="footer-col"><h5>Quick Links</h5><div className="footer-links">{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div></div><div className="footer-col"><h5>Contact Us</h5><div className="footer-contact"><a href={`tel:${PHONE_TEL}`}><Phone size={16} /> {PHONE_DISPLAY}</a><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp: {PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`}><Mail size={16} /> {EMAIL}</a><span><MapPin size={16} /> {ADDRESS}</span></div></div></div><div className="footer-bottom"><div className="container">&copy; {new Date().getFullYear()} One Way Taxi Nagpur. All Rights Reserved.</div></div></footer>
      <div className="floating-actions"><a className="floating-call" href={`tel:${PHONE_TEL}`} aria-label="Call One Way Taxi Nagpur"><Phone size={20} /></a><a className="floating-wa" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="WhatsApp One Way Taxi Nagpur"><MessageCircle size={22} /></a></div>
    </div>
  );
}

export default Home;
