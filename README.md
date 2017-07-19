# Platrans

Platrans es un idioma inventado para probar npm y github usando JavaScript
y ECMAScript con la ayuda de los cursos de [Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https//platzi.com)

## Descripción del idioma

- Si la palabra termina en "ar", se le quitan esos dos caracteres
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio
- Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas

## Instalación

```
npm install platrans
```

## Uso

```
import platrans from 'platrans'

platrans("Programar") // Program
platrans("Zorro") // Zorrope
platrans("Zarpar") // Zarppe
platrans("abecedario") // abece-dario
platrans("sometemos") // SoMeTeMoS
```

## Créditos
- [Jonathan Ludena](https://twitter.com/@jonathanludena)

## Licencia
[MIT](https://opensource.org/licenses/MIT)
