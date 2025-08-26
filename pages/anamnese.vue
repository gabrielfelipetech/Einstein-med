<template>
  <div class="anamnese-page">
    <Header />
    <div class="anamnese-page__body">
      <aside class="anamnese-page__sidebar"><sidebar /></aside>

      <main class="anamnese-page__main">
        <h2 class="anamnese-page__title">Anamnese</h2>
        <div class="anamnese-page__card">
          <VCard>
            <form class="space-y-6">
              <div class="grid grid-cols-4 gap-4">
                <VDynamicQuestion
                  v-for="n in formNodes"
                  :key="n.key"
                  :node="n"
                  :model="responses"
                  color="primary-bp"
                  size="md"
                  :layout="n.layout ?? 'col'"
                  :child-layout="n.childLayout ?? 'row'"
                />
              </div>

              <div class="mt-6 flex items-center gap-4 w-full">
                <VButton color="primary-em" :full-width="false">Analisar</VButton>
                <pre class="bg-gray-50 p-3 text-xs rounded max-h-56 overflow-auto">{{
                  responses
                }}</pre>
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

const responses = reactive<Record<string, any>>({
  reason: '',
  startSymptoms: '',
  pain: 'nao',
  hasAllergy: false,
  symptoms: [],
  insomnia: 'nao',
  medications: [],
  smoker: 'nao',
  alcohol: 'nao',
  chronicDiseases: [],
});

