import React, { useState, useRef, useEffect } from 'react';

const DADOS_MUSICAS = [
  { 
    id: 1, 
    titulo: "SICKO MODE", 
    artista: "Travis Scott", 
    album: "Astroworld", 
    favorita: true, 
    genero: "Trap",
    
    imagem: "https://placehold.co/400x400/222/f72585?text=ASTROWORLD", 
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
  },
  { 
    id: 2, 
    titulo: "Lose Yourself", 
    artista: "Eminem", 
    album: "8 Mile", 
    favorita: true, 
    genero: "Old School",
    imagem: "https://placehold.co/400x400/000/fff?text=8+Mile",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" 
  },
  { 
    id: 3, 
    titulo: "God's Plan", 
    artista: "Drake", 
    album: "Scorpion", 
    favorita: false, 
    genero: "Trap",
    imagem: "https://placehold.co/400x400/333/ddd?text=Scorpion",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" 
  },
  { 
    id: 4, 
    titulo: "Negro Drama", 
    artista: "Racionais MC's", 
    album: "Nada como um dia...", 
    favorita: true, 
    genero: "Rap BR",
    imagem: "https://placehold.co/400x400/111/fff?text=Racionais",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" 
  },
  { 
    id: 5, 
    titulo: "HUMBLE.", 
    artista: "Kendrick Lamar", 
    album: "DAMN.", 
    favorita: false, 
    genero: "Lyricism",
    imagem: "https://placehold.co/400x400/990000/fff?text=DAMN.",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" 
  },
  { 
    id: 6, 
    titulo: "N.Y. State of Mind", 
    artista: "Nas", 
    album: "Illmatic", 
    favorita: false, 
    genero: "Old School",
    imagem: "https://placehold.co/400x400/444/aaa?text=Illmatic",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" 
  },
];

const DADOS_PLAYLISTS = [
  { id: 101, nome: "🔥 Trap Hits", filtro: "Trap" },
  { id: 102, nome: "👑 Old School Legends", filtro: "Old School" },
  { id: 103, nome: "🇧🇷 Rap Nacional", filtro: "Rap BR" },
];

const formatTime = (seconds) => {
  if (!seconds) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};


