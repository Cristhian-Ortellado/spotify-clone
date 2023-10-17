import { colors } from "./colors";

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
  songsId: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Electronic Party",
    color: colors.teal,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    artists: ["Avicii", "Alok"],
    songsId: ["1", "2"],
  },
  {
    id: "2",
    title: "Trance",
    color: colors.green,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Tiesto", "Armin Van Buuren"],
    songsId: ["3", "4"],
  },
  {
    id: "3",
    title: "Trap Vibes",
    color: colors.rose,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Post Malone", "Travis Scott", "21 savage"],
    songsId: ["5", "6"],
  },
  {
    id: "4",
    title: "Beatles Classics",
    color: colors.red,
    cover: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["The Beatles"],
    songsId: ["1", "4"],
  },
  {
    id: "5",
    title: "Electronic Dance",
    color: colors.pink,
    cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Deadmau5"],
    songsId: ["7", "8"],
  },
  {
    id: "6",
    title: "Cow songs",
    color: colors.gray,
    cover: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["Saint Hilda", "Canada Buffalo"],
    songsId: ["8", "9"],
  },
];

export const morePlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];

export const sidebarPlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

export interface Song {
  id: string;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
  albumId: string;
}
const songScale = "w_40,h_40,c_scale";
export const songs: Song[] = [
  {
    id: "1",
    albumId: "1",
    title: "The Nights",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["Avicii"],
    album: "The Days / Nights",
    duration: "2:56",
  },
  {
    id: "2",
    albumId: "2",
    title: "Saint-Tropez",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["Post Malone"],
    album: "Hollywood's Bleeding",
    duration: "2:23",
  },
  {
    id: "3",
    albumId: "3",
    title: "SICKO MODE",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["Travis Scott", "Drake"],
    album: "ASTROWORLD",
    duration: "5:13",
  },
  {
    id: "4",
    albumId: "4",
    title: "Blinding Lights",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["The Weeknd"],
    album: "After Hours",
    duration: "3:22",
  },
  {
    id: "5",
    albumId: "5",
    title: "Shape of You",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["Ed Sheeran"],
    album: "÷ (Divide)",
    duration: "3:53",
  },
  {
    id: "6",
    albumId: "6",
    title: "Uptown Funk",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Mark Ronson", "Bruno Mars"],
    album: "Uptown Special",
    duration: "4:30",
  },
  {
    id: "7",
    title: "Bad Guy",
    albumId: "7",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Billie Eilish"],
    album: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14",
  },
  {
    id: "8",
    title: "Yesterday",
    albumId: "8",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["The Beatles"],
    album: "Today & Tomorrow",
    duration: "4:38",
  },
  {
    id: "9",
    albumId: "9",
    title: "Havana",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Camila Cabello", "Young Thug"],
    album: "Camila",
    duration: "3:37",
  },
  {
    id: "10",
    albumId: "10",
    title: "Radioactive",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Imagine Dragons"],
    album: "Night Visions",
    duration: "3:07",
  },
];
