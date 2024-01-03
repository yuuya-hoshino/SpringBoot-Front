FROM node:21.5.0 AS base

# ポートの解放
EXPOSE 5173

# リポジトリのアップデート
RUN apt update && apt upgrade -y

# npmのアップデート
RUN npm install -g npm

FROM base AS dev

# 作業ディレクトリの設定
WORKDIR /var/www/app