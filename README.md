# Conversor de Temperatura

Projeto fictício criado para praticar o fluxo do GitHub: commits, issues, branches,
pull requests, GitHub Actions (CI/CD), GitHub Pages, rulesets e releases.

## O que o app faz
- Converte entre Celsius, Fahrenheit e Kelvin
- Mostra mensagem de erro se o valor digitado não for um número

## Estrutura
| Arquivo | Função |
|---|---|
| `index.html` | Página principal |
| `style.css` | Estilos (a cor do tema fica na variável `--cor`) |
| `script.js` | Parte visual (DOM) |
| `logic.js` | Lógica de conversão, testável |
| `logic.test.js` | Testes automatizados |
| `.github/workflows/ci-cd.yml` | Pipeline: test → build → deploy |

## Rodar os testes
```bash
npm test
```

## Licença
MIT
