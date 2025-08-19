<template>
  <div class="anamnese-page">
    <Header />

    <div class="anamnese-page__body">
      <aside class="anamnese-page__sidebar">
        <sidebar />
      </aside>

      <main class="anamnese-page__main">
        <h2 class="anamnese-page__title">Anamnese</h2>
        <div class="anamnese-page__card">
          <VCard>
            <form class="flex flex-col gap-8">
              <div class="flex gap-4 w-full">
                <div v-for="f in inputFields" :key="f.key" class="w-full">
                  <VInput
                    v-model="responses[f.key]"
                    :label="f.label"
                    :placeholder="f.placeholder"
                    size="md"
                    color="primary-em"
                  />
                </div>
              </div>
              <div class="grid grid-cols-4 gap-4 w-full">
                <VQuestionGroup
                  v-for="question in questions"
                  :key="question.key"
                  v-model="responses[question.key]"
                  :label="question.label"
                  :type="question.type"
                  :options="question.options"
                  :label-position="question.labelPosition"
                />
              </div>
              <div class="w-24">
                <VButton color="primary-em" :full-width="true">Analisar</VButton>
              </div>
            </form>
          </VCard>
        </div>
      </main>
    </div>

    <footer class="anamnese-page__footer"></footer>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const responses = reactive({
  reason: '' as string,
  startSymptoms: '' as string,
  pain: 'nao' as string,
  hasAllergy: false as boolean,
  symptoms: [] as string[],
  insomnia: false as boolean,
  medications: [] as string[],
  smoker: false as boolean,
  alcohol: false as boolean,
  chronicDiseases: [] as string[],
});

const inputFields = [
  { key: 'reason', label: 'Qual é o motivo da consulta?', placeholder: 'Ex: Dor abdominal' },
  { key: 'startSymptoms', label: 'Quando os sintomas começaram?', placeholder: '3 dias' },
];

const questions = [
  {
    key: 'pain',
    label: 'Você sente dor atualmente?',
    type: 'radio',
    options: [
      { label: 'Sim', value: 'sim' },
      { label: 'Não', value: 'nao' },
    ],
  },
  {
    key: 'hasAllergy',
    label: 'Possui alguma alergia?',
    type: 'radio',
    labelPosition: 'right',

    options: [
      { label: 'Sim', value: true },
      { label: 'Não', value: false },
    ],
  },
  {
    key: 'symptoms',
    label: 'Quais destes sintomas apresenta?',
    type: 'checkbox',
    labelPosition: 'right',
    options: [
      { label: 'Febre', value: 'febre' },
      { label: 'Tosse', value: 'tosse' },
      { label: 'Falta de ar', value: 'falta_ar' },
      { label: 'Dor de cabeça', value: 'cefaleia' },
    ],
  },
  {
    key: 'insomnia',
    label: 'Você teve insônia nos últimos dias?',
    type: 'radio',
    labelPosition: 'right',

    options: [
      { label: 'Sim', value: true },
      { label: 'Não', value: false },
    ],
  },
  {
    key: 'medications',
    label: 'Está usando algum medicamento?',
    type: 'checkbox',
    labelPosition: 'right',
    options: [
      { label: 'Analgésico', value: 'analgesico' },
      { label: 'Antibiótico', value: 'antibiotico' },
      { label: 'Anti-inflamatório', value: 'antiinflamatorio' },
      { label: 'Outro', value: 'outro' },
    ],
  },
  {
    key: 'smoker',
    label: 'Você é fumante?',
    type: 'radio',
    labelPosition: 'right',

    options: [
      { label: 'Sim', value: true },
      { label: 'Não', value: false },
    ],
  },
  {
    key: 'alcohol',
    label: 'Consome bebidas alcoólicas?',
    type: 'radio',
    labelPosition: 'right',

    options: [
      { label: 'Sim', value: true },
      { label: 'Não', value: false },
    ],
  },
  {
    key: 'chronicDiseases',
    label: 'Possui doenças crônicas?',
    type: 'checkbox',
    labelPosition: 'right',
    options: [
      { label: 'Diabetes', value: 'diabetes' },
      { label: 'Hipertensão', value: 'hipertensao' },
      { label: 'Doenças cardíacas', value: 'cardiaca' },
      { label: 'Nenhuma', value: 'nenhuma' },
    ],
  },
];
</script>

<style lang="scss">
.anamnese-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__body {
    display: flex;
    flex: 1;
  }

  &__sidebar {
    width: 16rem;
  }

  &__main {
    flex: 1;
    padding: 1.5rem;
    background-color: #f3fbff;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__card {
    margin-top: 1rem;
  }
}
</style>
