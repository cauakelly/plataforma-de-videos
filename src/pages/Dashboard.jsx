import React, { useState } from 'react';
import styles from './Dashboard.module.css';

function getYouTubeVideoId(url) {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
}

function Dashboard() {
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState({ title: '', url: '', description: '' });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.title && form.url) {
      setVideos(prev => [{ ...form }, ...prev]);
      setForm({ title: '', url: '', description: '' });
    }
  }

  return (
    <div className={styles.dashboardBg}>
      <header className={styles.header}>
        <h3>Projeto Youtube</h3>
      </header>
      <div className={styles.dashboardContent}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Título do vídeo"
            value={form.title}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="url"
            name="url"
            placeholder="URL do YouTube"
            value={form.url}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="text"
            name="description"
            placeholder="Descrição do vídeo"
            value={form.description}
            onChange={handleInputChange}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Adicionar Vídeo</button>
        </form>
        <div className={styles.videosGrid}>
          {videos.length === 0 ? (
            <div className={styles.emptyVideos}>
              <div className={styles.emptyIcon}>📹</div>
              <p className={styles.emptyText}>Nenhum vídeo adicionado ainda.</p>
              <p className={styles.emptyText}>Use o formulário acima para adicionar seus primeiros vídeos.</p>
            </div>
          ) : (
            videos.map((video, idx) => (
              <div key={idx} className={styles.videoCard}>
                <div className={styles.thumb}>
                  {video.url ? (
                    <img
                      src={`https://img.youtube.com/vi/${getYouTubeVideoId(video.url)}/maxresdefault.jpg`}
                      alt={video.title}
                      className={styles.thumbImg}
                      onError={e => { e.target.src = 'https://via.placeholder.com/320x180/374151/ffffff?text=Video+Thumbnail'; }}
                    />
                  ) : null}
                </div>
                <h3 className={styles.videoTitle}>{video.title}</h3>
                <p className={styles.videoDesc}>{video.description}</p>
                <a href={video.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Assistir no YouTube
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
