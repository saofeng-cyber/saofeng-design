export const NAMESPACE = 's';

/**
 * BEM 命名规范工具函数
 * @param namespace 命名空间
 * @returns BEM 命名工具对象
 */
export const useNameSpace = (namespace: string) => {
  const prefixedNamespace = `${NAMESPACE}-${namespace}`;

  /**
   * 生成块级元素类名
   * @param blockSuffix 块级后缀
   * @returns 完整的块级类名
   */
  const b = (blockSuffix?: string) => {
    return blockSuffix ? `${prefixedNamespace}-${blockSuffix}` : prefixedNamespace;
  };

  /**
   * 生成元素类名
   * @param element 元素名称
   * @returns 完整的元素类名
   */
  const e = (element: string) => {
    return `${prefixedNamespace}__${element}`;
  };

  /**
   * 生成修饰符类名
   * @param modifier 修饰符名称
   * @returns 完整的修饰符类名
   */
  const m = (modifier?: string) => {
    return modifier ? `${prefixedNamespace}--${modifier}` : '';
  };

  /**
   * 生成块级元素的修饰符类名
   * @param blockSuffix 块级后缀
   * @param modifier 修饰符名称
   * @returns 完整的块级修饰符类名
   */
  const bm = (blockSuffix: string, modifier: string) => {
    return `${prefixedNamespace}-${blockSuffix}--${modifier}`;
  };

  /**
   * 生成元素的修饰符类名
   * @param element 元素名称
   * @param modifier 修饰符名称
   * @returns 完整的元素修饰符类名
   */
  const em = (element: string, modifier: string) => {
    return `${prefixedNamespace}__${element}--${modifier}`;
  };

  /**
   * 生成状态类名
   * @param state 状态名称
   * @returns 完整的状态类名
   */
  const is = (state: string) => {
    return `is-${state}`;
  };

  /**
   * 生成 CSS 变量名
   * @param variable 变量名
   * @returns CSS 变量名
   */
  const cssVar = (variable: string) => {
    return `--${NAMESPACE}-${variable}`;
  };

  /**
   * 生成带命名空间的 CSS 变量名
   * @param variable 变量名
   * @returns 带命名空间的 CSS 变量名
   */
  const cssVarName = (variable: string) => {
    return `--${prefixedNamespace}-${variable}`;
  };

  /**
   * 生成 CSS 变量值
   * @param variable 变量名
   * @param fallback 回退值
   * @returns CSS 变量值
   */
  const cssVarBlock = (variable: string, fallback?: string) => {
    const varName = cssVarName(variable);
    return fallback ? `var(${varName}, ${fallback})` : `var(${varName})`;
  };

  return {
    namespace: prefixedNamespace,
    b,
    e,
    m,
    bm,
    em,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
  };
};
