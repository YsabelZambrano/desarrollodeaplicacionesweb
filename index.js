const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());

app.use('/lab03', express.static(path.join(__dirname, 'pub')));

app.get('/lab03', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/lab03/api/eventos', (req, res) => {
  const base = './agenda';
  let eventos = [];

  if (!fs.existsSync(base)) return res.json([]);

  const fechas = fs.readdirSync(base);

  fechas.forEach(fecha => {
    const rutaFecha = path.join(base, fecha);

    if (!fs.lstatSync(rutaFecha).isDirectory()) return;

    const horas = fs.readdirSync(rutaFecha);

    horas.forEach(hora => {
      const rutaArchivo = path.join(rutaFecha, hora);

      if (!hora.endsWith('.md')) return;

      const contenido = fs.readFileSync(rutaArchivo, 'utf-8');

      eventos.push({
        fecha,
        hora: hora.replace('.md', ''),
        descripcion: contenido
      });
    });
  });

  res.json(eventos);
});


app.post('/lab03/api/eventos', (req, res) => {
  let { fecha, hora, descripcion } = req.body;

  if (!fecha || !hora || !descripcion) {
    return res.status(400).json({ error: 'Datos incompletos' });
  }

  const dir = `./agenda/${fecha}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(`${dir}/${hora}.md`, descripcion);

  res.json({ ok: true });
});

app.delete('/lab03/api/eventos', (req, res) => {
  const { fecha, hora } = req.body;

  const dir = `./agenda/${fecha}`;

  if (!fs.existsSync(dir)) {
    return res.json({ ok: false });
  }

  const archivos = fs.readdirSync(dir);


  const archivo = archivos.find(a => a.startsWith(hora));

  if (archivo) {
    fs.unlinkSync(`${dir}/${archivo}`);
    console.log('Eliminado:', archivo);
  } else {
    console.log('No encontrado para borrar:', hora);
  }

  res.json({ ok: true });
});

app.listen(3000, () => {
  console.log('http://localhost:3000/lab03');
});