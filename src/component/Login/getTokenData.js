import React from 'react';
import saveToken from "./saveToken";

//Функция для получения токена

    function getTokenData(login, password) {
        return fetch('/oauth/v2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
              grant_type:password,

                login,
                password,
            }),
        })
            .then((res) => {
                if (res.status === 200) {
                    const tokenData = res.json();
                    saveToken(JSON.stringify(tokenData)); // в localStorage
                    return Promise.resolve()
                }
                return Promise.reject();
            });
    }

export default getTokenData;