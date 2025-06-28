module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    project: './tsconfig.*?.json',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['vue', '@typescript-eslint', 'import', 'promise', 'node', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    // 关闭空方法校验
    '@typescript-eslint/no-empty-function': 'off',
    // 关闭类型限制不允许使用any
    '@typescript-eslint/no-explicit-any': 'off',
    // 启用没有使用变量校验
    '@typescript-eslint/no-unused-vars': 'error',
    // 关闭不允许复制this给变量校验
    '@typescript-eslint/no-this-alias': 'off',
    // 关闭不允许使用ts的关闭校验忽略等
    '@typescript-eslint/ban-ts-comment': 'off',
    // 关闭要求组件名称始终为多个单词
    'vue/multi-word-component-names': 'off',
    // 关闭强制执行有效的defineProps编译器宏
    'vue/valid-define-props': 'off',
    // 关闭禁止在自定义组件中使用带有参数的v-model
    'vue/no-v-model-argument': 'off',
    // 关闭禁止使用 v-html
    'vue/no-v-html': 'off',
    // 关闭模板中注解的校验
    'vue/comment-directive': 'off',
    // 关闭标记arguments变量提示通知
    'prefer-rest-params': 'off',
    // 把Prettier的规则设为错误级别
    // 开启圈复杂度检查, 最大圈复杂度为5
    complexity: ['warn', { max: 10 }],
    // 其他规范检查
    'vue/script-setup-uses-vars': 'error',
    'vue/no-reserved-component-names': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/no-parsing-error': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  globals: {
    DialogOption: 'readonly',
    OptionType: 'readonly',
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
};
