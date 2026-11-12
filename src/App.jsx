import React, { useState } from 'react';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ChevronRight,
  CloudCog,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Globe2,
  Layers,
  Lock,
  Mail,
  MapPin,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  Truck,
  Workflow,
  X,
  Zap
} from 'lucide-react';

// Custom SVG Logo matching the attached Rengigs interlocking cyan/blue & lime-green 'RR' emblem
const RengigsLogo = ({ className = "w-11 h-11" }) => (
  <svg
    viewBox="0 0 120 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Rengigs Nigeria Limited Logo"
  >
    <defs>
      <linearGradient id="rengigsBlue" x1="15" y1="15" x2="68" y2="95" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="55%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0B3C5D" />
      </linearGradient>
      <linearGradient id="rengigsDeep" x1="15" y1="35" x2="32" y2="95" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0369A1" />
        <stop offset="100%" stopColor="#082F49" />
      </linearGradient>
      <linearGradient id="rengigsGreen" x1="62" y1="15" x2="108" y2="95" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A3E635" />
        <stop offset="55%" stopColor="#65A30D" />
        <stop offset="100%" stopColor="#3F6212" />
      </linearGradient>
    </defs>

    {/* Left vertical stem of first R */}
    <path
      d="M16 40C16 36.6863 18.6863 34 22 34H26L33 41V92C33 95.3137 30.3137 98 27 98H22C18.6863 98 16 95.3137 16 92V40Z"
      fill="url(#rengigsDeep)"
    />

    {/* Top bowl & diagonal leg of first R */}
    <path
      d="M18 16C18 13.7909 19.7909 12 22 12H45C60.464 12 72 22.5 72 37C72 48.2 64.8 57.3 54.4 60.6L74.5 92.5C76.2 95.2 74.3 98 71.1 98H58.8C56.7 98 54.7 96.9 53.6 95.1L35.5 64.5V48.5H44.5C51.4 48.5 56 44.1 56 37.5C56 30.9 51.4 26.5 44.5 26.5H18V16Z"
      fill="url(#rengigsBlue)"
    />

    {/* Interlocking second R in Lime/Emerald Green */}
    <path
      d="M68 12H84C99.5 12 110 22.5 110 37C110 48.2 102.8 57.3 92.4 60.6L112 92.5C113.7 95.2 111.8 98 108.6 98H96.3C94.2 98 92.2 96.9 91.1 95.1L71 62.5C68.5 58.5 71.2 53 75.9 52.3C84.2 51.1 93.5 46.2 93.5 37.5C93.5 29.8 87.6 25.5 79.5 25.5H75.5L68 12Z"
      fill="url(#rengigsGreen)"
    />

    {/* Digital pixel / AI node accents matching logo aesthetic */}
    <rect x="62" y="11" width="3.5" height="3.5" rx="0.8" fill="#65A30D" />
    <rect x="65" y="19" width="3" height="3" rx="0.7" fill="#84CC16" />
    <rect x="66" y="54" width="3.5" height="3.5" rx="0.8" fill="#65A30D" />
    <rect x="75" y="94" width="3" height="3" rx="0.7" fill="#0EA5E9" />
    <rect x="17" y="29" width="3" height="3" rx="0.7" fill="#0284C7" />
  </svg>
);

