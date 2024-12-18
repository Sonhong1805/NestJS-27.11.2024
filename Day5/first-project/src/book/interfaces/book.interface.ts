interface Book {
  id: number;
  title: string;
  author: {
    firstName: string;
    lastName: string;
  };
  description: string;
  publishedYear: number;
  createdAt: Date;
  updatedAt: Date;
}
