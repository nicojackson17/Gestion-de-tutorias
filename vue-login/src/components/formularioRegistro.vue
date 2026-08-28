<template>
  <section class="formulario">
    <h2>Crea tu cuenta</h2>

    <form @submit.prevent="enviarFormulario">
      <label>Nombre y apellido</label>
      <input
        v-model="nombre"
        type="text"
        placeholder="Nombre"
      />

      <label>Correo electrónico</label>
      <input
        v-model="email"
        type="email"
        placeholder="ejemplo@correo.com"
      />

      <label>¿Qué tipo de usuario eres?</label>
      <select v-model="rol">
        <option disabled value="">Seleccionar rol</option>
        <option>Equipo de gestión</option>
        <option>Docente</option>
      </select>

      <label>Contraseña</label>
      <div class="campo-contrasena">
        <input
          v-model="contrasena"
          :type="mostrarContrasena ? 'text' : 'password'"
          placeholder="Mínimo 8 caracteres"
        />
        <button
          type="button"
          class="boton-ojo"
          @click="mostrarContrasena = !mostrarContrasena"
        >
          {{ mostrarContrasena ? 'Ocultar' : 'Mostrar' }}
        </button>
      </div>

      <label>Confirmar contraseña</label>
      <div class="campo-contrasena">
        <input
          v-model="confirmarContrasena"
          :type="mostrarConfirmarContrasena ? 'text' : 'password'"
          placeholder="Verificar la contraseña"
        />
        <button
          type="button"
          class="boton-ojo"
          @click="mostrarConfirmarContrasena = !mostrarConfirmarContrasena"
        >
          {{ mostrarConfirmarContrasena ? 'Ocultar' : 'Mostrar' }}
        </button>
      </div>
      <button type="submit">Registrarme</button>

      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </section>
</template>

<script>
export default {
  name: 'formularioRegistro',
  emits: ['registrar-cuenta'],

  data() {
    return {
      nombre: '',
      email: '',
      rol: '',
      contrasena: '',
      confirmarContrasena: '',
      error: ''
    }
  },

  methods: {
    enviarFormulario() {
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)

      if (
        this.nombre.trim() === '' ||
        this.email.trim() === '' ||
        this.rol === '' ||
        this.contrasena === '' ||
        this.confirmarContrasena === ''
      ) {
        this.error = 'Completá todos los campos antes de registrarte.'
        return
      }

      if (!emailValido) {
        this.error = 'Ingresá un correo electrónico válido.'
        return
      }

      if (this.contrasena.length < 8) {
        this.error = 'La contraseña debe tener al menos 8 caracteres.'
        return
      }

      const tieneMayuscula = /[A-Z]/.test(this.contrasena)
      const tieneMinuscula = /[a-z]/.test(this.contrasena)
      const tieneCaracterEspecial = /[\W_]/.test(this.contrasena)

      if (!tieneMayuscula || !tieneMinuscula || !tieneCaracterEspecial) {
        this.error =
          'La contraseña debe tener al menos una mayúscula, una minúscula y un carácter especial.'
        return
      }

      if (this.contrasena !== this.confirmarContrasena) {
        this.error = 'Las contraseñas no coinciden.'
        return
      }

      this.$emit('registrar-cuenta', {
        nombre: this.nombre.trim(),
        email: this.email.trim(),
        rol: this.rol,
        contrasena: this.contrasena
      })

      this.nombre = ''
      this.email = ''
      this.rol = ''
      this.contrasena = ''
      this.confirmarContrasena = ''
      this.error = ''
    }
  }
}
</script>

<style scoped>
.formulario {
  width: 900px;
  background: #f3e3b2;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Tamaño y color de las casillas (inputs y desplegable) */
input,
select {
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  font-size: 16px;
  background: #ffffff;
  color: #1f2937;
  border: 2px solid #c9a35f;
  border-radius: 8px;
  font-family: Arial, sans-serif;
}

/* Borde al hacer click / seleccionar un input o el desplegable */
input:focus,
select:focus {
  outline: none;
  border-color: #0c6038;
  box-shadow: 0 0 0 3px rgba(12, 96, 56, 0.2);
}

/* Estilo específico solo para el <select> (el desplegable) */
select {
  cursor: pointer;
}

button {
  margin-top: 10px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #0c6038;
  color: #f3e3b2;
  cursor: pointer;
}

.error {
  color: #74070d;
  font-weight: bold;
}
</style>