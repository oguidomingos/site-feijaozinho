import { useState } from 'react'

const BASE = '/site-feijaozinho'

const RESTAURANT = {
  name: 'Feijaozinho',
  subtitle: 'Restaurante Comida Caseira',
  tagline: 'Comida caseira de verdade, com o tempero e o carinho que voce merece',
  rating: 4.3,
  reviewCount: 878,
  phone: '(61) 3351-5743',
  whatsapp: '556133515743',
  address: 'CSA 02, Lote 04, St. A Sul - Taguatinga, DF, 72015-907',
  instagram: '@feijaozinhorestaurante',
  facebook: 'RestauranteFeijaozinho',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5!2d-48.0640653!3d-15.8125767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bcdb38e0e7c5f%3A0x0!2sFeij%C3%A3ozinho+Restaurante+Comida+Caseira!5e0!3m2!1spt-BR!2sbr',
  mapsLink: 'https://www.google.com/maps/place/Feij%C3%A3ozinho+Restaurante+Comida+Caseira/',
  hours: {
    lunch: { days: 'Seg-Sab', time: '11h30 - 15h30' },
    dinner: { days: 'Seg-Sex', time: '18h - 22h' },
  },
}

const SPECIALTIES = [
  {
    title: 'Self-Service Completo',
    desc: 'Buffet farto e variado com opcoes que mudam diariamente. Arroz, feijao, carnes, saladas e acompanhamentos caseiros de qualidade.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12" />
      </svg>
    ),
  },
  {
    title: 'Carne de Sol',
    desc: 'Nosso carro-chefe: carne de sol na chapa, servida com macaxeira, feijao verde e vinagrete. Sabor que conquista no primeiro garfo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: 'Feijoada Completa',
    desc: 'Aos sabados, nossa feijoada e lendaria: feijao preto com carnes defumadas, arroz, couve, farofa, torresmo e laranja.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Pratos do Dia',
    desc: 'Cardapio rotativo com pratos especiais todos os dias. Bife acebolado, costelinha de porco, carne cozida com legumes e muito mais.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
]

const GALLERY = [
  { src: `${BASE}/photos/hero.jpg`, alt: 'Prato com comida caseira brasileira', label: 'Comida Caseira' },
  { src: `${BASE}/photos/food01.jpg`, alt: 'Churrasco e carnes grelhadas', label: 'Carnes na Brasa' },
  { src: `${BASE}/photos/food02.jpg`, alt: 'Prato feito completo', label: 'Prato Feito' },
  { src: `${BASE}/photos/food03.jpg`, alt: 'Arroz, feijao e acompanhamentos', label: 'Buffet Completo' },
  { src: `${BASE}/photos/food04.jpg`, alt: 'Prato de carne com vegetais', label: 'Prato do Dia' },
  { src: `${BASE}/photos/food05.jpg`, alt: 'Sobremesa caseira', label: 'Sobremesas' },
  { src: `${BASE}/photos/food06.jpg`, alt: 'Salada e acompanhamentos frescos', label: 'Saladas Frescas' },
  { src: `${BASE}/photos/interior01.jpg`, alt: 'Ambiente do restaurante Feijaozinho', label: 'Nosso Espaco' },
  { src: `${BASE}/photos/interior02.jpg`, alt: 'Area de refeicoes do Feijaozinho', label: 'Ambiente Familiar' },
]

const REVIEWS = [
  {
    name: 'Ana Carolina M.',
    rating: 5,
    text: 'Melhor comida caseira de Taguatinga! O buffet e muito variado, as carnes sao maravilhosas e o preco e justo. Venho toda semana no almoco e nunca decepciona.',
  },
  {
    name: 'Paulo H.',
    rating: 4,
    text: 'Comida caseira de verdade, com tempero de mae. O bife acebolado e sensacional. O ambiente e simples mas aconchegante. Recomendo para quem busca sabor e qualidade.',
  },
  {
    name: 'Lucia F.',
    rating: 5,
    text: 'Frequento o Feijaozinho ha anos. A feijoada de sabado e imperdivel! Equipe atenciosa, comida farta e gostosa. O melhor custo-beneficio da regiao.',
  },
  {
    name: 'Diego R.',
    rating: 5,
    text: 'Descobri pelo Google Maps e virei cliente fiel. A carne de sol e o destaque, mas todo o buffet e excelente. Almoco e jantar com a mesma qualidade.',
  },
]