const SERVICES = [
  {
    id: 'ai-agents',
    icon: BrainCircuit,
    badge: 'Core Specialty',
    title: 'Enterprise AI & Autonomous Agents',
    summary:
      'Production-grade multi-agent orchestration, RAG knowledge pipelines, and intelligent decision-support systems built on LangGraph, Google ADK, and Azure AI.',
    deliverables: [
      'Custom Multi-Agent Workflows & LangGraph Pipelines',
      'Enterprise Document & ERP Knowledge Copilots',
      'Automated Content & Multi-Channel Publishing Engines',
      'AI Governance, Guardrails & Audit Logging'
    ],
    stack: ['Python', 'LangGraph', 'Google ADK', 'Azure AI', 'PostgreSQL']
  },
  {
    id: 'fullstack-saas',
    icon: Code2,
    badge: 'Global Delivery',
    title: 'Full-Stack Web & Cloud Applications',
    summary:
      'High-availability B2B marketplaces, customer portals, and SaaS platforms engineered with resilient backend APIs and responsive React interfaces.',
    deliverables: [
      'End-to-End SaaS Product Architecture & MVP Launch',
      'B2B Ecosystem & Vendor Marketplace Platforms',
      'REST & GraphQL API Engineering with Django & FastAPI',
      'Containerized Cloud Deployment & Zero-Downtime CI/CD'
    ],
    stack: ['React', 'Vite', 'Django', 'PostgreSQL', 'Docker']
  },
  {
    id: 'logistics-tech',
    icon: Truck,
    badge: 'Domain Mastery',
    title: 'Supply Chain & Logistics Intelligence',
    summary:
      'Algorithmic route-to-market optimization, full-truckload consolidation engines, and cost-to-serve analytics tailored for complex distribution networks.',
    deliverables: [
      'Full-Truckload (FTL) Order Consolidation Solvers',
      'Dynamic Cost-to-Serve & Route-to-Market Modeling',
      'Commercial Fleet Telemetry & Driver Operations Suites',
      'SAP & Warehouse Management System (WMS) Integrations'
    ],
    stack: ['Python', 'Power BI', 'PostgreSQL', 'SAP Integration', 'REST APIs']
  },
  {
    id: 'enterprise-automation',
    icon: Workflow,
    badge: 'Rapid ROI',
    title: 'Workflow & Enterprise Integration',
    summary:
      'Eliminate manual bottlenecks across finance, procurement, and operations with low-code/pro-code hybrid automation and executive BI dashboards.',
    deliverables: [
      'Microsoft Power Apps & Power Automate Enterprise Flows',
      'Automated Invoicing, Reconciliation & Compliance Bots',
      'Executive Real-Time KPI & Margin Command Centers',
      'Legacy ERP Modernization & Data Migration'
    ],
    stack: ['Power Platform', 'Power BI', 'Python', 'SharePoint', 'Webhooks']
  }
];

const CASE_STUDIES = [
  {
    id: 'renportal',
    category: 'B2B Marketplace',
    clientType: 'Pan-African & Global B2B Ecosystem',
    title: 'Renportal — Cross-Industry B2B Marketplace & Solution Hub',
    metrics: [
      { label: 'Architecture', value: 'Multi-Tenant' },
      { label: 'Discovery Speed', value: '3.4x Faster' },
      { label: 'Uptime SLA', value: '99.95%' }
    ],
    summary:
      'A unified digital ecosystem connecting enterprise buyers, vetted suppliers, and specialized technology solution providers with automated RFx matching.',
    challenge:
      'Enterprise procurement teams struggled with fragmented vendor discovery, slow qualification cycles, and disconnected project scoping across borders.',
    solution:
      'Engineered a full-stack React and Django platform backed by PostgreSQL and Docker, featuring structured capability indexing, verified corporate profiles, and automated workflow routing.',
    tags: ['React', 'Django', 'PostgreSQL', 'Docker', 'B2B SaaS']
  },
  {
    id: 'ftl-optimizer',
    category: 'AI & Logistics',
    clientType: 'Enterprise FMCG & Distribution Operations',
    title: 'FTL Optimizer AI — Intelligent Load Consolidation Engine',
    metrics: [
      { label: 'Truck Utilization', value: '+18.5%' },
      { label: 'Planning Time', value: '-72%' },
      { label: 'Cost-to-Serve', value: 'Optimized' }
    ],
    summary:
      'AI-enabled order consolidation and route-to-market infrastructure system that transforms fragmented customer orders into optimal full-truckload dispatches.',
    challenge:
      'Manual order batching across regional depots caused under-utilized fleet capacity, delayed dispatches, and elevated cost-per-case metrics.',
    solution:
      'Built an automated consolidation workflow integrating Microsoft Power Apps, Power Automate, and custom optimization rules to group shipments by capacity, route constraints, and delivery windows.',
    tags: ['AI Optimization', 'Power Apps', 'Power Automate', 'Supply Chain']
  },
  {
    id: 'nuleks-platform',
    category: 'Web & Cloud',
    clientType: 'International Engineering & Project Consulting',
    title: 'Nuleks Consulting — Corporate Digital Platform & Legal Engine',
    metrics: [
      { label: 'Global Edge CDN', value: '<60ms TTFB' },
      { label: 'Compliance CMS', value: 'Automated' },
      { label: 'Deployment', value: 'Zero-Downtime' }
    ],
    summary:
      'High-converting international consulting web presence paired with a decoupled backend for dynamic service catalogs and governance documentation.',
    challenge:
      'Needed an authoritative global digital footprint capable of serving engineering clients across Australia, EMEA, and Africa with strict compliance document controls.',
    solution:
      'Delivered a React frontend hosted on global edge CDN infrastructure paired with a hardened Django REST backend, custom legal document management, and automated SSL security.',
    tags: ['React', 'Django REST', 'Netlify', 'Render', 'Enterprise Web']
  },
  {
    id: 'ai-media-engine',
    category: 'AI & Automation',
    clientType: 'Digital Media & Enterprise Communications',
    title: 'Multi-Channel AI Content & Automated Publishing Pipeline',
    metrics: [
      { label: 'Production Cycle', value: '10x Faster' },
      { label: 'Channels', value: 'Multi-Platform' },
      { label: 'Human-in-Loop', value: 'Built-In' }
    ],
    summary:
      'End-to-end stateful AI pipeline that scripts, generates, validates, and schedules branded multimedia content across social and web channels.',
    challenge:
      'Scaling consistent, brand-aligned technical and commercial content across multiple platforms required heavy manual coordination and approval bottlenecks.',
    solution:
      'Architected a LangChain/LangGraph state machine backed by PostgreSQL with OAuth 2.0 PKCE multi-account publishing and automated audit trails.',
    tags: ['LangGraph', 'Python', 'PostgreSQL', 'OAuth 2.0', 'AI Agents']
  }
];

