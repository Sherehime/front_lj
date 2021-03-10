
//Функция-обертка

import React from 'react';
import saveToken from "./saveToken";
import refreshToken from "./refreshToken";

export async function fetchWithAuth(url, options) {

    const loginUrl = '/login'; // url страницы для авторизации
    let tokenData = null; // объявляем локальную переменную tokenData

    if (sessionStorage.authToken) { // если в sessionStorage присутствует tokenData, то берем её
        tokenData = JSON.parse(localStorage.tokenData);
    } else {
        return window.location.replace(loginUrl); // если токен отсутствует, то перенаправляем пользователя на страницу авторизации
    }

    if (!options.headers) { // если в запросе отсутствует headers, то задаем их
        options.headers = {};
    }

    if (tokenData) {
        if (Date.now() >= tokenData.expires_on * 1000) { // проверяем не истек ли срок жизни токена
            try {
                const newToken = await refreshToken(tokenData.refresh_token); // если истек, то обновляем токен с помощью refresh_token
                saveToken(newToken);
            } catch (error) { // если тут что-то пошло не так, то перенаправляем пользователя на страницу авторизации
                return  window.location.replace(loginUrl);
            }
        }

        options.headers.Authorization = `Bearer ${tokenData.token}`; // добавляем токен в headers запроса
    }

    return fetch(url, options); // возвращаем изначальную функцию, но уже с валидным токеном в headers
}


export default fetchWithAuth;
