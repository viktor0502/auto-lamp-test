import axios from "axios";
function form() {
  const TOKEN = "5618930006:AAHbNJxdRySHUDdMQ4crKqvLFEsdaGgQY7w";
  const CHAT_ID = "-1001873610985";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let message = `<b> Заявка с сайта Mitsumoro</b> \n `;
    message += `<b> Отправитель: </b> ${this.name.value} \n `;
    message += `<b> Телефон: </b> ${this.phone.value}`;

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        this.name.value = "";
        this.phone.value = "";
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        console.log("Done");
      });
  });
}

export default form;
