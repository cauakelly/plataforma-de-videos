import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ onSearch }) {
  const [showSidebar, setShowSidebar] = useState(false); // Começa oculto!
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setShowSidebar(s => !s)}
        aria-label="Abrir/fechar menu"
      >
        &#9776;
      </button>
      <aside className={`sidebar${showSidebar ? '' : ' hidden'}`} id="sidebar">
        <h2>Mini YouTube</h2>
        <ul>
          <li><a href="/dashboard">Home</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">History</a></li>
        </ul>
        {showSearch && (
          <input
            type="text"
            className="search-bar"
            placeholder="Buscar vídeos..."
            onChange={e => onSearch && onSearch(e.target.value)}
            autoFocus
          />
        )}
      </aside>
    </>
  );
}

export default Sidebar;