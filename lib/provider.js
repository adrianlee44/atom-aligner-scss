module.exports = {
  selector: [
    '.source.css.scss',
    '.source.sass',
    '.source.css.embedded.html', // .source.css.embedded.html is a temporary hack to support inline
    '.source.sass.embedded.html',
    '.source.css.scss.embedded.html'
  ],
  id: 'aligner-scss', // package name
  config: {
    ':-enabled': {
      title: 'Enable aligning :',
      type: 'boolean',
      "default": true
    },
    ':-alignment': {
      title: 'Padding for :',
      description: 'Pad left or right of the character',
      type: 'string',
      "default": 'right',
      enum: ['left', 'right']
    },
    ':-leftSpace': {
      title: 'Left space for :',
      description: 'Add 1 whitespace to the left',
      type: 'boolean',
      "default": false
    },
    ':-rightSpace': {
      title: 'Right space for :',
      description: 'Add 1 whitespace to the right',
      type: 'boolean',
      "default": true
    },
    '!-enabled': {
      title: 'Enable aligning !',
      type: 'boolean',
      "default": false
    },
    '!-alignment': {
      title: 'Padding for !',
      description: 'Pad left or right of the character',
      type: 'string',
      "default": 'left',
      enum: ['left', 'right']
    },
    '!-leftSpace': {
      title: 'Left space for !',
      description: 'Add 1 whitespace to the left',
      type: 'boolean',
      "default": true
    },
    '!-rightSpace': {
      title: 'Right space for !',
      description: 'Add 1 whitespace to the right',
      type: 'boolean',
      "default": false
    },
    '{-enabled': {
      title: 'Enable aligning {',
      type: 'boolean',
      "default": false
    },
    '{-alignment': {
      title: 'Padding for {',
      description: 'Pad left or right of the character',
      type: 'string',
      "default": 'left',
      enum: ['left', 'right']
    },
    '{-leftSpace': {
      title: 'Left space for {',
      description: 'Add 1 whitespace to the left',
      type: 'boolean',
      "default": true
    },
    '{-rightSpace': {
      title: 'Right space for {',
      description: 'Add 1 whitespace to the right',
      type: 'boolean',
      "default": true
    }
  },
  privateConfig: {
    '!-scope': 'punctuation',
    ':-scope': 'key-value|property-name|operator',
    '{-scope': 'property-list.begin'
  }
};