const EstilosGlobais = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');

    :root {
      --bg-deep: #050505; /* Preto mais profundo pra combinar com Rap */
      --bg-gradient: linear-gradient(135deg, #000000, #1a1a1a, #2b1055);
      --glass-bg: rgba(255, 255, 255, 0.03);
      --glass-border: 1px solid rgba(255, 255, 255, 0.08);
      --accent-color: #7b2cbf; /* Roxo Trap */
      --accent-hover: #9d4edd;
      --accent-gradient: linear-gradient(90deg, #7b2cbf, #e0aaff);
      --text-main: #ffffff;
      --text-muted: #a0a0a0;
      --player-height: 100px;
    }

    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: var(--bg-deep);
      color: var(--text-main);
      overflow: hidden;
    }

    /* Layout Principal */
    .spotify-layout {
      display: grid;
      grid-template-areas: "sidebar main" "player player";
      grid-template-columns: 260px 1fr;
      grid-template-rows: 1fr var(--player-height);
      height: 100vh;
      background: var(--bg-gradient);
    }

    /* Sidebar Glassmorphism */
    .spotify-sidebar {
      grid-area: sidebar;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(15px);
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 25px;
      border-right: var(--glass-border);
    }

    .logo-container {
      display: flex; align-items: center; gap: 12px;
      color: var(--accent-hover);
      text-shadow: 0 0 15px rgba(123, 44, 191, 0.6);
    }
    .spotify-logo-text { font-weight: 800; font-size: 24px; color: #fff; letter-spacing: -1px; text-transform: uppercase;}
    
    .sidebar-nav ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; }
    .sidebar-nav li { 
      padding: 12px 15px; border-radius: 8px;
      color: var(--text-muted); font-weight: 600; cursor: pointer; transition: 0.3s;
      display: flex; gap: 12px; align-items: center; letter-spacing: 0.5px;
    }
    .sidebar-nav li:hover, .sidebar-nav li.active { 
      background: var(--glass-bg); color: #fff; 
      border-left: 3px solid var(--accent-color);
    }

    .playlist-header h3 { font-size: 10px; letter-spacing: 2px; color: var(--text-muted); margin-bottom: 15px; opacity: 0.6; text-transform: uppercase; }
    .add-playlist-btn { color: var(--accent-hover); font-weight: bold; font-size: 24px; transition: 0.2s;}
    .add-playlist-btn:hover { text-shadow: 0 0 10px var(--accent-hover); transform: rotate(90deg); }
    
    .playlist-list li { padding: 8px 0; color: var(--text-muted); transition: 0.2s; font-size: 14px; font-weight: 500;}
    .playlist-list li:hover, .playlist-list li.active-playlist { color: var(--accent-hover); translate: 5px 0; }
    
    .playlist-form input {
      background: rgba(255,255,255,0.05); border: none; border-radius: 4px;
      padding: 12px; color: white; width: 85%; outline: none; font-size: 13px;
    }
    .playlist-form input:focus { border-bottom: 2px solid var(--accent-color); }

    /* Main Content */
    .spotify-main-content {
      grid-area: main;
      overflow-y: auto;
      position: relative;
      padding-bottom: 20px;
    }

    .hero-gradient {
      position: absolute; top: 0; left: 0; right: 0; height: 350px;
      background: linear-gradient(180deg, rgba(60, 9, 108, 0.4) 0%, rgba(5, 5, 5, 0) 100%);
      z-index: 0; pointer-events: none;
    }

    .spotify-header {
      position: sticky; top: 0; height: 80px;
      padding: 0 40px; display: flex; justify-content: space-between; align-items: center;
      z-index: 100;
      background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%);
    }
    
    .busca-container {
      background: rgba(255,255,255,0.08); border-radius: 8px; padding: 10px 20px;
      display: flex; align-items: center; border: 1px solid transparent;
      transition: 0.3s;
    }
    .busca-container:focus-within { background: rgba(0,0,0,0.6); border-color: var(--accent-color); }
    .busca-input { background: transparent; color: white; width: 300px; font-weight: 500; font-family: 'Poppins'; border: none; outline: none; }
    .busca-input::placeholder { color: rgba(255,255,255,0.3); }

    .user-avatar { 
      background: #333; border: 2px solid var(--accent-color); 
      width: 40px; height: 40px; border-radius: 50%; display:flex; align-items:center; justify-content:center;
      box-shadow: 0 0 15px rgba(123, 44, 191, 0.4);
    }

    /* Lista Músicas */
    .spotify-main { position: relative; z-index: 1; padding: 20px 40px; }
    .spotify-main h2 { font-size: 56px; font-weight: 900; margin-bottom: 20px; letter-spacing: -2px; line-height: 1; text-transform: uppercase; }

    .musicas-grid { gap: 4px; }
    .musica-row {
      display: grid; grid-template-columns: 50px 4fr 3fr 50px;
      align-items: center; padding: 15px 20px; border-radius: 6px;
      transition: 0.2s; border-bottom: 1px solid rgba(255,255,255,0.03);
    }
    .musica-row:hover { 
      background: rgba(255,255,255,0.05); 
    }
    .musica-row.active { 
      background: rgba(123, 44, 191, 0.15);
    }
    .musica-row.active .nome-musica { color: #e0aaff; }

    .capa-album { width: 50px; height: 50px; border-radius: 4px; box-shadow: 0 4px 10px rgba(0,0,0,0.5); }
    .nome-musica { font-weight: 700; font-size: 16px; letter-spacing: -0.5px; }
    
    .botao-favorito { transition: 0.2s transform; opacity: 0.4; }
    .botao-favorito:hover { transform: scale(1.2); opacity: 1; }
    .botao-favorito.favoritado { color: var(--accent-hover); opacity: 1; }

    /* Player Footer - Floating Style */
    .spotify-player {
      grid-area: player;
      background: rgba(10, 10, 15, 0.9);
      backdrop-filter: blur(20px);
      border-top: 1px solid rgba(255,255,255,0.05);
      padding: 0 40px;
      display: flex; justify-content: space-between; align-items: center;
      z-index: 200;
    }

    .play-btn-circle {
      background: white; color: black;
      width: 50px; height: 50px; border-radius: 50%;
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: 0.2s;
    }
    .play-btn-circle:hover { transform: scale(1.05); box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }

    .progress-slider, .volume-slider {
      -webkit-appearance: none; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px;
      cursor: pointer;
    }
    /* Thumb personalizado para sliders */
    .progress-slider::-webkit-slider-thumb, .volume-slider::-webkit-slider-thumb {
      -webkit-appearance: none; width: 12px; height: 12px; background: white; border-radius: 50%;
      box-shadow: 0 0 10px rgba(255,255,255,0.5);
    }
    
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #000; }
    ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
  `}</style>
);


function Header({ termoBusca, onBuscaChange }) {
  return (
    <header className="spotify-header">
      <div className="header-navigation">
        <button className="nav-arrow" style={{background:'transparent', border:'1px solid #333', color:'#fff'}}>{'<'}</button>
        <button className="nav-arrow" style={{background:'transparent', border:'1px solid #333', color:'#fff'}}>{'>'}</button>
      </div>
      <div className="busca-container">
        <span className="busca-icon">🔎</span>
        <input
          type="text"
          value={termoBusca}
          onChange={(e) => onBuscaChange(e.target.value)}
          placeholder="Busque artistas, faixas..."
          className="busca-input"
        />
      </div>
      <div className="user-profile">
        <div className="user-avatar">🧢</div>
      </div>
    </header>
  );
}

function Playlists({ playlists, onCriarPlaylist, onSelectPlaylist, playlistSelecionada }) {
  const [novoNome, setNovoNome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (novoNome.trim()) {
      onCriarPlaylist(novoNome);
      setNovoNome('');
    }
  };

  return (
    <aside className="spotify-sidebar">
      <div className="logo-container">
        <span className="spotify-logo-icon">🎙️</span> 
        <span className="spotify-logo-text">GANG PLAYER</span>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => onSelectPlaylist(null)} className={!playlistSelecionada ? 'active' : ''}>
            <span className="icon">🏯</span> Home
          </li>
          <li><span className="icon">🔥</span> Trending</li>
          <li><span className="icon">💿</span> Library</li>
        </ul>
      </nav>

      <div className="playlists-section">
        <div className="playlist-header">
          <h3>MIXTAPES</h3>
          <button className="add-playlist-btn" title="Criar Playlist">+</button>
        </div>
        
        <ul className="playlist-list">
          {playlists.map((playlist) => (
            <li 
              key={playlist.id} 
              onClick={() => onSelectPlaylist(playlist.filtro)}
              className={playlistSelecionada === playlist.filtro ? 'active-playlist' : ''}
            >
              {playlist.nome}
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="playlist-form">
        <input
          type="text"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          placeholder="Nova Mixtape..."
        />
      </form>
    </aside>
  );
}

function ListaMusicas({ musicas, onPlayMusica, onToggleFavorita, musicaAtual, isPlaying, playlistNome }) {
  return (
    <main className="spotify-main">
      <div className="hero-gradient"></div>
      
      <h2>{playlistNome ? playlistNome : "Heavy Rotation"}</h2>
      
      <div className="musicas-grid">
        {musicas.length > 0 ? (
          musicas.map((musica) => (
            <MusicaItem
              key={musica.id}
              musica={musica}
              onPlayMusica={onPlayMusica}
              onToggleFavorita={onToggleFavorita}
              isCurrent={musicaAtual?.id === musica.id}
              isPlaying={isPlaying}
            />
          ))
        ) : (
          <p className="empty-message" style={{color: '#666'}}>Nenhuma track encontrada.</p>
        )}
      </div>
    </main>
  );
}

function MusicaItem({ musica, onPlayMusica, onToggleFavorita, isCurrent, isPlaying }) {
  return (
    <div className={`musica-row ${isCurrent ? 'active' : ''}`} onClick={() => onPlayMusica(musica)}>
      <div className="col-index">
        {isCurrent && isPlaying ? (
          <span className="playing-gif" style={{color: 'var(--accent-hover)'}}>⚡</span> 
        ) : (
          <span className="play-icon-hover">▶</span>
        )}
        <span className="index-number" style={{display: isCurrent ? 'none' : 'block'}}>{musica.id}</span>
      </div>
      
      <div className="col-titulo">
        <img src={musica.imagem} alt={musica.titulo} className="capa-album" />
        <div className="info-text">
          <span className={`nome-musica ${isCurrent ? 'verde' : ''}`}>{musica.titulo}</span>
          <span className="nome-artista">{musica.artista}</span>
        </div>
      </div>

      <div className="col-album">
        {musica.album}
      </div>

      <div className="col-actions">
        <button
          className={`botao-favorito ${musica.favorita ? 'favoritado' : ''}`}
          onClick={(e) => {
            e.stopPropagation(); 
            onToggleFavorita(musica.id);
          }}
        >
          {musica.favorita ? '❤' : '♡'}
        </button>
      </div>
    </div>
  );
}

function Player({ musicaAtual, isPlaying, onPlayPause, currentTime, duration, volume, onVolumeChange, onSeek }) {
  const progressPercent = duration ? (currentTime / duration) * 100 : 0;
  
  const sliderGradient = (percent) => `linear-gradient(90deg, #9d4edd ${percent}%, #333 ${percent}%)`;

  return (
    <footer className="spotify-player">
      <div className="player-left">
        {musicaAtual && (
          <>
            <img src={musicaAtual.imagem} alt="Capa" className="player-capa" style={{borderRadius: '4px', border: '1px solid #333'}} />
            <div className="player-info" style={{marginLeft: '15px'}}>
              <h4 style={{fontWeight: 700, fontSize:'14px'}}>{musicaAtual.titulo}</h4>
              <p style={{fontSize:'12px', color:'#aaa'}}>{musicaAtual.artista}</p>
            </div>
          </>
        )}
      </div>
      
      <div className="player-center">
        <div className="player-controls">
          <button className="control-btn small">🔀</button>
          <button className="control-btn small">⏮</button>
          <button onClick={onPlayPause} className="play-btn-circle">
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <button className="control-btn small">⏭</button>
          <button className="control-btn small">🔁</button>
        </div>
        
        <div className="progress-container">
          <span className="time">{formatTime(currentTime)}</span>
          
          <input 
            type="range" 
            className="progress-slider"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={onSeek}
            style={{ 
                background: sliderGradient(progressPercent),
                width: '100%',
                margin: '0 10px'
            }}
          />
          
          <span className="time">{formatTime(duration)}</span>
        </div>
      </div>
      
      <div className="player-right">
        <span className="volume-icon">🔊</span>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={onVolumeChange}
          className="volume-slider"
          style={{ background: sliderGradient(volume) }} 
        />
      </div>
    </footer>
  );
}



function SpotifyClone() {
  const [musicas, setMusicas] = useState(DADOS_MUSICAS);
  const [playlists, setPlaylists] = useState(DADOS_PLAYLISTS);
  
  const [playlistSelecionada, setPlaylistSelecionada] = useState(null); 
  const [termoBusca, setTermoBusca] = useState('');

  const [musicaAtual, setMusicaAtual] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50);

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Erro ao tocar:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, musicaAtual]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    const handleSongEnd = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleSongEnd);
    audio.addEventListener('loadedmetadata', handleTimeUpdate); 

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleSongEnd);
      audio.removeEventListener('loadedmetadata', handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const handlePlayMusica = (musica) => {
    if (musica.id === musicaAtual?.id) {
      handleTogglePlayPause();
    } else {
      setMusicaAtual(musica);
      if (audioRef.current) {
        audioRef.current.src = musica.src;
        setCurrentTime(0);
        setIsPlaying(true); 
      }
    }
  };

  const handleTogglePlayPause = () => {
    if (!musicaAtual) return; 
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleToggleFavorita = (musicaId) => {
    const novasMusicas = musicas.map(musica => {
      if (musica.id === musicaId) return { ...musica, favorita: !musica.favorita };
      return musica;
    });
    setMusicas(novasMusicas);
  };

  const musicasFiltradas = musicas.filter(musica => {
    const matchPlaylist = playlistSelecionada ? musica.genero === playlistSelecionada : true;
    const matchBusca = musica.titulo.toLowerCase().includes(termoBusca.toLowerCase()) || 
                       musica.artista.toLowerCase().includes(termoBusca.toLowerCase());
    return matchPlaylist && matchBusca;
  });

  const handleSelectPlaylist = (filtro) => {
    setPlaylistSelecionada(filtro);
  };

  const handleCriarPlaylist = (nome) => {
    setPlaylists([...playlists, { id: Date.now(), nome, filtro: null }]);
  };

  return (
    <div className="spotify-layout">
      <EstilosGlobais />
      
      <audio ref={audioRef} />
      
      <Playlists 
        playlists={playlists} 
        onCriarPlaylist={handleCriarPlaylist} 
        onSelectPlaylist={handleSelectPlaylist}
        playlistSelecionada={playlistSelecionada}
      />
      
      <div className="spotify-main-content">
        <Header termoBusca={termoBusca} onBuscaChange={setTermoBusca} />
        
        <ListaMusicas
          musicas={musicasFiltradas}
          playlistNome={playlistSelecionada ? playlistSelecionada : null}
          onPlayMusica={handlePlayMusica}
          onToggleFavorita={handleToggleFavorita}
          musicaAtual={musicaAtual}
          isPlaying={isPlaying}
        />
      </div>
      
      <Player
        musicaAtual={musicaAtual}
        isPlaying={isPlaying}
        onPlayPause={handleTogglePlayPause}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        onVolumeChange={(e) => setVolume(e.target.value)}
        onSeek={handleSeek}
      />
    </div>
  );
}

export default SpotifyClone;