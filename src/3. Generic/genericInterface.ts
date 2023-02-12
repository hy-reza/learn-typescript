//api product
//api user

interface Result<T> {
  data: T | null;
  error: string | null;
}

const fetchData = <T>(): Result<T> => {
  return { data: null, error: null };
};

interface Product {
  id: string;
  brand: string;
}

interface User {
  id: string;
  fullname: string;
}

const productRes = fetchData<Product>();
productRes.data?.brand;
const userRes = fetchData<User>();
userRes.data?.fullname;