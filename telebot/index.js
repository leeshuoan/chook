const axios = require('axios')
const db = require('./connection');
const amqplib = require('amqplib');
const {
  Telegraf,
  Markup
} = require('telegraf');

const AMQP_URL = process.env.AMQP_URL || 'amqp://guest:guest@rabbitmq:5672';
const bot_id = process.env.BOT_ID || '1';
const shop_name = process.env.shop_name || "Jason's Hair Studio";
const telegraf_id = process.env.telegraf_id || 'redacted';


const bot = new Telegraf(telegraf_id);
bot.use(Telegraf.log())
console.log('Starting bot...');

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}


// Listens to AMQP url and consumes messages from queue 'tele'
async function do_consume() {
  try {
    var conn = await amqplib.connect(AMQP_URL, "heartbeat=3600");
  } catch {
    process.exit(1);
  }
  var ch = await conn.createChannel()
  var q = 'tele';
  await conn.createChannel();
  await ch.assertQueue(q, {
    durable: true
  });
  await ch.consume(q, function (msg) {
    console.log(msg.content.toString());
    ch.ack(msg);
    send_notification();
  });
}



// Sends notification to users
async function send_notification() {
  try {
    await db.query(`select * from telegram_bot where bot_id= ${bot_id}`, function (err, rows) {
      var chat_ids = JSON.parse(rows[0]['chat.id'])['chat_ids'].split(',');
      chat_ids = chat_ids.filter(function (value) {
        return value != '';
      })
      console.log(chat_ids);
      for (var i = 0; i < chat_ids.length; i++) {
        bot.telegram.sendMessage(chat_ids[i], ('Hi! ' + shop_name + ' is available \n\nCome down now for your haircut!'));
      }
    });
  } catch (err) {
    console.log(err);
  }
}

// Starts the bot
bot.command('start', ctx => {
  write_to_logs(ctx.from, '/start', ctx.chat.id)
  let welcomeMessage = `Hi <b>${ctx.from.first_name}!</b> \n\nI'm a bot that can help you with queues and bookings at <b>${shop_name}</b> \n\nTo get started, You can select one of the following options:`;
  return ctx.replyWithHTML(welcomeMessage,
    Markup.inlineKeyboard([
      [Markup.button.callback('Check Queue', 'checkqueue')],
      // [Markup.button.callback('FAQs', 'uselessfunc')],
      [Markup.button.url('Book an Appointment', 'http://127.0.0.1:3000')],
    ])
  )
})

// Checkqueue action, returns a message with the number of people in the queue and prompts user to join queue
bot.action('checkqueue', ctx => {
  axios.get('http://queue:5002/queue/1', {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    })
    .then(response => {
      console.log(response.data);
      // console.log("TEST")
      let queueCnt = response.data.data.length
      let queueMessage = `There is 1 person in the queue`
      if (queueCnt != 1) {
        queueMessage = `There are ${queueCnt} people in the queue`
      }

      return ctx.reply(queueMessage + '\n\nWould you like to join the queue?',
        Markup.inlineKeyboard([
          Markup.button.callback('Yes', 'joinqueue'),
          Markup.button.callback('No', 'nope')
        ])
      )
    })
    .catch(error => {
      console.log(error)
    });
})

// Joinqueue action, adds user to the queue 
bot.action('joinqueue', ctx => {
  ctx.deleteMessage()
  // prompt for phone number if not registered
  ctx.reply("Please provide your contact number to join the queue", {
    reply_markup: {
      keyboard: [
        [{
          text: "Send phone number",
          request_contact: true,
        }, ],
      ],
      one_time_keyboard: true,
    },
  })
  bot.on("contact", (msg) => {
    console.log(msg.update.message.contact.phone_number.slice(3))
    axios.post('http://queue_management:5101/queue', {
        shop_id: 1,
        phone_number: msg.update.message.contact.phone_number.slice(3)
      }, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
      }).then(response => {
        console.log(response);
        if (response.data.success) {
          let queue_number = response.data.queue_number
          return ctx.reply(`You have joined the queue! \n\nYour queue number is ${queue_number} \n\nYou will receive a text message via sms when your turn comes up`)
        } else {
          return ctx.reply('You have already joined the queue')
        }
      })
      .catch(error => {
        return ctx.reply(`An unexpected error occurred`);
      })

  })
})
bot.action('nope', ctx => {
  ctx.deleteMessage()
  return ctx.reply('Ok, no problem!')
})

bot.action('uselessfunc', ctx => {
  return ctx.reply(`Don't know what to put here yet`)
})

// Logs chat_ids into db
async function write_to_logs(name, text, chat_id) {
  try {
    await db.query(`select * from telegram_bot where bot_id= ${bot_id}`, function (err, rows) {
      var chat_ids = JSON.parse(rows[0]['chat.id'])['chat_ids'].split(',');
      chat_ids = removeItemOnce(chat_ids, '');
      console.log(chat_ids);
      chat_id = chat_id.toString()
      if (!chat_ids.includes(chat_id)) {
        chat_ids.push(chat_id)
        chat_ids = chat_ids.join(',')
      }

      db.query(`update telegram_bot set \`chat.id\` = JSON_OBJECT("chat_ids", '${chat_ids}') where bot_id = ${bot_id}`, function (err, rows) {});

    });
  } catch (err) {
    console.log(err);
  }
}

do_consume().then(console.log('Consuming'));
bot.launch().then(console.log('Bot started'));

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))