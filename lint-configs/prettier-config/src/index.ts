export default {
  // 基础格式化设置
  printWidth: 100, // 每行最大字符数
  tabWidth: 2, // 缩进空格数
  useTabs: false, // 使用空格而不是制表符
  semi: true, // 语句末尾添加分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象属性引号按需添加

  // JSX 设置
  jsxSingleQuote: true, // JSX 中使用单引号
  bracketSameLine: false, // JSX 标签的 > 放在新行

  // 数组和对象
  trailingComma: 'es5', // 在 ES5 中有效的尾随逗号（对象、数组等）
  bracketSpacing: true, // 对象字面量的大括号间添加空格

  // 箭头函数
  arrowParens: 'avoid', // 单参数箭头函数省略括号

  // 其他设置
  requirePragma: false, // 不需要特殊注释来格式化
  insertPragma: false, // 不插入格式化标记
  proseWrap: 'preserve', // 保持 markdown 文本换行
  htmlWhitespaceSensitivity: 'css', // HTML 空白敏感性
  endOfLine: 'lf', // 使用 LF 换行符
  embeddedLanguageFormatting: 'auto', // 自动格式化嵌入的代码

  // Vue 特定设置
  vueIndentScriptAndStyle: false, // Vue 文件中的 script 和 style 标签不额外缩进
  singleAttributePerLine: true, // Vue/HTML 每个属性单独一行（当有多个属性时）
};
