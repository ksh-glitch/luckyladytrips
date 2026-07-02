import { useEffect } from 'react'
import { Icon } from '../icons.jsx'
import CountUp from '../CountUp.jsx'
import { whatsappUrl, enquiryFor } from '../../lib/whatsapp.js'
import { trackWhatsApp, trackTikTok } from '../../lib/analytics.js'
import { site, nav, footerExplore } from '../../data/site.js'
import { images } from '../../data/images.js'
import { boats } from '../../data/boats.js'
import { trips } from '../../data/trips.js'
import { inclusionsStrip, inclusionsList, noExtras } from '../../data/inclusions.js'
import { faqs } from '../../data/faqs.js'
import { reviews } from '../../data/reviews.js'

// ---------------------------------------------------------------------------
//  FULL HOMEPAGE PREVIEW — Route C "Lucky Lady Riviera"
//  A complete, working homepage rebuilt in the 80s screen-printed travel-poster
//  system: setting-sun + gold-waterline motif, chunky Bricolage display type,
//  sunset palette, ticket-stub badges. Uses the site's REAL data. All styling
//  is scoped under `.rv` so it never touches the live site's design system.
// ---------------------------------------------------------------------------

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');
.rv{--tang:#F26B21;--coral:#F49B6A;--cream:#FBEAD2;--paper:#FDF4E4;--teal:#0E8A8F;--teal-d:#0a6065;--cobalt:#15346B;--cobalt-d:#0E2348;--gold:#FFC247;--hdr:60px;
  font-family:'Hanken Grotesk',system-ui,sans-serif;color:var(--cobalt);background:var(--cream);overflow-x:clip;}
.rv *{margin:0;padding:0;box-sizing:border-box;}
.rv a{text-decoration:none;color:inherit;}
.rv img{max-width:100%;display:block;}
.rv .wrap{max-width:1180px;margin:0 auto;padding:0 clamp(20px,4vw,40px);}
.rv section{position:relative;scroll-margin-top:calc(var(--hdr) + 8px);}
.rv .grain{position:absolute;inset:0;opacity:.4;mix-blend-mode:multiply;pointer-events:none;
  background-image:radial-gradient(rgba(21,52,107,.16) .8px,transparent 1.2px);background-size:4px 4px;}
.rv .kick{display:inline-flex;align-items:center;gap:9px;font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--tang);}
.rv .kick:before{content:"";width:22px;height:3px;background:var(--gold);border-radius:2px;}
.rv h2{font-family:'Bricolage Grotesque';font-weight:800;font-size:clamp(2rem,4.6vw,3.3rem);line-height:.96;letter-spacing:-.035em;color:var(--cobalt);}
.rv h2 em{font-style:italic;color:var(--tang);}
.rv .lead{font-size:clamp(15px,1.5vw,17px);line-height:1.55;color:var(--cobalt);font-weight:500;opacity:.92;max-width:48ch;}

/* WhatsApp + ghost buttons */
.rv .wa{display:inline-flex;align-items:center;gap:10px;background:var(--teal);color:#fff;font-weight:700;font-size:15px;white-space:nowrap;
  padding:14px 24px;border-radius:46px;box-shadow:0 3px 0 0 var(--teal-d),0 10px 22px -8px rgba(14,138,143,.7);transition:transform .15s, box-shadow .15s;cursor:pointer;}
