import "./Home.css";

export default function Home() {
  return (
    <div className="home-container" dir="rtl">
      {/* Header / Navbar */}
      <header className="main-header">
        <nav>
          <strong className="logo-text">אסי קריניץ - טכנאי מחשבים</strong>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <h1>המחשב עושה בעיות?</h1>
        <p>תיקון מחשבים מהיר ומקצועי עד הבית.</p>

        <div className="cta-wrapper">
          <button className="cta-button">הזמן טכנאי עכשיו</button>
        </div>
      </main>

      {/* Services Preview */}
      <section className="services-section">
        <h3>השירותים שלי:</h3>
        <ul className="services-list">
          <li>תיקון מחשבים ניידים ונייחים</li>
          <li>התקנת מערכות הפעלה (Windows)</li>
          <li>ניקוי וירוסים ותוכנות זדוניות</li>
          <li>שדרוג חומרה (SSD, RAM)</li>
        </ul>
      </section>
    </div>
  );
}
