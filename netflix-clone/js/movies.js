/**
 * MOVIETIME - Mock Database
 * Simulates a backend API response for movies, series, and anime.
 */

const MOVIE_DATA = [
    {
        id: 1,
        title: "Stranger Things",
        type: "Series",
        genre: ["Sci-Fi", "Horror", "Drama"],
        year: 2016,
        rating: 8.7,
        duration: "4 Seasons",
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
        cast: ["Winona Ryder", "David Harbour", "Millie Bobby Brown", "Finn Wolfhard"],
        director: "The Duffer Brothers",
        languages: ["English", "Spanish", "French"],
        trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        seasons: [
            {
                number: 1,
                episodes: [
                    { title: "Chapter One: The Vanishing of Will Byers", duration: "48m", description: "On his way home from a friend's house, young Will sees something terrifying." },
                    { title: "Chapter Two: The Weirdo on Maple Street", duration: "55m", description: "Lucas, Mike and Dustin try to talk to the girl they found in the woods." }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Inception",
        type: "Movie",
        genre: ["Action", "Sci-Fi", "Thriller"],
        year: 2010,
        rating: 8.8,
        duration: "2h 28m",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
        director: "Christopher Nolan",
        languages: ["English"],
        trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 3,
        title: "Attack on Titan",
        type: "Anime",
        genre: ["Action", "Fantasy", "Drama"],
        year: 2013,
        rating: 9.1,
        duration: "4 Seasons",
        description: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
        poster: "https://images.unsplash.com/photo-1580477651562-5954602f3b9c?q=80&w=400&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1580477651562-5954602f3b9c?q=80&w=1200&auto=format&fit=crop",
        cast: ["Yuki Kaji", "Yui Ishikawa", "Marina Inoue"],
        director: "Tetsurō Araki",
        languages: ["Japanese", "English"],
        trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 4,
        title: "The Dark Knight",
        type: "Movie",
        genre: ["Action", "Crime", "Drama"],
        year: 2008,
        rating: 9.0,
        duration: "2h 32m",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=400&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=1200&auto=format&fit=crop",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        director: "Christopher Nolan",
        languages: ["English"],
        trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 5,
        title: "Breaking Bad",
        type: "Series",
        genre: ["Crime", "Drama", "Thriller"],
        year: 2008,
        rating: 9.5,
        duration: "5 Seasons",
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        poster: "https://images.unsplash.com/photo-1518671644416-5acbb238f28b?q=80&w=400&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1518671644416-5acbb238f28b?q=80&w=1200&auto=format&fit=crop",
        cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        director: "Vince Gilligan",
        languages: ["English"],
        trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 6,
        title: "Demon Slayer",
        type: "Anime",
        genre: ["Action", "Fantasy"],
        year: 2019,
        rating: 8.6,
        duration: "3 Seasons",
        description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
        poster: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?q=80&w=400&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?q=80&w=1200&auto=format&fit=crop",
        cast: ["Natsuki Hanae", "Akari Kito", "Hiro Shimono"],
        director: "Haruo Sotozaki",
        languages: ["Japanese", "English"],
        trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 7,
        title: "Interstellar",
        type: "Movie",
        genre: ["Sci-Fi", "Adventure", "Drama"],
        year: 2014,
        rating: 8.7,
        duration: "2h 49m",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=400&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1200&auto=format&fit=crop",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        director: "Christopher Nolan",
        languages: ["English"],
        trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 8,
        title: "The Office",
        type: "Series",
        genre: ["Comedy"],
        year: 2005,
        rating: 9.0,
        duration: "9 Seasons",
        description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
        poster: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=400&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
        cast: ["Steve Carell", "Rainn Wilson", "John Krasinski", "Jenna Fischer"],
        director: "Greg Daniels",
        languages: ["English"],
        trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 9,
        title: "Jujutsu Kaisen",
        type: "Anime",
        genre: ["Action", "Fantasy", "Horror"],
        year: 2020,
        rating: 8.6,
        duration: "2 Seasons",
        description: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
        poster: "https://images.unsplash.com/photo-1621478374422-35206faeddfb?q=80&w=400&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1621478374422-35206faeddfb?q=80&w=1200&auto=format&fit=crop",
        cast: ["Junya Enoki", "Yuma Uchida", "Asami Seto"],
        director: "Sunghoo Park",
        languages: ["Japanese", "English"],
        trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 10,
        title: "The Matrix",
        type: "Movie",
        genre: ["Action", "Sci-Fi"],
        year: 1999,
        rating: 8.7,
        duration: "2h 16m",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        director: "The Wachowskis",
        languages: ["English"],
        trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
];

// Helper to get movie by ID
function getMovieById(id) {
    return MOVIE_DATA.find(m => m.id == id) || null;
}

// Helper to get movies by type
function getMoviesByType(type) {
    return MOVIE_DATA.filter(m => m.type.toLowerCase() === type.toLowerCase());
}

// Helper to search movies
function searchMovies(query) {
    if (!query) return MOVIE_DATA;
    query = query.toLowerCase();
    return MOVIE_DATA.filter(m => 
        m.title.toLowerCase().includes(query) || 
        m.genre.some(g => g.toLowerCase().includes(query)) ||
        m.cast.some(c => c.toLowerCase().includes(query))
    );
}

// Get all genres
function getAllGenres() {
    const genres = new Set();
    MOVIE_DATA.forEach(m => {
        m.genre.forEach(g => genres.add(g));
    });
    return Array.from(genres).sort();
}
