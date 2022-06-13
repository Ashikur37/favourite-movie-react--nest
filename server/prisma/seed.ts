import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const movieData: Prisma.MovieCreateInput[] = [
  {
    title: 'Beetlejuice',
    year: 1988,
    rating: 5.49,
    category: 'Comedy',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
  },
  {
    title: 'The Cotton Club',
    year: 1984,
    rating: 2.55,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg',
  },
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    rating: 3.25,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
  },
  {
    title: 'Crocodile Dundee',
    year: 1986,
    rating: 3.52,
    category: 'Adventure',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg',
  },
  {
    title: 'Valkyrie',
    year: 2008,
    rating: 5.24,
    category: 'Drama',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg',
  },
  {
    title: 'Ratatouille',
    year: 2007,
    rating: 2.42,
    category: 'Animation',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg',
  },
  {
    title: 'City of God',
    year: 2002,
    rating: 1.24,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg',
  },
  {
    title: 'Memento',
    year: 2000,
    rating: 5.03,
    category: 'Mystery',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNThiYjM3MzktMDg3Yy00ZWQ3LTk3YWEtN2M0YmNmNWEwYTE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    title: 'The Intouchables',
    year: 2011,
    rating: 2.92,
    category: 'Biography',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg',
  },
  {
    title: 'Stardust',
    year: 2007,
    rating: 5.46,
    category: 'Adventure',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg',
  },
  {
    title: 'Apocalypto',
    year: 2006,
    rating: 1.78,
    category: 'Action',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg',
  },
  {
    title: 'Taxi Driver',
    year: 1976,
    rating: 2.57,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    title: 'No Country for Old Men',
    year: 2007,
    rating: 1.47,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg',
  },
  {
    title: 'Planet 51',
    year: 2009,
    rating: 4.05,
    category: 'Animation',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTUyOTAyNTA5Ml5BMl5BanBnXkFtZTcwODU2OTM0Mg@@._V1_SX300.jpg',
  },
  {
    title: 'Looper',
    year: 2012,
    rating: 2.79,
    category: 'Action',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTY3NTY0MjEwNV5BMl5BanBnXkFtZTcwNTE3NDA1OA@@._V1_SX300.jpg',
  },
  {
    title: 'Corpse Bride',
    year: 2005,
    rating: 5.16,
    category: 'Animation',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_SX300.jpg',
  },
  {
    title: 'The Third Man',
    year: 1949,
    rating: 2.54,
    category: 'Film-Noir',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg',
  },
  {
    title: 'The Beach',
    year: 2000,
    rating: 2.39,
    category: 'Adventure',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    title: 'Scarface',
    year: 1983,
    rating: 4.1,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg',
  },
  {
    title: 'Sid and Nancy',
    year: 1986,
    rating: 1.52,
    category: 'Biography',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjA5NzY4M15BMl5BanBnXkFtZTcwNjQ2NzI5NA@@._V1_SX300.jpg',
  },
  {
    title: 'Black Swan',
    year: 2010,
    rating: 4.32,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg',
  },
  {
    title: 'Inception',
    year: 2010,
    rating: 3.05,
    category: 'Action',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    title: 'The Deer Hunter',
    year: 1978,
    rating: 1.09,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzYmRmZTQtYjk2NS00MDdlLTkxMDAtMTE2YTM2ZmNlMTBkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    title: 'Chasing Amy',
    year: 1997,
    rating: 2.41,
    category: 'Comedy',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZDM3MTg2MGUtZDM0MC00NzMwLWE5NjItOWFjNjA2M2I4YzgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    title: 'Django Unchained',
    year: 2012,
    rating: 4.2,
    category: 'Drama',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg',
  },
  {
    title: 'The Silence of the Lambs',
    year: 1991,
    rating: 1.66,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg',
  },
  {
    title: 'American Beauty',
    year: 1999,
    rating: 5.91,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM4NTI5NzYyNV5BMl5BanBnXkFtZTgwNTkxNTYxMTE@._V1_SX300.jpg',
  },
  {
    title: 'Snatch',
    year: 2000,
    rating: 2.69,
    category: 'Comedy',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    title: 'Midnight Express',
    year: 1978,
    rating: 2.37,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg',
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    rating: 3.71,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg',
  },
  {
    title: 'Lock, Stock and Two Smoking Barrels',
    year: 1998,
    rating: 2.41,
    category: 'Comedy',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    title: 'Lucky Number Slevin',
    year: 2006,
    rating: 1.03,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMzc1OTEwMTk4OF5BMl5BanBnXkFtZTcwMTEzMDQzMQ@@._V1_SX300.jpg',
  },
  {
    title: 'Rear Window',
    year: 1954,
    rating: 3.78,
    category: 'Mystery',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    title: "Pan's Labyrinth",
    year: 2006,
    rating: 4.28,
    category: 'Drama',
    posterUrl: '',
  },
  {
    title: 'Shutter Island',
    year: 2010,
    rating: 5.9,
    category: 'Mystery',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg',
  },
  {
    title: 'Reservoir Dogs',
    year: 1992,
    rating: 1.38,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5ZDJiZTQtOGE2YS00ZTc5LTk0OGUtOTg2NjdjZmVlYzE2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg',
  },
  {
    title: 'The Shining',
    year: 1980,
    rating: 1.61,
    category: 'Drama',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BODMxMjE3NTA4Ml5BMl5BanBnXkFtZTgwNDc0NTIxMDE@._V1_SX300.jpg',
  },
  {
    title: 'Midnight in Paris',
    year: 2011,
    rating: 4.28,
    category: 'Comedy',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_SX300.jpg',
  },
  {
    title: 'Les Misérables',
    year: 2012,
    rating: 3.21,
    category: 'Drama',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_SX300.jpg',
  },
  {
    title: 'L.A. Confidential',
    year: 1997,
    rating: 1.95,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNWEwNDhhNWUtYWMzNi00ZTNhLWFiZDAtMjBjZmJhMTU0ZTY2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    title: 'Moneyball',
    year: 2011,
    rating: 1.84,
    category: 'Biography',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg',
  },
  {
    title: 'The Hangover',
    year: 2009,
    rating: 3.54,
    category: 'Comedy',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_SX300.jpg',
  },
  {
    title: 'The Great Beauty',
    year: 2013,
    rating: 4.15,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODg1OTQ2Nl5BMl5BanBnXkFtZTgwNTc2MDY1MDE@._V1_SX300.jpg',
  },
  {
    title: 'Gran Torino',
    year: 2008,
    rating: 5.56,
    category: 'Drama',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTQyMTczMTAxMl5BMl5BanBnXkFtZTcwOTc1ODE0Mg@@._V1_SX300.jpg',
  },
  {
    title: 'Mary and Max',
    year: 2009,
    rating: 4.02,
    category: 'Animation',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1NDIyNTA1Nl5BMl5BanBnXkFtZTcwMjc2Njk3OA@@._V1_SX300.jpg',
  },
  {
    title: 'Flight',
    year: 2012,
    rating: 1.97,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjI1OTMxNl5BMl5BanBnXkFtZTcwNjc3NTY1OA@@._V1_SX300.jpg',
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    year: 1975,
    rating: 4.67,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYmJkODkwOTItZThjZC00MTE0LWIxNzQtYTM3MmQwMGI1OWFiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
  },
  {
    title: 'Requiem for a Dream',
    year: 2000,
    rating: 1.28,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg',
  },
  {
    title: 'The Truman Show',
    year: 1998,
    rating: 1.3,
    category: 'Comedy',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    title: 'The Artist',
    year: 2011,
    rating: 4.41,
    category: 'Comedy',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMzk0NzQxMTM0OV5BMl5BanBnXkFtZTcwMzU4MDYyNQ@@._V1_SX300.jpg',
  },
  {
    title: 'Forrest Gump',
    year: 1994,
    rating: 5.06,
    category: 'Comedy',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYThjM2MwZGMtMzg3Ny00NGRkLWE4M2EtYTBiNWMzOTY0YTI4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
  },
  {
    title: 'The Hobbit: The Desolation of Smaug',
    year: 2013,
    rating: 5.65,
    category: 'Adventure',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg',
  },
  {
    title: 'Vicky Cristina Barcelona',
    year: 2008,
    rating: 4.37,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NDQ4MTg2MV5BMl5BanBnXkFtZTcwNDUzNjU3MQ@@._V1_SX300.jpg',
  },
  {
    title: 'Slumdog Millionaire',
    year: 2008,
    rating: 1.54,
    category: 'Drama',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTU2NTA5NzI0N15BMl5BanBnXkFtZTcwMjUxMjYxMg@@._V1_SX300.jpg',
  },
  {
    title: 'Lost in Translation',
    year: 2003,
    rating: 3.65,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2NDI5ODk4N15BMl5BanBnXkFtZTYwMTI3NTE3._V1_SX300.jpg',
  },
  {
    title: 'Match Point',
    year: 2005,
    rating: 2.59,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzNzY4MzE5NF5BMl5BanBnXkFtZTcwMzQ1MDMzMQ@@._V1_SX300.jpg',
  },
  {
    title: 'Psycho',
    year: 1960,
    rating: 1.38,
    category: 'Horror',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMDI3OWRmOTEtOWJhYi00N2JkLTgwNGItMjdkN2U0NjFiZTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    title: 'North by Northwest',
    year: 1959,
    rating: 1.36,
    category: 'Action',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMjQwMTQ0MzgwNl5BMl5BanBnXkFtZTgwNjc4ODE4MzE@._V1_SX300.jpg',
  },
  {
    title: 'Madagascar: Escape 2 Africa',
    year: 2008,
    rating: 1.45,
    category: 'Animation',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMDA4NDcwMl5BMl5BanBnXkFtZTcwODAxNTQ3MQ@@._V1_SX300.jpg',
  },
  {
    title: 'Despicable Me 2',
    year: 2013,
    rating: 5.08,
    category: 'Animation',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_SX300.jpg',
  },
  {
    title: 'Downfall',
    year: 2004,
    rating: 3.52,
    category: 'Biography',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1OTI1MjE2Nl5BMl5BanBnXkFtZTcwMTEwMzc4NA@@._V1_SX300.jpg',
  },
  {
    title: 'Madagascar',
    year: 2005,
    rating: 2.79,
    category: 'Animation',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NDUwMzQxMF5BMl5BanBnXkFtZTcwMDgwNjgyMQ@@._V1_SX300.jpg',
  },
  {
    title: "Madagascar 3: Europe's Most Wanted",
    year: 2012,
    rating: 2.99,
    category: 'Animation',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTIzNzk2MF5BMl5BanBnXkFtZTcwMDcwMzQxNw@@._V1_SX300.jpg',
  },
  {
    title: 'God Bless America',
    year: 2011,
    rating: 2.78,
    category: 'Comedy',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMTc1MzA4NF5BMl5BanBnXkFtZTcwNzQwMTgzNw@@._V1_SX300.jpg',
  },
  {
    title: 'The Social Network',
    year: 2010,
    rating: 1.73,
    category: 'Biography',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2ODk0NDAwMF5BMl5BanBnXkFtZTcwNTM1MDc2Mw@@._V1_SX300.jpg',
  },
  {
    title: 'The Pianist',
    year: 2002,
    rating: 1.99,
    category: 'Biography',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTc4OTkyOTA3OF5BMl5BanBnXkFtZTYwMDIxNjk5._V1_SX300.jpg',
  },
  {
    title: 'Alive',
    year: 1993,
    rating: 4.19,
    category: 'Adventure',
    posterUrl: '',
  },
  {
    title: 'Casablanca',
    year: 1942,
    rating: 5.62,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwNDYyNTk2N15BMl5BanBnXkFtZTgwMjQ0OTMyMjE@._V1_SX300.jpg',
  },
  {
    title: 'American Gangster',
    year: 2007,
    rating: 1.31,
    category: 'Biography',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNzY5MDA5MV5BMl5BanBnXkFtZTcwMjg4MzI3MQ@@._V1_SX300.jpg',
  },
  {
    title: 'Catch Me If You Can',
    year: 2002,
    rating: 4.1,
    category: 'Biography',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg',
  },
  {
    title: 'American History X',
    year: 1998,
    rating: 3.02,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
  },
  {
    title: 'Casino',
    year: 1995,
    rating: 3.6,
    category: 'Biography',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
  },
  {
    title: "Pirates of the Caribbean: At World's End",
    year: 2007,
    rating: 5.31,
    category: 'Action',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg',
  },
  {
    title: 'Pirates of the Caribbean: On Stranger Tides',
    year: 2011,
    rating: 3.52,
    category: 'Action',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg',
  },
  {
    title: 'Crash',
    year: 2004,
    rating: 3.36,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTk1OTA1MjIyNV5BMl5BanBnXkFtZTcwODQxMTkyMQ@@._V1_SX300.jpg',
  },
  {
    title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    year: 2003,
    rating: 3.7,
    category: 'Action',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyNDM4MTc2N15BMl5BanBnXkFtZTYwNDk0Mjc3._V1_SX300.jpg',
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    rating: 3.95,
    category: 'Action',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4MjA1NTAyMV5BMl5BanBnXkFtZTcwNzM1NDQyMQ@@._V1_SX300.jpg',
  },
  {
    title: 'Oldboy',
    year: 2003,
    rating: 5.71,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg',
  },
  {
    title: 'Chocolat',
    year: 2000,
    rating: 5.09,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MDI3NTQwMV5BMl5BanBnXkFtZTcwNjIzNDcyMQ@@._V1_SX300.jpg',
  },
  {
    title: 'Casino Royale',
    year: 2006,
    rating: 5.11,
    category: 'Action',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5MjI4NDExNF5BMl5BanBnXkFtZTcwMDM1MjMzMQ@@._V1_SX300.jpg',
  },
  {
    title: 'WALL·E',
    year: 2008,
    rating: 5.78,
    category: 'Animation',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTczOTA3MzY2N15BMl5BanBnXkFtZTcwOTYwNjE2MQ@@._V1_SX300.jpg',
  },
  {
    title: 'The Wolf of Wall Street',
    year: 2013,
    rating: 2.41,
    category: 'Biography',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
  },
  {
    title: 'Hellboy II: The Golden Army',
    year: 2008,
    rating: 4.5,
    category: 'Action',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NzgyMjc2Nl5BMl5BanBnXkFtZTcwOTU3MDI3MQ@@._V1_SX300.jpg',
  },
  {
    title: 'Sunset Boulevard',
    year: 1950,
    rating: 3.75,
    category: 'Drama',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTc3NDYzODAwNV5BMl5BanBnXkFtZTgwODg1MTczMTE@._V1_SX300.jpg',
  },
  {
    title: 'I-See-You.Com',
    year: 2006,
    rating: 1.8,
    category: 'Comedy',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMDUzNzA5Nl5BMl5BanBnXkFtZTcwMjQ2Njk3MQ@@._V1_SX300.jpg',
  },
  {
    title: 'The Grand Budapest Hotel',
    year: 2014,
    rating: 1.36,
    category: 'Adventure',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg',
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    year: 2005,
    rating: 4.09,
    category: 'Adventure',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMjEwOTk4NjU2MF5BMl5BanBnXkFtZTYwMDA3NzI3._V1_SX300.jpg',
  },
  {
    title: 'Once Upon a Time in America',
    year: 1984,
    rating: 3.73,
    category: 'Crime',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    title: 'Oblivion',
    year: 2013,
    rating: 2.22,
    category: 'Action',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDY0MTA4MF5BMl5BanBnXkFtZTcwNzI3MDgxOQ@@._V1_SX300.jpg',
  },
  {
    title: 'V for Vendetta',
    year: 2005,
    rating: 1.22,
    category: 'Action',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg',
  },
  {
    title: 'Gattaca',
    year: 1997,
    rating: 5.79,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNDQxOTc0MzMtZmRlOS00OWQ5LWI2ZDctOTAwNmMwOTYxYzlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    title: 'Silver Linings Playbook',
    year: 2012,
    rating: 1.85,
    category: 'Comedy',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_SX300.jpg',
  },
  {
    title: 'Alice in Wonderland',
    year: 2010,
    rating: 2.33,
    category: 'Adventure',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_SX300.jpg',
  },
  {
    title: 'Gandhi',
    year: 1982,
    rating: 3.83,
    category: 'Biography',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMzJiZDRmOWUtYjE2MS00Mjc1LTg1ZDYtNTQxYWJkZTg1OTM4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
  },
  {
    title: 'Pacific Rim',
    year: 2013,
    rating: 1.53,
    category: 'Action',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_SX300.jpg',
  },
  {
    title: 'Kiss Kiss Bang Bang',
    year: 2005,
    rating: 2.53,
    category: 'Comedy',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMTY5NDExMDA3M15BMl5BanBnXkFtZTYwNTc2MzA3._V1_SX300.jpg',
  },
  {
    title: 'The Quiet American',
    year: 2002,
    rating: 4.41,
    category: 'Drama',
    posterUrl:
      'http://ia.media-imdb.com/images/M/MV5BMjE2NTUxNTE3Nl5BMl5BanBnXkFtZTYwNTczMTg5._V1_SX300.jpg',
  },
  {
    title: 'Cloud Atlas',
    year: 2012,
    rating: 3.27,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg',
  },
  {
    title: 'The Impossible',
    year: 2012,
    rating: 4.27,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NTA3NzQ5Nl5BMl5BanBnXkFtZTcwOTYxNjY0OA@@._V1_SX300.jpg',
  },
  {
    title: 'All Quiet on the Western Front',
    year: 1930,
    rating: 1.23,
    category: 'Drama',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTM5OTg2NDY1NF5BMl5BanBnXkFtZTcwNTQ4MTMwNw@@._V1_SX300.jpg',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const data of movieData) {
    const user = await prisma.movie.create({
      data,
    });
    console.log(`Created movie with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
