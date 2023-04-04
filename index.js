function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}

const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
function writeCards(names, event) {
  const birthdayMessage = [];

  for (let i = 0; i < names.length; i++) {
    birthdayMessage.push(
      `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    );
  }
  return birthdayMessage;
}

function Cards(names) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}!`);
  }
  return messages;
}
