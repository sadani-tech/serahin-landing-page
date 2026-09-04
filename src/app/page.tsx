import { SerahinLogo, SerahinMark } from "@/components/brand";
import { FeatureExplorer } from "@/components/feature-explorer";
import { ArrowIcon, CheckIcon, Icon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { faqs, roadmap, steps } from "@/lib/product-content";

const appUrl = (process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000").replace(/\/$/, "");

function HeroDashboard() {
  return (
    <div className="hero-visual" aria-label="Pratinjau dashboard Serahin">
      <div className="sun-orbit sun-orbit--one"/><div className="sun-orbit sun-orbit--two"/>
      <div className="floating-note floating-note--left">
        <span className="note-icon note-icon--green"><CheckIcon/></span>
        <span><strong>Pembayaran masuk</strong><small>Baru saja terverifikasi</small></span>
      </div>
      <div className="floating-note floating-note--right">
        <span className="note-icon note-icon--orange"><Icon name="orders"/></span>
        <span><strong>24 pesanan</strong><small>Siap diproses hari ini</small></span>
      </div>
      <div className="dashboard-shell">
        <div className="dashboard-topbar">
          <div className="dashboard-brand"><SerahinMark/><span>Serahin</span></div>
          <span className="dashboard-date">Ringkasan hari ini</span>
          <div className="avatar">SL</div>
        </div>
        <div className="dashboard-body">
          <aside className="dashboard-sidebar" aria-hidden="true">
            <span className="sidebar-dot active"/><span className="sidebar-dot"/><span className="sidebar-dot"/><span className="sidebar-dot"/><span className="sidebar-dot"/>
          </aside>
          <div className="dashboard-content">
            <div className="dashboard-heading"><span><small>Selamat pagi,</small><strong>Studio Laras</strong></span><button type="button">+ Kampanye</button></div>
            <div className="metric-grid">
              <div className="metric metric--green"><span>Pesanan aktif</span><strong>128</strong><small>+18 minggu ini</small></div>
              <div className="metric metric--cream"><span>Menunggu verifikasi</span><strong>12</strong><small>Perlu ditinjau</small></div>
              <div className="metric metric--orange"><span>Tagihan masuk</span><strong>Rp 8,4 jt</strong><small>Bulan berjalan</small></div>
            </div>
            <div className="dashboard-lower">
              <div className="campaign-list">
                <div className="widget-title"><strong>Kampanye berjalan</strong><span>Lihat semua</span></div>
                <div className="campaign-row"><span className="product-thumb product-thumb--one">L</span><span><strong>Linen Daily Vol. 3</strong><small>82 dari 120 kuota</small></span><span className="status-pill">OPEN</span></div>
                <div className="progress"><i style={{width: "68%"}}/></div>
                <div className="campaign-row"><span className="product-thumb product-thumb--two">T</span><span><strong>Tote Bumi Batch 2</strong><small>46 dari 60 kuota</small></span><span className="status-pill status-pill--sun">PRODUKSI</span></div>
                <div className="progress progress--orange"><i style={{width: "77%"}}/></div>
              </div>
              <div className="donut-widget">
                <div className="widget-title"><strong>Status bayar</strong></div>
                <div className="donut"><span><strong>76%</strong><small>Lunas</small></span></div>
                <div className="donut-legend"><span><i/>Lunas</span><span><i/>DP</span><span><i/>Baru</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuyerPortalPreview() {
  return (
    <div className="portal-stage" aria-label="Pratinjau portal pembeli Serahin">
      <div className="portal-card portal-card--back">
        <span className="mini-label">TIMELINE</span>
        <div className="mini-timeline"><i/><i/><i/><i/></div>
      </div>
      <div className="phone">
        <div className="phone-top"><span/><i/></div>
        <div className="phone-screen">
          <SerahinLogo/>
          <span className="portal-kicker">PESANAN #SRH-0182</span>
          <h3>Hai, Amalia!</h3>
          <p>Pesananmu sedang masuk tahap produksi.</p>
          <div className="order-product"><span className="portal-product">L</span><span><strong>Linen Daily — Sage</strong><small>2 item · Studio Laras</small></span></div>
          <div className="order-status"><span><i/><strong>DP diterima</strong></span><small>12 Agu 2026</small></div>
          <div className="bill-card"><span><small>Sisa tagihan</small><strong>Rp 325.000</strong></span><button type="button">Bayar sekarang</button></div>
          <div className="timeline-mini"><strong>Progress terbaru</strong><span><i/><em/><small>Mulai produksi</small></span><span><i/><em/><small>Quality control</small></span><span className="muted"><i/><small>Siap dikirim</small></span></div>
        </div>
      </div>
      <div className="portal-card portal-card--front">
        <span className="note-icon note-icon--orange"><Icon name="portal"/></span>
        <span><strong>Satu tautan personal</strong><small>Status, tagihan, dan progres selalu dekat.</small></span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <SiteHeader appUrl={appUrl}/>

      <section className="hero section-dots">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="announcement"><i/> Dibuat untuk bisnis pre-order Indonesia <ArrowIcon/></span>
            <h1>Kelola pre-order.<br/><span>Lebih rapi, lebih pasti.</span></h1>
            <p className="hero-lead">Dari kampanye dibuka sampai barang diserahkan, Serahin menyatukan pesanan, pembayaran, produksi, dan kabar untuk pembeli.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#fitur">Jelajahi fiturnya <ArrowIcon/></a>
              <a className="text-link" href="#cara-kerja"><span className="play-icon">▶</span> Lihat cara kerjanya</a>
            </div>
            <div className="hero-proof">
              <span><CheckIcon/> Tidak perlu akun untuk pembeli</span>
              <span><CheckIcon/> Nyaman diakses dari ponsel</span>
            </div>
          </div>
          <HeroDashboard/>
        </div>
        <div className="container capability-strip" aria-label="Cakupan fitur utama">
          <span>Semua yang kamu butuhkan:</span>
          <div><b>Kampanye</b><i/> <b>Pesanan</b><i/> <b>Pembayaran</b><i/> <b>Produksi</b><i/> <b>Vendor</b><i/> <b>Laporan</b></div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Satu sumber yang bisa dipercaya</span>
            <h2>PO ramai tak harus terasa <span className="highlight">berantakan.</span></h2>
            <p>Berhenti berpindah antara chat, formulir, catatan, dan spreadsheet hanya untuk memahami satu pesanan.</p>
          </div>
          <div className="before-after">
            <article className="chaos-card">
              <span className="card-tag card-tag--muted">SEBELUM SERAHIN</span>
              <div className="chaos-content">
                <span className="chaos-item chaos-item--one">“Kak, pesananku sudah sampai mana?”</span>
                <span className="chaos-item chaos-item--two">Bukti bayar_172.jpg</span>
                <span className="chaos-sheet"><b>Spreadsheet PO final FINAL.xlsx</b><i/><i/><i/></span>
                <span className="chaos-item chaos-item--three">Kuota yang benar berapa?</span>
              </div>
              <h3>Data tersebar, tindak lanjut terlewat.</h3>
              <p>Update manual menyita perhatian saat seharusnya bisnis bergerak maju.</p>
            </article>
            <div className="switch-arrow"><ArrowIcon/></div>
            <article className="clarity-card">
              <span className="card-tag">BERSAMA SERAHIN</span>
              <div className="clarity-dashboard">
                <div><span><i className="green"/> Pesanan</span><strong>128</strong></div>
                <div><span><i className="orange"/> Perlu aksi</span><strong>12</strong></div>
                <div className="clarity-wide"><span><b>Linen Daily Vol. 3</b><small>Produksi berjalan sesuai jadwal</small></span><em>68%</em></div>
              </div>
              <h3>Satu alur, semua orang lebih tenang.</h3>
              <p>Seller punya kendali. Pembeli punya kejelasan. Data tetap utuh.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section features-section" id="fitur">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Kemampuan Serahin</span>
            <h2>Pekerjaan kompleks.<br/><span className="highlight">Alur yang sederhana.</span></h2>
          </div>
          <FeatureExplorer/>
        </div>
      </section>

      <section className="section steps-section" id="cara-kerja">
        <div className="container">
          <div className="section-heading section-heading--center section-heading--light">
            <span className="eyebrow">Cara kerja</span>
            <h2>Empat langkah dari ide<br/>hingga <span>pesanan tiba.</span></h2>
            <p>Serahin mengikuti cara kerja PO yang sudah kamu kenal, lalu merapikannya.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <article key={step.number} className="step-card">
                <div className="step-top"><span>{step.number}</span>{index < steps.length - 1 && <i><ArrowIcon/></i>}</div>
                <h3>{step.title}</h3><p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section buyer-section" id="pembeli">
        <div className="container split-grid">
          <BuyerPortalPreview/>
          <div className="split-copy">
            <span className="eyebrow">Bukan hanya untuk seller</span>
            <h2>Pembeli tak perlu<br/><span className="highlight">menebak-nebak.</span></h2>
            <p className="section-lead">Setelah memesan, pembeli mendapat portal personal untuk mengikuti semua hal penting tanpa membuat akun baru.</p>
            <ul className="check-list">
              <li><span><CheckIcon/></span><div><strong>Status pesanan yang jelas</strong><small>Dari order masuk hingga barang dikirim.</small></div></li>
              <li><span><CheckIcon/></span><div><strong>Tagihan dan pembayaran mandiri</strong><small>Kirim bukti DP atau pelunasan langsung dari portal.</small></div></li>
              <li><span><CheckIcon/></span><div><strong>Timeline produksi yang transparan</strong><small>Update seller tampil rapi dalam urutan waktu.</small></div></li>
            </ul>
            <a className="text-link text-link--green" href="#roadmap">Lihat pengembangan berikutnya <ArrowIcon/></a>
          </div>
        </div>
      </section>

      <section className="section roadmap-section" id="roadmap">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Dibangun bertahap, berpikir jauh</span>
            <h2>Hari ini rapi.<br/>Besok <span className="highlight">tumbuh bersama.</span></h2>
            <p>Roadmap mengikuti PRD Serahin. Label fase membantu membedakan kemampuan yang tersedia dan arah produk berikutnya.</p>
          </div>
          <div className="roadmap-line" aria-hidden="true"><i/><i/><i/></div>
          <div className="roadmap-grid">
            {roadmap.map((phase) => (
              <article className={`roadmap-card roadmap-card--${phase.tone}`} key={phase.version}>
                <div className="roadmap-meta"><span>{phase.version}</span><em>{phase.status}</em></div>
                <div className="roadmap-icon"><Icon name={phase.tone === "available" ? "campaign" : phase.tone === "planned" ? "whatsapp" : "seller"}/></div>
                <h3>{phase.title}</h3><p>{phase.description}</p>
                <ul>{phase.items.map((item) => <li key={item}><CheckIcon/>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <p className="roadmap-note"><span>Catatan transparansi</span> PRD v2.0 dan v3.0 masih berstatus draft; detail dan waktu rilis dapat berkembang.</p>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <div className="section-heading">
            <span className="eyebrow">Pertanyaan umum</span>
            <h2>Yang mungkin ingin<br/>kamu <span className="highlight">tanyakan.</span></h2>
            <p>Belum menemukan jawaban yang dicari? Jelajahi kemampuan produk atau masuk ke aplikasi.</p>
            <a className="text-link text-link--green" href="#fitur">Kembali ke fitur <ArrowIcon/></a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-card section-dots">
          <div className="closing-rays" aria-hidden="true"><i/><i/><i/><i/><i/></div>
          <SerahinMark className="closing-mark"/>
          <span className="eyebrow">Pesan hari ini, terima dengan hati</span>
          <h2>Waktunya menjalankan PO<br/>dengan lebih <span>tenang.</span></h2>
          <p>Satukan proses, jaga kejelasan, dan beri pengalaman yang lebih baik untuk setiap pembeli.</p>
          <div className="closing-actions">
            <a className="button button--light" href={`${appUrl}/login`}>Masuk ke Serahin <ArrowIcon/></a>
            <a className="button button--outline-light" href="#roadmap">Pelajari roadmap</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand"><SerahinLogo/><p>Kelola pre-order dari kampanye dibuka sampai barang diserahkan.</p></div>
          <div className="footer-links"><strong>Produk</strong><a href="#fitur">Fitur</a><a href="#cara-kerja">Cara kerja</a><a href="#roadmap">Roadmap</a></div>
          <div className="footer-links"><strong>Pengalaman</strong><a href="#pembeli">Portal pembeli</a><a href="#faq">FAQ</a><a href={`${appUrl}/login`}>Masuk</a></div>
          <div className="footer-note"><span>STATUS PRODUK</span><p><i/> Fondasi v1.0–v1.9 tersedia</p><small>Roadmap diturunkan dari PRD aktif Serahin.</small></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Serahin. Dibuat dengan hati di Indonesia.</span><span>Pre-order, dibuat lebih sederhana.</span></div>
      </footer>
    </main>
  );
}
