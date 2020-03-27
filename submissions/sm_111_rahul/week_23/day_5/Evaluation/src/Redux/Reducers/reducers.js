/** @format */

import {
  ADD_ALBUM,
  ADD_ARTIST,
  EDIT_ALBUM,
  DELETE_ALBUM,
  FILTER_ARTIST,
  CREATE_PAGES,
  CHANGE_PAGE_NO,
  SORT_ALBUMS
} from "../actionTypes";

const initialState = {
  artists: [
    {
      artistId: 1,
      artistName: "Arijit Singh"
    },
    {
      artistId: 2,
      artistName: "Sonu Nigam"
    },
    {
      artistId: 3,
      artistName: "Udit Narayan"
    },
    {
      artistId: 4,
      artistName: "AR Rahman"
    },
    {
      artistId: 5,
      artistName: "Badshah"
    },
    {
      artistId: 6,
      artistName: "Guru Randhawa"
    },
    {
      artistId: 7,
      artistName: "Jubeen"
    },
    {
      artistId: 8,
      artistName: "Shaan"
    },
    {
      artistId: 9,
      artistName: "Kumar Sanu"
    },
    {
      artistId: 10,
      artistName: "Shreya Ghosal"
    }
  ],
  albums: [
    {
      albumId: 1,
      albumName: "Raaz",
      year: 2000,
      artistSelected: "Kumar Sanu"
    },
    {
      albumId: 2,
      albumName: "Murder",
      year: 2003,
      artistSelected: "Udit Narayan"
    },
    {
      albumId: 3,
      albumName: "Aashiqui",
      year: 2013,
      artistSelected: "Arijit Singh"
    },
    {
      albumId: 4,
      albumName: "Lahore",
      year: 2019,
      artistSelected: "Guru Randhawa"
    },
    {
      albumId: 5,
      albumName: "Made In India",
      year: 2020,
      artistSelected: "Guru Randhawa"
    },
    {
      albumId: 6,
      albumName: "Pal",
      year: 2018,
      artistSelected: "Shreya Ghosal"
    },
    {
      albumId: 7,
      albumName: "Rehnuma",
      year: 2017,
      artistSelected: "Shreya Ghosal"
    },
    {
      albumId: 8,
      albumName: "One",
      year: 2013,
      artistSelected: "Badshah"
    },
    {
      albumId: 9,
      albumName: "Genda Phool",
      year: 2020,
      artistSelected: "Badshah"
    },
    {
      albumId: 10,
      albumName: "Taal",
      year: 2003,
      artistSelected: "AR Rahman"
    },
    {
      albumId: 11,
      albumName: "Guru",
      year: 2010,
      artistSelected: "AR Rahman"
    },
    {
      albumId: 12,
      albumName: "Raavan",
      year: 2011,
      artistSelected: "AR Rahman"
    },
    {
      albumId: 13,
      albumName: "Ankhey",
      year: 2003,
      artistSelected: "Kumar Sanu"
    },
    {
      albumId: 14,
      albumName: "Pyar hai",
      year: 1995,
      artistSelected: "Kumar Sanu"
    },
    {
      albumId: 15,
      albumName: "Ishq",
      year: 2018,
      artistSelected: "Jubeen"
    },
    {
      albumId: 16,
      albumName: "Dariya",
      year: 2019,
      artistSelected: "Jubeen"
    },
    {
      albumId: 17,
      albumName: "Dil",
      year: 1998,
      artistSelected: "Kumar Sanu"
    },
    {
      albumId: 18,
      albumName: "Aashiqui 2",
      year: 2015,
      artistSelected: "Arijit Singh"
    }
  ],
  temp: [],
  length: 0,
  perPage: 5,
  page: 1,
  totalPages: 0,
  isLoaded: false
};

const albumReducer = (state = initialState, { type, payload }) => {
  let artistId = 10;
  let albumId = 18;

  switch (type) {
    // add artist
    case ADD_ARTIST:
      artistId++;
      return {
        ...state,
        artists: [...state.artists, { ...payload, artistId: artistId }]
      };

    //add album

    case ADD_ALBUM:
      albumId++;
      return {
        ...state,
        albums: [...state.albums, { ...payload, albumId: albumId }]
      };

    // create pages in pagination

    case CREATE_PAGES:
      if (state.temp.length !== 0) {
        return {
          ...state,
          length: state.temp.length,
          totalPages: state.temp.length / state.perPage,
          isLoaded: true
        };
      } else {
        return {
          ...state,
          length: state.albums.length,
          totalPages: state.albums.length / state.perPage,
          isLoaded: true
        };
      }

    case CHANGE_PAGE_NO:
      return {
        ...state,
        page: payload
      };

    // edit album

    case EDIT_ALBUM:
      let filteredAlbums = state.albums.filter(ele => {
        return ele.albumId !== payload.albumId;
      });

      let updatedAlbums = [...filteredAlbums, { ...payload }];
      updatedAlbums.sort((a, b) => {
        return a.albumId - b.albumId;
      });

      return {
        ...state,
        albums: [...updatedAlbums],
        temp: [...updatedAlbums]
      };
    // sort albums asc / dsc

    case SORT_ALBUMS:
      {
        let albumData = state.albums;
        if (payload === "asc") {
          albumData.sort((a, b) => {
            return a.year - b.year;
          });
          return {
            ...state,
            temp: [...albumData]
          };
        }
        if (payload === "dsc") {
          albumData.sort((a, b) => {
            return b.year - a.year;
          });
          return {
            ...state,
            temp: [...albumData]
          };
        }
      }
      break;
    // delete album
    case DELETE_ALBUM:
      let afterDeleteAlbums = state.albums.filter(ele => {
        return ele.albumId != payload;
      });
      return {
        ...state,
        albums: [...afterDeleteAlbums],
        temp: [...afterDeleteAlbums]
      };
    // filter artist
    case FILTER_ARTIST:
      if (payload === "all") {
        return {
          ...state,
          temp: [...state.albums]
        };
      } else {
        let filteredAlbums = state.albums.filter(ele => {
          return ele.artistSelected === payload;
        });
        return {
          ...state,
          temp: [...filteredAlbums]
        };
      }

    default:
      return state;
  }
};

export default albumReducer;
