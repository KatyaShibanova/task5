export class TestService {
    constructor() {
      this.base_url ="http://localhost:3000/controller.php?";
    }
  
    get(url) {
      return fetch(url).then(response => {
        if (response.ok) {
          // если HTTP-статус в диапазоне 200-299
          // получаем тело ответа (см. про этот метод ниже)
          return response.json();
        } else {
          console.error("Ошибка HTTP: " + response.status);
        }
      });
    }
  
    post(url, data) {
      return fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data)
        }).then(response => {
          if (response.ok) {
            // если HTTP-статус в диапазоне 200-299
            // получаем тело ответа (см. про этот метод ниже)
            return response.json();
          } else {
            console.error("Ошибка HTTP: " + response.status);
          }
        });
    }
  
    Enter(login,password) {
      const url = `${this.base_url}key=enter&login=${login}&password=${password}`;
      return this.get(url);
    }
    GetQuestions() {
      const url = `${this.base_url}key=get-questions`;
      return this.get(url);
    }
    SaveAnswers(answer, id) {
      const url = `${this.base_url}key=save-answers&userId=${id}`;
      return this.post(url, answer);
    }
  }
  
  export default TestService;