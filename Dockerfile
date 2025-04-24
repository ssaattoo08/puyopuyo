FROM node:20-slim

WORKDIR /app

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

# 開発に必要なnpmパッケージをインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"] 