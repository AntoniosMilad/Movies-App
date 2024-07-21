export interface Genre {
    id: number;
    name: string;
  }
  
  export interface Movie {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
    genres: Genre[];
    runtime: number;
    release_date: string;
  }
  
  export interface MovieDetailsProps {
    route: {
      params: {
        movieId: number;
      };
    };
  }