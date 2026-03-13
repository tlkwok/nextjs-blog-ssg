import { HeroShader } from './components/HeroShader';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <HeroShader />
        <div className="hero-content">
          <h1 className="hero-title">Welcome to the Blog</h1>
          <p className="hero-tagline">
            用 Next.js 與 Paper Shaders 打造的靜態部落格，輕量、快速、好看。
          </p>
          <a href="#posts" className="hero-cta">
            看看文章
            <span aria-hidden>↓</span>
          </a>
        </div>
        <div className="scroll-hint" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
          Scroll
        </div>
      </section>

      <section id="posts" className="main-content">
        <h2 className="section-title">近期文章</h2>
        <div className="card-grid">
          <article className="card">
            <h3 className="card-title">第一篇範例文章</h3>
            <p className="card-desc">
              這裡可以放文章摘要，之後接上真實的部落格文章列表與連結。
            </p>
          </article>
          <article className="card">
            <h3 className="card-title">第二篇範例文章</h3>
            <p className="card-desc">
              卡片式版面方便瀏覽，也可以改成時間軸或列表樣式。
            </p>
          </article>
          <article className="card">
            <h3 className="card-title">第三篇範例文章</h3>
            <p className="card-desc">
              首頁的 Shader 背景由 @paper-design/shaders-react 的 MeshGradient 渲染。
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
