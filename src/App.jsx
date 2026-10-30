
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Классический круассан",
    price: 3,
    description: "Нежный, хрустящий и воздушный",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600"
  },
  {
    id: 2,
    name: "Круассан с шоколадом",
    price: 4,
    description: "С начинкой из бельгийского шоколада",
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600"
  },
  {
    id: 3,
    name: "Круассан с клубникой",
    price: 4.5,
    description: "С нежным кремом и свежей клубникой",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600"
  },
  {
    id: 4,
    name: "Круассан с миндалём",
    price: 4.5,
    description: "С ароматным миндальным кремом",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600"
  }
];

// Шапка сайта
function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">🥐 Croissant House</Link>

      <nav>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/about">О нас</Link>
        <Link to="/delivery">Доставка</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  );
}

// Главная страница
function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="subtitle">СВЕЖАЯ ВЫПЕЧКА КАЖДЫЙ ДЕНЬ</p>
          <h1>Счастье начинается с круассана!</h1>
          <p>
            Ароматные, хрустящие и невероятно вкусные круассаны,
            приготовленные с любовью.
          </p>
          <Link to="/catalog" className="button">
            Посмотреть меню
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900"
          alt="Свежие круассаны"
        />
      </section>

      <section className="advantages">
        <h2>Почему выбирают нас?</h2>
        <div className="advantage-list">
          <div>
            <span>🥐</span>
            <h3>Свежая выпечка</h3>
            <p>Готовим круассаны каждое утро.</p>
          </div>
          <div>
            <span>❤️</span>
            <h3>С любовью</h3>
            <p>Используем качественные ингредиенты.</p>
          </div>
          <div>
            <span>🚚</span>
            <h3>Быстрая доставка</h3>
            <p>Привозим любимую выпечку к вам домой.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

// Страница каталога
function Catalog() {
  return (
    <main className="page">
      <h1>Наш каталог</h1>
      <p className="page-description">
        Выбирайте любимые круассаны и наслаждайтесь каждым кусочком!
      </p>

      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-bottom">
                <strong>{product.price} €</strong>
                <a href="/contacts" className="small-button">
                  Заказать
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

// Страница о нас
function About() {
  return (
    <main className="page about">
      <h1>Немного о нас</h1>

      <img
        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000"
        alt="Свежая выпечка"
      />

      <h2>Добро пожаловать в Croissant House!</h2>
      <p>
        Мы — небольшая пекарня, которая любит создавать вкусную
        и качественную выпечку. Наша история началась с простой
        идеи: сделать каждое утро немного вкуснее.
      </p>
      <p>
        Мы готовим круассаны из свежих ингредиентов, уделяем
        внимание каждой детали и хотим, чтобы каждый наш клиент
        чувствовал себя особенным.
      </p>
      <p>
        Наша главная цель — дарить вам хорошее настроение
        вместе с ароматной выпечкой!
      </p>
    </main>
  );
}

// Страница доставки
function Delivery() {
  return (
    <main className="page">
      <h1>Доставка</h1>
      <p className="page-description">
        Мы доставим ваши любимые круассаны прямо к двери!
      </p>

      <div className="delivery-box">
        <div className="delivery-item">
          <span>🚚</span>
          <h2>Быстрая доставка</h2>
          <p>Обычно доставка занимает 30–60 минут.</p>
        </div>

        <div className="delivery-item">
          <span>📦</span>
          <h2>Аккуратная упаковка</h2>
          <p>Каждый заказ упаковываем так, чтобы выпечка оставалась свежей.</p>
        </div>

        <div className="delivery-item">
          <span>💶</span>
          <h2>Стоимость</h2>
          <p>Доставка стоит 3 €. При заказе от 20 € доставка бесплатная.</p>
        </div>
      </div>

      <Link to="/contacts" className="button">
        Оформить заказ
      </Link>
    </main>
  );
}

// Страница контактов
function Contacts() {
  return (
    <main className="page">
      <h1>Свяжитесь с нами</h1>
      <p className="page-description">
        Мы всегда рады вашим вопросам и заказам!
      </p>

      <div className="contact-box">
        <div className="contact-info">
          <h2>Наши контакты</h2>
          <p>📍 Адрес: Tallinn, Estonia</p>
          <p>📞 Телефон: +372 5555 5555</p>
          <p>✉️ Email: hello@croissanthouse.ee</p>
          <p>🕒 Работаем: каждый день с 8:00 до 20:00</p>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Спасибо! Ваша заявка отправлена.");
            e.target.reset();
          }}
        >
          <h2>Оставить заявку</h2>

          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Ваш Email" required />
          <textarea placeholder="Ваше сообщение" rows="5" required />

          <button type="submit" className="button">
            Отправить
          </button>
        </form>
      </div>
    </main>
  );
}

// Подвал сайта
function Footer() {
  return (
    <footer className="footer">
      <h3>🥐 Croissant House</h3>
      <p>Свежие круассаны с любовью каждый день!</p>
      <p>© 2026 Croissant House. Все права защищены.</p>
    </footer>
  );
}

// Основное приложение
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
