[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/fqmi7ycy)
# 🛡️ Informe de Incidente: Aplicación de Notas Intervenida

## Contexto

Un grupo no identificado de ciberdelincuentes logró comprometer el repositorio de esta aplicación de notas tipo *post-it*.  
El ataque dejó el proyecto en un estado inestable: la interfaz está deteriorada y varias de sus funcionalidades críticas presentan anomalías.

Tu rol es actuar como **equipo de respuesta de emergencia** y restaurar la aplicación antes de que el impacto sea mayor.  

---

## Misión

El sistema fue diseñado para:  
- Crear notas digitales.  
- Almacenarlas de forma persistente en el navegador.  
- Asignarles colores de manera aleatoria.  
- Operar con un modo oscuro funcional.  

Actualmente, varias de estas características se encuentran comprometidas.

---

## Áreas afectadas

Los registros indican modificaciones en tres frentes principales:

### 🔐 Control de versiones
Los atacantes dejaron el repositorio en un estado que exige que trabajes desde una copia aislada y segura.  
Tendrás que establecer un flujo de trabajo que te permita recuperar, modificar y devolver cambios bajo tu control.  

---

### 🖥️ Estructura y estilos
Algunos vínculos internos parecen haber sido removidos o alterados, lo que afecta la carga de la aplicación.  
El diseño visual presenta inconsistencias graves, tanto en el contenedor principal como en el modo oscuro.  

---

### ⚙️ Lógica de la aplicación
El almacenamiento local no responde de la manera esperada.  
Las notas muestran un comportamiento anómalo:  
- No todas se recuperan correctamente.  
- Su color no varía como debería.  
- En ocasiones aparecen duplicadas al ser creadas.  

Se detectó además que una de las funciones principales encargada de persistir los datos podría haber sido manipulada.

---

## Procedimiento

1. Restaura la integridad del proyecto en tu espacio de trabajo.  
2. Revisa los archivos clave (HTML, CSS y JS) para identificar las modificaciones sospechosas.  
3. Corrige el código asegurando que la aplicación cumpla nuevamente con sus objetivos.  
4. Documenta los cambios realizados y sube tu versión reparada a tu repositorio.  

---

## Cierre

Si completas la misión, el sistema volverá a ser un tablero de notas estable, con colores aleatorios y modo oscuro funcional.  
Tu éxito será la prueba de que el proyecto puede resistir futuros intentos de sabotaje.
