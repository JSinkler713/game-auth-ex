const REACT_APP_API_URL = "http://localhost:3001/api/v1"

export default class UserModel {
  static create(data) {
    // TODO: complete this function
    return fetch(`${REACT_APP_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  
  static login(credentials) {
    // TODO: complete this function
    // Remember to add authorization headers
  }

  static logout() {
    // TODO: complete this function
    // Remember to add authorization headers
  }
}