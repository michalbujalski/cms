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
  },
  fieldGroups: {
    'group#1': {
      title: 'Rental Vehicle Coverage Package',
      usagesNum: 7
    }
  },
  newGroup: {
    isActive: false,
    title: '',
    isLoading: false,
    error: null,
    isSuccess: false
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
  toggleNewGroupActive (state, { isActive }) {
    Vue.set(state, 'newGroup', { ...state.newGroup, isActive: isActive, title: '' })
  },
  updateNewGroup (state, { title }) {
    Vue.set(state, 'newGroup', { ...state.newGroup, title: title })
  },
  initNewGroupCreate (state) {
    Vue.set(state, 'newGroup', { ...state.newGroup, isLoading: true, error: null, isSuccess: false })
  },
  endNewGroupCreate (state, { isSuccess, error }) {
    Vue.set(state, 'newGroup', { ...state.newGroup, isLoading: false, error: error, isSuccess: isSuccess })
  },
  addFieldGroup (state, { group }) {
    Vue.set(state, 'fieldGroups', { ...state.fieldGroups, [group.id]: group })
  }
}

const actions = {
  uploadGroup ({ commit }, { group }) {
    commit('initNewGroupCreate')
    setTimeout(() => {
      commit('endNewGroupCreate', { isSuccess: true, error: null })
      commit('toggleNewGroupActive', { isActive: false })
      // mock server response
      commit('addFieldGroup', {
        group: {
          id: group.title, title: group.title, usageNum: 0
        }
      })
    }, 1000)
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
      }
    }),
  fieldGroups: state => Object.keys(state.fieldGroups)
    .map(key => {
      return { ...state.fieldGroups[key], id: key }
    }),
  newGroup: state => state.newGroup
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
