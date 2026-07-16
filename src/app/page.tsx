'use client';

import { Scene } from '@/components/canvas/Scene';
import Image from 'next/image';
import logoImg from '@/app/asset/Entangle_Protocol_-_Logo_header.png';
import entImg from '@/app/asset/ep_graphic_elements_compressed.png';
import websiteCodeImg from '@/app/asset/animation_data.gif';
import { ChainIcons } from '@/app/ChainIcons';
import { motion, Variants } from 'framer-motion';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

const heroVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2,
    },
  },
};

const chainSupport = [
  ['Ethereum', 'EVM L1'],
  ['Arbitrum', 'EVM L2'],
  ['Optimism', 'EVM L2'],
  ['Base', 'EVM L2'],
  ['Solana', 'SVM'],
  ['Sui', 'Move'],
  ['Cosmos', 'IBC'],
  ['Stellar', 'Soroban'],
] as const;

export default function Home() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 96;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <main className="relative w-full bg-[#020205] text-white selection:bg-[#cccccc] selection:text-black">
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <Scene />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 mx-auto z-50 flex items-center justify-between py-3 px-4 sm:px-6 md:px-12 pointer-events-auto bg-[#020205]/40 backdrop-blur-md border-b border-white/5 shadow-sm">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Image
            src={logoImg}
            alt="Entangle Protocol Logo"
            width={36}
            height={36}
            className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.18)] sm:w-11 sm:h-11"
            priority
          />
          <span className="font-light text-sm sm:text-base lowercase text-gray-200">entangle protocol</span>
        </div>
        <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer">
          <button className="px-4 py-1.5 sm:px-5 sm:py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors text-xs sm:text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Whitepaper
          </button>
        </a>
      </header>

      <div className="relative z-10 w-full flex flex-col pb-0">

        {/* ─── HERO ─── */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 sm:pt-24 pb-12 sm:pb-16">
          <motion.div initial="hidden" animate="visible" variants={heroVariant} className="flex flex-col items-center w-full max-w-6xl relative z-10">

            <span className="inline-block px-4 py-1.5 mb-6 sm:mb-8 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-gray-200 text-[11px] sm:text-xs tracking-wider font-medium text-shadow-strong">
              Cross-Chain Messaging Subnet
            </span>

            <div className="relative mb-6 sm:mb-8 w-full">
                <h1 className="type-display text-metallic-premium drop-shadow-2xl max-w-5xl mx-auto px-4 sm:px-6 md:px-8 overflow-visible">
                <span className="block text-[0.62em] xs:text-[0.68em] md:text-[0.68em] leading-tight pb-2 sm:pb-3 drop">Connecting 400M+ Wallets Directly to Subnets Alpha and Services</span>
                </h1>
            </div>

            <p className="type-body text-gray-200 max-w-xs sm:max-w-xl mb-8 sm:mb-10 leading-relaxed text-shadow-strong drop-shadow-lg text-sm sm:text-base">
              Entangle is a cross-chain messaging subnet built on Bittensor. It enables users in major chains to directly buy Alpha and pay for subnet services using their native tokens without leaving their chains.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
              <button onClick={() => scrollTo('alpha-market')} className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Explore Alpha Market
              </button>
              <button onClick={() => scrollTo('alpha-services')} className="px-6 sm:px-8 py-3 sm:py-3.5 bg-black/40 backdrop-blur-md border border-white/30 text-white font-medium rounded-full hover:bg-white/20 transition-all text-sm shadow-xl">
                Explore Subnet Services
              </button>
            </div>
          </motion.div>
        </section>


        {/* ─── THE PROBLEM ─── */}
        <section id="problem" className="w-full relative z-10 my-16 sm:my-24 md:my-32 px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="surface-glass-strong p-5 sm:p-6 md:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl relative max-w-[1100px] mx-auto w-full overflow-hidden">

            <div className="flex flex-col items-center text-center w-full relative z-10 mb-7 sm:mb-10 pt-3 sm:pt-4">
              <h2 className="type-title text-metallic-premium drop-shadow-2xl text-[1.4rem] sm:text-[1.75rem] md:text-3xl">
                The Subnet Access Problem Today
              </h2>
              <p className="type-body text-gray-200 max-w-xs sm:max-w-2xl mt-3 sm:mt-4 text-sm sm:text-base">
                Bittensor subnets produce some of the most valuable on-chain services in crypto — inference, storage, training, data. But the path for external capital and users is broken.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 border border-white/5 rounded-[10px] sm:rounded-[12px] bg-black/20 backdrop-blur-md shadow-inner relative z-10">
              {[
                {
                  num: "01 / 03",
                  title: "CEX Friction & KYC Hops",
                  desc: "Users are forced to CEX-ramp into TAO, then swap into subnet Alphas — adding friction, KYC, and extra hops for anyone outside the TAO-native ecosystem.",
                  icon: <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                },
                {
                  num: "02 / 03",
                  title: "Fragmented Subnet Liquidity",
                  desc: "Subnet treasuries fragment liquidity across dozens of wrappers, bridges, and DEX pools, making it harder to build deep, efficient markets for subnet tokens.",
                  icon: <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="18" r="3" /><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" /></svg>
                },
                {
                  num: "03 / 03",
                  title: "Off-Chain Service Payments",
                  desc: "Paying for compute is often off-chain — invoices, bank transfers, or manual stablecoin sweeps — pulling subnet services out of the very infrastructure they're built on.",
                  icon: <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1M9 13h1M14 9h1M14 13h1M10 21v-4h4v4" /></svg>
                }
              ].map((item) => (
                <div key={item.title} className="p-5 sm:p-6 md:p-8 flex flex-col items-start hover:bg-white/5 transition-colors">
                  <div className="text-[#555] font-mono text-[10px] tracking-widest mb-6 sm:mb-8 font-bold">{item.num}</div>
                  <div className="mb-6 sm:mb-8 w-9 h-9 sm:w-10 sm:h-10 relative flex items-center justify-start text-[#cccccc]">
                    {item.icon}
                  </div>
                  <h3 className="type-subtitle text-white mb-3 text-sm sm:text-base">{item.title}</h3>
                  <p className="type-body text-[#888] flex-grow pr-0 sm:pr-2 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 sm:mt-6 p-4 sm:p-5 bg-black/20 backdrop-blur-md border border-white/5 border-l-[4px] border-l-[#cccccc] rounded-[10px] sm:rounded-[12px] shadow-inner relative z-10">
              <p className="type-body text-[#888] text-sm leading-relaxed">
                <span className="text-white font-semibold">This locks out the 400M+ wallets</span> already active on Ethereum, Solana, Base, and beyond. For Bittensor to capture the full market, that friction has to disappear — and a solution must be <span className="text-white font-semibold">native to the network</span>, not another external bridge.
              </p>
            </div>
          </motion.div>
        </section>


        {/* ─── INFRASTRUCTURE: ENTANGLE SUBNET ─── */}
        <section id="infrastructure" className="w-full relative z-10 my-16 sm:my-24 md:my-32 px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="surface-glass-strong p-5 sm:p-6 md:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl relative max-w-[1100px] mx-auto w-full overflow-hidden">

            <div className="flex flex-col items-center text-center w-full relative z-10 mb-7 sm:mb-10 pt-3 sm:pt-4">
              <h2 className="type-title text-metallic-premium drop-shadow-2xl text-[1.4rem] sm:text-[1.75rem] md:text-3xl">
                Built for Bittensor, Secured by TAO
              </h2>
       
              <p className="type-body text-gray-200 max-w-xs sm:max-w-2xl mt-3 sm:mt-4 text-sm sm:text-base">
                Entangle Protocol is a subnet on Bittensor network that provides trust-minimized, validator-secured cross-chain messaging. Miners and validators within the subnet reach consensus on external chain states and deliver those states to applications running directly on the Entangle subnet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-center relative z-10">

              {/* Left: diagram */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                viewport={{ once: true }}
                className="relative w-full flex justify-center items-center bg-black/20 backdrop-blur-md border border-white/5 rounded-[10px] sm:rounded-[12px] p-5 sm:p-8 overflow-hidden"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full px-2 sm:px-6"
                >
                  <Image
                    src={entImg}
                    alt="Entangle Protocol Network Structure"
                    className="relative z-10 w-full h-auto object-contain scale-110 sm:scale-125 drop-shadow-[0_0_20px_rgba(204,204,204,0.15)] hover:scale-[1.20] sm:hover:scale-[1.30] transition-transform duration-700 ease-out opacity-80"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Right: feature list, one item per row */}
              <div className="flex flex-col divide-y divide-white/5 border border-white/5 rounded-[10px] sm:rounded-[12px] bg-black/20 backdrop-blur-md shadow-inner">
                {[
                  {
                    title: "Subnet-Native Security",
                    desc: "Consensus verified by TAO-secured validators.",
                    icon: <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
                  },
                  {
                    title: "Cross-Chain Messaging",
                    desc: "Not wrapped assets: no synthetic tokens, no fragmented pools.",
                    icon: <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                  },
                  {
                    title: "Application Layer",
                    desc: "Developers can build dApps (like Alpha Market & Subnet Services) that inherit cross-chain reach without leaving Bittensor.",
                    icon: <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                  }
                ].map((item) => (
                  <div key={item.title} className="p-4 sm:p-5 md:p-6 flex flex-row items-start gap-4 hover:bg-white/5 transition-colors">
                    <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/10 flex items-center justify-center text-[#cccccc]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[11px] sm:text-[12px] md:text-[13px] font-bold text-white mb-1.5 tracking-wider uppercase font-sans">{item.title}</h3>
                      <p className="text-[12px] sm:text-[12px] lg:text-[13px] text-[#888] leading-[1.65] font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

   
          </motion.div>
        </section>


        {/* ─── ALPHA MARKET & Subnet Services ─── */}
        <section id="alpha-market" className="w-full relative z-10 my-16 sm:my-24 md:my-32 px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="surface-glass-strong p-5 sm:p-6 md:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl relative max-w-[1100px] mx-auto w-full overflow-hidden">

            <div className="flex flex-col items-center text-center w-full relative z-10 mb-7 sm:mb-10 pt-3 sm:pt-4">
              <h2 className="type-title text-metallic-premium drop-shadow-2xl text-[1.4rem] sm:text-[1.75rem] md:text-3xl">
                Infrastructure for Autonomous Cross Chain Finance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 relative z-10">

              {/* Alpha Market */}
              <div className="border border-white/5 border-t-[3px] border-t-[#cccccc] rounded-[10px] sm:rounded-[12px] bg-black/20 backdrop-blur-md shadow-inner p-5 sm:p-6 md:p-8 flex flex-col hover:bg-white/5 transition-colors">
                <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#cccccc]/10 flex items-center justify-center mb-5 sm:mb-6 text-[#cccccc]">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                </div>
                <h3 className="text-white text-[22px] sm:text-[26px] font-bold mb-2">Alpha Market</h3>
                <p className="text-[#cccccc] type-body font-medium text-sm mb-4">Buy any subnet Alpha. Stay in your wallet. Stay on your chain.</p>
                <p className="type-body text-[#888] text-sm mb-5 sm:mb-6 leading-relaxed">
                  Alpha Market runs on the Entangle subnet, using its cross-chain messaging to let users purchase subnet tokens (Alphas) directly from their native L1 or L2, without ever touching a CEX or a bridge.
                </p>
                <ul className="flex flex-col gap-3 sm:gap-4 text-sm text-gray-300 mb-6 sm:mb-8 flex-grow">
                  {[
                    "Solana wallet pays USDC → subnet receives native Alpha. No wrapped tokens. No multi-chain liquidity pools.",
                    "400M+ wallets across Ethereum, Solana, Base, Cosmos, and more — all become onchain buyers of Bittensor subnet tokens.",
                    "Subnet liquidity stays whole: every trade settles into the subnet's native pair, keeping depth concentrated and treasury management simple.",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto bg-[#cccccc]/5 border border-[#cccccc]/10 rounded-[6px] px-4 py-3 text-[12px] sm:text-[13px] text-gray-200 leading-relaxed">
                  <span className="text-white font-bold">For subnet builders:</span> one integration. All chains. No fragmented liquidity.
                </div>
              </div>

              {/* Subnet Services */}
              <div id="alpha-services" className="border border-white/5 border-t-[3px] border-t-white rounded-[10px] sm:rounded-[12px] bg-black/20 backdrop-blur-md shadow-inner p-5 sm:p-6 md:p-8 flex flex-col hover:bg-white/5 transition-colors">
                <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#cccccc]/10 flex items-center justify-center mb-5 sm:mb-6 text-[#cccccc]">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                </div>
                <h3 className="text-white text-[22px] sm:text-[26px] font-bold mb-2">Subnet Services</h3>
                <p className="text-[#cccccc] type-body font-medium text-sm mb-4">Pay for compute, inference, or API access — from any chain, in your native token.</p>
                <p className="type-body text-[#888] text-sm mb-5 sm:mb-6 leading-relaxed">
                  Subnet Services leverages Entangle's cross-chain messaging to allow users to pay for subnet services (inference calls, storage, bandwidth, model access) directly on-chain, using whatever asset they hold.
                </p>
                <ul className="flex flex-col gap-3 sm:gap-4 text-sm text-gray-300 mb-6 sm:mb-8 flex-grow">
                  {[
                    "No more invoices or TradFi off-ramps. A single transaction from any wallet settles payment into the subnet's native service token.",
                    "Subnets monetise instantly — every chain becomes a payment rail, without them needing to accept a dozen wrapped stables or manage separate treasury accounts.",
                    "Composability without compromise: users stay in their own ecosystem, subnet services stay fully on-chain, and value flows directly to miners/validators.",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto bg-[#cccccc]/5 border border-[#cccccc]/10 rounded-[6px] px-4 py-3 text-[12px] sm:text-[13px] text-gray-200 leading-relaxed">
                  <span className="text-white font-bold">For service providers:</span> instant access to a 400M-wallet market, with zero additional accounting overhead.
                </div>
              </div>
            </div>
          </motion.div>
        </section>


        {/* ─── THE "THREE WITHOUT" PROMISES ─── */}
        <section id="three-without" className="w-full relative z-10 my-16 sm:my-24 md:my-32 px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="surface-glass-strong p-5 sm:p-6 md:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl relative max-w-[1100px] mx-auto w-full overflow-hidden">

            <div className="flex flex-col items-center text-center w-full relative z-10 mb-7 sm:mb-10 pt-3 sm:pt-4">
              <h2 className="type-title text-metallic-premium drop-shadow-2xl text-[1.4rem] sm:text-[1.75rem] md:text-3xl">
                The Promises
              </h2>
    
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 border border-white/5 rounded-[10px] sm:rounded-[12px] bg-black/20 backdrop-blur-md shadow-inner relative z-10">
              {[
                {
                  num: "01",
                  title: "Without fragmenting subnet liquidity",
                  desc: "All cross-chain orders are net-settled through the subnet's messaging layer into the native Alpha or service token, preserving a single, deep liquidity pool.",
                },
                {
                  num: "02",
                  title: "Without forcing users through a CEX",
                  desc: "Entangle's validators attest to the user's chain-native payment, and the subnet executes the corresponding action. Self-custody, fully on-chain, no exchange accounts.",
                },
                {
                  num: "03",
                  title: "Without using TradFi for subnet service payments",
                  desc: "Subnet Services turns compute access into a pure crypto transaction — from any chain — with settlement happening at the subnet level. No bank, no card, no manual sweep.",
                }
              ].map((item) => (
                <div key={item.num} className="p-5 sm:p-6 md:p-8 flex flex-col items-start hover:bg-white/5 transition-colors">
                  <div className="text-[36px] sm:text-[44px] font-bold text-[#cccccc]/40 leading-none mb-4 sm:mb-5 drop-shadow-[0_0_15px_rgba(204,204,204,0.15)]">{item.num}</div>
                  <h3 className="type-subtitle text-white mb-3 text-sm sm:text-base">{item.title}</h3>
                  <p className="type-body text-[#888] text-sm pr-0 sm:pr-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>


        {/* ─── COMMUNITY IMPACT ─── */}
        <section id="community-impact" className="w-full relative z-10 my-16 sm:my-24 md:my-32 px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="surface-glass-strong p-5 sm:p-6 md:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl relative max-w-[1100px] mx-auto w-full overflow-hidden">

            <div className="flex flex-col items-center text-center w-full relative z-10 mb-7 sm:mb-10 pt-3 sm:pt-4">
          
              <h2 className="type-title text-metallic-premium drop-shadow-2xl text-[1.4rem] sm:text-[1.75rem] md:text-3xl">
                What This Means for the Bittensor Community
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 border border-white/5 rounded-[10px] sm:rounded-[12px] bg-black/20 backdrop-blur-md shadow-inner relative z-10">
              {[
                {
                  title: "For subnet owners & builders",
                  desc: "Onboard users from every major chain without fragmenting your liquidity. Monetize services in a fully on-chain, programmable way.",
                  icon: <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V8l8-5 8 5v12M10 20v-6h4v6" /></svg>
                },
                {
                  title: "For validators & miners on Entangle subnet",
                  desc: "Secure real cross-chain message traffic and earn TAO from a utility subnet that powers direct DeFi-level applications.",
                  icon: <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4l6 6M4 20l6.5-6.5M12 6l6 6-3 3-6-6 3-3z" /></svg>
                },
                {
                  title: "For TAO holders & stakers",
                  desc: "A subnet that brings external capital and users directly into the Bittensor economy, increasing the overall utility and demand for TAO.",
                  icon: <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 12L2 9l4-6zM2 9h20M9 3l3 6 3-6M12 9v12" /></svg>
                }
              ].map((item) => (
                <div key={item.title} className="p-5 sm:p-6 md:p-8 flex flex-col items-start hover:bg-white/5 transition-colors">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/10 flex items-center justify-center mb-4 sm:mb-5 text-[#cccccc]">
                    {item.icon}
                  </div>
                  <h3 className="type-subtitle text-white mb-3 text-sm sm:text-base">{item.title}</h3>
                  <p className="type-body text-[#888] text-sm pr-0 sm:pr-2">{item.desc}</p>
                </div>
              ))}
            </div>

    
          </motion.div>
        </section>


        {/* ─── AGENTIC FINANCE + HOW IT FLOWS ─── */}
        <section id="simple-integration" className="w-full relative z-10 my-24 md:my-32 px-6">
          <div className="surface-glass-strong p-6 md:p-8 lg:p-10 rounded-[2rem] shadow-2xl relative max-w-[1100px] mx-auto w-full overflow-hidden">

            <div className="flex flex-col items-center text-center w-full relative z-10 mb-6 sm:mb-8 pt-4">
   

                        <h2 className="type-title text-metallic-premium drop-shadow-2xl text-[1.4rem] sm:text-[1.75rem] md:text-3xl">
                Simple for Users, Powerful for Subnets
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 w-full">
              <div id="how-it-flows" className="w-full md:w-1/2 flex flex-col justify-center gap-5">
       

                <div>
          
                  <p className="type-body text-gray-300 text-sm">How it works.</p>
                </div>

                <ol className="flex flex-col divide-y divide-white/5 border border-white/5 rounded-[10px] sm:rounded-[12px] bg-black/20 backdrop-blur-md shadow-inner">
                  {[
                    "User connects any wallet (MetaMask, Phantom, Keplr, etc.) on any chain.",
                    'Select "Buy Alpha" (Alpha Market) or "Pay for Service" (Subnet Services).',
                    "Confirm the transaction in their native token.",
                    "Entangle subnet validates the source chain event, reaches consensus, and triggers the corresponding action on the target subnet.",
                    "Subnet receives native Alpha or service payment — fully settled, no extra steps.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 sm:p-3.5 hover:bg-white/5 transition-colors">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#cccccc]/10 border border-[#cccccc]/20 text-[#cccccc] flex items-center justify-center font-bold font-mono text-[11px]">
                        {i + 1}
                      </span>
                      <span className="type-body text-gray-300 text-sm leading-relaxed pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://docs.entangleprotocol.com"
                    className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm text-white font-medium transition-all"
                  >
                    Read Docs
                  </a>
                </div>
              </div>

              <div className="w-full md:w-1/2 rounded-[12px] overflow-hidden border border-white/5 bg-black/20 backdrop-blur-md shadow-inner p-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src={websiteCodeImg}
                    alt="Subnet Revenue Vault Integration"
                    className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.25)] opacity-100"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CHAIN SUPPORT ─── */}
        <section id="chain-support" className="my-16 sm:my-24 md:my-32 px-4 sm:px-6 w-full max-w-[1100px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="surface-glass-strong p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="flex flex-col items-center text-center w-full relative z-10 mb-7 sm:mb-10">
              <h2 className="type-title text-metallic-premium drop-shadow-2xl text-[1.4rem] sm:text-[1.75rem] md:text-3xl">Every Chain. One Protocol</h2>
              <p className="type-body text-gray-200 max-w-xs sm:max-w-xl mt-3 sm:mt-4 text-sm sm:text-base">
                Agents and subnets on Bittensor can now send messages, move assets, and trigger actions on any connected chain natively.
              </p>
            </div>

            <div className="border border-white/5 bg-black/20 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden shadow-inner relative z-10">
              {/* Row 1: all 4 chains in 2x2 on mobile, 4-col on lg */}
              <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5 border-b border-white/5">
                {chainSupport.slice(0, 4).map(([name, type]) => {
                  let extra = "";
                  if (name === 'Ethereum') extra = "border-t-[3px] border-t-white pt-5 sm:pt-6 !border-t-[#cccccc]";
                  else extra = "border-t-[3px] border-t-transparent pt-5 sm:pt-6";
                  return (
                    <div key={name} className={`flex flex-col items-center justify-center pb-5 sm:pb-6 bg-transparent hover:bg-white/5 transition-colors ${extra} relative group`}>
                      <div className="mb-3 sm:mb-4 h-10 sm:h-12 flex items-center justify-center w-full">
                        {name === 'Ethereum' && (
                          <div className="opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(204,204,204,0.5)]">
                            <ChainIcons.ethereum className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] text-white" />
                          </div>
                        )}
                        {name === 'Arbitrum' && (
                          <div className="flex flex-col justify-center items-center opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]">
                            <img src="/chain-logos/arbitrum.svg" alt="Arbitrum logo" className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] [filter:grayscale(1)_brightness(1.45)_contrast(1.1)]" />
                          </div>
                        )}
                        {name === 'Optimism' && (
                          <div className="opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(204,204,204,0.5)]">
                            <ChainIcons.optimism className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] text-white" />
                          </div>
                        )}
                        {name === 'Base' && (
                          <div aria-label="Base logo" className="mt-1 w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] bg-white opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(204,204,204,0.5)]"
                            style={{ WebkitMaskImage: "url('/chain-logos/base.svg')", maskImage: "url('/chain-logos/base.svg')", WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center', WebkitMaskSize: 'contain', maskSize: 'contain' }}
                          />
                        )}
                      </div>
                      <div className="type-subtitle text-white mb-1 text-xs sm:text-sm">{name}</div>
                      <div className="type-label text-gray-500 text-[10px] sm:text-xs">{type}</div>
                    </div>
                  );
                })}
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5 border-b border-white/5">
                {chainSupport.slice(4, 8).map(([name, type]) => {
                  let extra = "";
                  if (name === 'Solana') extra = "border-t-[3px] border-t-white pt-5 sm:pt-6 !border-t-[#cccccc]";
                  else extra = "border-t-[3px] border-t-transparent pt-5 sm:pt-6";
                  return (
                    <div key={name} className={`flex flex-col items-center justify-center pb-5 sm:pb-6 bg-transparent hover:bg-white/5 transition-colors ${extra} relative group`}>
                      <div className="mb-3 sm:mb-4 h-10 sm:h-12 flex items-center justify-center w-full">
                        {name === 'Solana' && (
                          <div aria-label="Solana logo" className="mt-1 w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] bg-white opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(204,204,204,0.5)]"
                            style={{ WebkitMaskImage: "url('/chain-logos/solana.svg')", maskImage: "url('/chain-logos/solana.svg')", WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center', WebkitMaskSize: 'contain', maskSize: 'contain' }}
                          />
                        )}
                        {name === 'Sui' && (
                          <div aria-label="Sui logo" className="mt-1 w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] bg-white opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(204,204,204,0.5)]"
                            style={{ WebkitMaskImage: "url('/chain-logos/sui.svg')", maskImage: "url('/chain-logos/sui.svg')", WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center', WebkitMaskSize: 'contain', maskSize: 'contain' }}
                          />
                        )}
                        {name === 'Cosmos' && (
                          <div className="opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(255,255,255,0.45)] mt-1">
                            <img src="/chain-logos/cosmos.svg" alt="Cosmos logo" className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] [filter:grayscale(1)_brightness(1.8)_contrast(1.05)]" />
                          </div>
                        )}
                        {name === 'Stellar' && (
                          <div className="opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] mt-1">
                            <ChainIcons.stellar className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] text-white" />
                          </div>
                        )}
                      </div>
                      <div className="type-subtitle text-white mb-1 text-xs sm:text-sm">{name}</div>
                      <div className="type-label text-gray-500 text-[10px] sm:text-xs">{type}</div>
                    </div>
                  );
                })}
              </div>
              <div className="p-3 sm:p-4 bg-transparent flex items-center justify-start border-l-[4px] border-[#cccccc]">
                <div className="flex items-center gap-4 pl-1 sm:pl-2">
                  <div className="text-white type-body text-xs sm:text-sm">
                    <span className="text-gray-500 ml-1 sm:ml-2">Add a new chain with one adapter class. No permission needed.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── AGENTIC ERA USE CASES ─── */}
        {/* <section id="use-cases" className="w-full relative z-10 my-16 sm:my-24 md:my-32 px-4 sm:px-6">
          <div className="surface-glass-strong p-5 sm:p-6 md:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl relative max-w-[1100px] mx-auto w-full overflow-hidden">

            <div className="flex flex-col items-center text-center w-full relative z-10 mb-7 sm:mb-10 pt-3 sm:pt-4">
              <h2 className="type-title text-metallic-premium drop-shadow-2xl text-[1.4rem] sm:text-[1.75rem] md:text-3xl">
                Built for Agents, Not Just Humans
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 border border-white/5 rounded-[10px] sm:rounded-[12px] bg-black/20 backdrop-blur-md shadow-inner relative z-10">

              <div className="p-5 sm:p-6 md:p-8 flex flex-col items-start hover:bg-white/5 transition-colors">
                <div className="text-[#555] font-mono text-[10px] tracking-widest mb-6 sm:mb-8 font-bold">01 / 03</div>
                <div className="mb-6 sm:mb-8 w-9 h-9 sm:w-10 sm:h-10 relative flex items-center justify-start text-[#cccccc]">
                  <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                  </svg>
                </div>
                <h3 className="type-subtitle text-white mb-3 text-sm sm:text-base">Bittensor Alpha Tokens Across DeFi</h3>
                <p className="type-body text-[#888] mb-8 sm:mb-10 flex-grow pr-0 sm:pr-2 text-sm">
                  Bittensor subnet alpha tokens live inside the Subtensor chain. Entangle lets agents and protocols move alpha to any EVM chain, Solana, or Cosmos, unlocking lending, perpetuals, and liquidity pools that were previously unreachable. Subnets finally have access to the entire DeFi stack.
                </p>
                <div className="mt-auto inline-block bg-[#cccccc]/10 text-[#cccccc] text-[10px] px-3 py-1.5 rounded-[4px] font-bold border border-[#cccccc]/20 whitespace-nowrap">
                  BITTENSOR → DEFI STACK
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 flex flex-col items-start hover:bg-white/5 transition-colors">
                <div className="text-[#555] font-mono text-[10px] tracking-widest mb-6 sm:mb-8 font-bold">02 / 03</div>
                <div className="mb-6 sm:mb-8 w-9 h-9 sm:w-10 sm:h-10 relative flex items-center justify-start text-[#cccccc]">
                  <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </div>
                <h3 className="type-subtitle text-white mb-3 text-sm sm:text-base">Cross-Ecosystem Agent Coordination</h3>
                <p className="type-body text-[#888] mb-8 sm:mb-10 flex-grow pr-0 sm:pr-2 text-sm">
                  An agent running on an EVM chain can call a Bittensor subnet to request an inference, receive the result, and execute a trade, all in one atomic sequence. Entangle is the messaging backbone that makes multi-chain agent workflows possible without custodians or bridges.
                </p>
                <div className="mt-auto inline-block bg-[#cccccc]/10 text-[#cccccc] text-[10px] px-3 py-1.5 rounded-[4px] font-bold border border-[#cccccc]/20 whitespace-nowrap">
                  AGENT → SUBNET → ACTION
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 flex flex-col items-start hover:bg-white/5 transition-colors">
                <div className="text-[#555] font-mono text-[10px] tracking-widest mb-6 sm:mb-8 font-bold">
                  03 / 03
                </div>
                <div className="mb-6 sm:mb-8 w-9 h-9 sm:w-10 sm:h-10 relative flex items-center justify-start text-[#cccccc]">
                  <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M2 12h20" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <h3 className="type-subtitle text-white mb-3 text-sm sm:text-base">
                  Autonomous Revenue Infrastructure
                </h3>
                <p className="type-body text-[#888] mb-8 sm:mb-10 flex-grow pr-0 sm:pr-2 text-sm">
                  Most AI systems can generate intelligence, but cannot operate business independently. Entangle gives agents and subnets the infrastructure to receive payments, move capital and reinvest revenue automatically into its own growth loop.
                </p>
                <div className="mt-auto inline-block bg-[#cccccc]/10 text-[#cccccc] text-[10px] px-3 py-1.5 rounded-[4px] font-bold border border-[#cccccc]/20 whitespace-nowrap">
                  AI SYSTEMS → REVENUE → AUTONOMOUS GROWTH
                </div>
              </div>
            </div>
          </div>
        </section> */}




        {/* ─── THE POWER OF THE RELAY MARKETPLACE ─── */}
        {/* <section id="protocol-flow" className="w-full relative z-10 my-16 sm:my-24 md:my-32 px-4 sm:px-6">
          <div className="surface-glass-strong p-5 sm:p-6 md:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl relative max-w-[1100px] mx-auto w-full overflow-hidden">

            <div className="flex flex-col items-center text-center w-full relative z-10 mb-8 sm:mb-12 pt-3 sm:pt-4">
              <h2 className="type-title text-metallic-premium drop-shadow-2xl text-[1.4rem] sm:text-[1.75rem] md:text-3xl">
                The Open Market Philosophy
              </h2>
              <p className="type-body text-white drop-shadow-3xl max-w-xs sm:max-w-2xl mt-3 sm:mt-4 text-sm sm:text-base">
                Traditional bridges run by hand-picked committees dictate high fees and cap network speeds. We replaced them with a free-market protocol where global operators must compete in real-time auctions to relay cross-chain data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 border border-white/5 rounded-[18px] sm:rounded-[20px] bg-black/20 backdrop-blur-md shadow-inner relative z-10 overflow-hidden">

              <div className="p-5 sm:p-6 md:p-8 flex flex-col items-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-[#555] group-hover:text-[#cccccc] transition-colors font-mono text-[10px] tracking-widest mb-6 sm:mb-8 font-bold">OUTCOME 01</div>
                <div className="mb-5 sm:mb-6 w-9 h-9 sm:w-10 sm:h-10 relative flex items-center justify-start text-[#cccccc]">
                  <svg className="w-9 h-9 sm:w-10 sm:h-10 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="19" y1="5" x2="5" y2="19" strokeLinecap="round" />
                    <circle cx="19" cy="5" r="2" fill="currentColor" stroke="none" />
                    <path d="M13 5h6v6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="type-subtitle text-white text-lg sm:text-xl font-semibold mb-3">Uncapped Speed</h3>
                <p className="type-body text-[#888] group-hover:text-gray-300 transition-colors mb-8 sm:mb-10 text-sm leading-relaxed flex-grow pr-0 sm:pr-2">
                  Instead of relying on a static queue of nodes, hundreds of independent operators race to deliver your agent's messages first. The fastest node wins the business. This creates a relentless, evolutionary drive where infrastructure providers constantly upgrade their hardware just to stay competitive, pushing network latency down to its physical limits.
                </p>
                <div className="mt-auto inline-block bg-[#cccccc]/5 text-[#cccccc] text-[10px] tracking-wider px-3 py-1.5 rounded-[4px] font-bold border border-[#cccccc]/10 whitespace-nowrap group-hover:border-[#cccccc]/30 transition-colors">
                  REAL-TIME COMPETITION <span className="opacity-50 mx-1">&rarr;</span> ZERO LAG
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 flex flex-col items-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-[#555] group-hover:text-[#cccccc] transition-colors font-mono text-[10px] tracking-widest mb-6 sm:mb-8 font-bold">OUTCOME 02</div>
                <div className="mb-5 sm:mb-6 w-9 h-9 sm:w-10 sm:h-10 relative flex items-center justify-start text-[#cccccc]">
                  <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="type-subtitle text-white text-lg sm:text-xl font-semibold mb-3">Marginal-Cost Pricing</h3>
                <p className="type-body text-[#888] group-hover:text-gray-300 transition-colors mb-8 sm:mb-10 text-sm leading-relaxed flex-grow pr-0 sm:pr-2">
                  Closed cross-chain networks extract heavy economic rents because protocols have no alternative options. In an open marketplace, operators win volume by intentionally underbidding each other on execution fees. This structural pressure drives interaction costs down to their absolute bare-minimum, making continuous microtransactions between agents financially viable.
                </p>
                <div className="mt-auto inline-block bg-[#cccccc]/5 text-[#cccccc] text-[10px] tracking-wider px-3 py-1.5 rounded-[4px] font-bold border border-[#cccccc]/10 whitespace-nowrap group-hover:border-[#cccccc]/30 transition-colors">
                  FREE-MARKET PRICING <span className="opacity-50 mx-1">&rarr;</span> MINIMUM FEES
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 flex flex-col items-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-[#555] group-hover:text-[#cccccc] transition-colors font-mono text-[10px] tracking-widest mb-6 sm:mb-8 font-bold">OUTCOME 03</div>
                <div className="mb-5 sm:mb-6 w-9 h-9 sm:w-10 sm:h-10 relative flex items-center justify-start text-[#cccccc]">
                  <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v12M9 9h4.5a2.5 2.5 0 0 1 0 5H9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="type-subtitle text-white text-lg sm:text-xl font-semibold mb-3">Bitcoin-Grade Security</h3>
                <p className="type-body text-[#888] group-hover:text-gray-300 transition-colors mb-8 sm:mb-10 text-sm leading-relaxed flex-grow pr-0 sm:pr-2">
                  Bitcoin secured the world's most robust ledger not by trusting hand-picked gatekeepers, but through aggressive economic competition. This protocol applies that exact philosophy to cross-chain routing. Uptime and security are guaranteed by financial self-interest: if an operator lags or misbehaves, a hungry competitor instantly takes their place.
                </p>
                <div className="mt-auto inline-block bg-[#cccccc]/5 text-[#cccccc] text-[10px] tracking-wider px-3 py-1.5 rounded-[4px] font-bold border border-[#cccccc]/10 whitespace-nowrap group-hover:border-[#cccccc]/30 transition-colors">
                  INCENTIVE-DRIVEN LIVENESS <span className="opacity-50 mx-1">&rarr;</span> UNBREAKABLE
                </div>
              </div>
            </div>
          </div>
        </section> */}


        {/* ─── COMPARISON TABLE ─── */}
        {/* <section id="competition" className="w-full relative z-10 my-16 sm:my-24 md:my-32 px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="surface-glass-strong p-5 sm:p-6 md:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl relative max-w-[1100px] mx-auto w-full overflow-hidden">

            <div className="flex flex-col items-center text-center w-full relative z-10 mb-6 sm:mb-8 pt-3 sm:pt-4">
              <h2 className="type-title text-metallic-premium drop-shadow-2xl text-[1.4rem] sm:text-[1.75rem] md:text-3xl">
                The Cross-Chain Arena
              </h2>
              <p className="type-body text-gray-200 max-w-xs sm:max-w-xl mt-3 sm:mt-4 text-sm sm:text-base">
                Every existing cross-chain protocol selects its operators. Entangle is the first where anyone can compete to relay - and the market decides who wins.
              </p>
            </div>

            <div className="border border-white/5 rounded-[10px] sm:rounded-[12px] bg-black/20 backdrop-blur-md shadow-inner overflow-x-auto relative z-10 p-4 sm:p-6 md:p-8">
              <div className="min-w-[600px] sm:min-w-[700px] md:min-w-[800px] relative">
                <div className="absolute top-10 bottom-10 left-[31%] w-[20%] bg-white/[0.06] blur-[60px] rounded-full pointer-events-none z-0"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-3 sm:gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono font-bold items-end border-b border-white/[0.08] pb-4 sm:pb-5 mb-2">
                    <div className="text-[#888] pl-2">Property</div>
                    <div className="relative text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                      <div className="absolute top-[-20px] sm:top-[-24px] left-0 right-6 sm:right-10 h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                      Entangle
                    </div>
                    <div className="text-[#888]">Wormhole</div>
                    <div className="text-[#888]">LayerZero</div>
                    <div className="text-[#888]">Axelar</div>
                  </div>

                  <div className="flex flex-col">
                    {[
                      { f: "Operator entry", sub: "Who can run validators and relayers", e: "Permissionless TAO burn", w: "Permissioned Guardians", l: "Permissioned DVNs", a: "Permissioned validators" },
                      { f: "Incentive model", sub: "How participants earn rewards", e: "Competitive TAO + fees", w: "Protocol revenue share", l: "DVN fee share", a: "Staking rewards" },
                      { f: "Architecture", sub: "Core system design", e: "Open subnet on Bittensor", w: "19-Guardian multisig", l: "DVN operator set", a: "PoS validator set" },
                      { f: "Fee model", sub: "How message fees are calculated", e: "Oracle-driven per destination", w: "Fixed / variable", l: "Pay-as-you-go", a: "Fixed" },
                      { f: "Chain extensibility", sub: "How new chains are added", e: "ChainAdapter interface", w: "Per-chain deployments", l: "DVN per chain", a: "Per-chain voting" },
                    ].map((row, i, arr) => (
                      <div key={i} className={`grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-3 sm:gap-4 py-3 sm:py-4 hover:bg-white/[0.02] transition-colors items-center text-[11px] sm:text-[12px] ${i !== arr.length - 1 ? "border-b border-white/[0.03]" : ""}`}>
                        <div className="pl-2 flex items-center gap-1.5 sm:gap-2">
                          <span className="text-white font-semibold text-[11px] sm:text-[13px] tracking-wide">{row.f}</span>
                          <div className="relative group">
                            <div className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px] rounded-full border border-white/20 flex items-center justify-center cursor-default shrink-0 hover:border-white/40 transition-colors">
                              <span className="text-[8px] sm:text-[9px] text-white/40 font-bold leading-none group-hover:text-white/70 transition-colors">i</span>
                            </div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-[#1a1a1a] border border-white/10 rounded-[6px] text-[10px] sm:text-[11px] text-[#aaa] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
                              {row.sub}
                              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-white/10" />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] shrink-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          <span className="text-white text-[11px] sm:text-[12px] font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{row.e}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] shrink-0 text-[#3a3a3a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                          <span className="text-[#888] text-[11px] sm:text-[12px]">{row.w}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] shrink-0 text-[#3a3a3a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                          <span className="text-[#888] text-[11px] sm:text-[12px]">{row.l}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] shrink-0 text-[#3a3a3a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                          <span className="text-[#888] text-[11px] sm:text-[12px]">{row.a}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section> */}





        {/* ─── PROTOCOL PROPERTIES ─── */}
        {/* <section className="w-full relative z-10 my-16 sm:my-24 md:my-32 px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="surface-glass-strong p-5 sm:p-6 md:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl relative max-w-[1100px] mx-auto w-full overflow-hidden">

            <div className="flex flex-col items-center text-center w-full relative z-10 mb-7 sm:mb-10 pt-3 sm:pt-4">
              <h2 className="type-title mb-4 text-metallic-premium drop-shadow-2xl text-[1.4rem] sm:text-[1.75rem] md:text-3xl">
                Infrastructure That Competes to Serve
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/5 rounded-[10px] sm:rounded-[12px] bg-black/20 backdrop-blur-md shadow-inner relative z-10 overflow-hidden">
              {[
                {
                  title: "Cryptographic delivery proofs",
                  desc: "Multiple independent validators sign every message. The proof is recorded on-chain: visible to everyone, controlled by no one. Delivery is verifiable without trusting the relayer.",
                  icon: <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-[#cccccc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                },
                {
                  title: "Open market for relayers",
                  desc: "Anyone can compete to relay messages by burning TAO to register as a miner. Quality is rewarded with TAO emissions. No whitelists, no gatekeepers, the best operators win.",
                  icon: <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-[#cccccc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                },
                {
                  title: "Native contracts on every chain",
                  desc: "EVM, Solana, Sui, Cosmos, Stellar, each ecosystem gets a contract built for its own execution model. One protocol, natively deployed everywhere.",
                  icon: <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-[#cccccc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                },
                {
                  title: "General-purpose messaging",
                  desc: "Move tokens, trigger DeFi calls, route agent instructions, execute governance votes. The protocol is payload-agnostic, it moves whatever you send.",
                  icon: <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-[#cccccc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                },
                {
                  title: "Yuma Consensus scoring",
                  desc: "Miner rewards flow from Bittensor's Yuma Consensus, not from Entangle's team. Scoring is transparent, on-chain, and determined by real delivery performance.",
                  icon: <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-[#cccccc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                },
                {
                  title: "Ranked backup queue",
                  desc: "Every delivery has a backup queue. If the winning relayer misses its window, the next ranked miner delivers automatically. No dropped messages.",
                  icon: <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-[#cccccc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                }
              ].map((item, i) => (
                <div key={i} className={`p-5 sm:p-6 md:p-7 lg:p-8 transition-colors group flex flex-col items-start hover:bg-white/[0.02] border-white/5
                  ${i < 5 ? 'border-b' : ''}
                  ${i % 2 !== 1 ? 'sm:border-r' : ''}
                  ${i >= 4 ? 'sm:border-b-0' : ''}
                  lg:border-r-0
                  ${i % 3 !== 2 ? 'lg:border-r' : 'lg:border-r-0'}
                  ${i < 3 ? 'lg:border-b' : 'lg:border-b-0'}
                `}>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/10 flex items-center justify-center mb-3 sm:mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-[11px] sm:text-[12px] md:text-[13px] font-bold text-white mb-2 sm:mb-2.5 tracking-wider uppercase font-sans">
                    {item.title}
                  </h3>
                  <p className="text-[12px] sm:text-[12px] lg:text-[13px] text-[#888] leading-[1.65] font-medium mb-0 pr-0 sm:pr-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section> */}


        {/* ─── INCENTIVE ALIGNMENT / TOKENOMIC FLYWHEEL ─── */}
        {/* <section id="realtime-fees" className="w-full relative z-10 my-16 sm:my-24 md:my-32 px-4 sm:px-6">
          <div className="surface-glass-strong p-5 sm:p-6 md:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl relative max-w-[1100px] mx-auto w-full overflow-hidden">

            <div className="flex flex-col items-center justify-center text-center w-full relative z-10 mb-8 sm:mb-12 pt-4 sm:pt-6">
              <h2 className="type-title text-metallic-premium drop-shadow-2xl text-center w-full text-[1.4rem] sm:text-[1.75rem] md:text-3xl">
                The Tokenomic Flywheel
              </h2>
              <p className="type-body text-gray-200 max-w-xs sm:max-w-xl mt-3 sm:mt-4 text-sm sm:text-base">
                Protocol fees don't accumulate in a treasury. They flow directly into the Entangle subnet, creating a closed loop where usage drives alpha buybacks automatically.
              </p>
            </div>

            <div className="relative flex flex-col items-center gap-5 sm:gap-6 xl:flex-row xl:items-center xl:justify-center xl:gap-[0px] w-full max-w-[950px] mx-auto z-10">

              <div className="w-full sm:w-[320px] xl:w-[260px] bg-black/20 backdrop-blur-md shadow-inner border border-[#444444] rounded-[10px] p-5 relative z-10 shrink-0">
                <div className="flex justify-between items-start mb-4 mt-1">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-2V9h2zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" /></svg>
                  <div className="flex gap-2 mt-0.5 items-center">
                    <svg className="w-[12px] h-[12px] text-white" viewBox="0 0 32 32" fill="currentColor"><path d="M15.925 23.969L15.823 24l-7.447-4.391 7.553 10.638 7.57-10.638-7.574 4.36zM15.986 0L8.358 12.67l7.625 4.542 7.643-4.542L15.986 0z" /></svg>
                    <div className="w-[13px] h-[13px] rounded-full bg-[#cccccc]"></div>
                  </div>
                </div>
                <div className="type-subtitle text-white mb-1 text-sm sm:text-base">Protocol / Agent</div>
                <div className="text-[#666] type-body mb-4 text-sm">Calls <span className="bg-[#0b1d26] text-[#cccccc] px-1.5 py-0.5 rounded text-[12px] border border-[#cccccc]/10 font-mono">sendMessage()</span></div>
                <div className="text-[#bbb] type-body font-semibold text-sm">Pays Native Gas Fee</div>

                <div className="xl:hidden flex justify-center pt-5">
                  <svg className="w-5 h-5 text-[#777777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
                  </svg>
                </div>

                <div className="hidden xl:block absolute right-[-40px] top-1/2 w-[40px] h-[1.5px] bg-[#777777] -translate-y-1/2 z-0"></div>
                <div className="hidden xl:block absolute right-[-40px] top-1/2 w-[0] h-[0] border-t-[5px] border-b-[5px] border-l-[6px] border-transparent border-l-[#777777] transform -translate-y-1/2 z-10"></div>
              </div>

              <div className="hidden xl:block w-[40px] shrink-0"></div>

              <div className="w-full sm:w-[320px] xl:w-[280px] bg-black/20 backdrop-blur-md shadow-inner border border-[#444444] rounded-[8px] p-5 relative z-10 shrink-0 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                <div className="absolute top-[-1px] left-0 right-0 h-[3px] bg-white rounded-t-[8px] opacity-100 shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
                <div className="text-white type-label mb-4 mt-0.5 text-xs sm:text-sm">Entangle Core</div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-transparent hover:bg-white/5 transition-colors border border-white/5 rounded-[6px] p-3 flex gap-3 sm:gap-4 items-center">
                    <div className="bg-[#cccccc]/10 p-2 sm:p-2.5 rounded-[4px] border border-[#cccccc]/20 shrink-0">
                      <svg className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] text-[#cccccc]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11C16.17 7 15.5 7.93 15.5 9v11c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-2.21-1.79-4-4-4h-1V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13h8c0 1.66 1.34 3 3 3s3-1.34 3-3V9c0-.46.15-.88.4-1.22l3.37-3.37zM10 18H5V8h4.5c.28 0 .5.22.5.5v9z" /></svg>
                    </div>
                    <div>
                      <div className="text-white type-body font-bold mb-0.5 leading-none text-xs sm:text-sm">Fee Accumulator</div>
                      <div className="text-[#666] text-[10px]">Native gas fees held on source chain</div>
                    </div>
                  </div>
                  <div className="bg-transparent hover:bg-white/5 transition-colors border border-white/5 rounded-[6px] p-3 flex gap-3 sm:gap-4 items-center">
                    <div className="bg-[#cccccc]/10 p-2 sm:p-2.5 rounded-[4px] border border-[#cccccc]/20 shrink-0">
                      <svg className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] text-[#cccccc]" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg>
                    </div>
                    <div>
                      <div className="text-white type-body font-bold mb-0.5 leading-none text-xs sm:text-sm">TAO Conversion</div>
                      <div className="text-[#666] text-[10px]">Scheduled swap and bridge to BittensorEVM</div>
                    </div>
                  </div>
                </div>

                <div className="xl:hidden flex justify-center pt-5">
                  <svg className="w-5 h-5 text-[#777777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
                  </svg>
                </div>

                <div className="hidden xl:block absolute right-[-62px] top-1/2 -translate-y-1/2 w-[62px] z-0">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[20px] h-[1.5px] bg-[#777777]"></div>
                  <div className="absolute left-[20px] top-[-60px] w-[1.5px] h-[120px] bg-[#777777]"></div>
                  <div className="absolute left-[20px] top-[-60px] w-[42px] h-[1.5px] bg-[#777777]"></div>
                  <div className="absolute left-[20px] bottom-[-60px] w-[42px] h-[1.5px] bg-[#777777]"></div>
                </div>
              </div>

              <div className="hidden xl:block w-[50px] shrink-0 relative z-0"></div>

              <div className="flex flex-col gap-4 shrink-0 w-full sm:w-[320px] xl:w-[300px]">
                <div className="bg-black/20 backdrop-blur-md shadow-inner border border-[#444444] border-l-[3px] border-l-[#cccccc] rounded-[8px] p-5 shadow-[0_0_20px_rgba(204,204,204,0.06)] relative z-10 w-full overflow-hidden hover:bg-white/5 transition-colors">
                  <div className="absolute inset-0 border border-[#cccccc]/[0.05] rounded-[8px] pointer-events-none"></div>
                  <div className="text-[40px] sm:text-[48px] font-bold text-[#cccccc] leading-none mb-1 mt-0.5 drop-shadow-[0_0_15px_rgba(204,204,204,0.3)]">100%</div>
                  <div className="text-white type-body xl:type-subtitle mb-2 text-sm sm:text-base">Revenue Drives Alpha Buyback</div>
                  <div className="text-[#888] text-[11px] leading-relaxed mb-4 w-[95%]">
                    Protocol fees accumulate as native assets, ETH, SOL, ATOM, and flow directly into the Entangle Subnet, fuelling alpha buybacks in real time.
                  </div>
                  <div className="inline-block bg-[#cccccc]/10 text-[#cccccc] text-[10px] px-2 py-1 rounded-[4px] font-bold">
                    On-Chain
                  </div>
                </div>

                <div className="bg-black/20 backdrop-blur-md shadow-inner border border-[#444444] border-l-[3px] border-l-[#cccccc] rounded-[8px] p-5 shadow-[0_0_20px_rgba(204,204,204,0.06)] relative z-10 w-full overflow-hidden hover:bg-white/5 transition-colors">
                  <div className="absolute inset-0 border border-[#cccccc]/[0.05] rounded-[8px] pointer-events-none"></div>
                  <div className="text-[40px] sm:text-[48px] font-bold text-[#cccccc] leading-none mb-1 mt-0.5 drop-shadow-[0_0_15px_rgba(204,204,204,0.3)]">18%</div>
                  <div className="text-white type-body xl:type-subtitle mb-2 text-sm sm:text-base">Owner Emission Rewards Contribution</div>
                  <div className="text-[#888] text-[11px] leading-relaxed mb-4 w-[95%]">
                    Subnet Owner emission is distributed to ecosystem contributors. Released gradually through a DAO-governed multisig.
                  </div>
                  <div className="inline-block bg-[#cccccc]/10 text-[#cccccc] text-[10px] px-2 py-1 rounded-[4px] font-bold">
                    DAO Governed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}


        {/* ─── ACTIONS / CTA GRID ─── */}
        <section id="actions" className="w-full relative z-10 my-16 sm:my-24 md:my-32 px-4 sm:px-6">
          <div className="surface-glass-strong p-5 sm:p-6 md:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl relative max-w-[1100px] mx-auto w-full overflow-hidden">

            <div className="flex flex-col items-center text-center w-full relative z-10 mb-6 sm:mb-8 pt-3 sm:pt-4">
              <h2 className="type-title mb-2 text-metallic-premium drop-shadow-2xl text-[1.4rem] sm:text-[1.75rem] md:text-3xl">
                Join the Network
              </h2>
            </div>

            {/* Stack on mobile, row on lg */}
            <div className="relative z-10 w-full max-w-[1020px] mx-auto flex flex-col lg:flex-row border-x border-b border-white/5 rounded-b-[4px] bg-black/20 backdrop-blur-md shadow-inner">

              {/* Developers */}
              <div className="flex-1 border-t-[3px] border-[#cccccc] p-6 sm:p-8 lg:p-10 flex flex-col relative z-10 border-b border-white/5 lg:border-b-0 lg:border-r hover:bg-white/5 transition-colors">
                <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#cccccc]/10 flex items-center justify-center mb-6 sm:mb-8">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#cccccc]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <div className="text-white text-[22px] sm:text-[28px] font-bold mb-3 sm:mb-4">Developers</div>
                <div className="type-body text-[#888] leading-[1.7] mb-6 sm:mb-8 flex-grow text-sm sm:text-base">
                  Integrate cross-chain messaging in under 10 minutes. One SDK for EVM, Solana, Cosmos, and Stellar. Call <span className="font-mono text-[12px] text-[#ccc] bg-[#cccccc]/10 px-1 py-0.5 rounded">sendMessage()</span> and you're done.
                </div>
                <div className="text-[11px] text-[#777] leading-[1.8] mb-6 sm:mb-8">
                  <div><span className="text-[#cccccc]">&gt;</span> npm install @entangle/sdk</div>
                  <div><span className="text-[#cccccc]">&gt;</span> import {'{'} Entangle {'}'}</div>
                </div>
                <a href="https://docs.entangleprotocol.com/" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <button className="w-full bg-white hover:bg-gray-200 text-black font-bold type-body py-2 rounded-[4px] transition-colors mb-6 sm:mb-8 shadow-[0_0_20px_rgba(255,255,255,0.3)] text-sm sm:text-base">
                    Read the Docs
                  </button>
                </a>
                <a href="https://github.com/Entangle-Foundation/entangle-subnet" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <div className="text-[#888] type-label hover:text-white cursor-pointer transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                    View GitHub
                  </div>
                </a>
              </div>

              {/* Operators */}
              <div className="flex-1 bg-transparent border-t-[3px] border-[#cccccc] p-6 sm:p-8 lg:p-10 flex flex-col relative z-10 border-b border-white/5 lg:border-b-0 lg:border-r hover:bg-white/5 transition-colors">
                <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#cccccc]/10 flex items-center justify-center mb-6 sm:mb-8">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#cccccc]" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16v4H4zm0 8h16v4H4zm2-6h2v2H6zm0 8h2v2H6z" /></svg>
                </div>
                <div className="text-white text-[22px] sm:text-[28px] font-bold mb-3 sm:mb-4">Operators</div>
                <div className="type-body text-[#888] leading-[1.7] mb-6 sm:mb-8 flex-grow text-sm sm:text-base">
                  Run a scanner miner, relay miner, or validator on the Entangle subnet. Earn dual rewards: TAO emissions from Bittensor plus native gas fees from message traffic.
                </div>
                <div className="text-[11px] text-[#777] leading-[1.8] mb-6 sm:mb-8">
                  <div><span className="text-[#cccccc]">$</span> 70% TAO → Relay Miners</div>
                  <div><span className="text-[#cccccc]">$</span> 30% TAO → Scanner Miners</div>
                </div>
                <a href="https://github.com/Entangle-Foundation/entangle-subnet" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <button className="w-full bg-white hover:bg-gray-200 text-black font-bold type-body py-2 rounded-[4px] transition-colors mb-6 sm:mb-8 shadow-[0_0_20px_rgba(255,255,255,0.3)] text-sm sm:text-base">
                    Run a Neuron
                  </button>
                </a>
                <a href="https://test.entangleprotocol.com/dashboard" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <div className="text-[#888] type-label hover:text-white cursor-pointer transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M5 9h4v12H5zm7-5h4v17h-4zm7 8h4v9h-4z" /></svg>
                    Subnet Stats
                  </div>
                </a>
              </div>

              {/* Community */}
              <div className="flex-1 border-t-[3px] border-[#ffffff] p-6 sm:p-8 lg:p-10 flex flex-col relative z-10 border-b lg:border-b-0 border-white/5 hover:bg-white/5 transition-colors">
                <div className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] rounded-full bg-[#222] flex items-center justify-center mb-6 sm:mb-8">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                </div>
                <div className="text-white text-[22px] sm:text-[28px] font-bold mb-3 sm:mb-4">Community</div>
                <div className="type-body text-[#888] leading-[1.7] mb-6 sm:mb-8 flex-grow text-sm sm:text-base">
                  Follow protocol development, participate in governance discussions, and connect with other builders working on the cross-chain agentic stack.
                </div>
                <div className="text-[11px] text-[#777] leading-[1.8] mb-6 sm:mb-8">
                  <div><span className="text-white">#</span> earn</div>
                  <div><span className="text-white">#</span> governance</div>
                </div>
                <a href="https://discord.com/invite/bittensor" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <button className="w-full bg-white hover:bg-gray-200 text-black font-bold type-body py-2 rounded-[4px] transition-colors mb-6 sm:mb-8 shadow-[0_0_20px_rgba(255,255,255,0.3)] text-sm sm:text-base">
                    Join Discord
                  </button>
                </a>
                <a href="https://x.com/webuildentangle" target="_blank" rel="noopener noreferrer" className="text-[#888] type-label hover:text-white cursor-pointer transition-colors flex items-center justify-center text-center text-xs sm:text-sm">
                  Follow on X
                </a>
              </div>

            </div>
          </div>
        </section>


        {/* ─── FOOTER ─── */}
        <section className="pt-16 sm:pt-24 pb-12 sm:pb-16 flex flex-col items-center text-center px-4 bg-gradient-to-t from-[#020205] via-[#020205]/40 to-transparent">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/20 flex items-center justify-center mb-8 sm:mb-10 bg-black/60 backdrop-blur-md shadow-2xl">
            <Image src={logoImg} alt="Entangle Protocol" width={36} height={36} className="object-contain brightness-150 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] sm:w-10 sm:h-10" />
          </div>
          <h2 className="type-title mb-6 sm:mb-8 text-metallic-premium drop-shadow-2xl text-[1.4rem] sm:text-[1.75rem] md:text-3xl">The Agentic Era Is Here</h2>
          <p className="type-subtitle text-gray-100 font-medium mb-8 sm:mb-12 max-w-xs sm:max-w-2xl leading-relaxed text-shadow-strong text-sm sm:text-base">
            Permissionless cross-chain messaging for agents,<br className="hidden sm:block" />
            subnets, and protocols that can't afford to wait.
          </p>
          <div className="flex gap-4 mb-16 sm:mb-24">
            <a href="https://discord.com/invite/bittensor" target="_blank" rel="noopener noreferrer">
              <button className="px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-black font-bold text-sm sm:text-base rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 duration-200">Join Discord</button>
            </a>
          </div>
          <div className="w-full border-t border-white/20 pt-8 sm:pt-12 max-w-5xl flex flex-col items-center gap-6 sm:gap-8">
        

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-10 type-body text-gray-300 font-semibold drop-shadow-sm text-sm sm:text-base">
       
    
              <a href="https://github.com/Entangle-Foundation/entangle-subnet" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors shadow-sm">GitHub</a>
              <a href="https://test.entangleprotocol.com" className="hover:text-white cursor-pointer transition-colors shadow-sm">Demo</a>
              <a href="https://litepaper.entangleprotocol.com" className="hover:text-white cursor-pointer transition-colors shadow-sm">Litepaper</a>
              <a href="https://x.com/webuildentangle" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors shadow-sm">Twitter / X</a>
              <a href="https://discord.com/invite/bittensor" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors shadow-sm">Discord</a>

            </div>

      
          </div>
        </section>

      </div>
    </main>
  );
}