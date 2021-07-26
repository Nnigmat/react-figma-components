import { createContext, useContext, useMemo } from 'react';

// import { canUseDOM } from '../lib/canUseDOM';
// import { SSRContext, initialContextValue } from '../ssr';

export type SSRContextValue = {
  /**
   * Текущее значение счетчика внутри контекста
   */
  value: number;
  /**
   * ID контекста, необходим при использовании вложенных `SSRProvider`
   */
  id: number;
};

export const initialContextValue: SSRContextValue = { value: 0, id: 0 };

export const SSRContext = createContext<SSRContextValue>(initialContextValue);

/**
 * Реакт-хук для генерации уникального id.
 *
 * При использовании в проекте ssr необходимо использовать
 * `SSRProvider` для синхронизации id между сервером и клиентом.
 *
 * @param prefix - Префикс для генерации уникального id (по умолчанию `xuniq`)
 *
 * @example
 * const id = useUniqId()
 */
export function useUniqId(prefix: string = 'xuniq'): string {
  const context = useContext(SSRContext);
  // NOTE: Не используем кэширование через useRef или useState,
  // т.к. в таком случае происходит постоянный инкремент значения.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const id = useMemo(() => `${prefix}-${context.id}-${++context.value}`, []);

  // console.assert(
  //   canUseDOM() || context !== initialContextValue,
  //   'При серверном рендеринге необходимо обернуть приложение в <SSRProvider>' +
  //     ' для синхронизации id между сервером и клиентом.',
  // )

  return id;
}
