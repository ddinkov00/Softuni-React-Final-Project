export const AddProduct = async (data) => {
  const url = 'https://localhost:44320/api/Product'

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });

  return response;
}

export const GetForList = async (id) => {
  const url = `https://localhost:44320/api/Product?categoryId=${id}`;

  return fetch(url)
    .then(res => res.json())
    .catch(err => err.json());
}

export const GetById = (id) => {
  const url = `https://localhost:44320/api/Product/getById?id=${id}`;

  return fetch(url)
    .then(res => res.json())
    .catch(err => err.json());
}

export const Search = (keyword) => {
  const url = `https://localhost:44320/api/Product/search?keyword=${keyword}`;

  return fetch(url)
    .then(res => res.json())
    .catch(err => err.json());
}