.rv .wa:hover{transform:translateY(-2px);box-shadow:0 5px 0 0 var(--teal-d),0 16px 28px -8px rgba(14,138,143,.7);}
.rv .wa .ic{display:flex;width:18px;height:18px;border-radius:50%;background:#fff;align-items:center;justify-content:center;flex:none;}
.rv .wa .ic svg{width:12px;height:12px;fill:var(--teal);}
.rv .wa.sm{font-size:13px;padding:10px 16px;box-shadow:0 2px 0 0 var(--teal-d);}
.rv .wa.light{background:#fff;color:var(--teal-d);box-shadow:0 3px 0 0 rgba(0,0,0,.18);}
.rv .wa.light .ic{background:var(--teal);}
.rv .wa.light .ic svg{fill:#fff;}
.rv .ghost{display:inline-flex;align-items:center;gap:7px;font-weight:700;font-size:14px;color:var(--cobalt);}
.rv .ghost u{text-decoration:none;border-bottom:2px solid var(--tang);padding-bottom:2px;}
.rv .ghost.onblue{color:var(--cream);} .rv .ghost.onblue u{border-color:var(--gold);}

/* sun + waterline motif */
.rv .sun-disc{position:absolute;border-radius:50% 50% 0 0;background:var(--tang);}
.rv .sun-disc:after{content:"";position:absolute;left:18%;top:14%;width:26%;height:26%;border-radius:50%;background:var(--gold);}

/* ---------- header ---------- */
.rv .hdr{position:sticky;top:0;z-index:50;height:var(--hdr);display:flex;align-items:center;
  background:rgba(251,234,210,.86);backdrop-filter:blur(10px);border-bottom:2px solid var(--gold);}
.rv .hdr .wrap{display:flex;align-items:center;justify-content:space-between;width:100%;}
.rv .brand{font-family:'Bricolage Grotesque';font-weight:800;font-size:18px;letter-spacing:-.02em;display:flex;align-items:center;gap:9px;}
.rv .brand .mk{width:18px;height:9px;border-radius:18px 18px 0 0;background:var(--tang);position:relative;flex:none;}
.rv .brand .mk:before{content:"";position:absolute;left:-3px;bottom:0;right:-3px;height:2px;background:var(--gold);}
.rv .brand em{font-style:normal;color:var(--tang);}
.rv .hdr-right{display:flex;align-items:center;gap:clamp(18px,2.4vw,30px);}
.rv .nav{display:flex;align-items:center;gap:22px;}
.rv .nav a{font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:var(--cobalt);opacity:.72;transition:opacity .15s;}
.rv .nav a:hover{opacity:1;}
.rv .hdr .wa{padding:9px 16px;font-size:12.5px;box-shadow:0 2px 0 0 var(--teal-d);}

/* ---------- hero ---------- */
.rv .hero{position:relative;min-height:calc(100svh - var(--hdr));display:flex;flex-direction:column;overflow:hidden;background:var(--cobalt-d);}
.rv .hero .hphoto{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 42%;}
.rv .hero .hgrade{position:absolute;inset:0;background:linear-gradient(178deg,rgba(11,26,56,.52) 0%,rgba(11,26,56,.12) 20%,rgba(11,26,56,0) 38%,rgba(14,35,72,.5) 66%,rgba(11,26,56,.93) 100%),linear-gradient(96deg,rgba(242,107,33,.24) 0%,rgba(242,107,33,0) 58%);}
.rv .hero .sea{position:absolute;left:0;right:0;bottom:0;height:24%;background:var(--teal);}
.rv .hero .sea:before{content:"";position:absolute;inset:0;opacity:.4;mix-blend-mode:soft-light;background:repeating-linear-gradient(180deg,rgba(255,255,255,.5) 0 1px,transparent 1px 9px);}
.rv .hero .wl{position:absolute;left:0;right:0;bottom:24%;height:5px;background:var(--gold);z-index:3;box-shadow:0 0 18px rgba(255,194,71,.5);}
.rv .hero .sunwrap{position:absolute;left:50%;bottom:24%;transform:translateX(-50%);width:330px;height:150px;overflow:hidden;z-index:2;}
.rv .hero .rays{position:absolute;left:50%;bottom:0;width:330px;height:330px;transform:translateX(-50%);border-radius:50%;opacity:.68;
  background:conic-gradient(from 90deg,var(--tang) 0 6deg,transparent 6deg 12deg,var(--tang) 12deg 18deg,transparent 18deg 24deg,var(--tang) 24deg 30deg,transparent 30deg 36deg,var(--tang) 36deg 42deg,transparent 42deg 48deg,var(--tang) 48deg 54deg,transparent 54deg 60deg,var(--tang) 60deg 66deg,transparent 66deg 72deg,var(--tang) 72deg 78deg,transparent 78deg 84deg,var(--tang) 84deg 90deg,transparent 90deg 96deg,var(--tang) 96deg 102deg,transparent 102deg 108deg,var(--tang) 108deg 114deg,transparent 114deg 120deg,var(--tang) 120deg 126deg,transparent 126deg 132deg,var(--tang) 132deg 138deg,transparent 138deg 144deg,var(--tang) 144deg 150deg,transparent 150deg 156deg,var(--tang) 156deg 162deg,transparent 162deg 168deg,var(--tang) 168deg 174deg,transparent 174deg 180deg);}
.rv .hero .disc{position:absolute;left:50%;bottom:0;width:188px;height:188px;transform:translateX(-50%);border-radius:50%;background:var(--tang);}
.rv .hero .disc:after{content:"";position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 50% 38%,var(--gold) 0 22%,transparent 23%);}
.rv .hero .inner{position:relative;z-index:6;flex:1;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:clamp(44px,7vh,84px);padding-top:clamp(20px,5vh,56px);}
.rv .hero .chip{display:inline-flex;align-items:center;gap:7px;background:rgba(251,234,210,.15);border:1px solid rgba(251,234,210,.4);color:var(--cream);font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;padding:6px 13px;border-radius:5px;margin-bottom:20px;width:fit-content;backdrop-filter:blur(4px);}
.rv .hero .chip .pin{width:5px;height:5px;border-radius:50%;background:var(--gold);}
.rv .hero h1{font-family:'Bricolage Grotesque';font-weight:800;font-size:clamp(2.6rem,7vw,5rem);line-height:.9;letter-spacing:-.04em;max-width:14ch;color:var(--cream);text-shadow:0 2px 26px rgba(11,26,56,.5);}
.rv .hero h1 em{font-style:italic;color:var(--gold);}
.rv .hero .sub{font-size:clamp(15px,1.5vw,17px);line-height:1.5;max-width:42ch;font-weight:500;margin:20px 0 26px;color:var(--cream);opacity:.95;text-shadow:0 1px 14px rgba(11,26,56,.45);}
.rv .hero .cta{display:flex;align-items:center;gap:18px;flex-wrap:wrap;}
.rv .hero .cta .ghost{color:var(--cream);} .rv .hero .cta .ghost u{border-color:var(--gold);}
.rv .hero .trust{margin-top:18px;font-size:12px;font-weight:600;display:flex;align-items:center;gap:8px;flex-wrap:wrap;color:var(--cream);opacity:.92;}
.rv .hero .trust b{color:var(--gold);} .rv .hero .trust .sep{width:3px;height:3px;border-radius:50%;background:var(--gold);}
.rv .hero .ticket{position:absolute;z-index:7;top:24px;right:clamp(20px,4vw,40px);width:128px;background:var(--cream);border:2px solid var(--cobalt);border-radius:8px;transform:rotate(2.5deg);overflow:hidden;box-shadow:6px 8px 0 -2px rgba(21,52,107,.18);}
.rv .ticket .tk-top{background:var(--cobalt);color:var(--cream);font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:.16em;text-align:center;padding:6px 0;}
.rv .ticket .tk-body{padding:12px 12px 13px;text-align:center;}
.rv .ticket .tk-sun{width:34px;height:17px;border-radius:34px 34px 0 0;background:var(--tang);margin:0 auto 8px;position:relative;}
.rv .ticket .tk-sun:before{content:"";position:absolute;left:-4px;bottom:0;right:-4px;height:2px;background:var(--gold);}
.rv .ticket b{display:block;font-family:'Bricolage Grotesque';font-weight:800;font-size:26px;line-height:.9;color:var(--cobalt);}
.rv .ticket small{display:block;font-size:8.5px;text-transform:uppercase;letter-spacing:.14em;font-weight:700;color:var(--teal);margin-top:4px;}
.rv .ticket .perf{border-top:2px dashed rgba(21,52,107,.4);font-size:8px;text-transform:uppercase;letter-spacing:.1em;font-weight:700;color:var(--cobalt);padding:7px 0;opacity:.8;}

/* ---------- inclusions strip ---------- */
.rv .incstrip{background:var(--tang);color:var(--cream);padding:18px 0;}
.rv .incstrip .row{display:flex;flex-wrap:wrap;gap:10px 26px;align-items:center;justify-content:center;}
.rv .incstrip .it{display:inline-flex;align-items:center;gap:9px;font-size:13px;font-weight:700;letter-spacing:.02em;}
.rv .incstrip .it svg{width:18px;height:18px;}
.rv .incstrip .dot{width:4px;height:4px;border-radius:50%;background:var(--gold);}

/* ---------- section shell ---------- */
.rv .sec{padding:clamp(56px,8vw,104px) 0;}
.rv .sec-head{max-width:62ch;margin-bottom:clamp(32px,5vw,52px);}
.rv .sec-head h2{margin-top:14px;} .rv .sec-head .lead{margin-top:16px;}

/* ---------- boats ---------- */
.rv .boats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;position:relative;}
.rv .boats-grid:before{content:"";position:absolute;left:-4vw;right:-4vw;top:46%;height:3px;background:var(--gold);opacity:.5;z-index:0;}
.rv .boat{position:relative;z-index:1;background:var(--paper);border:2px solid var(--cobalt);border-radius:14px;overflow:hidden;box-shadow:7px 9px 0 -2px rgba(21,52,107,.16);display:flex;flex-direction:column;transition:box-shadow .2s ease;}
.rv .boat:nth-child(2){transform:translateY(-22px);} .rv .boat:nth-child(3){transform:translateY(10px);}
.rv .boat:hover{box-shadow:10px 14px 0 -2px rgba(21,52,107,.24);}
.rv .boat .pic{aspect-ratio:4/3;position:relative;overflow:hidden;background:var(--cobalt);}
.rv .boat .pic img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease;}
.rv .boat:hover .pic img{transform:scale(1.04);}
.rv .boat .ph{position:absolute;inset:0;background:linear-gradient(150deg,var(--cobalt) 0%,var(--teal) 100%);display:flex;align-items:center;justify-content:center;}
.rv .boat .ph .pn{font-family:'Bricolage Grotesque';font-weight:800;font-size:20px;color:var(--cream);text-align:center;padding:0 16px;letter-spacing:-.02em;}
.rv .boat .ph .phsun{position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:120px;height:60px;border-radius:120px 120px 0 0;background:var(--tang);opacity:.9;}
.rv .boat .flag{position:absolute;top:12px;left:12px;background:var(--gold);color:var(--cobalt-d);font-size:9.5px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;padding:5px 10px;border-radius:4px;}
.rv .boat .body{padding:18px 18px 20px;display:flex;flex-direction:column;flex:1;}
.rv .boat h3{font-family:'Bricolage Grotesque';font-weight:800;font-size:23px;letter-spacing:-.02em;color:var(--cobalt);}
.rv .boat .tag{font-size:13px;font-weight:600;color:var(--teal-d);margin-top:3px;}
.rv .boat .meta{display:flex;align-items:center;gap:8px;margin:14px 0;flex-wrap:wrap;}
.rv .boat .pill{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--cobalt);background:#fff;border:1.5px solid rgba(21,52,107,.18);padding:5px 10px;border-radius:30px;}
.rv .boat .price{font-family:'Bricolage Grotesque';font-weight:800;font-size:15px;color:var(--tang);}
.rv .boat .price small{font-family:'Hanken Grotesk';font-weight:600;color:var(--cobalt);opacity:.6;font-size:11px;}
.rv .boat .best{font-size:13.5px;line-height:1.45;color:var(--cobalt);opacity:.85;margin-bottom:16px;}
.rv .boat .act{margin-top:auto;display:flex;align-items:center;gap:14px;}

