#!/usr/bin/env bash

green=`tput setaf 2`
yellow=`tput setaf 3`
reset=`tput sgr0`

read -p "${green}Rename from? ${reset}" from
from=${from:-account}
echo "${yellow} $from ${reset}"

echo ""

read -p "${green}Rename to? ${reset}" to
to=${to:-account}
echo "${yellow} $to ${reset}"

cd ./src/$to && \
mv ./dto/$from.dto.ts ./dto/$to.dto.ts && \
mv ./inputs/$from.input.ts ./inputs/$to.input.ts && \
mv ./interfaces/$from.interface.ts ./interfaces/$to.interface.ts && \
mv ./$from.module.ts ./$to.module.ts && \
mv ./$from.resolver.ts ./$to.resolver.ts && \
mv ./$from.schema.ts ./$to.schema.ts && \
mv ./$from.service.ts ./$to.service.ts