const TECH_STACK = [
  { group: 'AI & Agent Orchestration', items: ['Python', 'LangGraph', 'LangChain', 'Google ADK', 'Azure AI', 'RAG Pipelines'] },
  { group: 'Frontend Engineering', items: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Next.js', 'Progressive Web Apps'] },
  { group: 'Backend & Data Systems', items: ['Django', 'Django REST', 'FastAPI', 'PostgreSQL', 'Redis', 'OAuth 2.0 / JWT'] },
  { group: 'Cloud, DevOps & Enterprise', items: ['Docker', 'Netlify Edge', 'Render Cloud', 'Power Apps', 'Power Automate', 'Power BI'] }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(SERVICES[0]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Interactive Project Scoper / Global Engagement Estimator
  const [scopeForm, setScopeForm] = useState({
    serviceType: 'Enterprise AI & Autonomous Agents',
    region: 'North America / Europe',
    timeline: '4–8 Weeks (Accelerated MVP)',
    budget: '$10,000 – $25,000',
    name: '',
    email: '',
    company: '',
    brief: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = ['All', 'AI & Logistics', 'B2B Marketplace', 'Web & Cloud', 'AI & Automation'];
  const filteredCases =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === selectedCategory);

  const handleScopeSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Corporate Verification Strip */}
      <div className="bg-[#062438] text-slate-200 text-xs py-2 px-4 border-b border-sky-900/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-lime-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              RC-9257667
            </span>
            <span className="text-slate-400">|</span>
            <span>Registered Enterprise Software & AI Engineering Company — Lagos, Nigeria</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-300">
            <span className="inline-flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5 text-sky-400" />
              Serving Clients Across EMEA, North America & APAC
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#top" className="flex items-center gap-3 group">
            <RengigsLogo className="w-11 h-11 transition-transform duration-300 group-hover:scale-105" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-[#0B3C5D]">
                  RENGIGS
                </span>
                <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-lime-100 text-lime-800 border border-lime-300">
                  RC-9257667
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wide">
                NIGERIA LIMITED • AI & ENTERPRISE SYSTEMS
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#solutions" className="hover:text-[#0EA5E9] transition-colors">
              Solutions
            </a>
            <a href="#portfolio" className="hover:text-[#0EA5E9] transition-colors">
              Case Studies
            </a>
            <a href="#architecture" className="hover:text-[#0EA5E9] transition-colors">
              Tech Stack
            </a>
            <a href="#governance" className="hover:text-[#0EA5E9] transition-colors">
              Why Rengigs
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#0B3C5D] to-[#0284C7] hover:from-[#082F49] hover:to-[#0369A1] shadow-md shadow-sky-900/15 transition-all"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 text-lime-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800"
            >
              Solutions
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800"
            >
              Case Studies
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800"
            >
              Tech Stack
            </a>
            <a
              href="#governance"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800"
            >
              Why Rengigs
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-lg font-semibold text-white bg-[#0B3C5D]"
            >
              Request Global Consultation
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-br from-[#062438] via-[#0B3C5D] to-[#082F49] text-white"
      >
        {/* Subtle Ambient Glows in Logo Cyan & Lime */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-lime-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-sky-400/30 backdrop-blur-sm text-xs font-semibold tracking-wide text-sky-200">
                <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                <span>GLOBAL AI ENGINEERING & ENTERPRISE SOFTWARE PARTNER</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Architecting{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-lime-400">
                  Autonomous AI
                </span>{' '}
                & Mission-Critical Software for Global Enterprise.
              </h1>

              <p className="text-lg text-slate-200/90 max-w-2xl leading-relaxed">
                <strong className="text-white">Rengigs Nigeria Limited (RC-9257667)</strong>{' '}
                combines deep operational systems engineering with modern AI orchestration—building
                scalable web platforms, intelligent supply-chain solvers, and production AI agents
                for ambitious organizations worldwide.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[#062438] bg-gradient-to-r from-lime-400 to-lime-300 hover:from-lime-300 hover:to-lime-200 shadow-lg shadow-lime-500/20 transition-all"
                >
                  Scope Your Solution
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm transition-all"
                >
                  Explore Case Studies
                </a>
              </div>

              {/* Global Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/15 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-lime-400">99.9%</div>
                  <div className="text-xs text-slate-300 mt-1">Production Cloud SLA</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-sky-300">24/7</div>
                  <div className="text-xs text-slate-300 mt-1">Autonomous Agent Ops</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">Global</div>
                  <div className="text-xs text-slate-300 mt-1">UTC+1 Agile Overlap</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Architecture Console Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#041827]/90 border border-sky-400/25 shadow-2xl p-6 backdrop-blur-md">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-lime-400" />
                    <span className="ml-2 text-xs font-mono text-slate-400">
                      rengigs-core-engine.py
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-lime-500/15 text-lime-300 border border-lime-500/30">
                    RC-9257667 VERIFIED
                  </span>
                </div>

                <div className="py-5 space-y-4 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/20">
                    <div className="flex items-center justify-between text-sky-300 font-semibold mb-1">
                      <span className="flex items-center gap-1.5">
                        <Bot className="w-4 h-4 text-lime-400" />
                        Multi-Agent Orchestrator
                      </span>
                      <span className="text-lime-400">ACTIVE</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      LangGraph + Google ADK state pipelines executing deterministic enterprise
                      workflows with audit logging.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/20">
                    <div className="flex items-center justify-between text-sky-300 font-semibold mb-1">
                      <span className="flex items-center gap-1.5">
                        <Network className="w-4 h-4 text-sky-400" />
                        Full-Stack Cloud Backbone
                      </span>
                      <span className="text-sky-300">EDGE READY</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      React + Django REST + PostgreSQL containerized clusters engineered for
                      international scale.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-lime-500/20">
                    <div className="flex items-center justify-between text-lime-300 font-semibold mb-1">
                      <span className="flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-lime-400" />
                        Supply Chain & FTL Optimization
                      </span>
                      <span className="text-lime-400">+18.5% ROI</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      Algorithmic route-to-market consolidation and cost-to-serve intelligence.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                  <span>ISO-Aligned Engineering Standards</span>
                  <span className="text-sky-300 font-semibold">Lagos • Global Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES & CAPABILITIES SECTION */}
      <section id="solutions" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">
            Enterprise Capabilities
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0B3C5D] tracking-tight">
            Engineering Solutions Built for Measurable Business Impact
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            We bridge the gap between cutting-edge artificial intelligence and rigorous operational
            execution—delivering systems that reduce costs, accelerate revenue, and scale reliably.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Interactive Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              const isSelected = activeService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#0B3C5D] text-white border-[#0B3C5D] shadow-xl shadow-sky-900/15'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-sky-300 hover:bg-sky-50/40'
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl shrink-0 ${
                      isSelected ? 'bg-sky-500/20 text-lime-400' : 'bg-sky-50 text-[#0284C7]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          isSelected ? 'text-lime-300' : 'text-[#65A30D]'
                        }`}
                      >
                        {service.badge}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'text-lime-400 translate-x-1' : 'text-slate-400'
                        }`}
                      />
                    </div>
                    <h3 className="font-bold text-base mt-1">{service.title}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Deliverable Panel */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-100 text-lime-800 text-xs font-bold">
              <Zap className="w-3.5 h-3.5" />
              {activeService.badge}
            </div>

            <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#0B3C5D]">
              {activeService.title}
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed text-base">
              {activeService.summary}
            </p>

            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Key Production Deliverables
              </h4>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {activeService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#65A30D] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {activeService.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-sky-50 text-[#0B3C5D] border border-sky-200/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0284C7] hover:text-[#0B3C5D]"
              >
                Request Architecture Brief
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO & CASE STUDIES SECTION */}
      <section id="portfolio" className="py-20 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-lime-400">
                Proven Track Record
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Featured Platforms & Enterprise Deployments
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-lime-400 text-[#062438] shadow-md'
                      : 'bg-white/10 text-slate-300 hover:bg-white/15'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Case Study Grid */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {filteredCases.map((study) => (
              <div
                key={study.id}
                className="group rounded-3xl bg-slate-800/70 border border-slate-700/80 hover:border-sky-400/50 p-7 sm:p-8 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full font-bold bg-sky-500/15 text-sky-300 border border-sky-400/20">
                      {study.category}
                    </span>
                    <span className="text-slate-400 font-medium">{study.clientType}</span>
                  </div>

                  <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {study.title}
                  </h3>

                  <p className="mt-3 text-slate-300 text-sm leading-relaxed">{study.summary}</p>

                  {/* Metrics Strip */}
                  <div className="grid grid-cols-3 gap-3 my-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-700/70">
                    {study.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="text-base sm:text-lg font-extrabold text-lime-400">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-400">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/70 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded bg-slate-700/70 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCaseStudy(study)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-400 hover:text-lime-300 shrink-0"
                  >
                    Case Breakdown
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK & ARCHITECTURE SECTION */}
      <section id="architecture" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#65A30D]">
            Modern Engineering Stack
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0B3C5D]">
            Battle-Tested Technologies for Global Scale
          </h2>
          <p className="mt-4 text-slate-600">
            Every system built by Rengigs Nigeria Limited follows modular, containerized, and
            cloud-agnostic engineering principles—ensuring security, maintainability, and speed.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((group) => (
            <div
              key={group.group}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-sky-300 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B3C5D] to-[#0EA5E9] text-white flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0B3C5D] text-base mb-4">{group.group}</h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#65A30D]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WHY GLOBAL CLIENTS CHOOSE RENGIGS */}
      <section
        id="governance"
        className="py-20 bg-gradient-to-b from-sky-50/70 to-white border-y border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3C5D] text-white text-xs font-bold">
                <Building2 className="w-3.5 h-3.5 text-lime-400" />
                CORPORATE GOVERNANCE • RC-9257667
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3C5D] leading-tight">
                Enterprise Rigor Meets Agile Global Delivery
              </h2>
              <p className="text-slate-600 leading-relaxed">
                International clients partner with <strong>Rengigs Nigeria Limited</strong> for our
                rare combination of executive supply-chain domain expertise, certified project
                governance (PMP®, CBAP®, ITIL®), and full-stack AI engineering talent.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#65A30D]">
                  Verified Corporate Entity
                </div>
                <div className="text-base font-extrabold text-[#0B3C5D]">
                  Rengigs Nigeria Limited
                </div>
                <div className="text-sm text-slate-600">
                  Corporate Affairs Commission Registration: <strong>RC-9257667</strong>
                </div>
                <div className="text-xs text-slate-500">
                  Headquarters: Lagos, Nigeria • Global Remote & Hybrid Engagement Model
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Globe2 className="w-8 h-8 text-[#0284C7] mb-3" />
                <h3 className="font-bold text-[#0B3C5D] text-lg">
                  Seamless International Timezone Overlap
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Operating from UTC+1, our engineering teams provide real-time daily sprint
                  collaboration with London, Europe, the Middle East, and North American East Coast
                  stakeholders.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Lock className="w-8 h-8 text-[#65A30D] mb-3" />
                <h3 className="font-bold text-[#0B3C5D] text-lg">
                  IP Protection & Data Compliance
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Strict NDA-backed engagements, full client source-code ownership upon milestone
                  completion, and architectures aligned with GDPR and NDPA standards.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Cpu className="w-8 h-8 text-[#0284C7] mb-3" />
                <h3 className="font-bold text-[#0B3C5D] text-lg">
                  Business-First Systems Thinking
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We don’t just write code—we model unit economics, operational bottlenecks, and
                  measurable ROI before architecting a single microservice.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <CloudCog className="w-8 h-8 text-[#65A30D] mb-3" />
                <h3 className="font-bold text-[#0B3C5D] text-lg">
                  Transparent Milestone Delivery
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Iterative weekly staging deployments, automated CI/CD previews, and structured
                  milestone billing in USD or NGN for effortless international procurement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PROJECT SCOPER & CONTACT SECTION */}
      <section id="contact" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0B3C5D] text-white overflow-hidden shadow-2xl grid lg:grid-cols-12">
          {/* Left Pitch & Direct Channels */}
          <div className="lg:col-span-5 p-8 sm:p-12 bg-gradient-to-br from-[#062438] to-[#0B3C5D] flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-lime-400/15 text-lime-300 text-xs font-bold border border-lime-400/30">
                START A GLOBAL ENGAGEMENT
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight">
                Ready to Build Your Next AI or Enterprise Platform?
              </h2>
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                Configure your project parameters to receive a tailored technical architecture
                proposal and milestone roadmap from Rengigs Nigeria Limited within 24 business
                hours.
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <div className="flex items-center gap-3 text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0" />
                  <span>Registered Company: Rengigs Nigeria Limited (RC-9257667)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>Lagos, Nigeria • Serving Clients Worldwide</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Mail className="w-5 h-5 text-lime-400 shrink-0" />
                  <span>projects@rengigs.com</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/15">
              <div className="text-xs text-slate-400">Multi-Currency International Billing</div>
              <div className="text-sm font-semibold text-white mt-1">
                USD ($) • GBP (£) • EUR (€) • NGN (₦)
              </div>
            </div>
          </div>

          {/* Right Interactive Project Scoper Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white text-slate-900">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-lime-100 text-[#65A30D] flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0B3C5D]">
                  Architecture Brief Received
                </h3>
                <p className="text-slate-600 max-w-md text-sm leading-relaxed">
                  Thank you, <strong>{scopeForm.name || 'Partner'}</strong>. Our Principal Solutions
                  Architect at <strong>Rengigs Nigeria Limited (RC-9257667)</strong> is reviewing
                  your <strong>{scopeForm.serviceType}</strong> scope for{' '}
                  <strong>{scopeForm.region}</strong> and will respond to{' '}
                  <strong>{scopeForm.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-xl text-sm font-bold text-[#0B3C5D] bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Scope Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleScopeSubmit} className="space-y-5">
                <h3 className="text-xl font-extrabold text-[#0B3C5D]">
                  Interactive Solution Scoper
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Primary Solution Track
                    </label>
                    <select
                      value={scopeForm.serviceType}
                      onChange={(e) =>
                        setScopeForm({ ...scopeForm, serviceType: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:border-[#0284C7]"
                    >
                      <option>Enterprise AI & Autonomous Agents</option>
                      <option>Full-Stack Web & Cloud Applications</option>
                      <option>Supply Chain & Logistics Intelligence</option>
                      <option>Workflow & Enterprise Integration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Client Region
                    </label>
                    <select
                      value={scopeForm.region}
                      onChange={(e) => setScopeForm({ ...scopeForm, region: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:border-[#0284C7]"
                    >
                      <option>North America / Europe</option>
                      <option>United Kingdom</option>
                      <option>Middle East (GCC)</option>
                      <option>Africa (Nigeria / Pan-African)</option>
                      <option>Asia-Pacific / Australia</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Target Delivery Window
                    </label>
                    <select
                      value={scopeForm.timeline}
                      onChange={(e) => setScopeForm({ ...scopeForm, timeline: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:border-[#0284C7]"
                    >
                      <option>2–4 Weeks (Rapid Prototype / Audit)</option>
                      <option>4–8 Weeks (Accelerated MVP)</option>
                      <option>2–4 Months (Full Enterprise Platform)</option>
                      <option>Ongoing Dedicated Engineering Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Estimated Investment (USD)
                    </label>
                    <select
                      value={scopeForm.budget}
                      onChange={(e) => setScopeForm({ ...scopeForm, budget: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:border-[#0284C7]"
                    >
                      <option>$3,500 – $10,000</option>
                      <option>$10,000 – $25,000</option>
                      <option>$25,000 – $50,000+</option>
                      <option>Enterprise Custom Quote</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={scopeForm.name}
                      onChange={(e) => setScopeForm({ ...scopeForm, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={scopeForm.email}
                      onChange={(e) => setScopeForm({ ...scopeForm, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Global Ltd"
                      value={scopeForm.company}
                      onChange={(e) => setScopeForm({ ...scopeForm, company: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Project Objectives & Key Requirements *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your business challenge, target users, or desired AI/software capabilities..."
                    value={scopeForm.brief}
                    onChange={(e) => setScopeForm({ ...scopeForm, brief: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#0B3C5D] via-[#0284C7] to-[#65A30D] hover:opacity-95 shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Generate Technical Proposal & Schedule Discovery
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#041827] text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-12 gap-10 pb-10 border-b border-slate-800">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <RengigsLogo className="w-10 h-10" />
                <div>
                  <div className="text-lg font-extrabold text-white tracking-tight">
                    Rengigs Nigeria Limited
                  </div>
                  <div className="text-xs font-bold text-lime-400">
                    Registration No: RC-9257667
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                Enterprise AI engineering, full-stack software development, and intelligent
                logistics optimization built in Lagos for forward-thinking organizations across the
                globe.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2.5 text-sm">
              <div className="font-bold text-white uppercase tracking-wider text-xs mb-3">
                Solutions
              </div>
              <div>
                <a href="#solutions" className="hover:text-sky-400 transition-colors">
                  Enterprise AI Agents
                </a>
              </div>
              <div>
                <a href="#solutions" className="hover:text-sky-400 transition-colors">
                  Full-Stack SaaS & Web
                </a>
              </div>
              <div>
                <a href="#solutions" className="hover:text-sky-400 transition-colors">
                  Supply Chain & FTL AI
                </a>
              </div>
              <div>
                <a href="#solutions" className="hover:text-sky-400 transition-colors">
                  Enterprise Automation
                </a>
              </div>
            </div>

            <div className="md:col-span-4 space-y-2.5 text-sm">
              <div className="font-bold text-white uppercase tracking-wider text-xs mb-3">
                Corporate & Compliance
              </div>
              <p className="text-slate-400">
                Legal Entity: <span className="text-white font-semibold">Rengigs Nigeria Limited</span>
              </p>
              <p className="text-slate-400">
                CAC Registration: <span className="text-lime-400 font-semibold">RC-9257667</span>
              </p>
              <p className="text-slate-400">Jurisdiction: Federal Republic of Nigeria</p>
              <p className="text-slate-400">Global Delivery: EMEA • Americas • APAC</p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Rengigs Nigeria Limited (RC-9257667). All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#governance" className="hover:text-slate-300">
                Privacy & NDPA Compliance
              </a>
              <a href="#governance" className="hover:text-slate-300">
                Terms of Engagement
              </a>
              <a href="#contact" className="hover:text-slate-300">
                Global Inquiries
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* CASE STUDY DETAIL MODAL */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-[#0B3C5D]">
                  {selectedCaseStudy.category}
                </span>
                <h3 className="mt-3 text-2xl font-extrabold text-[#0B3C5D]">
                  {selectedCaseStudy.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  {selectedCaseStudy.clientType}
                </p>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 my-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              {selectedCaseStudy.metrics.map((m, i) => (
                <div key={i}>
                  <div className="text-lg font-extrabold text-[#65A30D]">{m.value}</div>
                  <div className="text-xs text-slate-500">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-[#0B3C5D] uppercase text-xs tracking-wider mb-1">
                  Business Challenge
                </h4>
                <p>{selectedCaseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="font-bold text-[#0B3C5D] uppercase text-xs tracking-wider mb-1">
                  Rengigs Engineering Solution
                </h4>
                <p>{selectedCaseStudy.solution}</p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {selectedCaseStudy.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-sky-50 text-[#0B3C5D]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setSelectedCaseStudy(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0B3C5D] hover:bg-[#082F49]"
              >
                Build Similar Solution
                <ArrowRight className="w-3.5 h-3.5 text-lime-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
