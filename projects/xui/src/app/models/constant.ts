export const languagesList = [
  { value: 'en', label: 'English' },
  { value: 'telugu', label: 'Telugu' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'kannada', label: 'Kannada' },
];

export interface netaAirTable {
  date: string;
  longdescription: string;
  shortdescription: string;
  state: string;
  party: string;
  netaname: string;
  image: any;
  airId: string;
  netaid: string;
}
