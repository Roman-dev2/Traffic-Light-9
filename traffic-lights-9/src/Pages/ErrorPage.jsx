
import './ErrorPage.css'; 

function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-message">
        <h1 className="error-title">404</h1>
        <p className="error-text">
          Сторінку не знайдено. Будь ласка, перевірте URL або поверніться на головну сторінку.
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;