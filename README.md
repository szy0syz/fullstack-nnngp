# fullstack-nnngp

## Nx, NestJS(Fastify), NestJS, GraphQL(Mercurius), Prisma

![image](https://user-images.githubusercontent.com/10555820/189806987-429c9c15-17a3-4849-94ad-c251844b0a95.png)

## Notes

```bash
npx create-nx-workspace . -preset=nest --tags "scope:api"
yarn create create-nx-workspace . -preset=nest --tags "scope:api" --package-manager=yarn
pnpx create-nx-workspace fullstack -preset=nest --tags "scope:api"

pnpm i @nestjs/platform-fastify @nestjs/graphql @nestjs/mercurius graphql mercurius
yarn add @nestjs/platform-fastify @nestjs/graphql @nestjs/mercurius graphql mercurius

# 一键生成真是爽
yarn nx g @nrwl/nest:resource -p api --directory="app/resources" --type="graphql-code-first" --crud --name {name}
```

<img width="1717" alt="image" src="https://user-images.githubusercontent.com/10555820/190848052-ac046478-4381-4512-acaf-2344f86c48e0.png">

```bash
yarn nx g @nrwl/nest:lib api/data-access-db --buildable --tags "scope:api"

yarn add prisma prisma-nestjs-graphql -D
yarn add @prisma/client

yarn add -D env-cmd

yarn db:up

yarn nx g @nrwl/nest:lib api/generated/db-types --buildable --tags "scope:api"

yarn add class-transformer class-validator
```

<img width="1153" alt="image" src="https://user-images.githubusercontent.com/10555820/190855832-998c43c0-9028-41c0-b457-5bd7a1bf9e1b.png">

> 终于解决我之前的疑问，为什么 `Prisma` 牺牲了强类型和便捷性，缺失了 `OO` 的部分，还别说真可以弥补了。

```bash
yarn add -D @nrwl/next

yarn nx g @nrwl/next:app web

yarn add -D graphql-codegen @graphql-codegen/cli @graphql-codegen/near-operation-file-preset @graphql-codegen/typed-document-node @graphql-codegen/typescript-operations @graphql-codegen/typescript @graphql-codegen/typescript-urql

yarn nx g @nrwl/node:lib client/generated/graphql-types --tags "scope:client"
```

https://user-images.githubusercontent.com/10555820/191919544-ebdc6b55-a79c-480a-9853-b542060f7f3d.mp4
