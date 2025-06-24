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
        noPlaylistsFoundDescription: "- Non hai alcuna playlist creata.",
        yourPlaylistsTitle: "Le tue playlist (Pagina {currentPage}/{totalPages})",
        visibility: "Visibilità",
        private: "Privato",
        public: "Pubblico",
        server: "Server",
        songs: "Brani",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante il recupero delle playlist."
    }
  },
  nowPlaying: {
    embed: {
        error: "Errore",
        noSong: "- Non ci sono brani in riproduzione.",
        nowPlaying: "In riproduzione!",
        errorDescription: "- Si è verificato un errore durante l'elaborazione della richiesta."
    }
  },
  pause: {
    embed: {
        error: "Errore",
        noActivePlayer: "- Nessun utente attivo trovato.",
        paused: "Paused!",
        pausedDescription: "**- La riproduzione è stata messa in pausa!**",
        errorDescription: "- Si è verificato un errore durante l'elaborazione della richiesta."
    }
  },
  play: {
    embed: {
        error: "Errore",
        noVoiceChannel: "- Devi connetterti in un canale vocale per eseguirequestocomando.",
        noLavalinkNodes: "- Nessun 'node Lavalink' disponibile per elaborare la richiesta.",
        noResults: "- Nessun risultato trovato.",
        requestUpdated: "Richiesta aggiornata!",
        successProcessed: "- La tua richiesta è stata elaborata con successo.\n- Utilizza i pulsanti per controllare la riproduzione",
        errorProcessing: "- Si è verificato un errore durante l'elaborazione della richiesta."
    },
    commandDescription: "Inserisci il nome/link del brano o della playlist"
  },
  playCustomPlaylist: {
    embed: {
        error: "Errore",
        noVoiceChannel: "- Devi connetterti in un canale vocale per utilizzare questo comando.",
        playlistNotFound: "- Playlist non trovata.",
        accessDenied: "Accesso negato",
        noPermission: "- Non hai il permesso di esequire questo comando.",
        emptyPlaylist: "- La playlist è vuota.",
        playingPlaylist: "Riproduzione della playlist!",
        playlistPlaying: "- La playlist **{playlistName}** è in riproduzione.\n- Utilizza i pulsanti per controllare la riproduzione",
        errorResolvingSong: "- Errore durante la risoluzione del brano.",
        errorPlayingPlaylist: "- Si è verificato un errore durante la riproduzione della playlist."
    },
    commandDescription: "Inserisci il nome della playlist"
  },
  queue: {
    embed: {
        queueEmpty: "La coda è vuota",
        queueEmptyDescription: "- La coda è attualmente vuota. Aggiungi brani usando il comando `/play`.",
        currentQueue: "Coda corrente",
        noMoreSongs: "- Non ci sono più canzoni in coda.",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante il recupero della coda."
    }
  },
  remove: {
    embed: {
        queueEmpty: "La coda è vuota",
        queueEmptyDescription: "- La coda è attualmente vuota. Aggiungi brani usando il comando `/play`.",
        invalidPosition: "Errore",
        invalidPositionDescription: "- Posizione non valida. Inserisci un numero compreso tra 1 e {queueLength}.",
        songRemoved: "Brano rimosso",
        songRemovedDescription: "- Il brano **{songTitle}** è stato rimosso dalla coda.",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante la rimozione del brano."
    }
  },
  resume: {
    embed: {
        noActivePlayer: "Errore",
        noActivePlayerDescription: "- Nessun utente attivo trovato",
        resumed: "Ripresa!",
        resumedDescription: "**- La riproduzione è ripresa!**",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'elaborazione della richiesta."
    }
  },
  showsongs: {
    embed: {
        error: "Errore",
        playlistNotFound: "- Playlist non trovata.",
        accessDenied: "Accesso negato",
        noPermission: "- Nonb hai il permesso di esequire questo comando.",
        noSongs: "- Non ci sono brani nella playlsit.",
        songsInPlaylist: "Brani in {playlistName}",
        songsInPlaylistPage: "Brani in {playlistName} (Pagina {currentPage}/{totalPages})",
        errorDescription: "- Si è verificato un errore durante la visualizzazione dei brani."
    }
  },
  shuffle: {
    embed: {
        queueEmpty: "la coda è vuota",
        queueEmptyDescription: "- La coda è attualmente vuota. Aggiungi brani usando il comando `/play`.",
        queueShuffled: "Coda mischiata",
        queueShuffledDescription: "- La coda è stata spostata correttamente.",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante la riproduzione casuale della coda."
    }
  },
  skip: {
    embed: {
        noActivePlayer: "Errore",
        noActivePlayerDescription: "- Nessun utente attivo trovato.",
        songSkipped: "Brano saltato!",
        songSkippedDescription: "**- Il lettore riprodurrà la canzone successiva!**",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'elaborazione della richiesta."
    }
  },
  stop: {
    embed: {
        noActivePlayer: "Errore",
        noActivePlayerDescription: "- Nessun utente attivo trovato.",
        musicHalted: "Brano interrotto!",
        musicHaltedDescription: "**- La riproduzione è stata interrotta e il lettore è stato distrutto!**",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'elaborazione della richiesta."
    }
  },
  support: {
    embed: {
        authorName: "Supporto",
        description: "",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'elaborazione della richiesta."
    }
  },
  volume: {
    embed: {
        noActivePlayer: "Errore",
        noActivePlayerDescription: "- Nessun utente attivo trovato.",
        volumeUpdated: "Volume aggiornato!",
        volumeUpdatedDescription: "- Il volume è stato impostato a **{volume}%**",
        error: "Errore",
        errorDescription: "Si è verificato un errore durante l'elaborazione della richiesta."
    },
    volumeRangeError: "Il livello del volume deve essere compreso tra 0 e 100."
  },
    errors: {
      noPermission: "Non hai il permesso di eseguire questo comando.",
      generalError: "- Errore: {error}"
    }
  };