/* ---------- promise band ---------- */
.rv .promise{background:var(--cobalt);color:var(--cream);overflow:hidden;}
.rv .promise .pbg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.13;mix-blend-mode:luminosity;}
.rv .promise .psun{position:absolute;left:50%;bottom:-40px;transform:translateX(-50%);width:min(80vw,720px);height:min(40vw,360px);border-radius:50% 50% 0 0;background:radial-gradient(120% 150% at 50% 100%,var(--tang) 0%,var(--tang) 52%,transparent 53%);opacity:.5;}
.rv .promise .inner{position:relative;z-index:2;display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:start;}
.rv .promise h2{color:var(--cream);} .rv .promise h2 em{color:var(--gold);}
.rv .promise .kick{color:var(--gold);} .rv .promise .kick:before{background:var(--tang);}
.rv .promise .lead{color:var(--cream);opacity:.85;}
.rv .promise .extras{display:flex;flex-wrap:wrap;gap:8px;margin:22px 0 26px;}
.rv .promise .extras span{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;border:1.5px solid rgba(255,255,255,.22);border-radius:30px;padding:6px 12px;color:var(--cream);}
.rv .promise .extras svg{width:13px;height:13px;color:var(--gold);}
.rv .promise .inclist{background:rgba(255,255,255,.06);border:1.5px solid rgba(255,255,255,.14);border-radius:16px;padding:22px;}
.rv .promise .inclist .ttl{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.16em;color:var(--gold);margin-bottom:16px;}
.rv .promise .inc{display:flex;gap:13px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.1);}
.rv .promise .inc:last-child{border-bottom:0;}
.rv .promise .inc .ico{flex:none;width:36px;height:36px;border-radius:10px;background:rgba(255,194,71,.16);color:var(--gold);display:flex;align-items:center;justify-content:center;}
.rv .promise .inc .ico svg{width:19px;height:19px;}
.rv .promise .inc b{display:block;font-size:14.5px;color:#fff;font-weight:700;}
.rv .promise .inc p{font-size:12.5px;color:rgba(251,234,210,.7);line-height:1.4;margin-top:2px;}

/* ---------- trips ---------- */
.rv .trips-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.rv .trip{background:var(--paper);border:2px solid var(--cobalt);border-radius:12px;overflow:hidden;box-shadow:5px 7px 0 -2px rgba(21,52,107,.14);display:flex;flex-direction:column;transition:transform .18s ease,box-shadow .18s ease;}
.rv .trip:hover{transform:translateY(-4px);box-shadow:7px 11px 0 -2px rgba(21,52,107,.2);}
.rv .trip .t-pic{position:relative;aspect-ratio:16/10;overflow:hidden;background:var(--cobalt);}
.rv .trip .t-pic img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease;}
.rv .trip:hover .t-pic img{transform:scale(1.05);}
.rv .trip .t-pic:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(21,52,107,.04) 0%,rgba(21,52,107,.08) 45%,rgba(14,35,72,.66) 100%);}
.rv .trip .t-ico{position:absolute;top:10px;left:10px;z-index:2;width:34px;height:34px;border-radius:9px;background:rgba(251,234,210,.93);color:var(--tang);display:flex;align-items:center;justify-content:center;}
.rv .trip .t-ico svg{width:19px;height:19px;}
.rv .trip .t-bar{position:absolute;left:0;right:0;bottom:0;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:11px 14px;}
.rv .trip .t-bar .nm{font-family:'Bricolage Grotesque';font-weight:800;font-size:16px;letter-spacing:-.01em;color:var(--cream);text-shadow:0 1px 8px rgba(11,26,56,.7);}
.rv .trip .t-bar .tsun{width:22px;height:11px;border-radius:22px 22px 0 0;background:var(--tang);position:relative;flex:none;}
.rv .trip .t-bar .tsun:before{content:"";position:absolute;left:-3px;bottom:0;right:-3px;height:1.5px;background:var(--gold);}
.rv .trip .t-body{padding:16px;display:flex;flex-direction:column;flex:1;}
.rv .trip .t-best{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--teal-d);margin-bottom:7px;}
.rv .trip p{font-size:13.5px;line-height:1.5;color:var(--cobalt);opacity:.85;}
.rv .trip .perf{margin-top:auto;border-top:2px dashed rgba(21,52,107,.32);padding-top:12px;margin-top:14px;}
.rv .trip .perf a{font-size:12.5px;font-weight:800;color:var(--tang);display:inline-flex;align-items:center;gap:6px;}

