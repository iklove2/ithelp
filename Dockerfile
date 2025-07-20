# Используем официальный образ Nginx
FROM nginx:alpine

# Копируем файлы сайта в контейнер
COPY . /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]