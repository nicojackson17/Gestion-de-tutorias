<template>
<header class="encabezado">
<h1>Sistema de Tutorías</h1>
<p>Registro inicial de estudiantes que necesitan acompañamiento</p>
</header>

</template>
<script>
export default {
name: 'EncabezadoTutorias'
}
</script>
<style scoped>
.encabezado {
background: #1f2937;
color: white;
padding: 24px;
border-radius: 16px;
margin-bottom: 24px;
text-align: center;
}
.encabezado h1 {
margin: 0;
}
.encabezado p {
margin-bottom: 0;
color: #d1d5db;
}
</style>
4. Crear el componente FormularioTutoria.vue
Creá el archivo:
src/components/FormularioTutoria.vue
Copiá este código:
<template>
<section class="formulario">
<h2>Nueva tutoría</h2>
<form @submit.prevent="enviarFormulario">
<label>Estudiante</label>
<input
v-model="estudiante"
type="text"
placeholder="Nombre del estudiante"
/>

<label>Curso</label>
<select v-model="curso">
<option disabled value="">Seleccionar curso</option>
<option>4° año</option>
<option>5° año</option>
<option>6° año</option>
</select>
<label>Motivo</label>
<textarea
v-model="motivo"
placeholder="Escribí el motivo de la tutoría"
></textarea>
<label>Prioridad</label>
<select v-model="prioridad">
<option>Normal</option>
<option>Alta</option>
</select>
<button type="submit">Agregar tutoría</button>
<p v-if="error" class="error">{{ error }}</p>
</form>
</section>
</template>
<script>
export default {
name: 'FormularioTutoria',
emits: ['agregar-tutoria'],
data() {
return {
estudiante: '',
curso: '',
motivo: '',
prioridad: 'Normal',
error: ''
}
},
methods: {
enviarFormulario() {
if (
this.estudiante.trim() === '' ||

this.curso === '' ||
this.motivo.trim() === ''
) {
this.error = 'Completá todos los campos antes de agregar la tutoría.'
return
}
this.$emit('agregar-tutoria', {
estudiante: this.estudiante.trim(),
curso: this.curso,
motivo: this.motivo.trim(),
prioridad: this.prioridad
})
this.estudiante = ''
this.curso = ''
this.motivo = ''
this.prioridad = 'Normal'
this.error = ''
}
}
}
</script>
<style scoped>
.formulario {
background: white;
padding: 20px;
border-radius: 16px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
form {
display: flex;
flex-direction: column;
gap: 10px;
}
input,
select,
textarea {
padding: 10px;
border: 1px solid #d1d5db;
border-radius: 8px;
font-family: Arial, sans-serif;
}

textarea {
min-height: 80px;
}
button {
margin-top: 10px;
padding: 12px;
border: none;
border-radius: 8px;
background: #2563eb;
color: white;
cursor: pointer;
}
.error {
color: #b91c1c;
font-weight: bold;
}
</style>