/* ---------- founder ---------- */
.rv .founder .inner{display:grid;grid-template-columns:.95fr 1.05fr;gap:clamp(28px,4vw,56px);align-items:center;}
.rv .collage{display:grid;grid-template-columns:3fr 2fr;gap:14px;}
.rv .collage .big{border:2px solid var(--cobalt);border-radius:14px;overflow:hidden;box-shadow:7px 9px 0 -2px rgba(21,52,107,.16);aspect-ratio:3/4;}
.rv .collage .col{display:flex;flex-direction:column;gap:14px;}
.rv .collage .sm{border:2px solid var(--cobalt);border-radius:14px;overflow:hidden;box-shadow:5px 6px 0 -2px rgba(21,52,107,.14);flex:1;}
.rv .collage img{width:100%;height:100%;object-fit:cover;}
.rv .founder .copy p{font-size:15px;line-height:1.62;color:var(--cobalt);opacity:.9;margin-top:14px;max-width:54ch;}
.rv .founder .badges{display:flex;flex-wrap:wrap;gap:9px;margin-top:22px;}
.rv .founder .badge{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;font-weight:700;color:var(--cobalt);background:#fff;border:1.5px solid rgba(21,52,107,.16);border-radius:30px;padding:7px 13px;}
.rv .founder .badge svg{width:15px;height:15px;color:var(--tang);}
.rv .founder .badge.tt{background:var(--cobalt);color:var(--cream);border-color:var(--cobalt);}
.rv .founder .badge.tt svg{color:var(--gold);}
.rv .founder .act{display:flex;gap:16px;align-items:center;margin-top:26px;flex-wrap:wrap;}

/* ---------- reviews ---------- */
.rv .reviews{background:var(--paper);}
.rv .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.rv .rev{background:var(--cream);border:2px solid var(--cobalt);border-radius:14px;padding:24px;box-shadow:6px 8px 0 -2px rgba(21,52,107,.14);display:flex;flex-direction:column;transition:transform .18s ease,box-shadow .18s ease;}
.rv .rev:hover{transform:translateY(-4px);box-shadow:8px 11px 0 -2px rgba(21,52,107,.2);}
.rv .rev .stars{color:var(--gold);font-size:15px;letter-spacing:2px;margin-bottom:12px;}
.rv .rev q{font-family:'Bricolage Grotesque';font-weight:600;font-size:18px;line-height:1.32;letter-spacing:-.01em;color:var(--cobalt);quotes:none;display:block;}
.rv .rev q:before,.rv .rev q:after{content:none;}
.rv .rev .who{margin-top:auto;padding-top:18px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--teal-d);}
.rv .rev .who span{color:var(--cobalt);opacity:.55;}

/* ---------- faq ---------- */
.rv .faq .inner{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(28px,5vw,56px);align-items:start;}
.rv .faq details{border:2px solid var(--cobalt);border-radius:12px;background:var(--paper);margin-bottom:12px;overflow:hidden;box-shadow:4px 5px 0 -2px rgba(21,52,107,.12);}
.rv .faq summary{list-style:none;cursor:pointer;padding:16px 18px;font-family:'Bricolage Grotesque';font-weight:700;font-size:16px;color:var(--cobalt);display:flex;align-items:center;justify-content:space-between;gap:14px;}
.rv .faq summary::-webkit-details-marker{display:none;}
.rv .faq summary .pm{flex:none;width:22px;height:22px;border-radius:50%;background:var(--tang);color:#fff;display:flex;align-items:center;justify-content:center;font-size:16px;line-height:1;transition:transform .2s;}
.rv .faq details[open] summary .pm{transform:rotate(45deg);}
.rv .faq .ans{padding:0 18px 18px;font-size:14px;line-height:1.6;color:var(--cobalt);opacity:.85;border-top:2px dashed rgba(21,52,107,.28);margin-top:-2px;padding-top:14px;}
.rv .faq .aside .lead{margin:14px 0 20px;}

/* ---------- final cta ---------- */
.rv .final{position:relative;color:var(--cream);overflow:hidden;background:var(--cobalt-d);}
.rv .final img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5;}
.rv .final .veil{position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,35,72,.6) 0%,rgba(14,35,72,.78) 100%);}
.rv .final .fsun{position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:min(70vw,560px);height:min(35vw,280px);border-radius:50% 50% 0 0;background:radial-gradient(120% 150% at 50% 100%,var(--tang) 0%,var(--tang) 54%,transparent 55%);opacity:.55;}
.rv .final .fwl{position:absolute;left:0;right:0;bottom:0;height:4px;background:var(--gold);opacity:.7;}
.rv .final .inner{position:relative;z-index:2;text-align:center;padding:clamp(64px,9vw,120px) 0;}
.rv .final h2{color:var(--cream);max-width:18ch;margin:0 auto;}
.rv .final h2 em{color:var(--gold);}
.rv .final .lead{margin:18px auto 30px;color:var(--cream);opacity:.9;}
.rv .final .cta{display:flex;gap:16px;justify-content:center;align-items:center;flex-wrap:wrap;}

