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
  const [editIdx, setEditIdx] = useState(null);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.title && form.url) {
      if (editIdx !== null) {
        setVideos(prev => prev.map((v, i) => i === editIdx ? { ...form } : v));
        setEditIdx(null);
      } else {
        setVideos(prev => [{ ...form }, ...prev]);
      }
      setForm({ title: '', url: '', description: '' });
    }
  }

  function handleEdit(idx) {
    const video = videos[idx];
    setForm({
      title: video.title,
      url: video.url,
      description: video.description
    });
    setEditIdx(idx);
  }

  function handleDelete(idx) {
    setVideos(prev => prev.filter((_, i) => i !== idx));
    if (editIdx === idx) {
      setForm({ title: '', url: '', description: '' });
      setEditIdx(null);
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
          <button type="submit" className={styles.button}>{editIdx !== null ? 'Salvar Edição' : 'Adicionar Vídeo'}</button>
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
                <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
                  <button type="button" onClick={() => handleEdit(idx)} className={styles.button}>Editar</button>
                  <button type="button" onClick={() => handleDelete(idx)} className={styles.button} style={{ background: '#dc2626' }}>Excluir</button>
                </div>
              </div>
            ))
          )}
        </div>
        <footer>
          <span className={styles.footerCopyright}>
            © 2025 Plataforma de Vídeos. Todos os direitos reservados.
          </span>
          {' | '}
          <div style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '8px' }}>
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style={{ width: '24px', height: '24px', marginRight: '4px', verticalAlign: 'middle' }} />
            <a href="https://github.com/cauakelly/plataforma-de-videos" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Repositório no GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;
