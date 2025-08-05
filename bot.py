import logging
from aiogram import Bot, Dispatcher, types
from aiogram.types import WebAppInfo
from aiogram.utils import executor

# ⚠️ Используй токен только локально. ОБЯЗАТЕЛЬНО поменяй его позже через BotFather
API_TOKEN = '7926988231:AAGlqZNcBm-q3hd5KHBdHMOn-H5_-xwet5w'

# Настройка логирования
logging.basicConfig(level=logging.INFO)

bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def send_welcome(message: types.Message):
    keyboard = types.InlineKeyboardMarkup()
    web_app = WebAppInfo(url='https://zalupa-8ki2.onrender.com')  # адрес твоей игры
    keyboard.add(types.InlineKeyboardButton(text="🪳 Играть в Тараканов", web_app=web_app))
    await message.answer("👋 Привет! Готов раздавить тараканов?", reply_markup=keyboard)

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)
