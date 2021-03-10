import React from 'react';
import saveToken from "./saveToken";

//Функция для обновления токена


function refreshToken(token) {
    return fetch('https:/dev-sw.landpro.site/oauth/v2/token', {
        method: 'POST',

        headers: {

            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            token,
        }),
    })
        .then((res) => {
            if (res.status === 200) {
                const tokenData = res.json();
                saveToken(JSON.stringify(tokenData)); // сохраняем полученный обновленный токен в sessionStorage
                return Promise.resolve();
            }
            return Promise.reject();
        });
}

export default refreshToken;