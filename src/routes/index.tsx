import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Activity, ArrowRight, CalendarCheck, ChevronLeft, ChevronRight, Clock3,
  HeartPulse, Instagram, MapPin, Menu, Microscope, Phone, Scissors,
  ShieldCheck, Stethoscope, TestTube2, X
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const whatsapp = "https://wa.me/5511933715388";

const services = [
  ["Consultas veterinárias","Atendimento para cães, gatos e animais exóticos, com olhar clínico individualizado e orientação clara.",Stethoscope],
  ["Especialidade em felinos","Cuidado dedicado aos gatos, respeitando comportamento, necessidades e particularidades de cada paciente.",HeartPulse],
  ["Cirurgia e centro cirúrgico","Estrutura voltada à segurança do paciente e ao acompanhamento responsável em procedimentos cirúrgicos.",ShieldCheck],
  ["Vacinas e prevenção","Protocolos de vacinação e acompanhamento preventivo com abordagem ética e personalizada.",CalendarCheck],
  ["Exames e diagnóstico","Ecocardiograma, eletrocardiograma, ultrassom, radiografia e exames laboratoriais para apoiar decisões clínicas.",Microscope],
  ["Banho e tosa","Banho, tosa na tesoura ou máquina, tosa higiênica, desembolo e hidratação com cuidado.",Scissors],
] as const;

const differences = [
  ["Tecnologia diagnóstica","Exames cardiológicos, ultrassom, radiografia e laboratório para apoiar a investigação clínica."],
  ["Centro cirúrgico","Estrutura preparada para procedimentos com acompanhamento responsável e foco na segurança."],
  ["Olhar especializado","Atenção aos sinais clínicos e ao comportamento para compreender o que nem sempre é dito."],
  ["Atendimento personalizado","Condutas orientadas às necessidades de cada pet, com comunicação clara com a família."],
  ["Prevenção responsável","Vacinas e acompanhamento de saúde com protocolos éticos e orientação profissional."],
  ["Cuidado completo","Do atendimento veterinário à higiene, reunindo serviços em um só lugar."],
];

const proof = [
  ["Experiência e confiança","Espaço preparado para diferentes necessidades de cuidado animal, com atendimento próximo e orientação profissional."],
  ["Diagnóstico apoiado por tecnologia","Recursos diagnósticos para auxiliar a investigação clínica e tornar a tomada de decisão mais precisa."],
  ["Cuidado que acompanha","A proposta da bastet é construir relacionamento duradouro, priorizando qualidade técnica, ética e bem-estar animal."],
];

