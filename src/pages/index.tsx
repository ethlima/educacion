import type { ReactNode } from 'react';
import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Slide = {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
};

function HeroSlider() {
  const { siteConfig } = useDocusaurusContext();

  const slides: Slide[] = useMemo(
    () => [
      {
        src: '/img/hero/slide-1.jpg',
        alt: 'Comunidad construyendo en Ethereum',
        eyebrow: 'Comunidad primero',
        title: siteConfig.title,
        subtitle: siteConfig.tagline,
      },
      {
        src: '/img/hero/slide-2.jpg',
        alt: 'Aprendizaje práctico con laboratorios',
        eyebrow: 'Aprendizaje práctico',
        title: 'Aprende construyendo',
        subtitle: 'Labs, retos y proyectos reales para pasar de teoría a código.',
      },
      {
        src: '/img/hero/slide-3.jpg',
        alt: 'Open source y contribución',
        eyebrow: 'Open Source',
        title: 'Comparte y contribuye',
        subtitle: 'Contenido abierto, repositorio en GitHub y mejora continua con la comunidad.',
      },
    ],
    [siteConfig.title, siteConfig.tagline]
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const current = slides[active];

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url(${current.src})` }}
        role="img"
        aria-label={current.alt}
      />
      <div className={styles.heroOverlay} />

      <div className={clsx('container', styles.heroInner)}>
        {current.eyebrow && <div className={styles.eyebrow}>{current.eyebrow}</div>}

        <Heading as="h1" className={styles.heroTitle}>
          {current.title}
        </Heading>

        <p className={styles.heroSubtitle}>{current.subtitle}</p>

        <div className={styles.heroCtas}>
          {/* ✅ Opción 2: Formación vive en /formacion */}
          <Link className="button button--primary button--lg" to="/formacion/intro">
            Explorar la formación
          </Link>

          {/* ✅ Añadimos Cursos (alineado al plan) */}
          <Link className="button button--secondary button--lg" to="/cursos/intro">
            Ver cursos
          </Link>

          {/* ✅ Opción 2: Contribuir vive en /contribuir */}
          <Link className="button button--secondary button--lg" to="/contribuir/como-aportar">
            Contribuir (Guía)
          </Link>

          <a
            className={clsx('button button--outline button--lg', styles.outlineBtn)}
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Unirme a la comunidad
          </a>
        </div>

        <div className={styles.dots} aria-label="Cambiar slide">
          {slides.map((_, i) => (
            <button
              key={i}
              className={clsx(styles.dot, i === active && styles.dotActive)}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              aria-current={i === active ? 'true' : 'false'}
              type="button"
            />
          ))}
        </div>
      </div>
    </header>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <Heading as="h2" className={styles.sectionTitle}>
            {title}
          </Heading>
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function CardGrid({ children }: { children: ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}

function Card({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon?: string;
}) {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.cardIcon}>{icon}</div>}
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Plataforma open source para aprender, construir y contribuir en Ethereum desde Latinoamérica."
    >
      <HeroSlider />

      <main>
        <Section
          title="Enfoque educativo"
          subtitle="Una ruta clara para aprender Web3 con mentalidad de builders."
        >
          <CardGrid>
            <Card
              icon="🧩"
              title="Open Source"
              text="Contenido abierto y reutilizable: mejoras por PRs, issues y revisión comunitaria."
            />
            <Card
              icon="🛠️"
              title="Aprendizaje práctico"
              text="Menos teoría aislada, más labs: ejercicios, deploys en testnet y mini-proyectos."
            />
            <Card
              icon="🤝"
              title="Comunidad primero"
              text="Aprendes mejor con otros: soporte, study groups, mentorías y espacios de práctica."
            />
            <Card
              icon="⛓️"
              title="Construcción sobre Ethereum"
              text="Base sólida: Ethereum, tooling moderno, L2s, seguridad y buenas prácticas."
            />
          </CardGrid>
        </Section>

        <Section title="Metodología" subtitle="Progresión diseñada para que avances con intención y entregables.">
          <div className={styles.methodWrap}>
            <div className={styles.method}>
              <div className={styles.methodStep}>
                <div className={styles.badge}>1</div>
                <div>
                  <Heading as="h3" className={styles.methodTitle}>
                    Learn
                  </Heading>
                  <p className={styles.methodText}>
                    Fundamentos + conceptos clave (blockchain, Ethereum, wallets, gas, smart contracts).
                  </p>
                </div>
              </div>

              <div className={styles.methodStep}>
                <div className={styles.badge}>2</div>
                <div>
                  <Heading as="h3" className={styles.methodTitle}>
                    Build
                  </Heading>
                  <p className={styles.methodText}>
                    Labs guiados: Solidity, testing (Foundry/Hardhat), deploy en testnet y prácticas seguras.
                  </p>
                </div>
              </div>

              <div className={styles.methodStep}>
                <div className={styles.badge}>3</div>
                <div>
                  <Heading as="h3" className={styles.methodTitle}>
                    Contribute
                  </Heading>
                  <p className={styles.methodText}>
                    Contribuye al repositorio: documentación, ejemplos, mejoras de cursos y recursos para la comunidad.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.callout}>
              <Heading as="h3" className={styles.calloutTitle}>
                Eventos de laboratorios prácticos
              </Heading>
              <p className={styles.calloutText}>
                Sesiones tipo “lab” con retos, revisión y demo. Ideal para pasar de “sé” a “lo construí”.
              </p>
              <div className={styles.calloutCtas}>
                <Link className="button button--primary" to="/formacion/fundamentos/que-es-blockchain">
                  Empezar por Fundamentos
                </Link>
                <Link className="button button--secondary" to="/formacion/desarrollo/introduccion-solidity">
                  Ir a Desarrollo
                </Link>
                {/* ✅ Link directo a cursos */}
                <Link className="button button--secondary" to="/cursos/intro">
                  Ver Cursos
                </Link>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Cómo empezar" subtitle="Elige tu siguiente paso según tu nivel y objetivo.">
          <div className={styles.startGrid}>
            <div className={styles.startCard}>
              <Heading as="h3" className={styles.startTitle}>
                1) Explorar información
              </Heading>
              <p className={styles.startText}>
                Si recién empiezas, ve por <b>Fundamentos</b>. Si ya programas, entra directo a <b>Desarrollo</b> o{' '}
                <b>Escalabilidad</b>.
              </p>
              <div className={styles.startCtas}>
                <Link className="button button--primary" to="/formacion/fundamentos/que-es-blockchain">
                  Ver Fundamentos
                </Link>
                <Link className="button button--secondary" to="/formacion/escalabilidad/que-son-layer2">
                  Ver Escalabilidad
                </Link>
                <Link className="button button--secondary" to="/cursos/intro">
                  Ver Cursos
                </Link>
              </div>
            </div>

            <div className={styles.startCard}>
              <Heading as="h3" className={styles.startTitle}>
                2) Unirse a la comunidad
              </Heading>
              <p className={styles.startText}>
                Participa en discusiones, pide feedback y encuentra compañeros de construcción y contribución.
              </p>
              <div className={styles.startCtas}>
                <a className="button button--primary" href="#" onClick={(e) => e.preventDefault()}>
                  Discord / Telegram (pronto)
                </a>
                <Link className="button button--secondary" to="/contribuir/como-aportar">
                  Guía para contribuir
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
}