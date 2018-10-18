# SAS - SAC #
Pequeno sistema de cadastro de chamados de um SAC.

## Instalação ##

Para fazer a instalação será necessário um servidor PHP. Indico os servidores PHP [Wampp](https://sourceforge.net/projects/wampserver/) ou [Xampp](https://www.apachefriends.org/pt_br/index.html), sendo esse último o que foi usado para o desenvolvimento.

O servidor deve ter a versão 4.7.7 do mysql(rodando Maria DB 10.1.30) ou maior e a versão 7.2.2 do PHP ou maior.

Após instalar o seu servidor basta entrar por linha de comando ou pelo seu gerenciador de bando de dados e criar o banco **sas**. Logo após isso, basta subir o arquivo **default.sql**, salvo na pasta *var_dump* dentro do projeto.

Uma observação interessante é que o arquivo default é apenas um arquivo estrutural, não possui nenhum conteúdo. Se você desejar algum conteúdo já cadastrado basta subir o arquivo **content.sql** no lugar do arquivo **default.sql**.

### O SEU BANCO DE DADOS OBRIGATORIAMENTE DEVE ESTAR COM USUÁRIO ROOT E SENHA VAZIA ###

Após a configuração do seu banco de dados basta acessar a sua pasta de arquivos *www* (para wamp) *htdocs* (para xampp) e fazer o clone desse repositório através do comando:

*git clone https://github.com/marcoaring/sas-sac.git*

Se tudo estiver certo você já será capaz de ver o conteúdo do projeto rodando na sua máquina.