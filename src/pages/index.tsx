import type { ReactNode } from 'react';
import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { BookOpen, Code, Share2, Users, Rocket, ChevronRight, type LucideIcon } from 'lucide-react';

type Slide = {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
};

function HeroSlider() {
  const {
    siteConfig: { baseUrl },
  } = useDocusaurusContext();
  const slides: Slide[] = useMemo(
    () => [
      {
        src: '/img/hero/slide-1.webp',
        alt: 'Comunidad construyendo en Ethereum',
        eyebrow: 'Comunidad primero',
        title: 'Ethereum Lima',
        subtitle:
          'Plataforma educativa descentralizada para la próxima generación de builders en Latinoamérica.',
      },
      {
        src: '/img/hero/slide-2.webp',
        alt: 'Aprendizaje práctico con laboratorios',
        eyebrow: 'Aprendizaje práctico',
        title: 'Aprende Construyendo',
        subtitle: 'Labs, retos y proyectos reales para pasar de la teoría al código en mainnet.',
      },
      {
        src: '/img/hero/slide-3.webp',
        alt: 'Open source y contribución',
        eyebrow: 'Open Source',
        title: 'Comparte y Contribuye',
        subtitle:
          'Contenido abierto bajo licencia CC BY 4.0, evolucionado por la propia comunidad.',
      },
    ],
    [],
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const current = slides[active];

  return (
    <header className="relative overflow-hidden min-h-[85vh] flex items-center bg-slate-900 group">
      {/* Background Image with Transition */}
      {slides.map((slide, i) => {
        const slideUrl = slide.src.startsWith('/') ? `${baseUrl}${slide.src.slice(1)}` : slide.src;
        return (
          <div
            key={i}
            className={clsx(
              'absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out scale-105',
              i === active ? 'opacity-100' : 'opacity-0',
            )}
            style={{ backgroundImage: `url(${slideUrl})` }}
            role="img"
            aria-label={slide.alt}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
          </div>
        );
      })}

      <div className="container relative z-10 py-20 max-w-5xl">
        <div className={clsx('transition-all duration-700 transform', 'opacity-100 translate-y-0')}>
          {current.eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ethlima-blue/20 border border-ethlima-lightBlue/30 text-ethlima-lightBlue text-sm font-semibold mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ethlima-lightBlue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ethlima-lightBlue"></span>
              </span>
              {current.eyebrow}
            </div>
          )}

          <Heading
            as="h1"
            className="text-white text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight"
          >
            {current.title}
          </Heading>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            {current.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              className="px-8 py-4 rounded-xl bg-ethlima-blue hover:bg-ethlima-blue/90 text-white font-bold transition-all shadow-lg hover:shadow-ethlima-blue/20 hover:-translate-y-0.5 flex items-center gap-2"
              to="/docs/rutas/intro"
            >
              <Rocket size={20} /> Empezar ruta
            </Link>

            <Link
              className="px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 font-bold transition-all backdrop-blur-sm flex items-center gap-2"
              to="/docs/cursos"
            >
              <BookOpen size={20} /> Explorar Cursos
            </Link>
          </div>
        </div>

        {/* Dots indicators */}
        <div className="flex gap-3 mt-16">
          {slides.map((_, i) => (
            <button
              key={i}
              className={clsx(
                'h-1.5 transition-all duration-300 rounded-full',
                i === active ? 'w-8 bg-ethlima-lightBlue' : 'w-4 bg-slate-600 hover:bg-slate-500',
              )}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </header>
  );
}

function FeatureCard({
  title,
  description,
  icon: Icon,
  to,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  to?: string;
}) {
  const CardContent = (
    <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:border-ethlima-blue/30 transition-all group h-full flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-ethlima-blue/10 flex items-center justify-center text-ethlima-blue dark:text-ethlima-lightBlue mb-6 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-ethlima-blue transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed grow">{description}</p>
      {to && (
        <div className="mt-6 flex items-center text-ethlima-blue font-semibold text-sm">
          Saber más{' '}
          <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </div>
  );

  return to ? (
    <Link to={to} className="no-underline hover:no-underline">
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Plataforma de educación técnica masiva para Ethereum y Web3 en Latinoamérica."
    >
      <HeroSlider />

      <main className="py-24 bg-white dark:bg-slate-950">
        <div className="container">
          {/* Stats/Intro Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-32">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-black mb-6 dark:text-white leading-tight">
                Forjando el futuro de <span className="text-ethlima-blue">Web3 en Latam</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                No somos solo un curso, somos una infraestructura educativa para escalar el
                conocimiento en Ethereum.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureCard
                icon={BookOpen}
                title="Rutas Curadas"
                description="Desde fundamentos hasta escalabilidad L2 y seguridad en smart contracts."
                to="/docs/rutas/intro"
              />
              <FeatureCard
                icon={Code}
                title="Cursos Prácticos"
                description="Contenido modular diseñado para ser aplicado en entornos de desarrollo reales."
                to="/docs/cursos"
              />
              <FeatureCard
                icon={Share2}
                title="Contribución Abierta"
                description="Cualquiera puede proponer mejoras o nuevos módulos vía Pull Requests."
                to="/docs/recursos/como-aportar"
              />
              <FeatureCard
                icon={Users}
                title="Basado en Comunidad"
                description="Impulsado por Ethereum Lima, conectando talentos locales con el mundo."
              />
            </div>
          </div>

          {/* CTA Banner Section */}
          <div className="relative rounded-3xl overflow-hidden bg-ethlima-blue p-12 md:p-20 text-center shadow-2xl shadow-ethlima-blue/20">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-ethlima-lightBlue/20 rounded-full blur-3xl" />

            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 relative z-10">
              ¿Listo para convertirte en un Ethereum Builder?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                className="px-10 py-5 rounded-2xl bg-white text-ethlima-blue font-black text-lg hover:bg-slate-100 transition-all hover:scale-105"
                to="/docs/empieza-aqui"
              >
                Comenzar ahora
              </Link>
              <Link
                className="px-10 py-5 rounded-2xl bg-ethlima-blue font-black text-lg text-white border-2 border-white/20 hover:bg-white/10 transition-all"
                to="/docs/recursos/como-aportar"
              >
                Quiero Contribuir
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
