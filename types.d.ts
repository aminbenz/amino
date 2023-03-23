type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: string;
  name: string;
  fname: string;
  lname: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
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