/* ---------- tiktok ---------- */
.rv .tiktok{background:var(--cobalt);color:var(--cream);overflow:hidden;}
.rv .tiktok .grain{opacity:.18;}
.rv .tiktok .inner{position:relative;z-index:2;display:grid;grid-template-columns:1.35fr 1fr;gap:46px;align-items:center;}
.rv .tiktok .kick{color:var(--gold);} .rv .tiktok .kick:before{background:var(--tang);}
.rv .tiktok h2{color:var(--cream);margin-top:14px;} .rv .tiktok h2 .hl{color:var(--gold);white-space:nowrap;}
.rv .tiktok .lead{color:var(--cream);opacity:.85;margin-top:16px;}
.rv .tiktok .act{display:flex;align-items:center;gap:20px;flex-wrap:wrap;margin-top:24px;}
.rv .tiktok .tt-btn{display:inline-flex;align-items:center;gap:9px;background:#fff;color:var(--cobalt-d);font-weight:800;font-size:14px;padding:13px 20px;border-radius:46px;box-shadow:0 3px 0 0 rgba(0,0,0,.22);}
.rv .tiktok .tt-btn svg{width:17px;height:17px;}
.rv .tiktok .tt-alt{font-size:13px;font-weight:700;color:var(--gold);border-bottom:2px solid rgba(255,194,71,.4);padding-bottom:2px;}
.rv .tiktok .card{background:var(--paper);border:2px solid var(--gold);border-radius:18px;padding:20px;box-shadow:9px 11px 0 -2px rgba(0,0,0,.28);}
.rv .tiktok .prof{display:flex;align-items:center;gap:13px;}
.rv .tiktok .ava{width:54px;height:54px;border-radius:50%;object-fit:cover;border:3px solid var(--gold);flex:none;}
.rv .tiktok .nm{font-family:'Bricolage Grotesque';font-weight:800;font-size:16px;color:var(--cobalt);line-height:1.15;}
.rv .tiktok .hd{font-size:13px;color:var(--teal-d);font-weight:700;}
.rv .tiktok .stats{display:flex;align-items:baseline;gap:8px 16px;margin:15px 0;flex-wrap:wrap;}
.rv .tiktok .cnt{font-family:'Bricolage Grotesque';font-weight:800;font-size:26px;color:var(--tang);}
.rv .tiktok .stats .lbl{font-size:12px;font-weight:600;color:var(--cobalt);opacity:.6;}
.rv .tiktok .live{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;color:var(--teal-d);}
.rv .tiktok .live .d{width:7px;height:7px;border-radius:50%;background:var(--teal);}
.rv .tiktok .feed{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px;}
.rv .tiktok .feed .cell{position:relative;border-radius:10px;overflow:hidden;aspect-ratio:3/4;border:1.5px solid rgba(21,52,107,.15);}
.rv .tiktok .feed img{width:100%;height:100%;object-fit:cover;}
.rv .tiktok .feed .play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,transparent,rgba(14,35,72,.35));}
.rv .tiktok .feed .play b{width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;color:var(--cobalt);}
.rv .tiktok .feed .play svg{width:12px;height:12px;margin-left:1px;}
.rv .tiktok .follow{display:flex;width:100%;align-items:center;justify-content:center;gap:8px;background:var(--cobalt);color:#fff;font-weight:800;font-size:13.5px;padding:12px;border-radius:30px;}
.rv .tiktok .follow svg{width:16px;height:16px;}

/* ---------- anatomy of a day ---------- */
.rv .anatomy .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;position:relative;}
.rv .anatomy .steps:before{content:"";position:absolute;left:5%;right:5%;top:19px;height:3px;background:var(--gold);opacity:.5;}
.rv .anatomy .step{position:relative;}
.rv .anatomy .num{width:40px;height:40px;border-radius:50%;background:var(--tang);color:#fff;font-family:'Bricolage Grotesque';font-weight:800;font-size:17px;display:flex;align-items:center;justify-content:center;box-shadow:0 3px 0 0 #c2480f;position:relative;z-index:1;}
.rv .anatomy .time{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--teal-d);margin:16px 0 6px;}
.rv .anatomy h3{font-family:'Bricolage Grotesque';font-weight:800;font-size:18px;color:var(--cobalt);letter-spacing:-.01em;}
.rv .anatomy .step p{font-size:13.5px;line-height:1.5;color:var(--cobalt);opacity:.82;margin-top:6px;}
.rv .anatomy .act{margin-top:36px;}

/* ---------- footer ---------- */
.rv .ft{background:var(--cobalt-d);color:rgba(251,234,210,.75);padding:54px 0 30px;}
.rv .ft .cols{display:grid;grid-template-columns:1.7fr 1fr 1.5fr;gap:34px;}
.rv .ft .brand{color:var(--cream);font-size:20px;font-family:'Bricolage Grotesque';font-weight:800;display:flex;align-items:center;gap:9px;}
.rv .ft .about p{font-size:13.5px;line-height:1.55;color:rgba(251,234,210,.72);margin-top:14px;max-width:42ch;}
.rv .ft .locs{display:flex;flex-wrap:wrap;gap:7px;margin-top:16px;}
.rv .ft .locs span{font-size:11px;font-weight:600;border:1px solid rgba(255,255,255,.18);border-radius:30px;padding:4px 11px;color:rgba(251,234,210,.8);}
.rv .ft h4{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.16em;color:var(--gold);margin-bottom:15px;}
.rv .ft .col ul{list-style:none;display:flex;flex-direction:column;gap:10px;}
.rv .ft .pop ul{display:grid;grid-template-columns:1fr 1fr;gap:10px 18px;}
.rv .ft .col a{font-size:13.5px;color:rgba(251,234,210,.8);}
.rv .ft .col a:hover{color:var(--gold);}
.rv .ft .contact{display:flex;flex-wrap:wrap;gap:10px 24px;margin-top:30px;padding-top:22px;border-top:1px solid rgba(255,255,255,.12);font-size:13px;align-items:center;}
.rv .ft .contact a{display:inline-flex;align-items:center;gap:7px;color:rgba(251,234,210,.85);}
.rv .ft .contact a:hover{color:var(--gold);}
.rv .ft .contact svg{width:15px;height:15px;color:var(--teal);}
.rv .ft .legal{margin-top:18px;font-size:11.5px;color:rgba(251,234,210,.5);display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;}

/* ---------- reviews rating ---------- */
.rv .reviews .rev-rating{display:flex;align-items:center;gap:11px;margin-top:16px;flex-wrap:wrap;font-size:13.5px;font-weight:600;color:var(--teal-d);}
.rv .reviews .rev-rating .stars{color:var(--gold);font-size:18px;letter-spacing:2px;}
.rv .reviews .rev-rating .score{font-family:'Bricolage Grotesque';font-weight:800;font-size:20px;color:var(--cobalt);}
.rv .reviews .rev-rating .sep{width:3px;height:3px;border-radius:50%;background:var(--tang);}

/* ---------- good to know ---------- */
.rv .goodtoknow .grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.rv .gk{background:var(--paper);border:2px solid var(--cobalt);border-radius:14px;padding:24px;box-shadow:5px 7px 0 -2px rgba(21,52,107,.13);}
.rv .gk .ic{width:46px;height:46px;border-radius:13px;background:rgba(242,107,33,.12);color:var(--tang);display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.rv .gk .ic svg{width:24px;height:24px;}
.rv .gk h3{font-family:'Bricolage Grotesque';font-weight:800;font-size:19px;color:var(--cobalt);letter-spacing:-.01em;}
.rv .gk p{font-size:14px;line-height:1.55;color:var(--cobalt);opacity:.84;margin-top:8px;}
.rv .gk .chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px;}
.rv .gk .chips span{font-size:11px;font-weight:700;color:var(--teal-d);background:rgba(14,138,143,.1);border-radius:30px;padding:4px 10px;}

/* ---------- sticky mobile CTA ---------- */
.rv .stickycta{display:none;}

/* ---------- reveal ---------- */
.rv [data-reveal]{transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1);}
.rv.reveal-on [data-reveal]{opacity:0;transform:translateY(22px);}
.rv.reveal-on [data-reveal].in{opacity:1;transform:none;}

