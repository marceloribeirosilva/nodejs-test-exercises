#!/bin/bash

# Diretórios de origem e destino
origem="./origem"
destino="./destino"

# Verifica se o diretório de origem existe
if [ ! -d "$origem" ]; then
  echo "O diretório de origem '$origem' não existe."
  exit 1
fi

# Verifica se o diretório de destino existe, se não, cria-o
if [ ! -d "$destino" ]; then
  mkdir -p "$destino"
fi

# Copia todos os arquivos .txt do diretório de origem para o diretório de destino
cp "$origem"/*.txt "$destino"

# Verifica se a operação de cópia foi bem-sucedida
if [ $? -eq 0 ]; then
  echo "Todos os arquivos .txt foram copiados com sucesso de '$origem' para '$destino'."
else
  echo "Houve um erro ao copiar os arquivos."
fi

# Exemplo de uso:

# Tornar o script executável
# chmod +x copiar_txt.sh

# Executar o script
# ./copiar_txt.sh 

