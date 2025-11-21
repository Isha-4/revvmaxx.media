'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // Projects data
  const projects = [
  {
    id: 1,
    title: 'Jawa Yezdi',
    subtitle: 'Shakti Automobiles',
    description: 'Instagram-first campaign driving showroom footfall.',
    image: '',
    challenge: 'Low brand awareness in Pune market for Jawa Yezdi dealership.',
    strategy: 'Implemented Instagram Reels strategy with motorcycle lifestyle content, partnered with local moto-vloggers, ran targeted Meta ads to bike enthusiasts.',
    results: 'Results: 45% increase in showroom visits, 3.2x ROAS on paid campaigns, 15K+ engaged followers in 3 months.'
  },
  {
    id: 2,
    title: 'Honda BigWing-Pune East',
    subtitle: 'Pashankar Auto',
    description: 'Premium bike launch campaign with influencer partnerships.',
    image: '',
    challenge: 'Launch new premium motorcycle line to aspirational buyers.',
    strategy: 'Created cinematic launch content, partnered with 5 automotive creators, hosted exclusive test-ride events documented on social.',
    results: 'Results: 80+ pre-bookings, 500K+ reach on launch day, 25% conversion rate on Meta lead ads.'
  },
  {
    id: 3,
    title: 'Hyundai',
    subtitle: 'Garve Hyundai',
    description: 'Full-funnel social media and performance marketing.',
    image: '',
    challenge: 'Stand out in competitive Pune car dealership market.',
    strategy: 'Monthly content calendar with customer testimonial videos, seasonal offer campaigns, retargeting funnel for showroom visitors.',
    results: 'Results: 200+ qualified leads/month, 18% lower CPL than industry average, sustained 4.5x ROAS.'
  },
  {
    id: 4,
    title: 'Royal Enfield',
    subtitle: '',
    description: 'Brand storytelling and community engagement campaign.',
    image: '',
    challenge: 'Build authentic community engagement for Royal Enfield enthusiasts.',
    strategy: 'Developed content series showcasing rider stories, organized local meetups, created heritage-focused social campaigns celebrating the Royal Enfield legacy.',
    results: 'Results: 60% increase in community engagement, 250K+ reach across platforms, successful launch of 3 regional ride events.'
  }];


  // Team data
  const team = [
  {
    name: 'Siddhi',
    role: 'Designing Head',
    image: '',
    bio: 'Creative powerhouse specializing in bold, scroll-stopping visuals.'
  },
  {
    name: 'Amoksh',
    role: 'Founder',
    image: '',
    bio: 'Visionary leader with 5+ years in automotive digital marketing.'
  },
  {
    name: 'Isha',
    role: 'Social Media Manager / Content Head',
    image: '',
    bio: 'Data-driven strategist who turns engagement into growth.'
  },
  {
    name: 'Suchitro',
    role: 'DOP / Videographer',
    image: '',
    bio: 'Cinematic storyteller capturing automotive beauty in motion.'
  },
  {
    name: 'Prathmesh',
    role: 'Editor-in-Chief',
    image: '',
    bio: 'Post-production wizard transforming footage into viral content.'
  }];


  // Services data with modern icons
  const services = [
  {
    title: 'Social Media Management',
    description: 'Growth-led social strategies & community management.',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6acef080-08e1-4d14-9586-130b7ac071a0/generated_images/3d-rendered-social-media-management-icon-a2ee1f5b-20251120131505.jpg'
  },
  {
    title: 'Content Creation',
    description: 'Photos, videos, and reels built for engagement.',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6acef080-08e1-4d14-9586-130b7ac071a0/generated_images/3d-rendered-content-creation-icon-isomet-c09fe6cb-20251120131505.jpg'
  },
  {
    title: 'Paid Ads (Meta)',
    description: 'Performance campaigns with measurable ROAS.',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6acef080-08e1-4d14-9586-130b7ac071a0/generated_images/3d-rendered-paid-advertising-icon-isomet-3b8c1aa9-20251120131504.jpg'
  },
  {
    title: 'Influencer Marketing / Creator\'s Network',
    description: 'Creator partnerships that drive intent.',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6acef080-08e1-4d14-9586-130b7ac071a0/generated_images/3d-rendered-influencer-marketing-icon-is-2cc6ba71-20251120131505.jpg'
  },
  {
    title: 'Analytics & Reporting',
    description: 'Actionable dashboards and clear KPIs.',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6acef080-08e1-4d14-9586-130b7ac071a0/generated_images/3d-rendered-analytics-icon-isometric-vie-ed371b21-20251120131505.jpg'
  }];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'work', 'team', 'creator', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for fade-up animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Open modal
  const openModal = (projectId: number) => {
    setActiveProject(projectId);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  const currentProject = projects.find((p) => p.id === activeProject);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#051B37]/98 via-[#091F3D]/98 to-[#051B37]/98 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - shifted to left edge */}
            <button
              onClick={() => scrollToSection('home')}
              className="cursor-pointer hover:scale-105 transition-transform duration-300 relative h-12 w-48 -ml-4"
              aria-label="RevvMaxx_Media home">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/revvmaxx-logo-png-1763640265382.png?width=8000&height=8000&resize=contain"
                alt="RevvMaxx_Media Logo"
                fill
                className="object-contain"
                priority
                sizes="192px"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'services', 'work', 'team', 'creator', 'contact'].map((item) =>
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-300 font-medium ${
                activeSection === item ?
                'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-110' :
                'text-white/70 hover:text-white hover:scale-105'}`
                }
                aria-label={`Navigate to ${item}`}>
                  {item}
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}>

              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-gradient-to-r from-[#FF8C28] to-[#FFFFFF] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-gradient-to-r from-[#FFFFFF] to-[#B627B9] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-gradient-to-r from-[#B627B9] to-[#D423DA] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen &&
          <div className="md:hidden py-4 border-t border-white/10" role="navigation">
              {['home', 'about', 'services', 'work', 'team', 'creator', 'contact'].map((item) =>
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left py-3 px-4 capitalize text-white/70 hover:text-white hover:bg-gradient-to-r hover:from-[#FF8C28]/10 hover:to-[#B627B9]/10 transition-all duration-300">

                  {item}
                </button>
            )}
            </div>
          }
        </nav>
      </header>

      {/* Global Background - Applied to entire page */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6acef080-08e1-4d14-9586-130b7ac071a0/generated_images/dynamic-abstract-digital-background-feat-75ac6172-20251121060538.jpg"
          alt="Dynamic abstract digital background with light trails and motion blur"
          fill
          className="object-cover"
          priority
          sizes="100vw" />

        <div className="absolute inset-0 bg-[#051B37]/85" />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 brand-gradient-text">
            RevvMaxx_Media
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white neon-glow mb-8 font-semibold">
            Real Growth. Real Audience. Zero Shortcuts.
          </p>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            RevvMaxx_Media is a Pune-based digital marketing agency helping brands grow through creative content, 
            data-driven strategy, and influencer collaborations. We specialize in Instagram-first storytelling, 
            Meta ad campaigns, and performance-driven creator partnerships.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://forms.gle/eM5BpXFMSL3s4dg26"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 brand-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              aria-label="Work with us - opens Google Form">
              Work With Us
            </a>
            <button
              onClick={() => scrollToSection('work')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              aria-label="View our work">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 brand-gradient-text">
              About Us
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              At RevvMaxx_Media, we don't believe in vanity metrics or quick fixes. We build real, engaged audiences 
              for automotive brands through creative storytelling and performance-driven campaigns.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Based in Pune, we've helped leading dealerships and automotive brands accelerate their digital presence 
              with Instagram-first content, high-converting Meta ads, and strategic creator partnerships that actually 
              drive showroom traffic and sales.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Updated with modern icons */}
      <section id="services" className="relative py-20">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 brand-gradient-text fade-up">
            Our Services
          </h2>
          <div className="max-w-5xl mx-auto">
            {/* First row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {services.slice(0, 3).map((service, index) =>
              <div
                key={index}
                className="fade-up bg-[#091F3D] border border-white/30 rounded-lg p-6 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all group"
                style={{ animationDelay: `${index * 100}ms` }}>

                  <div className="relative w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70">
                    {service.description}
                  </p>
                </div>
              )}
            </div>
            {/* Second row - 2 items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {services.slice(3).map((service, index) =>
              <div
                key={index + 3}
                className="fade-up bg-[#091F3D] border border-white/30 rounded-lg p-6 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all group"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}>

                  <div className="relative w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70">
                    {service.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section - Updated alignment */}
      <section id="work" className="relative py-20">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 brand-gradient-text fade-up">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) =>
            <div
              key={project.id}
              className="fade-up bg-[#051B37] border border-white/30 rounded-lg overflow-hidden hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all group"
              style={{ animationDelay: `${index * 100}ms` }}>

                <div className="relative h-48 overflow-hidden bg-[#091F3D]/50">
                  {/* Empty placeholder - no image */}
                </div>
                <div className="p-6 flex flex-col h-[200px]">
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors leading-tight mb-4">
                    {project.title}
                    <br />
                    {project.subtitle}
                  </h3>
                  <p className="text-white/70 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <button
                  onClick={() => openModal(project.id)}
                  className="text-white font-semibold hover:underline text-left"
                  aria-label={`View case study for ${project.title}`}>

                    View Case Study →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section - Updated layout: 3 in row 1, 2 in row 2 centered */}
      <section id="team" className="relative py-20">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 brand-gradient-text fade-up">
            Meet The Team
          </h2>
          <div className="max-w-5xl mx-auto">
            {/* First row - 3 members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {team.slice(0, 3).map((member, index) =>
              <div
                key={index}
                className="fade-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}>

                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/30 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all bg-[#091F3D]/50">
                    {/* Empty placeholder - no image */}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-white/60">
                    {member.bio}
                  </p>
                </div>
              )}
            </div>
            {/* Second row - 2 members centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {team.slice(3).map((member, index) =>
              <div
                key={index + 3}
                className="fade-up text-center"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}>

                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/30 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all bg-[#091F3D]/50">
                    {/* Empty placeholder - no image */}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-white/60">
                    {member.bio}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Creator Network Section */}
      <section id="creator" className="relative py-20">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 brand-gradient-text">
              Join Our Creator Network
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Are you a content creator passionate about automotive, lifestyle, or tech? Partner with us for 
              exciting brand collaborations, paid campaigns, and grow your audience with RevvMaxx_Media.
            </p>
            <a
              href="https://forms.gle/eM5BpXFMSL3s4dg26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 brand-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              aria-label="Join creator network - opens Google Form">

              Become a Creator Partner
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated with social media logo icons */}
      <section id="contact" className="relative py-20">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 brand-gradient-text fade-up">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="fade-up bg-[#091F3D] border border-white rounded-lg p-12 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all">
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <a
                      href="mailto:revvmaxxmedia@gmail.com"
                      className="text-lg text-[#FFFFFF] hover:text-white transition-colors break-all">
                      revvmaxxmedia@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <a
                      href="tel:+919226943608"
                      className="text-lg text-white/70 hover:text-white transition-colors">
                      +91 9226943608
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Office</h3>
                    <p className="text-lg text-white/70">Pune, Maharashtra</p>
                  </div>
                </div>

                {/* Social Links with Logo Icons */}
                <div className="pt-4 border-t border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                  <div className="flex items-center gap-6">
                    <a
                      href="https://instagram.com/revvmaxx_media"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                      aria-label="Follow us on Instagram">
                      <div className="relative w-10 h-10">
                        <Image
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763707933566.png?width=8000&height=8000&resize=contain"
                          alt="Instagram"
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                    </a>
                    <a
                      href="https://threads.net/@revvmaxx_media"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                      aria-label="Follow us on Threads">
                      <div className="relative w-10 h-10">
                        <Image
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763707959300.png?width=8000&height=8000&resize=contain"
                          alt="Threads"
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                    </a>
                    <a
                      href="https://linkedin.com/company/revvmaxx-media"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                      aria-label="Follow us on LinkedIn">
                      <div className="relative w-10 h-10">
                        <Image
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763707981840.png?width=8000&height=8000&resize=contain"
                          alt="LinkedIn"
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#091F3D]/60 backdrop-blur-sm border-t border-white/10 py-12">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold brand-gradient-text mb-2">
                RevvMaxx_Media
              </div>
              <p className="text-white/60 text-sm">
                Real Growth. Real Audience. Zero Shortcuts.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {['home', 'about', 'services', 'work', 'team', 'contact'].map((item) =>
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white/60 hover:text-white transition-colors capitalize text-sm">

                  {item}
                </button>
              )}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} RevvMaxx_Media. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Case Study Modal */}
      {modalOpen && currentProject &&
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={closeModal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title">

          <div
          className="bg-[#091F3D] border border-white/30 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}>

            {/* Modal Header */}
            <div className="sticky top-0 bg-[#091F3D] border-b border-white/10 p-6 flex items-center justify-between">
              <h3 id="modal-title" className="text-2xl font-bold text-white">
                {currentProject.title} - {currentProject.subtitle}
              </h3>
              <button
              onClick={closeModal}
              className="text-white/70 hover:text-white text-3xl leading-none"
              aria-label="Close modal">

                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div className="relative h-64 rounded-lg overflow-hidden bg-[#091F3D]/50">
                {/* Empty placeholder - no image */}
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-3">Challenge</h4>
                <p className="text-white/80 leading-relaxed">
                  {currentProject.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-3">Strategy</h4>
                <p className="text-white/80 leading-relaxed">
                  {currentProject.strategy}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-3">Results</h4>
                <p className="text-white/80 leading-relaxed">
                  {currentProject.results}
                </p>
              </div>
            </div>
          </div>
        </div>
      }

      {/* CSS for animations */}
      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>);
}