function Index() {
  const [menu,setMenu] = useState(false);
  const [slide,setSlide] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("reveal"));
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="text-2xl font-black tracking-tight">bastet<span className="text-[#e3bfe0]">.</span></a>
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#sobre" className="hover:opacity-60">Sobre nós</a>
            <a href="#servicos" className="hover:opacity-60">Serviços</a>
            <a href="#diferenciais" className="hover:opacity-60">Diferenciais</a>
            <a href="#prova" className="hover:opacity-60">Confiança</a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-black px-5 py-3 text-white">Quero Tirar Dúvidas</a>
          </nav>
          <button className="md:hidden" aria-label="Abrir menu" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
        </div>
        {menu && <nav className="flex flex-col gap-4 border-t px-5 py-5 md:hidden">
          <a href="#sobre" onClick={() => setMenu(false)}>Sobre nós</a><a href="#servicos" onClick={() => setMenu(false)}>Serviços</a>
          <a href="#diferenciais" onClick={() => setMenu(false)}>Diferenciais</a><a href="#prova" onClick={() => setMenu(false)}>Confiança</a>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-black px-5 py-3 text-center text-white">Quero Tirar Dúvidas</a>
        </nav>}
      </header>

      <main id="inicio">
        <section className="relative flex min-h-[720px] items-center justify-center bg-cover bg-center pt-24" style={{backgroundImage:"url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=2200&q=85')"}}>
          <div className="hero-overlay absolute inset-0"/>
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-white">
            <p className="mb-5 text-sm font-bold uppercase tracking-[.28em] text-[#e3bfe0]">Clínica Veterinária • Rua Espírito Santo, 331</p>
            <h1 className="text-4xl font-black leading-tight sm:text-6xl">Cuidado especializado para quem faz parte da sua família.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">Entregar resultados excepcionais que superam expectativas e geram valor real, com qualidade técnica, tecnologia e atendimento próximo.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e3bfe0] px-7 py-4 font-bold text-black">Quero Falar com Especialista <ArrowRight size={18}/></a>
              <a href="#servicos" className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-4 font-bold">Conhecer serviços</a>
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div className="reveal-on-scroll">
            <p className="text-sm font-black uppercase tracking-[.2em] text-black/50">Sobre a bastet</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Qualidade e relacionamento duradouro em primeiro lugar.</h2>
            <p className="mt-6 text-lg leading-8 text-black/70">A bastet Clínica Veterinária oferece cuidado completo e especializado para animais de estimação, unindo atendimento acolhedor, expertise veterinária e infraestrutura preparada para diferentes necessidades.</p>
            <p className="mt-4 text-lg leading-8 text-black/70">Nossa filosofia é não comprometer a qualidade técnica ou a ética profissional por questões comerciais. Cada atendimento busca gerar confiança, segurança e clareza para a família do pet.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#e3bfe0]/40 p-5"><ShieldCheck className="mb-3"/><b>Ética profissional</b><p className="mt-1 text-sm text-black/60">Decisões orientadas pelo cuidado.</p></div>
              <div className="rounded-2xl bg-black p-5 text-white"><Activity className="mb-3"/><b>Estrutura e tecnologia</b><p className="mt-1 text-sm text-white/70">Recursos para apoiar o diagnóstico.</p></div>
            </div>
          </div>
          <div className="reveal-on-scroll overflow-hidden rounded-[2rem]"><img loading="lazy" src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=85" alt="Profissional veterinário cuidando de um animal em ambiente clínico" className="h-[520px] w-full object-cover"/></div>
        </section>

        <section id="servicos" className="bg-[#f7f5f7] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-[.2em] text-black/50">Serviços e soluções</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black sm:text-5xl">Cuidado completo, do diagnóstico ao bem-estar.</h2>
            <p className="mt-5 max-w-2xl text-lg text-black/65">Serviços pensados para reduzir incertezas e facilitar o acesso a cuidado de qualidade.</p>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(([title,text,Icon]) => <article key={title} className="reveal-on-scroll rounded-3xl border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e3bfe0]"><Icon size={24}/></div>
                <h3 className="text-xl font-black">{title}</h3><p className="mt-3 min-h-20 text-sm leading-6 text-black/65">{text}</p>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white">Quero Agendar uma Consulta <ArrowRight size={16}/></a>
              </article>)}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div className="reveal-on-scroll"><p className="text-sm font-black uppercase tracking-[.2em] text-black/50">Diferenciais</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">Tecnologia com olhar clínico e humano.</h2><p className="mt-6 leading-7 text-black/65">A estrutura foi pensada para apoiar uma investigação mais precisa e um atendimento personalizado, sem perder a atenção aos detalhes que fazem diferença no cuidado.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">{differences.map(([title,text]) => <div key={title} className="reveal-on-scroll rounded-3xl border border-black/10 p-6"><div className="mb-4 flex items-center gap-3"><div className="h-2.5 w-2.5 rounded-full bg-[#e3bfe0]"/><h3 className="font-black">{title}</h3></div><p className="text-sm leading-6 text-black/65">{text}</p></div>)}</div>
          </div>
        </section>

        <section id="prova" className="bg-black px-6 py-24 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-black uppercase tracking-[.2em] text-[#e3bfe0]">Confiança e prova social</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Uma experiência construída para gerar segurança.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/65">Área preparada para receber depoimentos reais e casos autorizados pela clínica, sem avaliações fictícias.</p>
            <div className="relative mt-12 rounded-[2rem] bg-white p-8 text-left text-black sm:p-12">
              <span className="rounded-full bg-[#e3bfe0] px-3 py-1 text-xs font-black">Institucional</span>
              <p className="mt-6 text-2xl font-black sm:text-3xl">“{proof[slide][0]}”</p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-black/65">{proof[slide][1]}</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-black/40">Substituir por depoimento real quando fornecido pela clínica</p>
              <div className="mt-8 flex items-center gap-2"><button aria-label="Anterior" onClick={() => setSlide((slide+2)%3)} className="rounded-full border p-3"><ChevronLeft size={18}/></button><button aria-label="Próximo" onClick={() => setSlide((slide+1)%3)} className="rounded-full border p-3"><ChevronRight size={18}/></button><div className="ml-2 flex gap-1">{proof.map((_,i)=><button key={i} aria-label={'Ir para item '+(i+1)} onClick={() => setSlide(i)} className={'h-2 w-8 rounded-full '+(i===slide?'bg-black':'bg-black/15')}/>)}</div></div>
            </div>
          </div>
        </section>

        <section className="bg-[#e3bfe0] px-6 py-24"><div className="mx-auto max-w-4xl text-center"><p className="text-sm font-black uppercase tracking-[.2em]">Vamos conversar</p><h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">Cuidado profissional começa com uma conversa.</h2><p className="mx-auto mt-6 max-w-2xl text-lg text-black/70">Tire dúvidas, conheça os serviços e encontre o próximo passo para o cuidado do seu pet.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-bold text-white">Quero Falar com Especialista <ArrowRight size={18}/></a><p className="mt-5 font-bold">WhatsApp: (11) 93371-5388</p></div></section>
      </main>

      <footer className="bg-white px-6 py-12"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3"><div><div className="text-2xl font-black">bastet<span className="text-[#e3bfe0]">.</span></div><p className="mt-3 max-w-sm text-sm leading-6 text-black/60">Clínica Veterinária com atendimento especializado para cães, gatos e animais exóticos.</p></div><div><h3 className="font-black">Contato</h3><div className="mt-4 space-y-3 text-sm text-black/65"><p className="flex gap-2"><MapPin size={17}/> Rua Espírito Santo, 331</p><p className="flex gap-2"><Phone size={17}/><a href={whatsapp} target="_blank" rel="noreferrer">(11) 93371-5388</a></p><p className="flex gap-2"><TestTube2 size={17}/> petshop@bastet</p></div></div><div><h3 className="font-black">Horário</h3><p className="mt-4 flex gap-2 text-sm text-black/65"><Clock3 size={17}/> Segunda a sexta: 9h às 18h<br/>Sábado: 9h às 17h</p><a href="https://www.instagram.com/bastetclinicaveterinaria/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold"><Instagram size={18}/> Instagram</a></div></div><div className="mx-auto mt-10 max-w-7xl border-t pt-6 text-xs text-black/45">© 2026 bastet Clínica Veterinária.</div></footer>
      <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-2xl ring-4 ring-white"><Phone size={22}/></a>
    </div>
  );
}