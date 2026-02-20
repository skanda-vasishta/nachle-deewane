"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "JUDGES", href: "#judges" },
  { name: "TEAMS", href: "#teams" },
  { name: "MEMBERS", href: "#members" },
];

const judges = [
  {
    name: "Amita Batra",
    title: "Bollywood Fusion Judge",
    bio: "Details coming soon.",
  },
  {
    name: "Saffat Al Munsur",
    title: "Bollywood Fusion Judge",
    bio: "Details coming soon.",
  },
  {
    name: "Jai Loonker",
    title: "Bollywood Fusion Judge",
    bio: "Details coming soon.",
  },
];

const teams = [
  { name: "UA Om Shanti", style: "Bollywood Fusion", isExhibition: false },
  { name: "CPP Tamanna", style: "Bollywood Fusion", isExhibition: false },
  { name: "Cal Poly Andaaz", style: "Bollywood Fusion", isExhibition: false },
  { name: "UCB Deewani", style: "Bollywood Fusion", isExhibition: false },
  { name: "SMU Rang", style: "Bollywood Fusion", isExhibition: false },
  { name: "SLU Shakti", style: "Bollywood Fusion", isExhibition: false },
  { name: "UCSB Taara", style: "Bollywood Fusion", isExhibition: true },
  { name: "UCSB Agni", style: "Indian Classical", isExhibition: true },
  { name: "UCSB Raices", style: "Exhibition Act", isExhibition: true },
  { name: "UCSD Da Real Punjabiz", style: "Bhangra Exhibition Act", isExhibition: true },
];

