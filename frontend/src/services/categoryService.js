export const getForNavigation = () => {
    const url = 'https://localhost:44320/api/category';

    return fetch(url)
        .then(res => res.json())
        .catch(err => err.json());
}

export const GetAll = () => {
    const url = 'https://localhost:44320/api/categories';

    return fetch(url)
        .then(res => res.json())
        .catch(err => err.json());
}