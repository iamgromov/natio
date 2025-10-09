interface CountryInfoItem {
  title: string;
  description: string;
}

export interface CountryInfo {
  img: string;
  name: string;
  info: CountryInfoItem[];
}