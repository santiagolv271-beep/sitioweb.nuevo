# Carpeta de imágenes

## Fotos que necesita el sitio

Subí tus fotos a esta carpeta con exactamente estos nombres:

| Nombre del archivo | Qué foto va ahí |
|--------------------|-----------------|
| `hero.jpg` | La foto para el fondo del inicio (la más impactante — ej: Haulotte con trabajadores) |
| `persona.jpg` | El operario con uniforme de la empresa aplicando el piso |

---

## Fotos de la galería de trabajos

Las fotos de la galería se configuran en **`js/main.js`**.

**Pasos para agregar tus fotos de trabajos terminados:**

1. Subí todas tus fotos de trabajos a esta carpeta (con el nombre que tengan, no hace falta renombrarlas)
2. Abrí el archivo `js/main.js`
3. Al principio del archivo encontrás un bloque que dice `var PORTFOLIO = [`
4. Cambiá el nombre `archivo:` de cada entrada por el nombre real de tus fotos

**Ejemplo:** si subiste una foto llamada `IMG_20240315.jpg`, en `main.js` ponés:
```
archivo: 'IMG_20240315.jpg',
```

**El sitio solo muestra las primeras 3 fotos** — las demás quedan guardadas pero no se ven.
Para cambiar cuáles se muestran, basta con reordenar la lista en `main.js`.

---

## Tamaño recomendado para las fotos

| Foto | Tamaño ideal |
|------|-------------|
| `hero.jpg` | Mínimo 1920 × 1080 px |
| `persona.jpg` | Mínimo 800 × 900 px |
| Galería | Mínimo 800 × 600 px |

Formato: **JPG** (más liviano que PNG para fotos).
