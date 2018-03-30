import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  newField: {
    type: 1,
    displayLabel: '',
    defaultValue: '',
    validationRegex: '',
    referenceName: '',
    tags: ['iso#1'],
    groups: [],
    selectedTagGroups: []
  },
  fieldTypes: [
    {
      id: 1,
      icon: 'icon-text',
      name: 'Text',
      definition: 'String of text',
      defaultDisplay: 'Free-form text input'
    },
    {
      id: 2,
      icon: 'icon-date',
      name: 'Date',
      definition: 'Standard ISO format date',
      defaultDisplay: 'Datepicker, with configurable format'
    },
    {
      id: 3,
      icon: 'icon-car',
      name: 'VIN',
      definition: 'Vehicle Identification Number',
      defaultDisplay: 'Free-form text input'
    }
  ],
  tagGroups: {
    'vinmaster': [
      'vinmaster#1', 'vinmaster#2', 'vinmaster#3'
    ],
    'ISO': [
      'iso#1', 'iso#2'
    ],
    'tag3': [
      'tag1', 'tag2', 'tag3', 'tag4'
    ]
  }
}

const mutations = {
  setFieldType (state, { id }) {
    Vue.set(state.newField, 'type', id)
  },
  updateFormField (state, { displayLabel, defaultValue, validationRegex, referenceName, selectedTags, selectedTagGroups }) {
    Vue.set(state, 'newField',
      { ...state.newField,
        displayLabel: displayLabel,
        defaultValue: defaultValue,
        validationRegex: validationRegex,
        referenceName: referenceName,
        tags: selectedTags,
        selectedTagGroups: selectedTagGroups
      }
    )
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const getters = {
  fieldTypes: state => state.fieldTypes,
  newFieldType: state => state.newField.type,
  tagGroups: state => Object.keys(state.tagGroups)
    .map(key => {
      return {
        name: key,
        tags: state.tagGroups[key].map(tag => {
          return {
            name: tag,
            selected: state.newField.tags.includes(tag)
          }
        }),
        selected: state.newField.selectedTagGroups.includes(key)
          // [].concat.apply(
          //   [], state.tagGroups[key]
          // )
          // .map(tag => {
          //   return tag
          // })
          // .reduce(
          //   (prev, current) => {
          //     const a = state.newField.selectedTagGroups.includes(current)
          //     console.log(prev + ' ' + current)
          //     return prev || a
          //   }, false)
      }
    })
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
