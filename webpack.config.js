const path = require('path');                                           // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');               // подключаем плагин для работы с HTML
const { CleanWebpackPlugin } = require('clean-webpack-plugin');         // каждый раз при сборке проекта удалять содержимое папки dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin');        // подключаем к проекту mini-css-extract-plugin

module.exports = {
    entry: { main: './src/index.js' },                                  // указали первое место, куда заглянет webpack, — файл index.js в папке src
    output: {                                                           //точка выхода. Это итоговый файл, куда «Вебпак» сложит весь js-код
        path: path.resolve(__dirname, 'dist'),  //путь к точке выхода(!!! нельзя прописывать относительный путь!!!!)
        filename: 'main.js',                    // имя файла, куда «Вебпак» положит код
            publicPath: ''                      //войство для обновления путей внутри CSS- и HTML-файлов.
        },

      mode: 'development',                                              // добавили режим разработчика
      devServer: {
        static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true,                            // это ускорит загрузку в режиме разработки
        port: 8080,                                // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    
        open: true                                 // сайт будет открываться сам при запуске npm run dev
    },

    module: {
        rules: [ // rules — это массив правил
          // добавим в него объект правил для бабеля
          {
            // регулярное выражение, которое ищет все js файлы
            test: /\.js$/,
            // при обработке этих файлов нужно использовать babel-loader
            use: 'babel-loader',
            // исключает папку node_modules, файлы в ней обрабатывать не нужно
            exclude: '/node_modules/'
          }, // добавили правило для обработки файлов

          {
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,              // регулярное выражение, которое ищет все файлы с такими расширениями
            type: 'asset/resource'
          },

          {
            test: /\.css$/, // применять это правило только к CSS-файлам
            // при обработке этих файлов нужно использовать
            // MiniCssExtractPlugin.loader и css-loader
            use: [MiniCssExtractPlugin.loader, {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            'postcss-loader']
          },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'             // путь к файлу index.html
        }),

      new CleanWebpackPlugin(),                  //использовали плагин
      new MiniCssExtractPlugin()                 // подключение плагина для объединения файлов css
    ] 
};

