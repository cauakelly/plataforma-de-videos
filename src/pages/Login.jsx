import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000); // 1 segundo de loading
  }

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <h1 className={styles.title}>Login Page</h1>
      <div className={styles['input-container']}>
        <i className="fa-solid fa-envelope"></i>
        <input type="text" placeholder="Email ou Username" id="username" name="username" required className={styles.input} />
      </div>
      <div className={styles['input-container']}>
        <i className="fa-solid fa-lock"></i>
        <input type="password" placeholder="Senha" id="password" name="password" required className={styles.input} />
      </div>
      <div className={styles['link-container']}>
        <a href="#">Esqueci minha senha?</a>
        <a href="#">Criar conta</a>
      </div>
      <br />
      <button type="submit" className={styles.button} disabled={loading}>
        {loading ? <span className={styles.loader}></span> : 'Login'}
      </button>
    </form>
  );
}
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2025 Plataforma de Vídeos. Todos os direitos reservados. |
        <a href="https://github.com/cauakelly/plataforma-de-videos" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Repositório no GitHub
        </a>
      </p>
    </footer>
  );
}


export default Login;