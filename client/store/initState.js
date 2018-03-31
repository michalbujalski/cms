export default {
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
