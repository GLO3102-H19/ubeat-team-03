<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group
        label="Email address:"
        label-for="emailInput"
      >
        <b-form-input
          type="email"
          id="emailInput"
          v-model="form.email"
          required
          placeholder="Enter email" />
      </b-form-group>

      <b-form-group
        label="Password:"
        label-for="passwordInput"
      >
        <b-form-input
          type="password"
          id="passwordInput"
          v-model="form.password"
          required
          placeholder="Enter password" />
      </b-form-group>

      <b-button type="submit" variant="primary">Sign Up</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    props: ['login'],
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: ''
        },
      };
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      },
      onReset(evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.email = '';
        this.form.name = '';
      }
    },
  };
</script>

<style scoped>
</style>