const MENU_ITEMS = [
  { category: 'Pratos Principais', items: ['Bife acebolado', 'Carne de sol na chapa', 'Carne cozida com legumes', 'Costelinha de porco', 'Frango assado', 'Feijoada completa (sabados)'] },
  { category: 'Acompanhamentos', items: ['Arroz branco', 'Feijao carioca', 'Farofa caseira', 'Macarrao', 'Batata frita', 'Mandioca cozida'] },
  { category: 'Saladas', items: ['Salada de alface e tomate', 'Salada de maionese', 'Vinagrete', 'Salada de beterraba', 'Couve refogada'] },
  { category: 'Bebidas', items: ['Suco natural', 'Refrigerante', 'Cerveja', 'Agua mineral', 'Agua de coco'] },
]

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i <= rating ? 'text-amber-400' : 'text-coal-700'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function WhatsAppButton({ className = '', children, size = 'lg' }) {
  const sizeClasses = size === 'lg'
    ? 'px-8 py-4 text-lg'
    : 'px-6 py-3 text-base'
  return (
    <a
      href={`https://wa.me/${RESTAURANT.whatsapp}?text=Ol%C3%A1!%20Vi%20o%20site%20do%20Feij%C3%A3ozinho%20e%20gostaria%20de%20saber%20mais.`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl ${sizeClasses} ${className}`}
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {children}
    </a>
  )
}

function GalleryModal({ image, onClose }) {
  if (!image) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white text-3xl font-light transition-colors"
          aria-label="Fechar"
        >
          &times;
        </button>
        <img
          src={image.src}
          alt={image.alt}
          className="w-full rounded-xl shadow-2xl object-contain max-h-[80vh]"
        />
        <p className="text-center text-white/70 mt-3 text-sm">{image.alt}</p>
      </div>
    </div>
  )
}

function App() {
  const [galleryImage, setGalleryImage] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-coal-950 text-coal-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-coal-950/80 backdrop-blur-md border-b border-coal-800/50">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <a href="#" className="font-display text-xl font-bold text-amber-400">
            Feijaozinho
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-coal-300">
            <a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre</a>
            <a href="#cardapio" className="hover:text-amber-400 transition-colors">Cardapio</a>
            <a href="#galeria" className="hover:text-amber-400 transition-colors">Galeria</a>
            <a href="#avaliacoes" className="hover:text-amber-400 transition-colors">Avaliacoes</a>
            <a href="#localizacao" className="hover:text-amber-400 transition-colors">Localizacao</a>
          </div>
          <div className="flex items-center gap-3">
            <WhatsAppButton size="sm" className="hidden sm:inline-flex !px-4 !py-2 !text-sm">
              WhatsApp
            </WhatsAppButton>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-coal-300 hover:text-amber-400 transition-colors p-2"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileMenuOpen
                  ? <path d="M6 18L18 6M6 6l12 12" />
                  : <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                }
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-coal-950/95 backdrop-blur-md border-t border-coal-800/50 px-4 py-4 space-y-3">
            {['Sobre', 'Cardapio', 'Galeria', 'Avaliacoes', 'Localizacao'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-coal-300 hover:text-amber-400 transition-colors py-2 text-lg"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="relative min-h-screen flex items-center justify-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BASE}/photos/hero.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coal-950/70 via-coal-950/50 to-coal-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
              <Stars rating={Math.round(RESTAURANT.rating)} />
              <span className="text-coal-200 text-sm font-medium">{RESTAURANT.rating} no Google ({RESTAURANT.reviewCount}+ avaliacoes)</span>
            </div>
          </div>
          <h1 className="animate-fade-in-up delay-100 font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2">
            {RESTAURANT.name}
          </h1>
          <p className="animate-fade-in-up delay-200 text-amber-300 text-lg sm:text-xl font-medium tracking-wider uppercase mb-4">
            {RESTAURANT.subtitle}
          </p>
          <p className="animate-fade-in-up delay-300 text-coal-300 text-lg sm:text-xl max-w-2xl mx-auto mb-6">
            {RESTAURANT.tagline}
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-wrap justify-center gap-4 mb-10">
            <span className="bg-amber-600/20 text-amber-300 border border-amber-600/30 rounded-full px-4 py-1.5 text-sm font-medium">
              Almoco: {RESTAURANT.hours.lunch.days} {RESTAURANT.hours.lunch.time}
            </span>
            <span className="bg-amber-600/20 text-amber-300 border border-amber-600/30 rounded-full px-4 py-1.5 text-sm font-medium">
              Jantar: {RESTAURANT.hours.dinner.days} {RESTAURANT.hours.dinner.time}
            </span>
          </div>
          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton>Fale Conosco</WhatsAppButton>
            <a
              href={`tel:${RESTAURANT.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-3 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full px-8 py-4 text-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {RESTAURANT.phone}
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-coal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </header>

      {/* Sobre */}
      <section id="sobre" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Nossa Historia</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                A comida caseira que Taguatinga ama
              </h2>
              <div className="space-y-4 text-coal-300 leading-relaxed">
                <p>
                  O Feijaozinho nasceu do sonho de levar comida caseira de qualidade para a mesa
                  dos moradores de Taguatinga. Com receitas tradicionais e ingredientes selecionados,
                  cada prato e preparado com o mesmo carinho da cozinha de casa.
                </p>
                <p>
                  Nosso buffet self-service oferece uma variedade de opcoes que mudam diariamente,
                  garantindo que voce sempre encontre algo novo e delicioso. Do bife acebolado a
                  costelinha de porco, da feijoada completa a carne de sol na chapa.
                </p>
                <p>
                  Com mais de 878 avaliacoes no Google e nota 4.3, o Feijaozinho e referencia
                  em comida caseira na regiao. Servimos almoco e jantar, para que voce possa
                  aproveitar nosso sabor a qualquer hora do dia.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={`${BASE}/photos/food01.jpg`}
                alt="Carnes grelhadas no Feijaozinho Restaurante"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white rounded-xl px-6 py-4 shadow-xl">
                <p className="text-3xl font-bold">{RESTAURANT.reviewCount}+</p>
                <p className="text-sm opacity-90">avaliacoes no Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-20 sm:py-28 bg-coal-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">O que oferecemos</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Nossas Especialidades
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALTIES.map((item) => (
              <div
                key={item.title}
                className="bg-coal-900/80 border border-coal-800/60 rounded-2xl p-6 hover:border-amber-600/40 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-600/10 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-600/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-coal-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cardapio */}
      <section id="cardapio" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Sabor de Casa</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Nosso Cardapio
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {MENU_ITEMS.map((section) => (
              <div key={section.category} className="bg-coal-900/80 border border-coal-800/60 rounded-2xl p-6">
                <h3 className="text-amber-400 font-semibold text-lg mb-4 border-b border-coal-800/40 pb-3">
                  {section.category}
                </h3>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-coal-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-20 sm:py-28 bg-coal-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Momentos</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Galeria de Fotos
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {GALLERY.map((img, i) => (
              <button
                key={i}
                onClick={() => setGalleryImage(img)}
                className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliacoes */}
      <section id="avaliacoes" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Depoimentos</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              O que nossos clientes dizem
            </h2>
            <div className="flex items-center justify-center gap-3">
              <Stars rating={Math.round(RESTAURANT.rating)} />
              <span className="text-coal-300">{RESTAURANT.rating} no Google -- {RESTAURANT.reviewCount}+ avaliacoes</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-coal-900/80 border border-coal-800/60 rounded-2xl p-6">
                <Stars rating={review.rating} />
                <p className="text-coal-300 text-sm leading-relaxed mt-4 mb-5">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-white font-semibold text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localizacao */}
      <section id="localizacao" className="py-20 sm:py-28 bg-coal-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Como chegar</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Localizacao
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-coal-800/60 aspect-video">
              <iframe
                src={RESTAURANT.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localizacao do Feijaozinho Restaurante"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-coal-900/80 border border-coal-800/60 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 text-lg">Informacoes</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="text-coal-300 text-sm">{RESTAURANT.address}</p>
                      <a
                        href={RESTAURANT.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 text-sm hover:text-amber-300 transition-colors"
                      >
                        Ver no Google Maps
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <a href={`tel:${RESTAURANT.phone.replace(/\D/g, '')}`} className="text-coal-300 text-sm hover:text-amber-400 transition-colors">
                      {RESTAURANT.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <span className="text-coal-300 text-sm">{RESTAURANT.instagram}</span>
                  </div>
                </div>
              </div>

              <div className="bg-coal-900/80 border border-coal-800/60 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 text-lg">Horario de Funcionamento</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-coal-800/40">
                    <span className="text-coal-300">Almoco ({RESTAURANT.hours.lunch.days})</span>
                    <span className="text-white font-medium">{RESTAURANT.hours.lunch.time}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-coal-800/40">
                    <span className="text-coal-300">Jantar ({RESTAURANT.hours.dinner.days})</span>
                    <span className="text-white font-medium">{RESTAURANT.hours.dinner.time}</span>
                  </div>
                  <p className="text-coal-500 text-xs pt-2">Self-service e comida caseira</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-amber-900 via-amber-800 to-coal-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Venha saborear a melhor comida caseira de Taguatinga
          </h2>
          <p className="text-amber-100/80 text-lg mb-10 max-w-xl mx-auto">
            Self-service completo, pratos do dia variados e o sabor de casa que voce merece.
            Fale conosco pelo WhatsApp!
          </p>
          <WhatsAppButton className="text-lg">
            Falar pelo WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coal-950 border-t border-coal-800/50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-display text-xl font-bold text-amber-400 mb-1">Feijaozinho</p>
              <p className="text-coal-500 text-sm">{RESTAURANT.address}</p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={`https://instagram.com/${RESTAURANT.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-coal-500 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={`https://facebook.com/${RESTAURANT.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-coal-500 hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-coal-800/40 text-center">
            <p className="text-coal-600 text-xs">
              Desenvolvido por <span className="text-coal-500 font-medium">Trion Marketing</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Gallery Modal */}
      <GalleryModal image={galleryImage} onClose={() => setGalleryImage(null)} />
    </div>
  )
}

export default App
