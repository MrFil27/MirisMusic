module.exports = {
    footer: "Developed by MrFil_27 | Miri la cantante",
    ping: {
      description: "Controlla la latenza del bot",
      response: "Pingando...",
      embed: {
        title: "Latenza del bot",
        responseTime: "- Tempo di risposta: **{latency}ms**",
        websocketPing: "- Ping WebSocket: **{ping}ms**",
        uptime: "- Tempo di attività : **{uptime}**",
        footer: "Developed by MrFil_27 | Miri la cantante"
      }
    },
    addsong: {
      embed: {
          playlistNotFound: "Playlist non trovata",
          playlistNotFoundDescription: "- Playlist non trovat.",
          accessDenied: "Accesso negato",
          accessDeniedDescription: "- Non hai il permesso di eseguire questo comando.",
          songAdded: "Brano aggiunto",
          songAddedDescription: "- Il brano **{songInput}** è stato aggiunto alla playlist **{playlistName}**.",
          error: "Errore",
          errorDescription: "- Si è verificato un errore durante l'aggiunta del brano."
      }
  },
  allplaylists: {
    embed: {
        noPlaylistsFound: "Nessuna playlist trovata",
        noPlaylistsFoundDescription: "- Al momento non sono disponibili playlist pubbliche.",
        createdBy: "Creata da: {userId}",
        serverName: "Server: {serverName}",
        songs: "Brano: **{songCount}**",
        publicPlaylistsTitle: "Playlist pubbliche (Page {currentPage}/{totalPages})",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante il recupero delle playlist."
    }
  },
  autoplay: {
    embed: {
        autoplayUpdated: "Riproduzione automatica aggiornata",
        autoplayStatus: "- La riproduzione automatica è **{status}** per questo server.",
        enabled: "attivata",
        disabled: "disattivata",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'aggiornamento della riproduzione automatica."
    },
    commandDescription: "Abilitare o disabilitare la riproduzione automatica"
  },
  createplaylist: {
    embed: {
        playlistExists: "Playlist esistente",
        playlistExistsDescription: "- Esiste già una playlist con questo nome.",
        playlistCreated: "Playlist creata",
        playlistCreatedDescription: "- La playlist **{playlistName}** è stata creata.\n- Visibilità: **{visibility}**.",
        private: "Privato",
        public: "Publico",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante la creazione della playlist."
    },
    commandDescriptionName: "Inserisci il nome della playlist",
    commandDescriptionPrivate: "Imposta la playlist privata (visibile solo da te)"
  },
  deleteplaylist: {
    embed: {
        playlistNotFound: "Playlist non trovata",
        playlistNotFoundDescription: "- Playlist non trovata.",
        accessDenied: "Accesso negato",
        accessDeniedDescription: "- Non hai il pemresso di eseguire questo comando.",
        playlistDeleted: "Playlist eliminata",
        playlistDeletedDescription: "- La playlist **{playlistName}** è stata eliminata.",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'eliminazione della playlist."
    },
    commandDescriptionName: "Inserisci il nome della playlist"
  },
  deletesong: {
    embed: {
        playlistNotFound: "Playlist non trovata",
        playlistNotFoundDescription: "- Playlist non trovata.",
        songDeleted: "Brano eliminato",
        songDeletedDescription: "- Il brano **{songName}** è stato eliminato dalla playlist **{playlistName}**.",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'eliminazione del brano."
    },
    commandDescriptionPlaylist: "Inserisci il nome della playlist",
    commandDescriptionSong: "Inserisci il nome del brano"
  },
  filters: {
    embed: {
        error: "Errore",
        noPlayer: "- Nessun player attivo trovato. Ascolta una canzone prima.",
        wrongChannel: "- Devi connetterti in un canale vocale per eseguire questo comando.",
        filtersCleared: "Tutti i filtri sono stati cancellati.",
        invalidFilter: "Filtro selezionato non valido.",
        filterApplied: "Il filtro **{filter}** è stato applicato.",
        errorProcessing: "- Si è verificato un errore durante l'elaborazione della richiesta."
    },
    commandDescription: "Selezioan un filtro da applicare"
  },
  help: {
    embed: {
        title: "📜 supporto comando {botName}",
        author: "Help",
        description: `
        **Benvenuto da {botName}!**

        > Il tuo compagno musicale definitivo su Discord :D
        > Di seguito sono riportate informazioni dettagliate sul bot:
                
        **📂 Comandi:** {totalCommands}
        **🌐 Server:** {totalServers}
        **👥 Utenti:** {totalUsers}
        **⏳ Attività:** {uptimeString}
        **📡 Ping:** {ping}ms
        `,
        availableCommands: "Comandi disponibili",
        noDescription: "Nessuna descrizione disponibile.",
        noCommands: "Nessun comando trovato.",
        error: "❌ Si è verificato un errore durante il recupero del menu della guida."
    },
    commandDescription: "Ottieni informazioni sul bot"
  },
  myplaylists: {
    embed: {
        noPlaylistsFound: "Nessuna playlist trovata",
        noPlaylistsFoundDescription: "- You have not created any playlists.",
        yourPlaylistsTitle: "Your Playlists (Page {currentPage}/{totalPages})",
        visibility: "Visibility",
        private: "Private",
        public: "Public",
        server: "Server",
        songs: "Songs",
        error: "Error",
        errorDescription: "- An error occurred while fetching your playlists."
    }
  },
  nowPlaying: {
    embed: {
        error: "Error",
        noSong: "- There is no song currently playing.",
        nowPlaying: "Now Playing!",
        errorDescription: "- An error occurred while processing your request."
    }
  },
  pause: {
    embed: {
        error: "Error",
        noActivePlayer: "- No active player found.",
        paused: "Paused!",
        pausedDescription: "**- Playback has been paused!**",
        errorDescription: "- An error occurred while processing your request."
    }
  },
  play: {
    embed: {
        error: "Error",
        noVoiceChannel: "- You need to be in a voice channel to use this command.",
        noLavalinkNodes: "- No available Lavalink nodes to process the request.",
        noResults: "- No results found.",
        requestUpdated: "Request Updated!",
        successProcessed: "- Your request has been successfully processed.\n- Please use buttons to control playback",
        errorProcessing: "- An error occurred while processing your request."
    },
    commandDescription: "Enter song name / link or playlist"
  },
  playCustomPlaylist: {
    embed: {
        error: "Error",
        noVoiceChannel: "- You need to be in a voice channel to use this command.",
        playlistNotFound: "- Playlist not found.",
        accessDenied: "Access Denied",
        noPermission: "- You do not have permission to play this private playlist.",
        emptyPlaylist: "- The playlist is empty.",
        playingPlaylist: "Playing Playlist!",
        playlistPlaying: "- Playlist **{playlistName}** is now playing.\n- Please use buttons to control playback",
        errorResolvingSong: "- Error resolving song.",
        errorPlayingPlaylist: "- An error occurred while playing the playlist."
    },
    commandDescription: "Enter playlist name"
  },
  queue: {
    embed: {
        queueEmpty: "Queue is Empty",
        queueEmptyDescription: "- The queue is currently empty. Add songs using the `/play` command.",
        currentQueue: "Current Queue",
        noMoreSongs: "- No more songs in the queue.",
        error: "Error",
        errorDescription: "- An error occurred while retrieving the queue."
    }
  },
  remove: {
    embed: {
        queueEmpty: "Queue is Empty",
        queueEmptyDescription: "- The queue is currently empty. Add songs using the `/play` command.",
        invalidPosition: "Error",
        invalidPositionDescription: "- Invalid position. Enter a number between 1 and {queueLength}.",
        songRemoved: "Song Removed",
        songRemovedDescription: "- Removed song: **{songTitle}** from the queue.",
        error: "Error",
        errorDescription: "- An error occurred while removing the song from the queue."
    }
  },
  resume: {
    embed: {
        noActivePlayer: "Error",
        noActivePlayerDescription: "- No active player found.",
        resumed: "Resumed!",
        resumedDescription: "**- Playback has been resumed!**",
        error: "Error",
        errorDescription: "- An error occurred while processing your request."
    }
  },
  showsongs: {
    embed: {
        error: "Error",
        playlistNotFound: "- Playlist not found.",
        accessDenied: "Access Denied",
        noPermission: "- You do not have permission to view this private playlist.",
        noSongs: "- No songs in this playlist.",
        songsInPlaylist: "Songs in {playlistName}",
        songsInPlaylistPage: "Songs in {playlistName} (Page {currentPage}/{totalPages})",
        errorDescription: "- An error occurred while showing the songs."
    }
  },
  shuffle: {
    embed: {
        queueEmpty: "Queue is Empty",
        queueEmptyDescription: "- The queue is currently empty. Add songs using the `/play` command.",
        queueShuffled: "Queue Shuffled",
        queueShuffledDescription: "- The queue has been shuffled successfully.",
        error: "Error",
        errorDescription: "- An error occurred while shuffling the queue."
    }
  },
  skip: {
    embed: {
        noActivePlayer: "Error",
        noActivePlayerDescription: "- No active player found.",
        songSkipped: "Song Skipped!",
        songSkippedDescription: "**- Player will play the next song!**",
        error: "Error",
        errorDescription: "- An error occurred while processing your request."
    }
  },
  stop: {
    embed: {
        noActivePlayer: "Error",
        noActivePlayerDescription: "- No active player found.",
        musicHalted: "Music Halted!",
        musicHaltedDescription: "**- Playback has been stopped and player destroyed!**",
        error: "Error",
        errorDescription: "- An error occurred while processing your request."
    }
  },
  support: {
    embed: {
        authorName: "Support Server",
        description: "➡️ **Join our Discord server for support and updates:**\n- Discord - {supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - {githubLink}\n- Replit - {replitLink}\n- YouTube - {youtubeLink}",
        error: "Error",
        errorDescription: "- An error occurred while processing your request."
    }
  },
  volume: {
    embed: {
        noActivePlayer: "Error",
        noActivePlayerDescription: "- No active player found.",
        volumeUpdated: "Volume Updated!",
        volumeUpdatedDescription: "- Volume has been set to **{volume}%**",
        error: "Error",
        errorDescription: "An error occurred while setting the volume."
    },
    volumeRangeError: "Volume level must be between 0 and 100."
  },
    errors: {
      noPermission: "You don't have permission to use this command.",
      generalError: "- Error: {error}"
    }
  };
