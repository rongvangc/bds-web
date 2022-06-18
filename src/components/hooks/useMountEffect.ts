import { useEffect, type EffectCallback } from 'react';

/**
 * Run an effect only once (on initial mount).
 * Pass an empty array for the dependency list to ensure effect is only fired once.
 */
const useMountEffect = (effect: EffectCallback): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
};

export default useMountEffect;