const formNodes = [
  {
    key: 'reason',
    label: 'Qual é o motivo da consulta?',
    type: 'text',
    placeholder: 'Ex: Dor abdominal',
  },
  {
    key: 'startSymptoms',
    label: 'Quando os sintomas começaram?',
    type: 'text',
    placeholder: 'Ex: há 3 dias',
  },

  {
    key: 'pain',
    label: 'Você sente dor atualmente?',
    type: 'radio',
    options: [
      {
        label: 'Sim',
        value: 'sim',
        children: [
          { key: 'painLocation', label: 'Onde?', type: 'text', placeholder: 'Ex: abdômen' },
          {
            key: 'painIntensity',
            label: 'Intensidade',
            type: 'range',
            min: 0,
            max: 10,
            step: 1,
            showTicks: true,
            tickStep: 1,
          },
        ],
      },
      {
        label: 'Às vezes',
        value: 'as_vezes',
        children: [
          { key: 'painFreqWeek', label: 'Dias/semana', type: 'number', placeholder: 'Ex: 3' },
        ],
      },
      { label: 'Não', value: 'nao' },
    ],
  },

  {
    key: 'hasAllergy',
    label: 'Possui alguma alergia?',
    type: 'radio',
    options: [
      {
        label: 'Sim',
        value: true,
        children: [
          {
            key: 'allergyList',
            label: 'Quais?',
            type: 'text',
            placeholder: 'Ex: dipirona, poeira',
          },
          { key: 'allergyReaction', label: 'Reação', type: 'text', placeholder: 'Ex: urticária' },
        ],
      },
      { label: 'Não', value: false },
      { label: 'Não sei', value: 'unknown' },
    ],
  },

  {
    key: 'symptoms',
    label: 'Quais destes sintomas apresenta?',
    type: 'checkbox',
    layout: 'col',
    childrenLayout: 'row',
    options: [
      {
        label: 'Febre',
        value: 'febre',
        children: [
          { key: 'tempC', label: 'Temperatura (°C)', type: 'number', placeholder: 'Ex: 38.5' },
        ],
      },
      {
        label: 'Tosse',
        value: 'tosse',
        children: [
          {
            key: 'tosseTipo',
            label: 'Tipo',
            type: 'radio',
            options: [
              { label: 'Seca', value: 'seca' },
              { label: 'Produtiva', value: 'produtiva' },
            ],
          },
        ],
      },
      {
        label: 'Falta de ar',
        value: 'falta_ar',
        children: [
          {
            key: 'dispneia',
            label: 'Gravidade',
            type: 'range',
            min: 0,
            max: 10,
            step: 1,
            showTicks: true,
            tickStep: 1,
          },
        ],
      },
      {
        label: 'Dor de cabeça',
        value: 'cefaleia',
        children: [
          { key: 'cefaleiaDias', label: 'Dias/semana', type: 'number', placeholder: 'Ex: 2' },
        ],
      },
      {
        label: 'Náusea',
        value: 'nausea',
        children: [
          { key: 'nauseaEpisodios', label: 'Episódios/dia', type: 'number', placeholder: 'Ex: 3' },
        ],
      },
      {
        label: 'Vômito',
        value: 'vomito',
        children: [
          { key: 'vomitoEpisodios', label: 'Episódios/dia', type: 'number', placeholder: 'Ex: 1' },
        ],
      },
      { label: 'Outro', value: 'outro', allowCustom: true },
    ],
  },

  {
    key: 'insomnia',
    label: 'Você teve insônia nos últimos dias?',
    type: 'radio',
    options: [
      {
        label: 'Sim',
        value: 'sim',
        children: [
          { key: 'insomniaDays', label: 'Dias/semana', type: 'number', placeholder: 'Ex: 4' },
        ],
      },
      { label: 'Às vezes', value: 'as_vezes' },
      { label: 'Não', value: 'nao' },
    ],
  },

  {
    key: 'medications',
    label: 'Está usando algum medicamento?',
    type: 'checkbox',
    layout: 'col',
    childrenLayout: 'row',
    options: [
      {
        label: 'Analgésico',
        value: 'analgesico',
        children: [
          { key: 'med_nome', label: 'Qual?', type: 'text', placeholder: 'Ex: Dipirona' },
          { key: 'med_dose', label: 'Dose (mg)', type: 'number', placeholder: 'Ex: 500' },
          { key: 'med_freq', label: 'Frequência', type: 'text', placeholder: 'Ex: 8/8h' },
        ],
      },
      {
        label: 'Antibiótico',
        value: 'antibiotico',
        children: [
          { key: 'ab_nome', label: 'Qual?', type: 'text', placeholder: 'Ex: Amoxicilina' },
          { key: 'ab_dose', label: 'Dose (mg)', type: 'number' },
          { key: 'ab_dias', label: 'Dias', type: 'number' },
        ],
      },
      { label: 'Anti-inflamatório', value: 'antiinflamatorio' },
      { label: 'Outro', value: 'outro', allowCustom: true },
    ],
  },

  {
    key: 'smoker',
    label: 'Você é fumante?',
    type: 'radio',
    options: [
      {
        label: 'Sim',
        value: 'sim',
        children: [
          { key: 'cigarrosDia', label: 'Cigarros/dia', type: 'number' },
          { key: 'anosUso', label: 'Anos de uso', type: 'number' },
        ],
      },
      {
        label: 'Ex-fumante',
        value: 'ex',
        children: [
          { key: 'quandoParou', label: 'Quando parou?', type: 'text', placeholder: 'Ex: 6 meses' },
        ],
      },
      { label: 'Não', value: 'nao' },
    ],
  },

  {
    key: 'alcohol',
    label: 'Consome bebidas alcoólicas?',
    type: 'radio',
    options: [
      {
        label: 'Sim',
        value: 'sim',
        children: [
          { key: 'dosesSemana', label: 'Doses/semana', type: 'number' },
          { key: 'tipoBebida', label: 'Tipo', type: 'text', placeholder: 'Ex: vinho, cerveja' },
        ],
      },
      {
        label: 'Às vezes',
        value: 'as_vezes',
        children: [{ key: 'freqMensal', label: 'Dias/mês', type: 'number' }],
      },
      { label: 'Não', value: 'nao' },
    ],
  },

  {
    key: 'chronicDiseases',
    label: 'Possui doenças crônicas?',
    type: 'checkbox',
    layout: 'col',
    childrenLayout: 'row',
    options: [
      {
        label: 'Diabetes',
        value: 'diabetes',
        children: [{ key: 'hba1c', label: 'HbA1c (%)', type: 'number', placeholder: 'Ex: 7.2' }],
      },
      {
        label: 'Hipertensão',
        value: 'hipertensao',
        children: [{ key: 'paMedia', label: 'PA média', type: 'text', placeholder: 'Ex: 130x80' }],
      },
      { label: 'Doença cardíaca', value: 'cardiaca' },
      { label: 'Asma', value: 'asma' },
      { label: 'Doença renal', value: 'renal' },
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