/* ---------- responsive ---------- */
@media(max-width:1000px){ .rv .nav{display:none;} }
@media(max-width:900px){
  .rv .boats-grid,.rv .trips-grid,.rv .rev-grid,.rv .goodtoknow .grid3{grid-template-columns:1fr 1fr;}
  .rv .boats-grid:before{display:none;}
  .rv .boat:nth-child(2),.rv .boat:nth-child(3){transform:none;}
  .rv .promise .inner,.rv .founder .inner,.rv .faq .inner,.rv .tiktok .inner{grid-template-columns:1fr;gap:32px;}
  .rv .anatomy .steps{grid-template-columns:1fr 1fr;gap:26px;}
  .rv .anatomy .steps:before{display:none;}
  .rv .ft .cols{grid-template-columns:1fr;gap:30px;}
}
@media(max-width:640px){
  .rv{--hdr:56px;}
  .rv .nav{display:none;}
  .rv .hdr .wa{padding:10px 11px;}
  .rv .hdr .wa-lbl{display:none;}
  .rv .boats-grid,.rv .trips-grid,.rv .rev-grid,.rv .goodtoknow .grid3{grid-template-columns:1fr;}
  .rv .hero .ticket{display:none;}
  .rv .hero .inner{padding-bottom:clamp(22px,4vh,40px);}
  .rv .collage{grid-template-columns:1fr 1fr;}
  .rv .anatomy .steps{grid-template-columns:1fr;}
  .rv .ft .pop ul{grid-template-columns:1fr;}
  .rv .ft{padding-bottom:90px;}
  .rv .stickycta{display:flex;position:fixed;left:0;right:0;bottom:0;z-index:60;padding:10px 14px env(safe-area-inset-bottom);background:rgba(14,35,72,.93);backdrop-filter:blur(8px);border-top:2px solid var(--gold);}
  .rv .stickycta .wa{width:100%;justify-content:center;}
}
@media(prefers-reduced-motion:reduce){.rv [data-reveal]{transition:none;}}
`

const WA_GLYPH = (
  <span className="ic">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.6 4.7-1.2A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 .9-2.1c.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .6.5l.7 1.7c.1.1.1.3 0 .5l-.3.5-.3.3c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.7.8c.2.1.4.2.4.3.1.1.1.6-.1 1.2z" /></svg>
  </span>
)

const TT_FEED = [
  { src: images.oneLuckyLadyDeck, alt: 'A day on board One Lucky Lady' },
  { src: images.justineTiggySunset, alt: 'Golden-hour cruise on the Red Sea' },
  { src: images.oneLuckyLadyNight, alt: 'One Lucky Lady lit up after dark' },
]

// A graded real still for each trip card (all real Red Sea photography).
const TRIP_IMG = {
  'private-day-trips': images.oneLuckyLadySomabay,
  'snorkelling-trips': images.oneLuckyLady,
  'fishing-trips': images.oneLuckyLadyMarina,
  'sunset-cruises': images.justineTiggySunset,
  'overnight-escapes': images.oneLuckyLadyNight,
  'custom-charters': images.oneLuckyLadyDeck,
}

const PlayGlyph = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z" /></svg>
)

function Wa({ children, src, msg, className = 'wa' }) {
  return (
    <a className={className} href={whatsappUrl(msg, src)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp(src)} aria-label={typeof children === 'string' ? children : 'Message us on WhatsApp'}>
      {WA_GLYPH}
      <span className="wa-lbl">{children}</span>
    </a>
  )
}

export default function RivieraHome() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const root = document.querySelector('.rv')
    if (!root) return
    const els = root.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((e) => e.classList.add('in'))
      return
    }
    root.classList.add('reveal-on')
    const io = new IntersectionObserver(
      (ents) => ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])

  return (
    <div className="rv" id="top">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ---------------- header ---------------- */}
      <header className="hdr">
        <div className="wrap">
          <a className="brand" href="#top"><span className="mk" />LUCKY&nbsp;LADY <em>Trips</em></a>
          <div className="hdr-right">
            <nav className="nav">
              <a href="#boats">Boats</a>
              <a href="#trips">Trips</a>
              <a href="#about">About</a>
              <a href="#reviews">Reviews</a>
              <a href="#faq">FAQ</a>
            </nav>
            <Wa src="riviera-home:header">Check availability</Wa>
          </div>
        </div>
      </header>

      {/* ---------------- hero ---------------- */}
      <section className="hero">
        <img className="hphoto" src={images.hero} alt="One Lucky Lady private boat on the turquoise Red Sea at Soma Bay in golden afternoon light" loading="eager" />
        <div className="hgrade" />
        <div className="ticket">
          <div className="tk-top">★ all-inclusive</div>
          <div className="tk-body"><div className="tk-sun" /><b>0€</b><small>in extras</small></div>
          <div className="perf">admit your crew</div>
        </div>
        <div className="wrap inner">
          <span className="chip"><span className="pin" />Soma Bay · Hurghada · Red Sea</span>
          <h1>Your own Red Sea, <em>set properly.</em></h1>
          <p className="sub">Three private boats — cruiser, catamaran, fast fishing speedboat. Food, drinks, gear, hotel pickup and crew, all in. You just show up.</p>
          <div className="cta">
            <Wa src="riviera-home:hero">Check availability</Wa>
            <a className="ghost" href="#boats"><u>View our boats</u> →</a>
          </div>
          <p className="trust">Usually replies within a few hours<span className="sep" /><b>The price you see is the price you pay.</b></p>
        </div>
      </section>

      {/* ---------------- tiktok ---------------- */}
      <section className="sec tiktok">
        <div className="grain" />
        <div className="wrap inner">
          <div data-reveal>
            <span className="kick">As seen on TikTok</span>
            <h2>You&apos;ve probably already seen us. That&apos;s <span className="hl">{site.social.tiktokSeanName}</span></h2>
            <p className="lead">Most people find Lucky Lady Trips through Sean&apos;s TikTok — the days out, the reefs, the macaw and the dog. Watch the Red Sea the way it actually looks, then message us to live it.</p>
            <div className="act">
              <a className="tt-btn" href={site.social.tiktokSean} target="_blank" rel="noopener noreferrer" onClick={() => trackTikTok('riviera-home:tiktok')}>
                <Icon name="tiktok" className="" />Follow {site.social.tiktokSeanHandle}
              </a>
              <a className="tt-alt" href={site.social.tiktok} target="_blank" rel="noopener noreferrer" onClick={() => trackTikTok('riviera-home:tiktok-brand')}>Or the boats&apos; channel @luckyladyeg</a>
            </div>
          </div>
          <div className="card" data-reveal>
            <div className="prof">
              <img className="ava" src={images.seanPortrait} alt="Red Sea Sean" loading="lazy" />
              <div><div className="nm">{site.social.tiktokSeanName}</div><div className="hd">{site.social.tiktokSeanHandle}</div></div>
            </div>
            <div className="stats">
              <span className="cnt"><CountUp to={site.social.tiktokFollowerCount} />+</span>
              <span className="lbl">followers</span>
              <span className="live"><span className="d" />posting most days</span>
            </div>
            <a className="feed" href={site.social.tiktokSean} target="_blank" rel="noopener noreferrer" onClick={() => trackTikTok('riviera-home:tiktok-feed')} aria-label="Watch Red Sea Sean on TikTok">
              {TT_FEED.map((f, i) => (
                <span className="cell" key={i}>
                  <img src={f.src} alt={f.alt} loading="lazy" />
                  <span className="play"><b><PlayGlyph /></b></span>
                </span>
              ))}
            </a>
            <a className="follow" href={site.social.tiktokSean} target="_blank" rel="noopener noreferrer" onClick={() => trackTikTok('riviera-home:tiktok-card')}>
              <Icon name="tiktok" className="" />Follow {site.social.tiktokSeanHandle}
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- inclusions strip ---------------- */}
      <section className="incstrip">
        <div className="wrap">
          <div className="row">
            {inclusionsStrip.map((it, i) => (
              <span className="it" key={it.label}>
                {i > 0 && <span className="dot" aria-hidden="true" />}
                <Icon name={it.icon} className="" />
                {it.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- boats ---------------- */}
      <section className="sec" id="boats">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="kick">Choose your boat</span>
            <h2>Three boats. <em>Every kind of day.</em></h2>
            <p className="lead">From an intimate cruiser to a 14-guest catamaran and a fast fishing speedboat — pick the one that fits your day on the water.</p>
          </div>
          <div className="boats-grid">
            {boats.map((b, i) => (
              <article className="boat" key={b.id} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="pic">
                  {b.hasRealPhoto ? (
                    <img src={b.image} alt={b.imageAlt} loading="lazy" />
                  ) : (
                    <div className="ph"><span className="phsun" /><span className="pn">{b.name}</span></div>
                  )}
                  {b.id === 'one-lucky-lady' && <span className="flag">The original</span>}
                </div>
                <div className="body">
                  <h3>{b.name}</h3>
                  <p className="tag">{b.tagline}</p>
                  <div className="meta">
                    <span className="pill">{b.capacity}</span>
                    <span className="price">from €{b.priceFrom} <small>/ boat</small></span>
                  </div>
                  <p className="best">{b.bestFor}</p>
                  <div className="act">
                    <Wa className="wa sm" src={`riviera-home:boat:${b.id}`} msg={enquiryFor({ boat: b.name })}>Enquire</Wa>
                    <a className="ghost" href="#trips" style={{ fontSize: '13px' }}><u>Trip ideas</u> →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- all-inclusive promise ---------------- */}
      <section className="sec promise">
        <img className="pbg" src={images.oneLuckyLadySomabay} alt="" aria-hidden="true" loading="lazy" />
        <div className="psun" />
        <div className="grain" />
        <div className="wrap inner">
          <div data-reveal>
            <span className="kick">All-inclusive, honestly</span>
            <h2 style={{ marginTop: '14px' }}>The price you see is <em>the price you pay.</em></h2>
            <p className="lead" style={{ marginTop: '16px' }}>No surprise fees. No awkward add-ons. No photographer pressure. Just your group, your crew, and a fully arranged Red Sea day.</p>
            <div className="extras">
              {noExtras.map((n) => (
                <span key={n}><Icon name="close" className="" />{n}</span>
              ))}
            </div>
            <Wa className="wa light" src="riviera-home:promise">Check availability</Wa>
          </div>
          <div className="inclist" data-reveal>
            <p className="ttl">Included as standard</p>
            {inclusionsList.map((inc) => (
              <div className="inc" key={inc.title}>
                <span className="ico"><Icon name={inc.icon} className="" /></span>
                <div><b>{inc.title}</b><p>{inc.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- trips ---------------- */}
      <section className="sec" id="trips">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="kick">Ways to spend the day</span>
            <h2>Pick your kind of <em>day on the water.</em></h2>
            <p className="lead">Every trip is a private charter, run at your pace. Tell us the day you have in mind and we build it around you.</p>
          </div>
          <div className="trips-grid">
            {trips.map((t, i) => (
              <article className="trip" key={t.id} data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <div className="t-pic">
                  <img src={TRIP_IMG[t.id]} alt={`${t.name} on the Red Sea`} loading="lazy" />
                  <span className="t-ico"><Icon name={t.icon} className="" /></span>
                  <div className="t-bar"><span className="nm">{t.name}</span><span className="tsun" /></div>
                </div>
                <div className="t-body">
                  <span className="t-best">{t.bestFor}</span>
                  <p>{t.blurb}</p>
                  <div className="perf">
                    <a href={whatsappUrl(enquiryFor({ trip: t.formValue }), `riviera-home:trip:${t.id}`)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp(`riviera-home:trip:${t.id}`)}>Enquire on WhatsApp →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- anatomy of a day ---------------- */}
      <section className="sec anatomy">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="kick">Anatomy of a day</span>
            <h2>A day on the water, <em>hour by hour.</em></h2>
            <p className="lead">Every trip is private and arranged end to end. Here&apos;s how an unhurried day tends to unfold — yours can bend whichever way you like.</p>
          </div>
          <div className="steps">
            {trips[0].beats.map((b, i) => (
              <div className="step" key={b.label} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="num">{i + 1}</span>
                <div className="time">{b.time}</div>
                <h3>{b.label}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
          <div className="act" data-reveal>
            <Wa src="riviera-home:anatomy" msg={enquiryFor({ trip: trips[0].formValue })}>Plan a day like this</Wa>
          </div>
        </div>
      </section>

      {/* ---------------- good to know ---------------- */}
      <section className="sec goodtoknow">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="kick">Good to know</span>
            <h2>Turn up easy. <em>We&apos;ve got the rest.</em></h2>
            <p className="lead">No planning, no packing lists, no surprises at the marina. Here&apos;s the practical side, sorted.</p>
          </div>
          <div className="grid3">
            <div className="gk" data-reveal>
              <span className="ic"><Icon name="sun" className="" /></span>
              <h3>What to bring</h3>
              <p>Sun cream, a hat, swimwear and a smile. Towels, snorkelling gear, food and cold drinks are all on board.</p>
            </div>
            <div className="gk" data-reveal style={{ transitionDelay: '80ms' }}>
              <span className="ic"><Icon name="mapPin" className="" /></span>
              <h3>Where we sail</h3>
              <p>Across the Red Sea from Soma Bay and Hurghada. We collect you from your hotel and drop you back after.</p>
              <div className="chips">{site.serviceAreas.map((a) => <span key={a}>{a}</span>)}</div>
            </div>
            <div className="gk" data-reveal style={{ transitionDelay: '160ms' }}>
              <span className="ic"><Icon name="anchor" className="" /></span>
              <h3>Calm seas, your pace</h3>
              <p>The Red Sea is warm and calm most of the year. If conditions ever turn, we move your private day — never rush you on a group&apos;s schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- founder ---------------- */}
      <section className="sec founder" id="about">
        <div className="wrap inner">
          <div className="collage" data-reveal>
            <div className="big"><img src={images.seanPortrait} alt="Sean, founder of Lucky Lady Trips, at golden hour on the Red Sea" loading="lazy" /></div>
            <div className="col">
              <div className="sm"><img src={images.adamCrew} alt="Adam, born and raised in Soma Bay, part of the crew" loading="lazy" /></div>
              <div className="sm"><img src={images.justineTiggySunset} alt="Justine with Tiggy the chihuahua on a sunset cruise" loading="lazy" /></div>
            </div>
          </div>
          <div className="copy" data-reveal>
            <span className="kick">Meet the crew</span>
            <h2 style={{ marginTop: '14px' }}>The people behind <em>every day on the water.</em></h2>
            <p>Sean and Justine sold everything in the UK and moved to Soma Bay for a better life by the sea. What started with One Lucky Lady became a private Red Sea experience built around hospitality, freedom and long, easy days on the water.</p>
            <p>Running trips alongside them is Adam, born and raised right here in the bay — he knows the calmest morning reefs, where the fish are biting, and the quietest spot to watch the sun go down.</p>
            <p>Rio the macaw keeps an eye on the marina, Tiggy the chihuahua has logged more sunset cruises than most, and a full local crew runs every trip properly, every time.</p>
            <div className="badges">
              <a className="badge tt" href={site.social.tiktokSean} target="_blank" rel="noopener noreferrer" onClick={() => trackTikTok('riviera-home:story')}><Icon name="tiktok" className="" />15K+ on TikTok →</a>
              <span className="badge"><Icon name="heart" className="" />Loved by Red Sea guests</span>
              <span className="badge"><Icon name="lock" className="" />Private, personal, all-inclusive</span>
            </div>
            <div className="act">
              <Wa src="riviera-home:story" msg={enquiryFor({ context: "We'd love a private day on the water." })}>Plan a day with the crew</Wa>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- reviews ---------------- */}
      <section className="sec reviews" id="reviews">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="kick">Trusted on the Red Sea</span>
            <h2>Loved by families, couples <em>&amp; returning guests.</em></h2>
            <div className="rev-rating">
              <span className="stars" aria-hidden="true">★★★★★</span>
              <span className="score">5.0</span>
              <span className="sep" aria-hidden="true" />
              <span>from real guests — Soma Bay &amp; Hurghada</span>
            </div>
          </div>
          <div className="rev-grid">
            {reviews.map((r, i) => (
              <figure className="rev" key={r.name} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="stars" aria-label={`${r.rating} out of 5`}>{'★★★★★'.slice(0, r.rating)}</div>
                <q>{r.text}</q>
                <figcaption className="who">{r.name} <span>· {r.location}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- faq ---------------- */}
      <section className="sec faq" id="faq">
        <div className="wrap inner">
          <div className="aside" data-reveal>
            <span className="kick">Good to know</span>
            <h2 style={{ marginTop: '14px' }}>Your questions, <em>answered.</em></h2>
            <p className="lead">Everything you might want to check before you message us.</p>
            <Wa src="riviera-home:faq">Ask us on WhatsApp</Wa>
          </div>
          <div className="list" data-reveal>
            {faqs.slice(0, 8).map((f) => (
              <details key={f.q}>
                <summary>{f.q}<span className="pm" aria-hidden="true">+</span></summary>
                <div className="ans">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- final cta ---------------- */}
      <section className="final">
        <img src={images.oneLuckyLadyNight} alt="One Lucky Lady lit with blue deck lighting in Soma Bay marina after dark" loading="lazy" />
        <div className="veil" />
        <div className="fsun" />
        <div className="fwl" />
        <div className="wrap inner">
          <h2>Ready to plan your <em>Red Sea escape?</em></h2>
          <p className="lead">Tell us your dates and group size. We&apos;ll check availability and arrange the rest — pickup, food, drinks, gear and crew included.</p>
          <div className="cta">
            <Wa className="wa light" src="riviera-home:final">Check availability on WhatsApp</Wa>
            <a className="ghost onblue" href="#boats"><u>View our boats</u> →</a>
          </div>
        </div>
      </section>

      {/* ---------------- footer ---------------- */}
      <footer className="ft">
        <div className="wrap">
          <div className="cols">
            <div className="about">
              <a className="brand" href="#top"><span className="mk" />LUCKY&nbsp;LADY Trips</a>
              <p>Private, all-inclusive Red Sea boat trips from Soma Bay &amp; Hurghada. Three boats, one experience, and the price you see is the price you pay.</p>
              <div className="locs">{site.locations.map((l) => <span key={l}>{l}</span>)}</div>
            </div>
            <nav className="col" aria-label="Site">
              <h4>Explore</h4>
              <ul>{nav.map((n) => <li key={n.to}><a href={n.to}>{n.label}</a></li>)}</ul>
            </nav>
            <nav className="col pop" aria-label="Popular trips">
              <h4>Popular trips</h4>
              <ul>{footerExplore.map((f) => <li key={f.to}><a href={f.to}>{f.label}</a></li>)}</ul>
            </nav>
          </div>
          <div className="contact">
            <a href={whatsappUrl(undefined, 'riviera-home:footer')} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp('riviera-home:footer')}><Icon name="whatsapp" className="" />{site.whatsappDisplay}</a>
            <a href={`mailto:${site.email}`}><Icon name="mail" className="" />{site.email}</a>
            <a href={site.social.tiktokSean} target="_blank" rel="noopener noreferrer" onClick={() => trackTikTok('riviera-home:footer-tt')}><Icon name="tiktok" className="" />{site.social.tiktokSeanHandle}</a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram" className="" />Instagram</a>
          </div>
          <div className="legal">
            <span>© {site.legalName}. All rights reserved.</span>
            <span>{site.domain} · Soma Bay · Red Sea · Egypt</span>
          </div>
        </div>
      </footer>

      <div className="stickycta"><Wa src="riviera-home:sticky">Check availability</Wa></div>
    </div>
  )
}
