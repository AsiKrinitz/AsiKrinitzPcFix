import "./Home.css";
import AsiImage2 from "../../assets/Asi17.jpeg";

export default function Home() {
  return (
    <div className="home-container">
      {/* SEO Heading for overall page focus */}
      <h1 className="sr-only">
        טכנאי מחשבים בחיפה והקריות - אסי קריניץ, שירות עד הבית
      </h1>

      <header className="main-header">
        <nav>
          <strong className="logo-text">אסי קריניץ - טכנאי מחשבים</strong>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <h2 className="main-heading">
              המחשב עושה בעיות? <br />
              <span className="highlight">אני פה כדי לתקן.</span>
            </h2>
            <p className="hero-description">
              אבחון וטיפול מקצועי בכל סוגי התקלות: חומרה, תוכנה, מערכות הפעלה וציוד היקפי.
              <strong> שירות עד הבית בחיפה, הקריות והסביבה.</strong>
            </p>

            <div className="trust-badges">
              <span className="badge">✅ לא תיקנתי - לא שילמת</span>
              <span className="badge">📍 הגעה עד בית הלקוח</span>
              <span className="badge">💰 החל מ-100₪ לביקור</span>
            </div>

            <div className="cta-group">
              <a
                href="https://wa.me/972527458800?text=היי אסי, אשמח לעזרה עם המחשב שלי"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary pulse-btn"
              >
                <span className="icon">💬</span> שלחו הודעה בוואטסאפ
              </a>
              <a href="tel:0527458800" className="btn btn-secondary">
                <span className="icon">📞</span> התקשרו: 052-7458800
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-container">
              <div className="photo-glow"></div>
              <img
                src={AsiImage2}
                alt="אסי קריניץ טכנאי מחשבים מומלץ"
                className="profile-img"
              />
              <div className="floating-badge">
                <span className="badge-text">מתכנת וטכנאי מוסמך 📜</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-header">
          <h2>השירותים שלי</h2>
          <p>פתרון מקיף לכל בעיה טכנולוגית, עם דגש על איכות ואמינות.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>תיקון מחשבים ניידים ונייחים</h3>
            <p>החלפת מסכים, תיקון לוחות אם, פתרון בעיות התחממות ורעש.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3>שדרוג חומרה וביצועים</h3>
            <p>
              השבת חיים למחשב איטי ע"י שדרוג לכונן SSD והוספת זיכרון RAM.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🛡️</div>
            <h3>ניקוי וירוסים ואבטחה</h3>
            <p>הסרת תוכנות כופר, רוגלות, וירוסים והתקנת מערכות הגנה חזקות.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💽</div>
            <h3>התקנת מערכות הפעלה</h3>
            <p>
              התקנה ושדרוג ל-Windows 10/11 כולל גיבוי נתונים מלא לפני הפירמוט.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">📶</div>
            <h3>רשתות ותקשורת</h3>
            <p>פתרון בעיות קליטת Wi-Fi בבית, הגדרת ראוטרים ומגדילי טווח.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🖱️</div>
            <h3>הדרכות ותמיכה מרחוק</h3>
            <p>
              הדרכה אישית על תוכנות ותמיכה מהירה מרחוק ללא המתנה להגעת טכנאי.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-wrapper">
          <div className="about-text">
            <h2>מי אני?</h2>
            <p className="lead">טכנאי מחשבים ומתכנת עם פאשן לטכנולוגיה.</p>
            <p>
              עם מעל 3 שנות ניסיון בפיתוח תוכנה והסמכה מקצועית כטכנאי PC, אני מביא איתי ראייה מרחבית על האופן בו המחשב עובד. זה מאפשר לי לאתר את מקור התקלה במהירות, בין אם היא בחומרה או בקוד, ולספק פתרון יציב לאורך זמן.
            </p>
            <ul className="about-features">
              <li>✔️ אבחון מדויק ברמת הקוד והחומרה</li>
              <li>✔️ שירות אמין ושקיפות מלאה מול הלקוח</li>
              <li>✔️ זמינות גמישה לאזור חיפה, הקריות וסביבתן</li>
            </ul>
          </div>

          <div className="about-illustration">
            <div className="code-editor-mockup">
              <div className="mockup-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="mockup-body">
                <pre>
                  <code>
                    <span className="keyword">const</span>{" "}
                    <span className="variable">technician</span> = {"{"} <br />
                    &nbsp;&nbsp;name: <span className="string">"Asi Krinitz"</span>,<br />
                    &nbsp;&nbsp;skills: [<span className="string">"PC Repair"</span>, <span className="string">"Coding"</span>, <span className="string">"Diagnostics"</span>],<br />
                    &nbsp;&nbsp;serviceArea: [<span className="string">"Haifa"</span>, <span className="string">"Krayot"</span>],<br />
                    &nbsp;&nbsp;promise: <span className="string">"100% Satisfaction or Free!"</span>
                    <br />
                    {"};"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="remote-support-banner">
        <div className="banner-content">
          <div className="banner-icon">🌐</div>
          <div className="banner-text">
            <h2>צריכים עזרה דחופה? תמיכה מרחוק!</h2>
            <p>
              פתרון מהיר לתקלות תוכנה והגדרות ללא המתנה, היישר מהמחשב שלי לשלכם
              דרך AnyDesk, כנסו לקישור והורידו את התוכנה.
            </p>
          </div>
          <div className="banner-action">
            <a
              href="https://150.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              להורדת תוכנת שליטה (150)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
