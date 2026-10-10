# SENTINEL AI — Protótipo visual

Demonstração conceitual de uma interface web para apresentar ideias de operação de segurança.
Esta página é estática: não tem backend, não coleta dados nem monitora ou protege dispositivos.

## Visão do produto

O protótipo ilustra como inventário, sinais de detecção, incidentes e arquitetura poderiam ser
apresentados em um painel. As métricas, alertas e exemplos são fictícios e aparecem apenas para
demonstrar a interface.

## Principais capacidades

- Navegação por visões de princípios, arquitetura, detecção e cobertura.
- Indicadores animados e alertas visuais simulados.
- Layout responsivo para desktop e celular.

Esses itens são elementos visuais de demonstração, não funcionalidades operacionais.

## Arquitetura

O diagrama de arquitetura e a stack listada representam uma proposta conceitual para uma possível
implementação futura. Nenhum dos serviços listados está conectado ou incluído nesta demonstração.

## Stack preferencial

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Python, FastAPI, Pydantic, SQLAlchemy
- Dados: PostgreSQL, Redis, armazenamento compatível com S3, OpenSearch
- Operação: Docker, CI/CD, infraestrutura como código, observabilidade
- Agentes: Rust, comunicação autenticada e atualizações seguras

## Deploy

O repositório inclui um workflow do GitHub Pages. Após publicar o projeto no repositório
`euartursilva/sentinel-ai`, habilite o GitHub Pages pela opção **GitHub Actions** em
**Settings → Pages**. O endereço público será:

https://euartursilva.github.io/sentinel-ai/