const committeeSlides = [
  {
    name: "Presidents",
    isPresidents: true,
    groupPhoto: "/team/committees/presidents.jpg",
    heads: [],
    members: [
      { name: "Tanish", title: "President", photo: "/team/presidents/tanish.jpg" },
      { name: "Bhavya", title: "President", photo: "/team/presidents/bhavya.jpg" },
      { name: "Shashin", title: "President", photo: "/team/presidents/shashin.jpg" },
    ],
  },
  {
    name: "Finance",
    groupPhoto: "/team/committees/finance.jpg",
    heads: [
      { name: "Samith", title: "Director", photo: "/team/executives/samith.jpg" },
      { name: "Demira", title: "Director", photo: "/team/executives/demira.jpg" },
    ],
    members: [
      { name: "Mitul" },
      { name: "Sneha" },
      { name: "Skanda" },
      { name: "Sonika" },
      { name: "Aarnav" },
    ],
  },
  {
    name: "Outreach",
    groupPhoto: "/team/committees/outreach.jpg",
    heads: [
      { name: "Ritisha", title: "Director", photo: "/team/executives/ritisha.jpg" },
      { name: "Ria", title: "Director", photo: "/team/executives/ria.jpg" },
    ],
    members: [
      { name: "Urvi" },
      { name: "Sanjana" },
      { name: "Ashmit" },
      { name: "Anit" },
    ],
  },
  {
    name: "External Affairs",
    groupPhoto: "/team/committees/externalaffairs.jpg",
    heads: [
      { name: "Anisha", title: "Director", photo: "/team/executives/anisha.jpg" },
      { name: "Akil", title: "Director", photo: "/team/executives/akil.jpg" },
    ],
    members: [
      { name: "Kael" },
      { name: "Ayaan" },
      { name: "Saahas" },
    ],
  },
  {
    name: "Event Management",
    groupPhoto: "/team/committees/eventmanagement.jpg",
    heads: [
      { name: "Sanvi", title: "Director", photo: "/team/executives/sanvi.jpg" },
      { name: "Mrunal", title: "Director", photo: "/team/executives/mrunal.jpg" },
    ],
    members: [
      { name: "Aria" },
      { name: "Ajit" },
      { name: "Arnav" },
      { name: "Yash" },
    ],
  },
  {
    name: "Venue & Tech",
    groupPhoto: "/team/committees/venueandtech.jpg",
    heads: [
      { name: "Dhruv", title: "Director", photo: "/team/executives/dhruv.jpg" },
      { name: "Maitri", title: "Director", photo: "/team/executives/maitri.jpg" },
    ],
    members: [
      { name: "Harman" },
      { name: "Anika" },
      { name: "Karanveer (Nav)" },
      { name: "Viraj" },
      { name: "Shiven" },
    ],
  },
  {
    name: "Liaison",
    groupPhoto: "/team/committees/liaison.jpg",
    heads: [
      { name: "Sruthi", title: "Director", photo: "/team/executives/sruthi.jpg" },
      { name: "Abhi", title: "Director", photo: "/team/executives/abhi.jpg" },
    ],
    members: [
      { name: "Adhya" },
      { name: "Prithvi" },
      { name: "Rahul" },
      { name: "Nikita" },
      { name: "Veer" },
      { name: "Yaati" },
      { name: "Amol" },
      { name: "Akshita" },
      { name: "Achal" },
      { name: "Aathmika" },
    ],
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % committeeSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + committeeSlides.length) % committeeSlides.length);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#FFF8E7] pattern-overlay">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D0D0D]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-wide gradient-text">
                  DHADKAN 13.0
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF6B1A] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="nav-link text-sm text-[#FFF8E7]/90 hover:text-[#FF6B1A]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="https://linktr.ee/ucsbdhadkan?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn2scFxMMfY5pYR-gAwReE6iFRnSFNwGLRwfUgSbka9gPTRpge1t3P-HmlJUE_aem_avR4dq5THPoLp190Oa-AwA"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block btn-primary text-sm"
            >
              <span>Buy Tickets</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-[#FFF8E7] transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-[#FFF8E7] transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-[#FFF8E7] transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              mobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm font-medium tracking-wider text-[#FFF8E7]/80 hover:text-[#FF6B1A] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://linktr.ee/ucsbdhadkan?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn2scFxMMfY5pYR-gAwReE6iFRnSFNwGLRwfUgSbka9gPTRpge1t3P-HmlJUE_aem_avR4dq5THPoLp190Oa-AwA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-primary text-sm mt-2"
                >
                  <span>Buy Tickets</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A0E0E]/30 via-[#0D0D0D] to-[#0D0D0D]" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6B1A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        
        {/* Animated rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] border border-[#D4AF37]/10 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-[800px] h-[800px] border border-[#FF6B1A]/5 rounded-full animate-[spin_80s_linear_infinite_reverse]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Main Title */}
            <h1 className="animate-fade-in-up">
              <span className="block font-[family-name:var(--font-playfair)] text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight glow-text text-[#FFF8E7]">
                NACHLE
              </span>
              <span className="block font-[family-name:var(--font-playfair)] text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight gradient-text mt-2">
                DEEWANE
              </span>
            </h1>

            {/* Year badge */}
            <div className="animate-fade-in-up animation-delay-100 inline-flex items-center gap-4 px-6 py-3 rounded-full border border-[#D4AF37]/30 bg-[#0D0D0D]/50 backdrop-blur-sm">
              <span className="text-[#D4AF37] font-bold text-lg tracking-wider">Dhadkan 13.0</span>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
              <span className="text-[#FFF8E7]/70 text-sm tracking-wide">UCSB&apos;s Premier Bollywood Dance Competition</span>
            </div>

            {/* Subtitle */}
            <p className="animate-fade-in-up animation-delay-200 max-w-2xl mx-auto text-lg md:text-xl text-[#FFF8E7]/70 leading-relaxed">
              Santa Barbara&apos;s largest celebration of South Asian dance and culture. 
              Join us for an unforgettable evening of artistry, passion, and community.
            </p>

            {/* Event details */}
            <div className="animate-fade-in-up animation-delay-300 flex flex-col items-center gap-3 text-sm md:text-base">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <span className="text-[#FF6B1A] font-semibold">March 7th, 2026</span>
                <span className="text-[#D4AF37]/50">|</span>
                <span className="text-[#FFF8E7]/60">4:30 PM</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-[#FFF8E7]/80 font-medium">Arlington Theatre, Santa Barbara</span>
                <span className="text-[#FFF8E7]/50 text-sm">1317 State St, Santa Barbara, CA 93101</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up animation-delay-400 flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="https://linktr.ee/ucsbdhadkan?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn2scFxMMfY5pYR-gAwReE6iFRnSFNwGLRwfUgSbka9gPTRpge1t3P-HmlJUE_aem_avR4dq5THPoLp190Oa-AwA"
            target="_blank"
            rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                <span>Get Tickets</span>
              </a>
            </div>


          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-[#D4AF37]/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section id="judges" className="py-24 md:py-32 section-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm tracking-[0.3em] text-[#FF6B1A] font-medium uppercase">
              Meet Our
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold mt-3 mb-6">
              <span className="gradient-text">Distinguished Judges</span>
            </h2>
            <p className="max-w-2xl mx-auto text-[#FFF8E7]/60 text-lg">
              Industry professionals and acclaimed artists who will evaluate the performances.
            </p>
          </div>

          {/* Judges Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {judges.map((judge, index) => (
              <div
                key={judge.name}
                className="card-hover group relative bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-lg p-8 border border-[#D4AF37]/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-[#FF6B1A] to-transparent transform rotate-45 translate-x-8 -translate-y-4" />
                </div>

                {/* Avatar placeholder */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FF6B1A] to-[#6B1A1A] flex items-center justify-center text-3xl font-bold text-white">
                  {judge.name.charAt(0)}
                </div>

                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-center mb-2 text-[#FFF8E7]">
                  {judge.name}
                </h3>
                <p className="text-[#FF6B1A] text-sm text-center mb-4 tracking-wide">
                  {judge.title}
                </p>
                <p className="text-[#FFF8E7]/60 text-center text-sm leading-relaxed">
                  {judge.bio}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B1A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section id="teams" className="py-24 md:py-32 relative overflow-hidden bg-[#0D0D0D]">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm tracking-[0.3em] text-[#FF6B1A] font-medium uppercase">
              Competing
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold mt-3 mb-6">
              <span className="gradient-text">Dance Teams</span>
            </h2>
            <p className="max-w-2xl mx-auto text-[#FFF8E7]/60 text-lg">
              The best collegiate dance teams from across California, ready to take the stage.
            </p>
          </div>

          {/* Teams Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team, index) => (
              <div
                key={team.name}
                className={`card-hover group relative rounded-lg overflow-hidden border ${
                  team.isExhibition
                    ? "bg-gradient-to-br from-[#2A1A1A] to-[#1A0D0D] border-[#FF6B1A]/20"
                    : "bg-[#1A1A1A] border-[#D4AF37]/10"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${
                  team.isExhibition
                    ? "from-[#FF6B1A] via-[#FF8C42] to-[#6B1A1A]"
                    : "from-[#FF6B1A] via-[#D4AF37] to-[#6B1A1A]"
                }`} />
                
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold mb-1 text-[#FFF8E7] group-hover:text-[#FF6B1A] transition-colors">
                        {team.name}
                      </h3>
                      <p className={`text-sm ${
                        team.isExhibition
                          ? "text-[#FF6B1A]/80 font-medium tracking-wide"
                          : "text-[#D4AF37]/80"
                      }`}>
                        {team.style}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#FF6B1A]/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#FF6B1A] transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More teams CTA */}
          <div className="text-center mt-12">
            <p className="text-[#FFF8E7]/50 text-sm">
              More teams to be announced soon!
            </p>
          </div>
        </div>
      </section>

      {/* Members Section - Carousel */}
      <section id="members" className="py-24 md:py-32 section-maroon relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 border border-[#D4AF37] rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-[#D4AF37] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#D4AF37] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-sm tracking-[0.3em] text-[#FFB347] font-medium uppercase">
              The Team Behind
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold mt-3 mb-6 text-[#FFF8E7]">
              Our Team
            </h2>
            <p className="max-w-2xl mx-auto text-[#FFF8E7]/70 text-lg">
              The dedicated student organizers of UCSB Dhadkan who make Nachle Deewane possible.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-[#0D0D0D]/80 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-[#0D0D0D]/80 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Content */}
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="flex">
                  {committeeSlides.map((slide, slideIndex) => (
                    <div
                      key={slide.name}
                      className="w-full flex-shrink-0 px-4 flex flex-col items-center"
                    >
                      {/* Committee Name & Group Photo */}
                      <div className="text-center mb-8">
                        <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#FFB347]">
                          {slide.name}
                        </h3>
                        <div className="mt-3 w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                        {slide.groupPhoto && (
                          <Image
                            src={slide.groupPhoto}
                            alt={`${slide.name} Committee Group`}
                            width={400}
                            height={250}
                            className="rounded-lg mx-auto my-4 object-cover"
                          />
                        )}
                      </div>

                      {/* Presidents Slide or Committee with Heads */}
                      {slide.isPresidents ? (
                        /* Presidents Grid with Photos */
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                          {slide.members.map((member) => (
                            <div
                              key={member.name}
                              className="group flex flex-col items-center"
                            >
                              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#FF6B1A]/30 to-[#D4AF37]/30 border-2 border-[#D4AF37] group-hover:border-[#FF6B1A] transition-all duration-300 group-hover:scale-105">
                                {"photo" in member && member.photo ? (
                                  <Image
                                    src={member.photo}
                                    alt={member.name}
                                    width={160}
                                    height={160}
                                    className="rounded-xl object-cover"
                                  />
                                ) : (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-4xl md:text-5xl font-bold text-[#D4AF37] group-hover:text-[#FF6B1A] transition-colors">
                                      {member.name.charAt(0)}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <p className="text-[#FFF8E7] font-semibold text-base md:text-lg text-center">
                                {member.name}
                              </p>
                              {"title" in member && member.title && (
                                <p className="text-[#FFB347] text-sm text-center mt-1">
                                  {member.title}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Committee with Heads and Members */
                        <div className="flex flex-col items-center w-full max-w-4xl">
                          {/* Directors/Heads with Photos */}
                          {committeeSlides[currentSlide].heads && committeeSlides[currentSlide].heads.length > 0 && (
                            <div className="mb-8">
                              <p className="text-center text-[#D4AF37] text-sm tracking-widest uppercase mb-4">Directors</p>
                              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                                {committeeSlides[currentSlide].heads.map((head) => (
                                  <div
                                    key={head.name}
                                    className="group flex flex-col items-center"
                                  >
                                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden mb-3 bg-gradient-to-br from-[#FF6B1A]/30 to-[#D4AF37]/30 border-2 border-[#D4AF37] group-hover:border-[#FF6B1A] transition-all duration-300 group-hover:scale-105">
                                      {"photo" in head && head.photo ? (
                                        <Image
                                          src={head.photo}
                                          alt={head.name}
                                          width={112}
                                          height={112}
                                          className="rounded-xl object-cover"
                                        />
                                      ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                          <span className="text-2xl md:text-3xl font-bold text-[#D4AF37] group-hover:text-[#FF6B1A] transition-colors">
                                            {head.name.charAt(0)}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                    <p className="text-[#FFF8E7] font-semibold text-sm md:text-base text-center">
                                      {head.name}
                                    </p>
                                    {"title" in head && head.title && (
                                      <p className="text-[#FFB347] text-xs text-center mt-0.5">
                                        {head.title}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Committee Members */}
                          {slide.members.length > 0 && (
                            <div>
                              <p className="text-center text-[#FFF8E7]/50 text-sm tracking-widest uppercase mb-4">Members</p>
                              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                                {slide.members.map((member) => (
                                  <div
                                    key={member.name}
                                    className="group flex flex-col items-center"
                                  >
                                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden mb-3 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border-2 border-[#D4AF37]/20 group-hover:border-[#FF6B1A] transition-all duration-300 group-hover:scale-105">
                                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B1A]/10 to-[#D4AF37]/10" />
                                      <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-xl md:text-2xl font-bold text-[#D4AF37]/50 group-hover:text-[#FF6B1A] transition-colors">
                                          {member.name.charAt(0)}
                                        </span>
                                      </div>
                                    </div>
                                    <p className="text-[#FFF8E7]/80 font-medium text-xs md:text-sm text-center">
                                      {member.name}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {committeeSlides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 ${
                    currentSlide === index
                      ? 'w-8 h-2 bg-[#FF6B1A] rounded-full'
                      : 'w-2 h-2 bg-[#D4AF37]/30 rounded-full hover:bg-[#D4AF37]/60'
                  }`}
                  aria-label={`Go to ${slide.name}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4">
              <span className="text-[#FFF8E7]/40 text-sm">
                {currentSlide + 1} / {committeeSlides.length}
              </span>
            </div>
          </div>

          {/* Join CTA */}
          <div className="text-center mt-16">
            <p className="text-[#FFF8E7]/70 mb-4">
              Interested in joining UCSB Dhadkan?
            </p>
            <a 
              href="mailto:info@ucsbdhadkan.com" 
              className="inline-block border-2 border-[#FFB347] text-[#FFB347] hover:bg-[#FFB347] hover:text-[#0D0D0D] font-semibold py-3 px-8 rounded transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 border-t border-[#D4AF37]/10 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Contact */}
            <div className="text-center md:text-left">
              <p className="text-[#D4AF37] font-medium tracking-wide mb-1">
                REACH OUT TO US, FOR ANYTHING!
              </p>
              <a
                href="mailto:info@ucsbdhadkan.com"
                className="text-[#FFF8E7]/60 hover:text-[#FF6B1A] transition-colors"
              >
                E: info@ucsbdhadkan.com
              </a>

              {/* ooshirts.com Ad */}
              <div className="mt-6">
                <Image
                  src="/IMG_6818.JPG"
                  alt="ooshirts.com - Custom T-Shirts"
                  width={200}
                  height={120}
                  className="rounded-lg mb-2 object-cover"
                />
                <p className="text-xs text-[#FFF8E7]/50">
                  UCSB Dhadkan endorses <a href="https://www.ooshirts.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FF6B1A]">ooshirts.com</a> for fast, affordable, and high-quality custom t-shirts!
                </p>
              </div>
            </div>

            {/* Footer Nav */}
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#FFF8E7]/60 hover:text-[#FF6B1A] transition-colors tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-[#D4AF37]/10 text-center">
            <p className="text-[#FFF8E7]/40 text-sm">
              © {new Date().getFullYear()} UCSB Dhadkan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
