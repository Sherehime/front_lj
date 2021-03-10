import React from 'react';


//Функция для сохранения токена в sessionStorage:

    function saveToken(access_token) {
     //s   sessionStorage.setItem('tokenData', JSON.stringify(access_token));
        localStorage.setItem('tokenData', JSON.stringify(access_token));
    }

export default saveToken;