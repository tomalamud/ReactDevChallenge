export function requestGetUser(data) {
  const url = 'https://admindev.inceptia.ai/api/v1/login/';
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
