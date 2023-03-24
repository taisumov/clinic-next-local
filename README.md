# Clinic

[![Netlify Status](https://api.netlify.com/api/v1/badges/4feac50b-6de4-4d62-b143-0159469c9d83/deploy-status)](https://app.netlify.com/sites/clinic-next/deploys)

# Начало работы

1. Клонирование репозитория
   1.1. Нажать на кнопку Clone в репозитории и выбрать желаемый вариант клонирования. Затем скопировать ссылку.
   1.2. Открыть командную строку и перейти в ней в нужный каталог, куда будет производиться клонирование.
   1.3. Выполнить команду для клонирования, где url - скопированная ранее ссылка
   ```
   git clone url
   ```
2. Открыть склонированную папку и обновить все зависимости при помощи команды

```
npm i
```

3. Поправить название и автора в package.json

## Структура папок

- pages - контейнеры для основных страниц сайта
- scripts - медиа-контент для сайта
- src
  - components
    - base - минимальные (атомарные) компоненты
    - forms - компоненты для формы отправка запроса
    - layout - обертка приложения (включая заголовок сайта)
    - pages - код компонентов основных страниц
    - shared - прочие большие компоненты
  - context - контекст (данные, которые могут использоватьсяв любой части приложения)
  - lib
    - api - логика получения данных с панели администратора
  - styles - стили
  - types - типы некоторых сущностей

## Переменные окружения

```

NEXT_PUBLIC_API_URL // IP-адрес, на котором размещен исходный код приложения
API_HOST // IP-адрес серверной части, по умолчанию 127.0.0.1, если обе части приложения находятся на одном сервере

```

# Развертывание приложений

## pm2

Следующей командой установим pm2:

```bash
npm install pm2 -g
```

В корневой папке должны находиться следующие файлы:

- app - папка с исходным кодом;
- ecosystem.config.js - файл для конфигурации `pm2`;
- ecosystem.config.exp.js - дополнительный файл для конфигурации `pm2`;
- strapiloader.js - файл для инициализации панели администратора.

**ecosystem.config.js**:

```js
module.exports = {
	apps: [
		{
			name: 'next',
			cwd: '/home/ubuntu/app/clinic-next-local/',
			script: 'pnpm',
			args: 'start',
			env: {
				NODE_ENV: 'production',
			},
		},
		{
			name: 'strapi',
			cwd: '/home/ubuntu/app/clinic-strapi',
			script: 'yarn',
			args: 'develop',
		},
	],
};
```

**ecosystem.config.exp.js**:

```js
module.exports = {
	apps: [
		{
			script: 'index.js',
			watch: '.',
		},
		{
			script: './service-worker/',
			watch: ['./service-worker'],
		},
	],

	deploy: {
		production: {
			user: 'SSH_USERNAME',
			host: 'SSH_HOSTMACHINE',
			ref: 'origin/master',
			repo: 'GIT_REPOSITORY',
			path: 'DESTINATION_PATH',
			'pre-deploy-local': '',
			'post-deploy':
				'npm install && pm2 reload ecosystem.config.js --env production',
			'pre-setup': '',
		},
	},
};
```

**ecosystem.config.exp.js**:

```js
const strapi = require('@strapi/strapi');
strapi().start();
```

### Команды pm2:

- Запуск pm2:

```bash
pm2 start ecosystem.config.js
```

- Остановка процесса pm2:

```bash
pm2 stop {{ Название процесса }}
```

- Мониторинг работы pm2:

```bash
pm2 monit
```

- Для перезапуска можно использовать следующую последовательность команд:

```bash
pm2 updatePM2
pm2 start ecosystem.config.js
pm2 save
```

## Next

Для того, чтобы клонировать репозиторий, в папке `app` следует ввести команду:

```bash
git clone https://github.com/taisumov/clinic-next-local.git
```

В дальнейшем для подгрузки обновлений (если возникнет такая необходимость), следует прописать `git pull`

Также при изменениях в папке приложения стоит прописывать следующее:`npm build`

В итоге получим следующий workflow обновления проекта:

```bash
  cd ~
  cd app/clinic-next
  git pull
  npm build
  cd ~
  pm2 start ecosystem.config.js
```
