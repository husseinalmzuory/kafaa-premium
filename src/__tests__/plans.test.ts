import { PLANS } from '../data/plans';
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_INTL,
  CONTACT_PHONE_RAW_INTL,
  getWhatsAppUrl,
  TELEGRAM_PHONE_DISPLAY,
} from '../utils/contactLinks';

export function runTests() {
  const results: { name: string; passed: boolean; error?: string }[] = [];

  function test(name: string, fn: () => void) {
    try {
      fn();
      results.push({ name, passed: true });
    } catch (err: unknown) {
      results.push({
        name,
        passed: false,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }

  function expect(actual: unknown) {
    return {
      toBe(expected: unknown) {
        if (actual !== expected) {
          throw new Error(`Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
        }
      },
      toContain(expectedSubstring: string) {
        if (typeof actual !== 'string' || !actual.includes(expectedSubstring)) {
          throw new Error(`Expected "${actual}" to contain "${expectedSubstring}"`);
        }
      },
      notToBe(expected: unknown) {
        if (actual === expected) {
          throw new Error(`Expected value NOT to be ${JSON.stringify(expected)}`);
        }
      },
    };
  }

  // 1. Plan Structure & Pricing Tests
  test('PLANS: contains exactly 4 commercial plans', () => {
    expect(PLANS.length).toBe(4);
  });

  test('PLANS: verify exact durations (30, 90, 180, 365)', () => {
    const durations = PLANS.map((p) => p.durationDays);
    expect(JSON.stringify(durations)).toBe(JSON.stringify([30, 90, 180, 365]));
  });

  test('PLANS: verify exact prices in IQD (10000, 20000, 30000, 40000)', () => {
    const prices = PLANS.map((p) => p.priceIqd);
    expect(JSON.stringify(prices)).toBe(JSON.stringify([10000, 20000, 30000, 40000]));
  });

  test('PLANS: plan 365 is highlighted as best value', () => {
    const plan365 = PLANS.find((p) => p.durationDays === 365);
    expect(plan365?.isPopular).toBe(true);
    expect(plan365?.badge).toBe('أفضل قيمة');
  });

  test('PLANS: no custom or lifetime plans exist', () => {
    const hasLifetime = PLANS.some((p) => p.durationDays === null || p.id.includes('life'));
    expect(hasLifetime).toBe(false);
  });

  // 2. Contact Phone & Link Tests
  test('Contact phone constants match Iraqi official number', () => {
    expect(CONTACT_PHONE_DISPLAY).toBe('07518464843');
    expect(CONTACT_PHONE_INTL).toBe('+9647518464843');
    expect(CONTACT_PHONE_RAW_INTL).toBe('9647518464843');
    expect(TELEGRAM_PHONE_DISPLAY).toBe('07518464843');
  });

  test('getWhatsAppUrl: default general message when no plan selected', () => {
    const url = getWhatsAppUrl(null);
    expect(url).toContain('https://wa.me/9647518464843');
    expect(url).toContain(encodeURIComponent('مرحباً، أرغب بالاشتراك في Kafaa Premium.'));
  });

  test('getWhatsAppUrl: prefilled message with specific selected plan', () => {
    const plan90 = PLANS.find((p) => p.durationDays === 90);
    const url = getWhatsAppUrl(plan90);
    expect(url).toContain('https://wa.me/9647518464843');
    expect(url).toContain(encodeURIComponent('90 يوماً'));
    expect(url).toContain(encodeURIComponent('20,000 د.ع'));
  });

  return results;
}
