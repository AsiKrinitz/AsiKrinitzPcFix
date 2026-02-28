import "./Home.css";
import AsiImage2 from "../../assets/Asi17.jpeg";

export default function Home() {
  return (
    <div className="home-container">
      {/* 1. Header */}
      <header className="main-header">
        <nav>
          <strong className="logo-text">אסי קריניץ - טכנאי מחשבים</strong>
        </nav>
      </header>

      {/* 2. Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <h1>המחשב עושה בעיות?</h1>
          <p className="hero-description">
            אבחון וטיפול בכל סוגי התקלות: חומרה, תוכנה, מערכות הפעלה וציוד
            היקפי.
            <span className="location-highlight">
              שירות מקצועי והגעה עד בית הלקוח.
            </span>
          </p>

          <div className="service-areas">
            <span className="location-icon">📍</span>
            <strong>אזורי שירות:</strong> חיפה, הקריות והסביבה
          </div>

          <div className="price-highlight">
            <p>מחירים נוחים במיוחד ללקוחות חדשים</p>
            <span className="price-tag">החל מ-100₪ לביקור!</span>
          </div>

          {/* כרטיס יצירת קשר משולב */}
          <div className="cta-card contact-card-with-photo">
            <div className="contact-card-info">
              <h2>זמין עבורכם עכשיו</h2>
              <div className="contact-details">
                <span className="contact-name">אסי - 052-7458800</span>
                <div className="hero-badge">מתכנת וטכנאי מחשבים מוסמך 📜</div>
              </div>

              <a
                href="https://wa.me/972527458800?text=היי אסי, אשמח לעזרה עם המחשב שלי"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <span className="whatsapp-icon">💬</span>
                שלחו הודעה בוואטסאפ
              </a>
            </div>

            <div className="contact-card-photo-wrapper">
              <img src={AsiImage2} alt="אסי קריניץ" className="contact-photo" />
            </div>
          </div>
        </div>
      </main>

      {/* 3. About Me */}
      <section className="about-me">
        <div className="about-card">
          <div className="about-content">
            <div className="about-header">
              <h2>קצת עליי</h2>
            </div>
            <div className="about-description">
              <p className="highlight-p">
                מתכנת עם ניסיון של <strong>מעל 3 שנים</strong> וטכנאי מחשבים
                מוסמך.
              </p>
              <p>
                השילוב בין עולם הקוד לחומרה מאפשר לי לאבחן תקלות לעומק ולהבין
                איך המערכת "חושבת" באמת.
              </p>
            </div>
            <div className="about-tags">
              <div className="tag">
                <span>💻</span> מתכנת 3+ שנים
              </div>
              <div className="tag">
                <span>📜</span> טכנאי מוסמך
              </div>
              <div className="tag">
                <span>🔍</span> אבחון ברמת הקוד
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="code-window">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="code-icon">{"</>"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Remote Support & Services */}
      <section className="remote-support">
        <div className="remote-card">
          <div className="remote-icon">🖱️</div>
          <div className="remote-content">
            <h3>תמיכה מרחוק בלחיצת כפתור</h3>
            <p>
              ניתן לפתור תקלות תוכנה וניקוי וירוסים מרחוק באמצעות AnyDesk או
              TeamViewer.
            </p>
            <a
              href="https://150.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              להורדת תוכנת שליטה
            </a>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h3>השירותים שלי:</h3>
        <ul className="services-list">
          <li>תיקון מחשבים ניידים ונייחים</li>
          <li>התקנת מערכות הפעלה (Windows)</li>
          <li>ניקוי וירוסים ותוכנות זדוניות</li>
          <li>שדרוג חומרה (SSD, RAM)</li>
          <li>שירות תמיכה מרחוק</li>
        </ul>
      </section>
    </div>
  );
}
