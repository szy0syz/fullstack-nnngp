# fullstack-nnngp

## Nx, NestJS(Fastify), NestJS, GraphQL(Mercurius), Prisma

![image](https://user-images.githubusercontent.com/10555820/189806987-429c9c15-17a3-4849-94ad-c251844b0a95.png)

## Notes

```bash
npx create-nx-workspace . -preset=nest --tags "scope:api"
yarn create create-nx-workspace . -preset=nest --tags "scope:api" --package-manager=yarn
pnpx create-nx-workspace fullstack1 -preset=nest --tags "scope:api"

pnpm i @nestjs/platform-fastify @nestjs/graphql @nestjs/mercurius graphql mercurius
yarn add @nestjs/platform-fastify @nestjs/graphql @nestjs/mercurius graphql mercurius

# 一键生成真是爽
yarn nx g @nrwl/nest:resource -p api --directory="app/resources" --type="graphql-code-first" --crud --name {name}

yarn nx g @nrwl/nest:lib api/data-access-db --buildable --tags "scope:api"

yarn add prisma prisma-nestjs-graphql -D
yarn add @prisma/client
```

<img width="1717" alt="image" src="https://user-images.githubusercontent.com/10555820/190848052-ac046478-4381-4512-acaf-2344f86c48e0.png">
