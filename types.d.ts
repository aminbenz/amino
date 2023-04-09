type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: string;
  email: string;
  name: string;
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  avatar: string;
  birthdate: string;
  position: string;
  ip: string;
  bio: string;
  locale: string;
  verified_email: boolean;
  locale: string;
  gender: MALE | FEMALE;
  address?: {
    street: string;
    suite: string;
    city: string;
    zip: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website?: string;
  company?: {
    name: string;
    bs: string;
  };
};

type Result = {
  page_id: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

type SearchResult = {
  query?: {
    pages?: Result[];
  };
};
