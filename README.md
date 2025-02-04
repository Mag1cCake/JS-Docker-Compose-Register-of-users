# JS-Docker-Compose-Register-of-users
 
# Register of Users

## Opis projektu
Register of Users to aplikacja webowa umożliwiająca zarządzanie użytkownikami poprzez dodawanie, edytowanie oraz usuwanie danych użytkowników. Aplikacja korzysta z bazy danych MongoDB, a jej backend jest zbudowany przy użyciu Node.js i Express.js. Całe środowisko uruchamiane jest przy pomocy Docker Compose, co zapewnia łatwość wdrożenia aplikacji.

## Funkcje aplikacji

1. **Dodawanie użytkownika**
   - Użytkownicy mogą dodawać nowe rekordy użytkowników, podając imię, numer telefonu i adres e-mail.

2. **Edycja użytkownika**
   - Użytkownicy mogą edytować dane istniejących użytkowników, np. zmieniać ich imię, numer telefonu czy adres e-mail.

3. **Usuwanie użytkownika**
   - Użytkownicy mogą usunąć rekord użytkownika z bazy danych.

4. **Wyświetlanie użytkowników**
   - Aplikacja umożliwia wyświetlanie listy wszystkich użytkowników w systemie.

5. **Wyszukiwanie użytkowników**.
   - Użytkownicy mogą wyszukiwać użytkowników według nazwy.

## Autor
Yevhenii Yarmak 44105

## Instalacja i uruchomienie projektu

### Wymagania:
- Zainstalowany Docker
- Dostęp do Internetu, aby pobrać niezbędne obrazy Dockera

### Kroki instalacji:

1. **Sklonuj repozytorium**:

   ```bash
   git clone https://github.com/Mag1cCake/JS-Docker-Compose-Register-of-users.git
   cd JS-Docker-Compose-Register-of-users

2. **Uruchom aplikację za pomocą Docker Compose**:

W katalogu głównym projektu uruchom poniższe polecenie:

docker-compose up --build

3. **Otwórz aplikację w przeglądarce**:

Frontend i backend będą dostępne pod adresem:

http://localhost:5000

Technologie
Język programowania: JavaScript (Node.js)
Baza danych: MongoDB
Frontend: EJS, HTML, CSS
Backend: Node.js, Express.js
Docker: Docker Compose do zarządzania środowiskiem