# WeatherForecast App

O WeatherForecast é um aplicativo simples construído com Next.js que fornece informações meteorológicas em tempo real para cidades em todo o mundo. Com ele, você pode verificar a temperatura, umidade, pressão, velocidade do vento e descrição do clima para qualquer cidade que desejar.

## Funcionalidades

- Busca de cidade: Digite o nome da cidade desejada e obtenha informações meteorológicas atualizadas.
- Exibição detalhada: Veja detalhes como temperatura, umidade, pressão, velocidade do vento e descrição do clima.
- Atualizações em tempo real: As informações são atualizadas constantemente para fornecer dados precisos.

## Tecnologias Utilizadas

- Next.js: O aplicativo é construído usando o framework Next.js para criar uma experiência de usuário interativa e renderização no lado do servidor.
- Axios: A biblioteca Axios é usada para fazer solicitações à API do OpenWeatherMap.
- React Icons: Ícones personalizados são exibidos usando a biblioteca React Icons.
- Tailwind CSS personalizado: Estilos personalizados são aplicados usando CSS.

## Como Usar

1. Clone este repositório para o seu computador.
2. Execute `npm install` para instalar as dependências.
3. Execute `npm run dev` para iniciar o servidor de desenvolvimento.
4. Acesse o aplicativo em `http://localhost:3000` no seu navegador.

## Configuração da API

Para usar este aplicativo, você precisará obter uma chave de API gratuita do OpenWeatherMap. Substitua a variável `API_KEY` no arquivo `index.tsx` com sua chave de API.

```javascript
const API_KEY = "SUA_CHAVE_DE_API_AQUI";

