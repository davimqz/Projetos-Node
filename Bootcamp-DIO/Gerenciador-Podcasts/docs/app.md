# dcast Menager

### Descrição
Um app ao estilo netflix onde eu posso centralizar diferentes episódios de podcst separados por categoria

#### Domínio
Podcasts feitos em vídeo

### Features 
- Listar os podcasts em sessões de categorias
 - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

### Como vou implementar
Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link

```js
[
    {
    podcasName: "flow",
    episode: "CBUM - Flow #319",
    cover: "https://...",
    link: "https://...",
    categories: ["saúde", "bodybuilding"]

    },
    {
    podcasName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    cover: "https://...",
    link: "https://...",
    categories: ["esporte", "corrida"]
    }
]
```



