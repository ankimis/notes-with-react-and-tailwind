
// import axios from "axios";
import { Client, Account } from "appwrite";

import React from 'react'
// const axios = require('axios');

function App() {
// const axios = require('axios');
const encodedParams = new URLSearchParams();
encodedParams.set('from', 'auto');
encodedParams.set('to', 'en');
encodedParams.set('text', 'xin chào');

const client = new Client();

const account = new Account(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('65c6e5475ad67b4744d2') // Your project ID
;

const promise = account.get();

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

// const options = {
//   method: 'GET',
//   url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages',
//   headers: {
//     'X-RapidAPI-Key': '1365c450-976d-11ee-a759-f59529c75302',
//     'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
//   }
// };

// try {
// 	useEffect(() => {
//     const response =   axios.request(options);
// 	    console.log(response);
//     return () => {
      
//     };
//   }, []);
// } catch (error) {
// 	console.error(error);
// }

  return (
    <div className="App">
      cd tr
    </div>
  );
}

export default App;
 
