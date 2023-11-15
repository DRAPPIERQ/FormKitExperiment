<script setup lang="ts">
const form = ref({});
const schema = [
  {
    $formkit: 'digit',
    digits: '4',
    label: 'One-time password',
    name: 'two_factor_code',
    help: 'We’ve sent a code to your phone.',
    validation: 'required',
    'validation-visibility': 'live',
  },
];
</script>

<template>
  <div class="mx-auto w-fit">
    <FormKit type="form" v-model="form" :actions="false">
      <FormKit
        type="digit"
        digits="4"
        label="One-time password"
        name="two_factor_code"
        help="We’ve sent a code to your phone."
        validation="required"
        validation-visibility="live"
      />

      <FormKitSchema :schema="schema" />
    </FormKit>
  </div>
</template>
